


This document defines the **business logic, structure, and validation requirements** for a data collection form that must be implemented using **HTML only**.

### Goals:
- Standardized data collection  
- Strong client-side validation (via HTML attributes)  
- Industry-grade accessibility and semantic correctness  


---

## 2. Form Objective

The form is intended to collect **user onboarding data** with the following categories:

- Personal Information  
- Contact Details  
- Account Credentials  
- Professional Details  
- Consent & Compliance  

---






### 4.1 Personal Information

| Field         | Type  | Attributes | Validation Rules                  |
|--------------|------|-----------|----------------------------------|
| Full Name     | text | required  | Min 3 characters, alphabets only |
| Date of Birth | date | required  | Must be past date               |
| Gender        | radio| required  | One selection required          |

---

### 4.2 Contact Information

| Field         | Type     | Attributes          | Validation Rules            |
|--------------|----------|---------------------|-----------------------------|
| Email         | email    | required            | Valid email format          |
| Phone Number  | tel      | required, pattern   | 10-digit numeric            |
| Address       | textarea | required            | Minimum 10 characters       |

---

### 4.3 Account Credentials

| Field            | Type     | Attributes          | Validation Rules                                      |
|------------------|----------|---------------------|-------------------------------------------------------|
| Username         | text     | required            | 5–15 characters, no spaces                            |
| Password         | password | required, pattern   | Min 8 chars, 1 uppercase, 1 number, 1 special char    |
| Confirm Password | password | required            | Must match password                                   |

---

### 4.4 Professional Details

| Field            | Type     | Attributes | Validation Rules                        |
|------------------|----------|-----------|----------------------------------------|
| Experience Level | select   | required  | Must select one                        |
| Skills           | checkbox | required  | At least one must be selected          |
| Resume Upload    | file     | required  | Accept PDF/DOC, max 2MB                |

---

### 4.5 Consent & Compliance

| Field                | Type     | Attributes | Validation Rules        |
|----------------------|----------|-----------|-------------------------|
| Terms & Conditions   | checkbox | required  | Must be checked         |

---

## 5. Validation Rules (HTML-Based Only)

Use the following HTML attributes:

- `required` → Mandatory fields  
- `minlength` / `maxlength` → Character limits  
- `pattern` → Regex validation  
- `type="email"` → Email validation  
- `type="date"` → Date validation  
- `accept` → File type restriction  

---

## 6. Deliverables

The developer must submit:

- Clean, semantic HTML file  
- No inline CSS or JavaScript  
- Fully functional browser validation  

---

## 7. Acceptance Criteria

- All required fields enforce validation  
- Inputs follow specified formats  
- Accessibility standards are met  
- Form is logically grouped and readable  
- No validation gaps in HTML layer  

---

**Note:** In case of ambiguity, prioritize **data integrity, accessibility, and standard HTML practices**.