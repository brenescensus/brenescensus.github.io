
---
title: Investigating a Suspicious Login – IP 102.165.36.250

---

# Investigating a Suspicious Login  
**IP Address:** `102.165.36.250`  
**Tool Used:** ipinfo + SecurityTrails  
**Category:** SOC Fundamentals  
**Difficulty:** Beginner  

---

 Scenario

A suspicious login appears in your network logs from the IP address **102.165.36.250**.  
Your task as a SOC analyst is to perform the **first step of incident triage**:  
Identify who owns this IP and whether it belongs to a normal user or a server.

---

##  Step 1 — Lookup on SecurityTrails

Go to:

 https://securitytrails.com  

Enter the IP address:


---

## Step 2 — Basic IP Information

Below is the typical information returned from SecurityTrails or ipinfo.

| Attribute       | Result (Example)                       |
|-----------------|-----------------------------------------|
| **Country**     | 🇺🇸 United States                       |
| **City/Region** | Chicago, Illinois (example)             |
| **Organization** | **GTHost** / Hosting Provider          |
| **IP Type**     | Data Center / Server IP                 |
| **Blacklist**   | Often flagged on some blocklists       |

>  *Note: Actual results may vary depending on the lookup time, but this IP is commonly associated with hosting providers, not home users.*

---

##  Step 3 — Initial SOC Analysis

### **Does this IP belong to a normal user?**  
**No.**  
This IP belongs to a **hosting provider**, not a residential ISP like Safaricom, Zuku, etc.

### **What does that imply?**  
- It is VERY unlikely to be one of your legitimate users.  
- Hosting provider IPs are often used for:
  - VPN services  
  - Bots  
  - Attack tools  
  - Brute-force attempts  
  - Automated scanners  

### **Should this trigger an alert?**  
✔ **Yes** — this warrants further analysis.

---

## 🖼 Optional Screenshot  
(Add your screenshot inside `/assets/images/` and replace the link below.)

![SecurityTrails Lookup Screenshot](/assets/images/ip-lookup-example.png)

---

## SOC Analyst Notes

- Always check the **organization** and **IP type** first.  
- Look for:
  - Data center IP  
  - Hosting/VPS provider  
  - Previous malicious reports  
- If the login attempt was successful → **escalate immediately.**  
- If the login attempt was blocked → add the IP to denylist if confirmed malicious.

---

## Summary

- The IP **102.165.36.250** is associated with a **hosting provider**, not a normal home user.  
- This makes the login suspicious.  
- This is exactly how Tier 1 SOC analysts begin investigating alerts – by pivoting on the IP.

---

