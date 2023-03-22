import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useForm, input, form } from "react-hook-form";


export default function CustomFormComponent() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    );
  }

const styles = StyleSheet.create({})