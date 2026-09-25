/**
 * ============================================================================
 *  MEMBER DATABASE: the leadership roles table and one record per person.
 *  Loaded by index.html, rendered by js/app.js.
 * ============================================================================
 *  Safe to edit by hand, but keep it valid JSON after the `=` sign: double
 *  quotes, no trailing commas, no comments inside. scripts/sync-bni.py reads
 *  and rewrites this file and will stop with an error if it can't parse it.
 *
 *  roles: every leadership role, in display order. Each has:
 *    role          the title, exactly as used in people's "roles"
 *    section       the Chapter Leadership heading it's listed under
 *    max           how many people may hold it (null = no limit), counting
 *                  its sub-roles ("Membership Committee - ..." count toward
 *                  "Membership Committee"). The sync checks it against live
 *                  BNI; the site never shows more.
 *    bniHolders    ids BNI lists for the role; refreshed every sync
 *  Sections appear in the order of their first role; people within a
 *  section are ordered by their highest-listed role, then by name.
 *
 *  Each person is addressed by "id" (their BNI member id). Fields:
 *    enabled       true = shown in the Members grid, false = hidden
 *                  (Leadership shows everyone who has a role, enabled or
 *                  not, so the Regional Support Team stays leadership-only)
 *    trophyWinner  true = shown as This Week's trophy winner (one person)
 *    roles         leadership roles held, e.g. ["President"]; [] = none
 *    name          display name; firstName / lastName are split from it
 *    company, companyUrl, category (categoryPath = BNI's full category)
 *    phone, email  email is never on BNI, add it by hand
 *    photo         the image the site shows. Leave "" to use bniPhoto.
 *                  Your own image: put the file in img/members/ and set
 *                  e.g. "photo": "img/members/adam-bortolussi.jpg"
 *    bniPhoto, bniProfileUrl, bniMessageUrl, bniAddress, bniPhones,
 *    bniSocial, bniCompanyLogo, bniMyBusiness, bniIdealReferral,
 *    bniIdealReferralPartner
 *                  mirror BNI (the chapter page and each member's own
 *                  page); refreshed on every sync, don't edit. Not shown
 *                  on the site yet except bniPhoto.
 *
 *  Refresh from BNI:  python3 scripts/sync-bni.py   (--dry-run to preview)
 * ============================================================================
 */

