<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  first_name: z.string().min(2).max(255),
  last_name: z.string().min(2).max(255),
  email: z.string().email(),
});

type FormInput = z.infer<typeof schema>;

const state = reactive({
  first_name: undefined,
  last_name: undefined,
  email: undefined,
});

const first_name = ref("");
const last_name = ref("");
const email = ref("");

const submit = (e: FormSubmitEvent<FormInput>) => {
  e.preventDefault();

  first_name.value = e.data.first_name;
  last_name.value = e.data.last_name;
  email.value = e.data.email;
};
</script>
<template>
  <UForm :schema="schema" :state="state" v-on:submit="submit">
    <UFormGroup class="mb-5" name="first_name" label="First Name">
      <UInput v-model="state.first_name" />
    </UFormGroup>
    <UFormGroup class="mb-5" name="last_name" label="Last Name">
      <UInput v-model="state.last_name" />
    </UFormGroup>
    <UFormGroup class="mb-5" name="email" label="Email">
      <UInput v-model="state.email" />
    </UFormGroup>
    <div class="mb-5">
      <UButton type="submit">Submit</UButton>
    </div>
  </UForm>

  <div class="text-left">
    <h1 class="mb-5 text-2xl font-bold">Submit Results:</h1>
    <p class="mb-5">First Name: {{ first_name }}</p>
    <p class="mb-5">Last Name: {{ last_name }}</p>
    <p class="mb-5">Email: {{ email }}</p>
  </div>
</template>
