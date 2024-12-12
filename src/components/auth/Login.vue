<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as AuthService from "@/services/AuthService.js";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);
const errors = ref({});
const generalError = ref("");
const router = useRouter();

//validate input-field
const validateInput = () => {
  errors.value = {};

  if (!email.value) {
    errors.value.email = "Email không được để trống.";
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.value.email = "Email không đúng định dạng.";
  }

  if (!password.value) {
    errors.value.password = "Mật khẩu không được để trống.";
  } else if (password.value.length < 6 || password.value.length > 15) {
    errors.value.password = "Mật khẩu phải từ 6-15 kí tự.";
  }

  return Object.keys(errors.value).length === 0;
};

//Xóa thông báo lỗi khi nhập lại vào input-field
const clearError = (field) => {
  if (errors.value[field]) {
    errors.value[field] = "";
  }
  if (generalError.value) {
    generalError.value = "";
  }
};

//Ẩn/Hiện Password
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  loading.value = true;
  generalError.value = "";

  if (!validateInput()) {
    loading.value = false;
    return;
  }

  try {
    const user = await AuthService.login(email.value, password.value);
    if (user && user.token) {
      if (user.roles && user.roles.includes("Admin")) {
        router.push("/home");
      } else {
        generalError.value =
          "Bạn không có quyền truy cập. Vui lòng liên hệ Quản trị viên!";
      }
    }
  } catch (error) {
    generalError.value = error?.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="1" class="p-4 card-padding">
          <h2 class="text-center header-title">ĐĂNG NHẬP</h2>
          <v-form @submit.prevent="handleLogin">
            <!-- Email -->
            <div class="field-label">Email</div>
            <v-text-field
              v-model="email"
              outlined
              :error-messages="errors.email"
              class="mb-4"
              required
              @input="clearError('email')"
            />

            <!-- Mật khẩu -->
            <div class="field-label">Mật khẩu</div>
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              outlined
              :error-messages="errors.password"
              append-inner-icon="mdi-eye"
              @click:append-inner="togglePasswordVisibility"
              class="mb-4"
              required
              @input="clearError('password')"
            />
            <!-- Trường ẩn: Lỗi hệ thống -->
            <div v-if="generalError" class="error-message mb-4">
              {{ generalError }}
            </div>

            <!-- Nút Đăng nhập -->
            <v-btn
              :loading="loading"
              type="submit"
              color="primary"
              block
              class="btn-padding"
            >
              Đăng nhập
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.header-title {
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
}

.field-padding {
  margin-bottom: 16px;
}

.field-label {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  color: #4a4a4a;
}

.v-input {
  position: relative;
}

.v-input .v-input__control {
  padding-right: 40px;
}

.v-input .v-input__append-inner {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.v-input .v-input__append-inner:hover {
  color: #007bff;
}

.fill-height {
  height: 100vh;
}

.card-padding {
  padding: 30px;
}

.mb-4 {
  margin-bottom: 16px;
}

.error-message {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>
