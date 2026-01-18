# Calculate Tuition - JavaScript Application

A web application for calculating university tuition fees with discount calculations based on social stratum and voter registration certificate status.

## Project Overview

This application allows students to:
1. Log in with their credentials
2. Enter course registration details
3. View calculated tuition with applicable discounts

## Features

- **Login System**: Simple authentication (password: 123)
- **Course Registration**: Input course name, credits, and personal information
- **Discount Calculation**:
  - Voter registration certificate: 10% discount
  - Social stratum discounts:
    - Stratum 1-2: 15% discount
    - Stratum 3-4: 10% discount
    - Stratum 5-6: 5% discount
- **Results Display**: Shows all entered data, final tuition, and total savings

## Technical Details

### Technology Stack
- **HTML5**: Structure of the application
- **CSS3**: Modern styling with CSS variables and responsive design
- **JavaScript (ES6+)**: Logic and DOM manipulation

### File Structure
```
04 - Calculate tuition- JS/
├── index.html    # Main HTML structure
├── style.css     # Styling and layout
└── README.md     # This file
```
---
### Logic Implementation

**Credit Pricing:**
- Base price per credit: 123,000 COP

**Discount Calculation Logic:**
```javascript
// Step 1: Calculate subtotal
subTotal = credits * priceCredit  // 123,000 COP per credit

// Step 2: Apply voter certificate discount (10%)
if (hasCertificate === 'Yes') {
    discountCertificate = subTotal * 0.10
}
firstTotal = subTotal - discountCertificate

// Step 3: Apply social stratum discount
switch(stratum) {
    case 1:
    case 2: discountStratum = firstTotal * 0.15; break;  // 15%
    case 3:
    case 4: discountStratum = firstTotal * 0.10; break;  // 10%
    case 5:
    case 6: discountStratum = firstTotal * 0.05; break;  // 5%
}

// Step 4: Calculate final total and savings
finalTotal = firstTotal - discountStratum
discount = discountStratum + discountCertificate
```
---

## Design & Development

### Design Approach
The visual design of this application was created with AI assistance, utilizing modern UI/UX principles including:
- Clean, modern aesthetic with a professional color scheme
- Responsive design for mobile and desktop
- Smooth transitions and hover effects
- Accessible form elements with clear labels

### Logic Implementation
The business logic for tuition calculation was developed **completely without any AI assistance**. All calculations, conditional logic, and algorithmic decisions were manually implemented by Juan Sebastian Andrade Sanchez.

This includes:
- Password validation system
- Credit and stratum range validation
- Tiered discount calculation logic
- DOM manipulation for form handling
- Event-driven user interaction flow

## Usage

1. Open `index.html` in a web browser
2. Enter login credentials:
   - Name: Your name
   - ID: Your identification number
   - Password: `123`
3. Click "Login" to access the course registration
4. Fill in course details:
   - Course name
   - Number of credits (1-21)
   - Social stratum (1-6)
   - Voter certificate status
5. Click "Register" to calculate tuition
6. View results showing final price and savings
7. Click "Finish process" to start over

## Credit Value

Each credit is priced at **123,000 COP** (Colombian Pesos).

## License 📝

This project is open source and free to use for any purpose.

## Credits 👏

Created by Juan Sebastian Andrade Sanchez - Built with ❤️ using HTML, CSS, and JavaScript
---

