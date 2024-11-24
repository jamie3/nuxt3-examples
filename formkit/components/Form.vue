<script setup lang="ts">
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

const first_name = ref("");
const last_name = ref("");
const email = ref("");

const submit = (data: FormData) => {
  console.log(data);

  first_name.value = data.first_name;
  last_name.value = data.last_name;
  email.value = data.email;
};
</script>
<template>
  <div>
    <div class="pb-5">
      <FormKit type="form" @submit="submit">
        <div class="pb-5">
          <FormKit
            type="text"
            label="First Name"
            name="first_name"
            validation="required"
          />
        </div>
        <div class="pb-5">
          <FormKit
            type="text"
            label="Last Name"
            name="last_name"
            validation="required"
          />
        </div>
        <div class="pb-5">
          <FormKit
            type="email"
            label="Email"
            name="email"
            validation="required"
          />
        </div>
      </FormKit>
    </div>
    <div class="pb-5">First Name: {{ first_name }}</div>
    <div class="pb-5">Last Name: {{ last_name }}</div>
    <div class="pb-5">Email: {{ email }}</div>
  </div>
</template>
<style lang="css">
div .pb-5 {
  padding-bottom: 10px;
}

body {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
}
input {
  height: 24px;
}
</style>
