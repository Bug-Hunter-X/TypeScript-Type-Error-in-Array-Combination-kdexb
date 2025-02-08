# TypeScript Type Error in Array Combination

This repository demonstrates a common TypeScript type error that occurs when attempting to combine arrays of different types. The error is caught by the TypeScript compiler, preventing runtime errors. 

## Bug Description

The `combine` function is designed to concatenate two arrays of numbers. However, the second array (`arr2`) contains a string element which is inconsistent with the declared type. This mismatch leads to a compilation error, highlighting the importance of type safety in TypeScript.

## Solution

The solution involves ensuring that both input arrays are of the same type, either by explicitly defining a union type or by converting the elements to the same type before concatenation. The solution provided here demonstrates the former approach.