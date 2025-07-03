Of course. Here is the Product Requirements Document (PRD) formatted for an AI development agent like Cursor.

-----

# **Product Requirements Document: "Immigration Now" - A Canadian Immigration Consultant Review Platform**

## **1. Product Overview**

**Immigration Now** is a review-driven platform designed to connect individuals seeking Canadian immigration services with verified and trustworthy immigration consultants and lawyers. The core mission is to bring transparency and trust to the immigration process through a community-sourced review system, similar in spirit to RateMyProfessor but tailored for the Canadian immigration niche.

  - **Vision:** To be the most trusted and comprehensive resource for finding and evaluating Canadian immigration professionals.
  - **Core Problem:** There is no centralized, reliable platform for users to find, compare, and review Canadian immigration consultants and lawyers. This lack of transparency makes it difficult for applicants to make informed decisions.
  - **Solution:** A web application that aggregates and verifies immigration professionals, allowing users to search, filter, and read authentic reviews from a community of fellow applicants.

-----

## **2. Target Users**

  - **Prospective Immigrants:** Individuals applying for Canadian Permanent Residency (PR) through various streams (Express Entry, PNP, etc.).
  - **International Students:** Students seeking study permits, post-graduation work permits (PGWP), or pathways to PR.
  - **Temporary Foreign Workers:** Applicants for work permits and visas.

-----

## **3. Core Features & Functionality**

### **3.1. User Authentication & Roles**

  - **Anonymous Users:** Can browse and search for consultants and companies.
  - **Registered Users:**
      - **Authentication:** Must log in exclusively via **Google OAuth**. This is required to leave reviews.
      - **Permissions:** Can write, edit, and delete their own reviews. A user can submit a maximum of two reviews for the same consultant.
      - **Anonymity:** Users must have the option to post their reviews anonymously (their name and picture will be hidden), but they must be logged in to do so.
  - **Consultants:** Can register their profiles on the platform.

### **3.2. Home Page**

  - **Primary Element:** A prominent **Search Bar** at the top of the page.
  - **Main Content:** A browsable list or grid of consultant profiles.
  - **Consultant Card Display:** Each card in the list should display the following summary information:
      - `Verified` status badge
      - `Full Name`
      - `Picture`
      - `Average Rating` (e.g., 4.5/5)
      - `Number of Reviews`
      - `License Type` (e.g., RCIC, Lawyer)
      - `Location` (City, Province)

### **3.3. Search & Filter**

  - **Search Functionality:** Users should be able to perform a global search for consultants by name, company, or location.
  - **Filtering Options:** The list of consultants must be filterable by:
      - **Location:** City, Province
      - **Availability:** Remote, In-person
      - **Visa Specialization:** (e.g., Express Entry, Study Permit, Work Visa)
      - **Languages Spoken**
      - **Price Range**
      - **Years of Experience**
      - **Average Rating**

### **3.4. Profile Pages**

  - **Consultant Profile Page:** A detailed view for a single consultant containing:
      - All information from the consultant card.
      - Detailed `Biography`.
      - Link to their `Company Profile`.
      - Full list of `Specializations`.
      - Full list of `Languages Spoken`.
      - Contact/Request Consultation button.
      - A dedicated section listing all user reviews for that consultant.
  - **Company Profile Page:**
      - Company `Name` and `About` section.
      - A list of all associated/employed consultants linked on the platform.
      - A consolidated view of reviews for all consultants at that company.

### **3.5. Review System**

  - **Submission:** Requires user login (Google Auth).
  - **Components:**
      - **Star Rating:** 1 to 5 stars (integer value).
      - **Written Review:** A text field for detailed feedback.
      - **Anonymity Toggle:** A checkbox to post as "Anonymous".
  - **Rules:**
      - A user can review the same consultant a maximum of two times.
      - The `average_rating` and `review_count` on the consultant's profile must update automatically upon submission of a new review.

### **3.6. Consultant Registration**

  - A dedicated registration page/flow for consultants to create and submit their profiles for verification and listing.

-----

## **4. Data Pipeline & AI Strategy (CRUCIAL)**

This is a core component for populating the platform.