window.MEMBERS_DB = {
  "lastSynced": "2026-09-25 20:30 UTC",
  "roles": [
    {
      "role": "President",
      "section": "Executive Team",
      "max": 1,
      "bniHolders": [
        "nFGBAAeVpNoRUTFpwqNKiA=="
      ]
    },
    {
      "role": "Vice President",
      "section": "Executive Team",
      "max": 1,
      "bniHolders": [
        "SH38I/3252C1r6XB9ifC6w=="
      ]
    },
    {
      "role": "Secretary / Treasurer",
      "section": "Executive Team",
      "max": 1,
      "bniHolders": [
        "0BkSUadz00Gm8d2rjHqMPw=="
      ]
    },
    {
      "role": "Visitor Host",
      "section": "Visitor Host",
      "max": 3,
      "bniHolders": [
        "kW4lRZHMcM0DS7u84pfh9A==",
        "+1w2thLr4Ve16fl9Ctp2xw==",
        "nvAZLxzaizQVjczJ9MFQsA=="
      ]
    },
    {
      "role": "Membership Committee",
      "section": "Membership Committee",
      "max": 3,
      "bniHolders": [
        "YZ9ufZ4p9c9OWBnIOdnZcA=="
      ]
    },
    {
      "role": "Membership Committee - Quality Assurance",
      "section": "Membership Committee",
      "max": null,
      "bniHolders": [
        "YZ9ufZ4p9c9OWBnIOdnZcA=="
      ]
    },
    {
      "role": "Membership Committee - Member Relations",
      "section": "Membership Committee",
      "max": null,
      "bniHolders": [
        "i52tH5sJvQf9+rCZ34UWkw=="
      ]
    },
    {
      "role": "Chapter Webmaster",
      "section": "Supporting Leaders",
      "max": null,
      "bniHolders": [
        "oTTe8cAKWQ6oG8FJCkt+Pw=="
      ]
    },
    {
      "role": "Chapter Director Consultant",
      "section": "Regional Support Team",
      "max": null,
      "bniHolders": [
        "2Gx+vjZha2dDZfFDgHBz6g=="
      ]
    }
  ],
  "people": [
    {
      "id": "Rag3V6j3CjTYuZwhSHWAqw==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [],
      "name": "Adam Bortolussi",
      "firstName": "Adam",
      "lastName": "Bortolussi",
      "company": "Bortolussi Wealth Management",
      "companyUrl": "http://www.bortowm.com",
      "category": "Financial Advisor",
      "categoryPath": "Finance & Insurance > Financial Advisor > Financial Advisor",
      "phone": "5084163534",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=68b77cfd3604480001a663d2",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=Rag3V6j3CjTYuZwhSHWAqw%3D%3D&name=Adam+Bortolussi",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=c9cU4odih4L0qddBdFjv0Q%3D%3D&userName=Adam+Bortolussi",
      "bniAddress": "30 Turnpike Road, Suite 3, Southborough, MA 01772",
      "bniPhones": [
        "5084163534"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "oTTe8cAKWQ6oG8FJCkt+Pw==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Chapter Webmaster"
      ],
      "name": "Brendon Mourao",
      "firstName": "Brendon",
      "lastName": "Mourao",
      "company": "Ikonera",
      "companyUrl": "",
      "category": "Web Development",
      "categoryPath": "Advertising & Marketing > Web Development",
      "phone": "774-374-4233",
      "email": "",
      "photo": "",
      "bniPhoto": "",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=oTTe8cAKWQ6oG8FJCkt%2BPw%3D%3D&name=Brendon+Mourao",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=X1uLUQpVaKOzch%2BMoOfHoQ%3D%3D&userName=Brendon+Mourao",
      "bniAddress": "16A Victor Road",
      "bniPhones": [
        "774-374-4233"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "2Gx+vjZha2dDZfFDgHBz6g==",
      "enabled": false,
      "trophyWinner": false,
      "roles": [
        "Chapter Director Consultant"
      ],
      "name": "Brianna White",
      "firstName": "Brianna",
      "lastName": "White",
      "company": "Vostra Moda, LLC",
      "companyUrl": "http://Vostramoda.com",
      "category": "",
      "categoryPath": "",
      "phone": "",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/69947f71e4b0df21dfc1ca27.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=2Gx%2BvjZha2dDZfFDgHBz6g%3D%3D&name=Brianna+White",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=%2BCwC8AnMcqtAH95Paw8Pug%3D%3D&userName=Brianna+White",
      "bniAddress": "",
      "bniPhones": [],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "YZ9ufZ4p9c9OWBnIOdnZcA==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Membership Committee",
        "Membership Committee - Quality Assurance"
      ],
      "name": "Christopher Fitts",
      "firstName": "Christopher",
      "lastName": "Fitts",
      "company": "Fitts Insurance Agency, Inc.",
      "companyUrl": "http://www.fittsinsurance.com",
      "category": "Property & Casualty Insurance",
      "categoryPath": "Finance & Insurance > Property & Casualty Insurance > Property & Casualty Insurance",
      "phone": "508-620-6200x210",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/6740877b5b475000014b94a0.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=YZ9ufZ4p9c9OWBnIOdnZcA%3D%3D&name=Christopher+Fitts",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=KSl5e0RixBd%2F%2BADFfxnMJw%3D%3D&userName=Christopher+Fitts",
      "bniAddress": "30 Turnpike Road, Suite 3, Southborough, MA 01772",
      "bniPhones": [
        "508-620-6200",
        "508-416-3510",
        "888-697-6542",
        "508-481-0227"
      ],
      "bniSocial": [
        "https://www.facebook.com/fittsinsurance.",
        "http://www.linkedin.com/in/chris-fitts-3668a82",
        "https://twitter.com/fittsinsurance",
        "http://blog.fittsinsurance.com/",
        "https://www.instagram.com/fitts_insurance/",
        "https://plus.google.com/u/1/103372824033176353995"
      ],
      "bniCompanyLogo": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=577166a9f0f0f3df3371f006",
      "bniMyBusiness": "Fitts Insurance Agency, Inc.",
      "bniIdealReferral": "Families or businesses that are unsatisfied with their current insurance provider and whom may have been neglected.",
      "bniIdealReferralPartner": "Lender or Closing Attorney"
    },
    {
      "id": "0wlKhyGU865iDKfFO8At9Q==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [],
      "name": "Christopher Mingace",
      "firstName": "Christopher",
      "lastName": "Mingace",
      "company": "Heinlein Beeler Mingace & Heineman PC",
      "companyUrl": "http://www.hbmhlaw.com",
      "category": "Personal Injury Law",
      "categoryPath": "Legal & Accounting > Personal Injury Law > Personal Injury Law",
      "phone": "508-626-8500",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=58cac35744f45bfa5dfee2e1",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=0wlKhyGU865iDKfFO8At9Q%3D%3D&name=Christopher+Mingace",
      "bniMessageUrl": "",
      "bniAddress": "276 Union Ave, Framingham, MA 01702",
      "bniPhones": [
        "508-626-8500",
        "508-655-2700"
      ],
      "bniSocial": [
        "http://the200.org"
      ],
      "bniCompanyLogo": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=58cac2e944f45bfa5dfee2df",
      "bniMyBusiness": "For the past over 30 years I am helping clients through difficult times when an unexpected accident leaves them injured - the work I do alleviates the stress of trying to get compensated whether a work injury, dog bite, construction accident, worker's compensation, car wrecks, nursing home, or medical malpractice. We are here.",
      "bniIdealReferral": "Anyone injured at work, car accident, slip, trip and fall, Construction site accident",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "enGC8FICZjNLd4hNocOQmQ==",
      "enabled": false,
      "trophyWinner": false,
      "roles": [],
      "name": "Christopher Orrick",
      "firstName": "Christopher",
      "lastName": "Orrick",
      "company": "Paychex",
      "companyUrl": "",
      "category": "Business Consultant - Small Business",
      "categoryPath": "Consulting > Business Consultant - Small Business > Business Consultant - Small Business",
      "phone": "7817335439",
      "email": "",
      "photo": "",
      "bniPhoto": "",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=enGC8FICZjNLd4hNocOQmQ%3D%3D&name=Christopher+Orrick",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=VNPMD3s5qlwX9gX3b1T2%2BA%3D%3D&userName=Christopher+Orrick",
      "bniAddress": "2222 Avalon Dr, Sharon, MA 02067",
      "bniPhones": [
        "7817335439"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "0PIhS4ZU9mE0d0uRcDU68w==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [],
      "name": "Clif Newton",
      "firstName": "Clif",
      "lastName": "Newton",
      "company": "Ulta Home Improvements",
      "companyUrl": "",
      "category": "Construction",
      "categoryPath": "Construction > Construction (Other) > Construction",
      "phone": "774-777-8736",
      "email": "",
      "photo": "",
      "bniPhoto": "",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=0PIhS4ZU9mE0d0uRcDU68w%3D%3D&name=Clif+Newton",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=P%2FUTCeKLxpU92HLxHUKiMw%3D%3D&userName=Clif+Newton",
      "bniAddress": "60 pleasant st, Ashand, MA 01721",
      "bniPhones": [
        "774-777-8736"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "SH38I/3252C1r6XB9ifC6w==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Vice President"
      ],
      "name": "Ian McCarthy",
      "firstName": "Ian",
      "lastName": "McCarthy",
      "company": "United Home Experts",
      "companyUrl": "",
      "category": "Windows & Doors",
      "categoryPath": "Construction > Windows & Doors > Windows & Doors",
      "phone": "5088403765",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/6ab66307f3668000012cbe3f.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=SH38I%2F3252C1r6XB9ifC6w%3D%3D&name=Ian+McCarthy",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=HtaLcCJsY45Yq98lWR4iKg%3D%3D&userName=Ian+McCarthy",
      "bniAddress": "101 S Main Street, Uxbridge, MA 01569",
      "bniPhones": [
        "5088403765"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "kW4lRZHMcM0DS7u84pfh9A==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Visitor Host"
      ],
      "name": "Jake Shanley",
      "firstName": "Jake",
      "lastName": "Shanley",
      "company": "Rate",
      "companyUrl": "http://www.rate.com/JakeShanley",
      "category": "Residential Mortgages",
      "categoryPath": "Finance & Insurance > Residential Mortgages > Residential Mortgages",
      "phone": "978-877-6304",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/68220ca50707c200014fbae0.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=kW4lRZHMcM0DS7u84pfh9A%3D%3D&name=Jake+Shanley",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=bqWI2avu2WryAl%2BvDKoo3A%3D%3D&userName=Jake+Shanley",
      "bniAddress": "85 Main Street Suite 204, Office #1, Hopkinton, Massachusetts 01748",
      "bniPhones": [
        "978-877-6304"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=68220ce4ad82870001fe2675",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "+1w2thLr4Ve16fl9Ctp2xw==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Visitor Host"
      ],
      "name": "Jeremy Cohen",
      "firstName": "Jeremy",
      "lastName": "Cohen",
      "company": "CW Law Group P.C.",
      "companyUrl": "http://www.cwlawgrouppc.com",
      "category": "Real Estate Law",
      "categoryPath": "Legal & Accounting > Real Estate Law > Real Estate Law",
      "phone": "508-309-4880",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/577424ddf0f0f3df33720149.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=%2B1w2thLr4Ve16fl9Ctp2xw%3D%3D&name=Jeremy+Cohen",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=Lt2Hgq5pGdoNUpEQuTkbnQ%3D%3D&userName=Jeremy+Cohen",
      "bniAddress": "160 Speen Street, Suite 309, Framingham, MA 01701",
      "bniPhones": [
        "508-309-4880",
        "844-275-2856",
        "508-597-7722"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "Serving clients with their real estate, estate planning, and consumer protection needs. We let our clients know that all questions are good ones and enjoy assisting them and being a part of their journey.",
      "bniIdealReferral": "Buyer/Seller of Real Estate or Refinance",
      "bniIdealReferralPartner": "Realtors, Lenders, prospective Buyers, Sellers, or Borrowers"
    },
    {
      "id": "nFGBAAeVpNoRUTFpwqNKiA==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "President"
      ],
      "name": "Joseph Nealon",
      "firstName": "Joseph",
      "lastName": "Nealon",
      "company": "Law Office of Joseph E. Nealon",
      "companyUrl": "http://nealonlawoffice.com",
      "category": "Family Law",
      "categoryPath": "Legal & Accounting > Family Law > Family Law",
      "phone": "508-366-0044",
      "email": "",
      "photo": "",
      "bniPhoto": "",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=nFGBAAeVpNoRUTFpwqNKiA%3D%3D&name=Joseph+Nealon",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=yotN7qs0ajMeg9IHMDe32A%3D%3D&userName=Joseph+Nealon",
      "bniAddress": "45 Lyman Street, Suite 28, Westborough, MA 01748",
      "bniPhones": [
        "508-366-0044",
        "508-366-0162"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "0BkSUadz00Gm8d2rjHqMPw==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Secretary / Treasurer"
      ],
      "name": "Matt Cuneo",
      "firstName": "Matt",
      "lastName": "Cuneo",
      "company": "SVN Parsons Commercial Group",
      "companyUrl": "",
      "category": "Commercial Real Estate",
      "categoryPath": "Real Estate Services > Commercial Real Estate > Commercial Real Estate",
      "phone": "774-217-2684",
      "email": "",
      "photo": "",
      "bniPhoto": "",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=0BkSUadz00Gm8d2rjHqMPw%3D%3D&name=Matt+Cuneo",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=sN7ehOyT3tHC0ye2VrQM5Q%3D%3D&userName=Matt+Cuneo",
      "bniAddress": "51 School St, Northborough, MA 01532",
      "bniPhones": [
        "774-217-2684"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "Commercial Real Estate Brokerage in Framingham, MA. We specialize in the Metrowest.",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "7MZR0B53fTQMSqtBWscLMQ==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [],
      "name": "Mike Saad",
      "firstName": "Mike",
      "lastName": "Saad",
      "company": "Mike Saad Electric",
      "companyUrl": "",
      "category": "Electrician",
      "categoryPath": "Construction > Electrician > Electrician",
      "phone": "(774) 571-7774",
      "email": "",
      "photo": "",
      "bniPhoto": "",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=7MZR0B53fTQMSqtBWscLMQ%3D%3D&name=Mike+Saad",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=%2BD62rp85g9ASFbImfFaqdw%3D%3D&userName=Mike+Saad",
      "bniAddress": "64 Dana Road, Oxford, Massachusetts 01540",
      "bniPhones": [
        "(774) 571-7774"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "NEitSKudkQvJx24u5swEKg==",
      "enabled": false,
      "trophyWinner": false,
      "roles": [],
      "name": "Patrick DiTucci",
      "firstName": "Patrick",
      "lastName": "DiTucci",
      "company": "Ashland Service Center LLC",
      "companyUrl": "http://ASHLANDSERVICECENTER.COM",
      "category": "Auto/Car Repair",
      "categoryPath": "Car & Motorcycle > Auto/Car Repair > Auto/Car Repair",
      "phone": "7742772836",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=64b873073d7f6a00019af464",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=NEitSKudkQvJx24u5swEKg%3D%3D&name=Patrick+DiTucci",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=ynKQt11Ivmy6AzhWLHwTcQ%3D%3D&userName=Patrick+DiTucci",
      "bniAddress": "22c Nickerson Road, Ashland, Ma 01721",
      "bniPhones": [
        "7742772836",
        "774-277-2836",
        "508-881-6622"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "Ashland Service Center Roadmaster Motors",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "i52tH5sJvQf9+rCZ34UWkw==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Membership Committee - Member Relations"
      ],
      "name": "Peter Edwards",
      "firstName": "Peter",
      "lastName": "Edwards",
      "company": "Hayden Rowe Properties",
      "companyUrl": "http://www.haydenroweproperties.com",
      "category": "Residential Real Estate Agent",
      "categoryPath": "Real Estate Services > Residential Real Estate Agent > Residential Real Estate Agent",
      "phone": "508-761-1481",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/5b51fe345a58e6f939f66bc8.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=i52tH5sJvQf9%2BrCZ34UWkw%3D%3D&name=Peter+Edwards",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=UkwYcrqTWmVWwI%2BHYaZBgg%3D%3D&userName=Peter+Edwards",
      "bniAddress": "45 Lyman Street, Suite 28, Westborough, MA 01581",
      "bniPhones": [
        "508-761-1481"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=5b51fe5c5a58e6f939f66bca",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    },
    {
      "id": "zETax0U00ouSKcWuJ0KybA==",
      "enabled": true,
      "trophyWinner": true,
      "roles": [],
      "name": "Peter Hamilton",
      "firstName": "Peter",
      "lastName": "Hamilton",
      "company": "Mirick O'Connell",
      "companyUrl": "https://www.mirickoconnell.com/",
      "category": "Litigation",
      "categoryPath": "Legal & Accounting > Litigation > Litigation",
      "phone": "508.768.0745",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=6512421be4b088bcf9dacb94",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=zETax0U00ouSKcWuJ0KybA%3D%3D&name=Peter+Hamilton",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=s7w1q8TBqLwwW4AVrZ5%2BTA%3D%3D&userName=Peter+Hamilton",
      "bniAddress": "1800 W Park Dr .#400, Westborough, MA 01581",
      "bniPhones": [
        "508.768.0745",
        "518-727-1200"
      ],
      "bniSocial": [
        "https://www.linkedin.com/in/peter-j-hamilton-ii-916491a/"
      ],
      "bniCompanyLogo": "https://bniamerica.com/web/open/appsCmsImageDownload?imageObjectId=6512433ae4b088bcf9dacb96",
      "bniMyBusiness": "I am a business litigation attorney with Mirick, a regional full service law firm with offices in Boston, Westborough and Worcester, Massachusetts.",
      "bniIdealReferral": "1) A business or individual that has recently been sued. 2) A general contractor or someone in the construction industry",
      "bniIdealReferralPartner": "General contractors, non-litigation attorneys, business owners."
    },
    {
      "id": "nvAZLxzaizQVjczJ9MFQsA==",
      "enabled": true,
      "trophyWinner": false,
      "roles": [
        "Visitor Host"
      ],
      "name": "Raphael Guimaraes",
      "firstName": "Raphael",
      "lastName": "Guimaraes",
      "company": "SumZero Energy Systems",
      "companyUrl": "",
      "category": "HVAC - Heating & Air",
      "categoryPath": "Construction > HVAC - Heating & Air > HVAC - Heating & Air",
      "phone": "7745270860",
      "email": "",
      "photo": "",
      "bniPhoto": "https://bniconnectglobal.com/web/open/networkViewProfileImage/695ed945bac2780001809463.jpg",
      "bniProfileUrl": "https://bniamerica.com/en-US/memberdetails?encryptedMemberId=nvAZLxzaizQVjczJ9MFQsA%3D%3D&name=Raphael+Guimaraes",
      "bniMessageUrl": "https://bniamerica.com/en-US/sendmessage?userId=95erzBAk01S10D9iI04IJQ%3D%3D&userName=Raphael+Guimaraes",
      "bniAddress": "84 October Hill Road, Holliston, Ma 01746",
      "bniPhones": [
        "7745270860"
      ],
      "bniSocial": [],
      "bniCompanyLogo": "",
      "bniMyBusiness": "",
      "bniIdealReferral": "",
      "bniIdealReferralPartner": ""
    }
  ]
};
