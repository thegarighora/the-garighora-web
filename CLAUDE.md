# The GariGhora

## GariGhora Workspace

This project is part of the larger GariGhora platform.

The sibling projects are located in the parent directory:

- ../the-gharighora-api
- ../the-ghari-ghora
- ../the-ghari-ghora-driver
- ../the-ghari-ghora-web
- ../the-ghari-ghora-admin-panel

When implementing a feature, inspect relevant sibling projects when their
implementation can provide useful context.

Examples:

- For API contract or business logic → inspect `../the-gharighora-api`
- For passenger behavior → inspect `../the-ghari-ghora`
- For driver behavior → inspect `../the-ghari-ghora-driver`
- For customer web behavior → inspect `../the-ghari-ghora-web`
- For admin behavior → inspect `../the-ghari-ghora-admin-panel`

Do NOT inspect every sibling project by default.

Only inspect sibling projects when:

- the feature already exists there
- the API contract needs clarification
- business behavior needs verification
- similar UI/UX needs to be understood
- authentication/state management needs reference
- the change affects multiple applications

Use sibling projects as references. Do not blindly copy their code.

## Related Projects

Primary consumers:

- ../the-ghari-ghora
- ../the-ghari-ghora-driver
- ../the-ghari-ghora-web
- ../the-ghari-ghora-admin-panel

When changing an API endpoint, search these consumers before making
breaking changes.

## MVP Functional Requirements

### Version

MVP — V1

### Target

8-week MVP launch

---

# 1. Product Overview

The GariGhora is a transportation marketplace connecting passengers with drivers.

The MVP supports two services:

1. **Rental Car**
2. **Return Car**

The platform consists of:

```text
Passenger App
Driver App
Public Website
Admin Panel
Gari Bhai Operations
Backend API
```

The platform should be designed so additional transportation services can be introduced later without rebuilding the core architecture.

Future services may include:

- Tours
- Wedding Cars
- Airport Transfer
- Corporate Transport
- Other transportation services

These are NOT part of the MVP.

---

# 2. Core Product Principle

Rental Car and Return Car should be treated as two services of the same platform.

Do NOT create completely separate user experiences or separate systems for them.

After login, the passenger should be able to choose:

```text
What do you need?

🚕 Rental Car

🔄 Return Car
```

Both services use the same:

- Passenger account
- Driver account
- Vehicle system
- Booking system
- Trip system
- Notification system
- Support system
- Financial system
- Review system

Only the service-specific workflow differs.

---

# 3. User Types

## 3.1 Passenger

Passengers use the platform to:

- find transportation
- request transportation
- receive driver offers
- book vehicles
- track trips
- contact support
- review drivers

---

## 3.2 Driver

Drivers use the platform to:

- create/manage their profile
- add vehicles
- publish rental availability
- publish return trips
- discover passenger requests
- make offers
- accept bookings
- manage trips
- receive passenger payments directly
- manage platform commission
- communicate with operations

---

## 3.3 Gari Bhai

Gari Bhai is an operational agent.

A Gari Bhai is assigned to new bookings and monitors trips.

Typical workload:

```text
20–50 bookings/day/agent
```

Responsibilities:

- call passenger
- call driver
- confirm booking details
- confirm pickup/drop-off
- provide instructions
- monitor upcoming trips
- monitor active rides
- help resolve operational problems
- maintain driver/passenger communication
- help build relationships for retention
- follow up on outstanding commissions
- escalate serious problems to Admin

Gari Bhai is NOT a full Admin.

---

## 3.4 Admin

Admin manages the platform.

Admin can manage:

- users
- drivers
- passengers
- vehicles
- rental services
- return trips
- ride requests
- offers
- bookings
- trips
- Gari Bhai
- commissions
- settlements
- support
- reviews
- reports
- platform configuration

---

# 4. Authentication

## Passenger

Passenger authentication:

```text
Phone Number
      ↓
OTP
      ↓
Verification
      ↓
Account
```

## Driver

Driver authentication:

```text
Phone Number
      ↓
OTP
      ↓
Verification
      ↓
Driver Account
```

Requirements:

- OTP expiration
- resend cooldown
- OTP attempt limit
- rate limiting
- session/token management
- logout
- account status handling

---

