<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

.not-found h1 {
  font-size: 3rem;
  color: #ff5252;
}

.not-found p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.not-found a {
  font-size: 1.2rem;
  color: #1976d2;
  text-decoration: none;
}

.not-found a:hover {
  text-decoration: underline;
}
</style>