1.  **Initial Data Scraping:**

      - **Source:** The public registry of the College of Immigration and Citizenship Consultants (CICC). This is the primary source of truth for licensed consultants in Canada.
      - **Objective:** Scrape all publicly available information for each consultant (Name, License Number, Location, Status).
      - **Implementation:** Develop a script (e.g., Python with BeautifulSoup/Scrapy) to systematically extract this data and populate the `consultants` table in the database. Initially, these profiles will be marked as `verified=FALSE`.

2.  **AI-Powered Data Enrichment:**

      - **Objective:** To enrich the basic scraped profiles with additional public information to create a more comprehensive profile.
      - **Process:**
          - For each scraped consultant (identified by `Full Name` and `Location`), use an AI model (e.g., leveraging a search API and a Large Language Model like GPT-4) to find supplementary professional information.
          - The AI should search for LinkedIn profiles, personal/company websites, and other professional directories.
          - **Information to Extract:** `Biography`, `Years of Experience`, `Specializations`, `Languages Spoken`, `Company Name`, `Profile Picture`.
          - **Action:** The AI's findings should be used to programmatically update the corresponding fields in the `consultants` table. This data should be reviewed before being made public.

3.  **Verification:**

      - A `verified` flag (`BOOLEAN`) will exist on the `consultants` table.
      - Initially, all profiles created via the pipeline are `verified=FALSE`.
      - A manual or semi-automated process will be required to confirm the AI-enriched data. Consultants can also claim and verify their own profiles.

-----

## **5. Ethical Considerations & Trust**

  - **Email Consultation Request:**
      - **Problem:** Users need to trust the platform enough to submit personal information for a consultation request.
      - **Solution:** Design a simple, secure, and transparent contact form.
          - **UI/UX:** Clearly state that "This information will be sent directly and securely to the consultant."
          - **Data Privacy:** Do not store the content of the consultation request messages in our database. The form should trigger a direct email to the consultant.
          - **Form Fields:** Keep it minimal. Suggest fields like `Name`, `Email`, `Visa of Interest`, and a `Message` box. Clearly label which fields are optional.

-----

## **6. Technical Specifications**

### **6.1. Tech Stack**

  - **Frontend:** **Next.js**, **TypeScript**, **shadcn/ui**
  - **Backend:** **Next.js API Routes**
  - **Database:** **PostgreSQL** (managed via **Supabase**)
  - **Deployment:** **Vercel**

### **6.2. Database Schema (ER Diagram)**

```mermaid
erDiagram
    users {
        user_id SERIAL PK
        google_id VARCHAR(255) UNIQUE NOT NULL
        email VARCHAR(255) UNIQUE NOT NULL
        full_name VARCHAR(255) NOT NULL
        profile_picture_url TEXT
        created_at TIMESTAMPTZ
    }

    consultants {
        consultant_id SERIAL PK
        full_name VARCHAR(255) NOT NULL
        profile_picture_url TEXT
        average_rating NUMERIC(3,2)
        review_count INT
        license_type VARCHAR(50)
        location VARCHAR(255)
        remote_availability BOOLEAN
        in_person_availability BOOLEAN
        specialization TEXT[]
        languages_spoken TEXT[]
        company_name VARCHAR(255)
        price_range VARCHAR(100)
        years_of_experience INT
        biography TEXT
        verified BOOLEAN
        company_id INT FK
    }

    companies {
        company_id SERIAL PK
        name VARCHAR(255) NOT NULL
        about TEXT
        created_at TIMESTAMPTZ
    }

    reviews {
        review_id SERIAL PK
        user_id INT FK
        consultant_id INT FK
        star_rating INT NOT NULL
        review_text TEXT
        is_anonymous BOOLEAN
        created_at TIMESTAMPTZ
    }

    users ||--o{ reviews : "writes"
    consultants ||--o{ reviews : "receives"
    companies ||--o{ consultants : "employs"

```

-----

## **7. Success Metrics (First Quarter)**

  - **User Acquisition:** Achieve **100+** registered users within the first month.
  - **Content Generation:** Accumulate **50+** user-submitted reviews within the first six weeks.
  - **User Engagement:** Reach a **30%** returning visitor rate within three months.