# 5. Passenger Registration

Passenger should provide basic information.

Possible fields:

- Name
- Phone
- Profile photo
- Email — optional
- Address — optional

### NID

NID must NOT be mandatory in MVP.

Passenger registration must not be blocked because NID has not been submitted.

Future/optional verification can support:

- NID verification
- high-value bookings
- long-distance bookings
- suspicious activity
- additional trust requirements

This verification should be introduced only when the business actually requires it.

---

# 6. Passenger Home

After login:

```text
┌──────────────────────────────┐
│       THE GARIGHORA          │
│                              │
│       What do you need?      │
│                              │
│       🚕 Rental Car          │
│                              │
│       🔄 Return Car          │
│                              │
└──────────────────────────────┘
```

The two services should have equal visibility.

Do not make Return Car appear like a secondary or restricted product.

---

# 7. Passenger App Navigation

Recommended MVP navigation:

```text
Home
Bookings
Notifications
Profile
```

Support can be accessible from Profile and active booking/trip screens.

---

# 8. Rental Car — Passenger

Passenger can:

1. Select Rental Car.
2. Enter trip requirements.
3. View available vehicles/drivers.
4. Review pricing/offer information.
5. Request/book a vehicle.
6. Receive booking confirmation.
7. View trip details.
8. Track active trip.
9. Complete trip.
10. Review driver.

Keep the booking flow simple.

---

# 9. Return Car — Passenger

Return Car is the primary differentiating feature.

Passenger can either:

### Option A — Browse Existing Return Trips

Example:

```text
Dhaka → Cumilla
Date
Time
```

Passenger sees suitable driver-posted return trips.

Passenger can review:

- driver
- vehicle
- route
- date
- time
- price/offer information
- relevant notes

Passenger can request/book a suitable trip.

---

### Option B — Create Ride Request

Passenger can create a request for drivers to respond to.

Required:

```text
From
To
Date
Time
Vehicle Type
```

Optional:

```text
Additional Notes
```

Example:

```text
From: Dhaka Airport
To: Cumilla

Date: 10 September
Time: 6:00 PM

Vehicle Type: Sedan

Additional Notes:
2 large bags, preferably AC vehicle.
```

---

# 10. Passenger Search Philosophy

Search should remain intentionally simple.

Mandatory search:

- From
- To
- Date
- Time

Optional:

- Vehicle Type
- Additional Notes

Do NOT create excessive search filters.

Complex filtering can:

- reduce available results
- make the platform appear empty
- confuse users
- reduce successful bookings

Additional requirements should generally go into:

```text
Additional Notes
```

Drivers can review these notes before making/accepting an offer.

---

# 11. Passenger Count

Passenger count is NOT a core inventory/search field in V1.

Do not build seat inventory around passenger count.

The product is based on:

```text
Full Vehicle Booking
```

not:

```text
Individual Seat Booking
```

---

# 12. Luggage

Do not create a dedicated luggage field in MVP.

Use:

```text
Additional Notes
```

Example:

```text
Additional Notes:
3 passengers with 4 large bags.
```

This keeps the booking form simple.

---

# 13. Full Vehicle Booking

V1 supports:

```text
One booking = One vehicle
```

The passenger books the whole vehicle.

Do NOT implement:

- seat selection
- available-seat inventory
- multiple-seat booking
- individual passenger seat pricing

These may be considered later if the business model changes.

---

# 14. Driver App Home

Driver home should clearly show:

```text
Today's Activity

Upcoming Trips
New Requests
Active Trip
Outstanding Commission
Earnings
```

Primary actions:

```text
Post Return Trip
Manage Rental Availability
View Ride Requests
Manage Bookings
```

---

# 15. Driver Profile

Driver can manage:

- name
- phone
- profile photo
- email
- address
- emergency/contact information where appropriate
- account status

Admin can view driver profile information.

---

# 16. Driver Vehicle Management

Driver can:

- add vehicle
- edit vehicle
- deactivate vehicle
- view vehicle status
- upload vehicle images

Vehicle information may include:

- vehicle type
- brand
- model
- registration information
- seating capacity
- images

The exact required fields should remain minimal for MVP.

---

# 17. Vehicle Verification

Do NOT introduce a complex vehicle inspection workflow in MVP.

Rental and Return Car should operate through the same underlying vehicle/driver system.

If verification becomes necessary, add it later as a controlled business process.

Do not create different vehicle eligibility systems for Rental vs Return Car without a real business reason.

---

# 18. Driver — Rental Car

Driver can publish rental availability.

Basic flow:

```text
Vehicle
   ↓
Availability
   ↓
Passenger Search
   ↓
Booking Request
   ↓
Driver Confirmation
   ↓
Booking
   ↓
Trip
```

Driver should be able to:

- publish availability
- view booking requests
- accept/reject requests
- view upcoming bookings
- manage active trips
- complete trips

---

# 19. Driver — Return Car

Driver can create a return trip.

Example:

```text
From: Dhaka Airport
To: Cumilla

Date: 10 September
Time: 6:00 PM

Vehicle: Toyota Axio
```

Driver should be able to:

- create return trip
- edit before booking
- cancel where permitted
- view passenger requests
- receive offers/requests
- accept bookings
- manage trip
- complete trip

---

# 20. Driver Matching for Return Car

Eligible drivers can see passenger requests based on:

- origin compatibility
- destination compatibility
- date
- time
- vehicle type
- vehicle availability
- booking conflicts
- driver account status
- commission eligibility

Do not build AI-powered matching in MVP.

Use practical rule-based matching.

---

# 21. Driver Offer

Driver can respond to an eligible passenger request with an offer.

Offer may include:

- proposed fare
- vehicle
- driver
- optional message/note
- expiration time

Passenger can:

- view offer
- accept offer
- reject offer
- allow offer to expire

Once accepted:

```text
Offer Accepted
      ↓
Booking Created
```

Backend must prevent multiple conflicting accepted offers.

---

# 22. Booking

A booking is created after successful agreement between passenger and driver.

Booking should contain:

- passenger
- driver
- vehicle
- service type
- pickup
- destination
- date/time
- fare
- commission information
- status
- timestamps

Booking states must be controlled by backend.

Possible states:

```text
PENDING
CONFIRMED
CANCELLED
REJECTED
EXPIRED
```

---

# 23. Trip

A confirmed booking produces a trip.

Trip lifecycle:

```text
BOOKED
   ↓
CONFIRMED
   ↓
STARTED
   ↓
COMPLETED
```

Possible additional states:

```text
CANCELLED
NO_SHOW
PROBLEM
```

Only valid transitions should be allowed.

---

# 24. Active Trip

Passenger should be able to see:

- driver information
- vehicle information
- pickup
- destination
- trip status
- basic driver location
- support option

Driver should see:

- passenger information
- pickup
- destination
- trip status
- basic navigation/location functionality
- support option

---

# 25. Location Tracking

MVP requires basic location functionality.

Driver location may be shared during an active trip.

Use:

- mobile GPS
- Google Maps
- realtime updates where necessary

Do NOT build:

- advanced fleet management
- route replay
- historical high-frequency GPS storage
- complex ETA algorithms
- fleet analytics

Track only what is required for the active transportation workflow.

---

# 26. Payment Model

## MVP

There is NO in-app payment gateway.

Passenger pays the driver directly.

Example:

```text
Trip Fare = ৳2,000

Passenger
     ↓
Pays Driver Directly
     ↓
Trip Completed
     ↓
Commission Recorded
```

The payment experience should follow the operational simplicity of services such as Uber/Pathao, but V1 does not process the passenger's money inside the application.

---

# 27. Platform Commission

The GariGhora earns commission from completed trips.

Example:

```text
Trip Fare       = ৳2,000
Commission 10%  = ৳200
Driver Earning  = ৳1,800
```

Passenger pays:

```text
৳2,000 → Driver
```

Driver owes:

```text
৳200 → The GariGhora
```

---

# 28. Driver Commission Eligibility

Every completed trip generates an unsettled commission transaction.

A driver may have up to:

```text
3 unsettled commission transactions
```

If the driver reaches:

```text
4+ unsettled commission transactions
```

the driver is blocked from accepting new rides.

Example:

```text
Trip 1 → Commission unpaid
Trip 2 → Commission unpaid
Trip 3 → Commission unpaid

Driver can still accept rides.
```

But:

```text
Trip 4 → Would create 4th unsettled commission
```

The driver must settle outstanding commissions before accepting another ride.

---

# 29. Driver Blocking

When commission limit is reached:

```text
Driver
   ↓
Settlement Required
   ↓
Payment Submitted
   ↓
Admin/Gari Bhai Verification
   ↓
Commission Settled
   ↓
Driver Unblocked
```

The backend must enforce the restriction.

The mobile app must NOT be trusted to enforce it.

---

# 30. Driver Settlement

MVP settlement methods:

- bKash
- Nagad
- Bank Transfer
- Cash to authorized representative

Settlement is manually verified.

Admin can:

- view settlement
- verify
- reject
- add adjustment if necessary
- unblock driver after successful settlement

---

# 31. Financial Ledger

The system must maintain transaction history.

Record:

- trip fare
- commission
- driver earnings
- commission transaction
- settlement
- settlement verification
- adjustment

Do NOT rely only on:

```text
driver.balance
```

The transaction history is the source for financial auditing.

---

# 32. Future Driver Charges

A future business model may require drivers to pay a charge to access future opportunities.

This is called:

```text
Driver Charges
```

This is separate from:

```text
Trip Payment
Trip Commission
```

Do not implement Driver Charges in MVP unless explicitly added to the scope.

---

# 33. Passenger Booking History

Passenger can view:

- upcoming bookings
- active trips
- completed trips
- cancelled bookings

Each booking should show:

- service type
- driver
- vehicle
- route
- date/time
- fare
- status

---

# 34. Driver Booking History

Driver can view:

- upcoming bookings
- active trips
- completed trips
- cancelled bookings

Driver can also view:

- trip fare
- commission
- driver earning
- settlement status

---

# 35. Notifications

Notifications are required for important events.

Passenger:

- booking confirmation
- offer received
- offer accepted
- offer rejected
- trip starting
- trip completed
- cancellation
- support updates

Driver:

- new passenger request
- new booking
- booking confirmation
- cancellation
- trip reminder
- commission reminder
- driver blocked
- driver unblocked
- settlement updates

Admin/Gari Bhai:

- new booking
- operational alerts
- trip issues
- settlement requests
- support requests

---

# 36. Help & Support

Support must be easily accessible.

Provide:

1. In-app support
2. Support team phone number

The phone number is especially important for:

- emergencies
- active trip problems
- quick decisions
- driver/passenger disputes
- operational escalation

Do not build a complex customer support/ticketing platform in V1.

---

# 37. Reviews & Ratings

After a completed trip:

Passenger can review Driver.

Driver can review Passenger.

Review:

- rating
- optional comment

Rules:

- only completed trips can be reviewed
- one review per eligible party per trip
- cancelled trips cannot receive reviews

---

# 38. Admin Dashboard

Admin dashboard should show operationally useful information.

Summary:

- total passengers
- total drivers
- active drivers
- total vehicles
- today's bookings
- active trips
- completed trips
- cancelled trips
- outstanding commissions
- blocked drivers
- pending settlements

Do not overload the dashboard with unnecessary charts.

---

# 39. Admin — Passenger Management

Admin can:

- list passengers
- search passengers
- view profile
- view booking history
- view trip history
- view reviews
- view support history
- deactivate/reactivate account where necessary

NID should not be required for normal passenger management.

---

# 40. Admin — Driver Management

Admin can:

- list drivers
- search drivers
- view profile
- view vehicles
- view bookings
- view trips
- view earnings
- view commissions
- view outstanding commissions
- view settlements
- block/unblock drivers
- deactivate/reactivate drivers

---

# 41. Admin — Vehicle Management

Admin can:

- list vehicles
- search/filter
- view vehicle details
- view associated driver
- activate/deactivate vehicle
- manage vehicle status

Avoid complex inspection workflows in MVP.

---

# 42. Admin — Rental Management

Admin can:

- view rental availability
- view rental bookings
- view active rental trips
- view completed rentals
- handle cancellations/issues

---

# 43. Admin — Return Car Management

Admin can:

- view return trips
- view passenger requests
- view driver offers
- view bookings
- view active trips
- monitor problematic trips
- cancel/resolve bookings where operationally necessary

---

# 44. Admin — Booking Management

Admin can view:

```text
Pending
Confirmed
Active
Completed
Cancelled
Rejected
Expired
```

Admin should be able to inspect:

- passenger
- driver
- vehicle
- route
- fare
- booking timeline
- assigned Gari Bhai
- operational notes

---

# 45. Admin — Trip Monitoring

Admin can monitor active trips.

Show:

- passenger
- driver
- vehicle
- route
- status
- start time
- current/basic location
- assigned Gari Bhai
- operational notes

This is for operational support, not advanced fleet management.

---

# 46. Gari Bhai Assignment

When a new booking is created:

```text
New Booking
     ↓
Assign Gari Bhai
```

Assignment may be:

- manual
- workload-based
- round-robin later

MVP can use simple assignment.

Gari Bhai should see:

```text
New Bookings
Upcoming Trips
Active Trips
Problematic Trips
Commission Follow-ups
```

---

# 47. Gari Bhai Booking Workflow

For each assigned booking:

```text
Booking Received
      ↓
Call Passenger
      ↓
Call Driver
      ↓
Confirm Details
      ↓
Record Confirmation
      ↓
Monitor Trip
      ↓
Handle Issues
      ↓
Trip Completed
```

Gari Bhai should be able to add operational notes.

---

# 48. Gari Bhai Permissions

Gari Bhai can:

- view assigned bookings
- view relevant passenger information
- view relevant driver information
- view trip details
- contact users
- add operational notes
- update operational status
- assist with commission follow-up

Gari Bhai cannot:

- manage Admin users
- change platform configuration
- modify critical financial records without permission
- change commission rules
- manage roles/permissions
- perform unrestricted destructive operations

---

# 49. Admin — Commission Management

Admin can:

- view commission transactions
- filter by driver
- filter by status
- view outstanding commissions
- view blocked drivers
- view settlement history
- verify settlements
- view platform commission revenue

---

# 50. Admin — Settlement Management

Admin can:

- view pending settlements
- view settlement details
- verify settlement
- reject settlement
- record verification notes
- update commission status
- unblock eligible driver

All financial actions must be auditable.

---

# 51. Admin — Support

Admin can:

- view support requests
- view active support issues
- assign support/operations staff
- add notes
- resolve issues
- escalate serious issues

Keep this simple in MVP.

---

# 52. Admin — Reviews

Admin can:

- view reviews
- filter reviews
- investigate reported reviews
- hide/remove inappropriate reviews where justified
- view rating history

---

# 53. Admin — Reports

MVP reports should remain basic.

Useful reports:

- bookings
- completed trips
- cancelled trips
- revenue
- commissions
- outstanding commissions
- driver earnings
- settlement history
- active drivers
- passenger growth

Avoid building a large BI system.

---

# 54. Cancellation

Cancellation must be supported by both passenger and driver where appropriate.

Cancellation should record:

- who cancelled
- cancellation time
- reason
- booking status
- operational notes

Cancellation rules should be configurable later.

Do not create complicated cancellation fee systems in V1 unless explicitly required.

---

# 55. Fraud & Abuse Basics

MVP should have basic protection against:

- OTP abuse
- spam ride requests
- duplicate bookings
- duplicate offers
- fake review attempts
- unauthorized booking modifications
- repeated cancellation abuse

Do not build an advanced fraud engine.

---

# 56. Backend Authorization

All important permissions must be enforced server-side.

Examples:

```text
Passenger cannot modify another passenger's booking.

Driver cannot modify another driver's vehicle.

Driver cannot accept a ride if commission eligibility fails.

Gari Bhai cannot access unrestricted Admin functionality.

Admin actions require proper permissions.
```

Never depend only on mobile/web UI restrictions.

---

# 57. Audit Trail

Important actions should have audit information.

Examples:

- booking status changes
- offer acceptance
- trip completion
- commission creation
- settlement verification
- driver blocking/unblocking
- Admin changes
- Gari Bhai assignment

At minimum record:

- actor
- action
- target/entity
- timestamp
- relevant metadata

---

# 58. MVP Technical Requirements

Backend:

```text
NestJS
TypeScript
PostgreSQL
Prisma
Redis
JWT
OTP
Swagger
Socket.IO
BullMQ
```

Mobile:

```text
Expo
React Native
TypeScript
Expo Router
TanStack Query
Zustand
```

Web/Admin:

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
TanStack Query
```

Infrastructure:

```text
Docker
AWS
Cloudflare
GitHub Actions
Sentry
```

---

# 59. MVP API Requirements

All APIs use:

```text
/api/v1
```

Swagger:

```text
/api/docs
```

Core modules:

```text
Auth
Users
Drivers
Vehicles
Rental
Return Car
Ride Requests
Offers
Bookings
Trips
Payments
Commissions
Notifications
Support
Reviews
Operations
Admin
Health
```

---

# 60. MVP Database Core Entities

Expected core entities include:

```text
User
PassengerProfile
DriverProfile
Vehicle

RentalAvailability
RentalBooking

ReturnTrip
RideRequest
Offer

Booking
Trip

Payment
CommissionTransaction
CommissionSettlement

Notification

SupportRequest
Review

OperationsAgent
BookingAssignment

AuditLog
```

The exact Prisma schema should be designed around actual workflows and state transitions before implementation.

---

# 61. What We Should AVOID in V1

The MVP must remain focused.

## Do NOT build:

### Payments

- online payment gateway
- card payments
- mobile wallet checkout inside the app
- automated driver payouts
- payment gateway reconciliation

---

### Booking Complexity

- seat-level booking
- seat selection
- multiple-seat inventory
- passenger-count-based inventory
- complicated passenger categories

---

### Verification

- mandatory passenger NID
- complex KYC
- mandatory passenger verification
- complex vehicle inspection
- complicated document verification

NID may be added as optional/future verification, especially for high-value or long-distance bookings.

---

### Search

- excessive filters
- complicated search forms
- advanced route optimization
- AI matching
- complicated pricing filters

Keep:

```text
From
To
Date
Time
Vehicle Type
Additional Notes
```

---

### Location

- advanced fleet tracking
- permanent high-frequency GPS storage
- route replay
- advanced ETA engine
- fleet analytics

---

### Architecture

- microservices
- Kubernetes
- Kafka
- event sourcing
- CQRS unless genuinely required
- GraphQL
- complicated distributed systems
- Turborepo/monorepo migration

Use a modular monolith.

---

### Business Features

- Driver Charges
- loyalty programs
- referral systems
- subscription systems
- promo engine
- advanced pricing engine
- corporate accounts
- tours
- wedding transportation
- airport transfer product
- advanced rental packages

These come after MVP validation.

---

### Analytics

Avoid building a complex analytics platform.

Track only metrics necessary to understand:

- bookings
- completed trips
- cancellations
- commissions
- driver activity
- passenger activity
- basic business growth

---

# 62. MVP Success Criteria

The MVP is successful if:

### Passenger

```text
Login
 ↓
Choose Service
 ↓
Search/Create Request
 ↓
Receive Driver Offer
 ↓
Book Vehicle
 ↓
Track Trip
 ↓
Complete Trip
 ↓
Review Driver
```

### Driver

```text
Login
 ↓
Add Vehicle
 ↓
Post Availability/Return Trip
 ↓
Receive Request
 ↓
Make/Accept Offer
 ↓
Confirm Booking
 ↓
Complete Trip
 ↓
Receive Cash
 ↓
Settle Commission
```

### Operations

```text
New Booking
 ↓
Assign Gari Bhai
 ↓
Confirm Driver
 ↓
Confirm Passenger
 ↓
Monitor Trip
 ↓
Resolve Issues
 ↓
Complete Trip
```

### Admin

```text
Monitor Platform
 ↓
Manage Users/Drivers/Vehicles
 ↓
Monitor Bookings/Trips
 ↓
Manage Operations
 ↓
Track Commission
 ↓
Verify Settlements
 ↓
Handle Support
```

---

# 63. Product Philosophy

The MVP should optimize for:

```text
Simple
Reliable
Operationally manageable
Easy to understand
Easy to maintain
Fast to launch
```

The goal is NOT to build the final version of The GariGhora in 8 weeks.

The goal is to launch a functional marketplace, operate real trips, learn from real users, validate the business model, and improve after launch.

**Freeze MVP scope after initial planning.**

New features should only be added when they are necessary for launch or when an explicit product decision changes the scope.
