# Understanding Buffer Overflow Attacks

**Author:** Brenes Census  
**Category:** Offensive Security  
**Difficulty:** Beginner  
**Date:** 2025-01-01

---

## 🔍 Overview
A buffer overflow occurs when a program writes more data into a memory buffer than it can hold.  
This causes the extra data to overwrite adjacent memory, potentially allowing an attacker to control program execution.

---

## 🧠 Key Concepts

### 1. What is a Buffer?
A buffer is a temporary memory space allocated to store data.  
Example: A variable that stores a name (`char name[10];`).

### 2. How Overflow Happens
When the input is longer than the allocated space:

