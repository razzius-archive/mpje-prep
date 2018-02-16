(ns mpje-prep.questions
  (:require [clojure.string :refer [split-lines split]]))

; This is ugly but I don't know how to do a custom loader with cljs
(def source
  "How long is it until an intern pharmacy license expires in Illinois?	1 year	18-month max after graduation	6 months	2 months	2 years	
When do you report a missing DEA form 	Immediately	don't confuse with lost/missing controlled substances	1 Business day 	2 Business days 	3 Business days 	5 Business days
When do you report a missing control substances 	1 business day	Don't confuse reporting controlled substance and submitting DEA 106 which is done after the incident has been investigated.	Immediately	2 Business days 	3 Business days 	5 Business days
when centralized record keeping is used it must provide DEA with records within	2 days	Can’t keep DEA forms there or control invoices, only other records like shipping and other receipts 	Immediately	1 Business days 	3 Business days 	5 Business days
When division request a hard copy, It should be provided within	2 days		Immediately	1 Business days 	3 Business days 	5 Business days
MTM services must be reported to MD within	2 days	Ex: changes in dosing etc.	Immediately	1 Business days 	3 Business days 	5 Business days
How often should consultant pharmacist in Medicare certified long term care facility perform Medication regimen review	Monthly		twice a month	every 6 month	yearly 	not required 
An entry of filling biologics for a patient (so prescriber is informed) must be done within	5 business days	Must be available to prescriber e record, e-prescribe, PBM, pharmacy record. (not needed for refills)	Immediately	1 Business days 	3 Business days 	10 Business days
Long term care pharmacy should send Med profile to PMP at least 	Monthly	or more frequently 	1 Business days 	3 Business days 	5 Business days	14 Business days
An entry of C2-5 must be reported to IL PMP within	 1 business day	Charge of $100 per day if not reported exempts: In-pt , ER (less than 72 hours supply), narc treatment prog, CS via infusion in LTC hospice or hospital. (there is no requirement to report 0 if pharmacy didn’t fill anything. 	1 Business days 	3 Business days 	5 Business days	14 Business days
Hard copy printout must be brought to pharmacy (if central) to be signed within	72 hours		1 days 	7 days 	10 days	14 days 
HIPPA records must be kept for 	6 years	important question to know	1 year 	2 years	5 years	10 years 
Medicare part D has X month to register when they turn 65 year	7 months	3 months before birthday month and 3 after for total of 7 without a penalty.	6 month	12 month	18 month	no limite 
IND review time is 	30 days	don't confuse with ANDA time which is 180	14 days	6 month 	12 month 	18 month
ANDA review time 	6 month	don't confuse with IND time which is 30 days	1 month	3 month	12 month	18 month
Closing pharmacy must notify IL Dep of Professional regulation within	30 days 	MUST SUBMITE COPY OF CS INVENTORY to DPR within the 30 days. It also should give notification to patients within 15 days.	10 days	14 days	3 month	6 month
Exempt narcs sales records must be reported to IDPR by	By 15th of next month	maintain records for 2 years. Pharmacist & must sign (federally only initials are enough)	by 10th of next month	by 30th of next month	by the beginning of next month 	
Unfilled C2 prescription is valid for	90 days	Partially filled valid for 72 hours (exception: long term care facility or Medicare hospice, valid for 60 days)	30 days	60 days	180 days 	valid as long as medically necessary 
Partial C2 fills are valid for?	72 hours	If pharmacy can’t provide the full amount they have 3 days, new laws might be changing this soon. Long term care facility or hospice is good for 60 days.	24 hours	120 hours	7 days	14 days
Emergency via phone C2 prescription must be followed by hard copy within  	post marked 7 days	If not received in 7 days notify DEA & IL Department of human services office of alcoholic abuse. **NOT DPR**	post marked 3 days	10 days	post marked 14 days 	7 days
Annual inventory of controls records must be kept for	5 years	C2 exact count
 C3-5 estimate, open bottles of 1000 is counted exact count.	1 year	2 years	6 years	10 years
When using DEA 41 to destroy controls you must send the form 	2 weeks before destruction 	Must be approved before destroying controls (have witness etc.)	2 weeks after the destruction	1 week before the destruction	1 week after destruction	on the day of destruction
DEA 106 must be reported (pentazocine is not included since it’s not federal scheduled)	Report incident to DEA in 1 business day then Submit DEA 106 when investigation is done	Copy 1&2 to DEA office copy 3 at pharmacy copy 4 to DPR by the PIC	Report incident to DEA in 3 business days then Submit DEA 106 when investigation is done	Submit DEA 106 within 3 business days	Submit DEA 106 within 1 business days	Submit DEA 106 within 5 business days
Vaccines must be reported to PCP	Within 30 days	How about to online state log? No req yet	5 days	7 days	10 days	14 days
In Emergency medication kit proof of use sheet must be filled by PharmD and kept for	2 years	Once kit is open pharmacist must be notified in 24 hours	1 year	5 years 	6 years 	10 years 
How often consultant PharmD must check emergency medication kits	Once a month	Could contain controls (max of 10 different CS and max of 3 injectable doses of one drug)	once a week	twice a month	every 3 months	every 6 months
Narcotic treatment program Methadone or LAAM (levacytle methadol) detox program is limited to	21 days 	maintenance: 21 days or more. Pt must be drug dependent for 1 year to qualify for program.	7 days	10 days	14 days	30 days
In IL: PA and ARNP can be delegated C2 prescribing but have limit of	30 days supply	continuation of therapy needs to be approved by MD or podiatrist. Also, they can’t do injectable, buccal, sublingual or trans-mucosal C2s. The delegation of drugs is by name (one by one)	15 day supply	60 day supply	90 day supply	no limits 
Optometrist can prescribe Controls only for	72 hours for all controls	Can prescribe C3-5 analgesic for only 72 hours not more***EXCEPTION: The Only C2 (hydrocodone + non-narc) (ex: Lortab) can be given for up 72 hours	72 hours for C2 and 14 days for C3-5	72 hours for C2 and 7 days for C3-5	14 days for C2 and 30 days for C3-5	no limits 
Pharmacist failing to report to department within	60 days	Will be subject to discipline	14 days	30 days	90 days	120 days
Tech can work for up to ...... before issuing certified or registration	60 days	After 60 days may continue to work but limited.	10 days	14 days	30 days	90 days
Pharmacy licensure can be renewed	60 days before it expires	By holder of the license	30 days before it expires	15 days before it expires	90 days before it expires	on the day it expires
How long must pharmacy keep self-inspection	5 years	Pharmacy must do an annual self-inspection using form by division.	1 year	2 years	6 years	10 years
When pharmacy needs new PIC if current is absence for a period exceeding	90 days	After 90 days the pharmacy will need a new PIC and license	30 days	60 days	6 month	12 month
PIC in hospital must report to DPR every ..... for quality assurance of auto dispensing and storage system, or if death occur due to error	30 days	30 days before installation 30 days before removal of ADS	3 days	14 days	60 days	90 days
ER supplies of dispensed medications should be limited to	72 hours	exception to this rule are: 1. Unit of use package (Inhaler, ophthalmic, otic) you dispense whole pak. 2. Antimicrobial (ex: doxycycline for STD) 3. Drugs via remote automated pharmacy system (unit of use)	24 hours	48 hours	7 days	14 days
Rx presented at a remote consultation site must be sent to home pharmacy within	72 hours 	Remote consulting pharmacy does not have inventory therefore can’t fill onsite. (PIC must review entry log of who entered to pharmacy weekly)	24 hours	48 hours	7 days	14 days
Nonresident pharmacy must have a toll free phone for x hours	40 hours a week at least 6 days a week	Must register with the state as “non-resident”	40 hours a week at least 5 days a week	32 hours a week at least 6 days a week	40 hours a week at least 7 days a week	32 hours a week at least 5 days a week
When substituting for biosimilar a note of substitution must be available in	5 days	Unless no FDA alternative available. must be approved by FDA, provider AND Pt.	24 hours	72 hours	7 days	10 days
Laminar airflow should be certified	Annually 	certify if the hood was moved. Pre-filters must be cleaned and replaced monthly. (must be documented)	every 30 days	every 3 month	every 6 month	daily
DEA pharmacy registration renewal is every	3 years	DEA 224a renewal DEA 224 for new pharmacy	year	2 years	5 years 	non required after initial registration 
IL controlled sub pharmacy registration expires on	31st of march even years	This is NOT DEA registration prescriber & pharmacy must have both DEA and state licensure to deal with CS	Jan 1st of even years 	Jan 1st of Odd years	Jan 30th of even years	March 1st of even years
If supplier partials a C2 to pharmacy when do they send DEA 222	By the end of the month when the shipment is completed.	Partial amount is not recorded, when full quantity delivered DEA 222 copy 2 gets sent to DEA. MUST BE DONE WITHIN 60 days otherwise order is expired.	within 3 days of the shipment	within 14 days of shipment	within 5 business days of shipment	within 30 days of shipment
When does supplier forwards DEA 222 (copy #2)	In the end of month where order is filled (using DEA 222)	Within 2 business days if using electronic CSOS				
  All computer generated prescription/refill documentation must be stored in a separate file at the pharmacy and be maintained for	two year period from the dispensing date.	Don’t confuse that dispensing records are kept for 5 years (this is like a backup procedure for system downtime)	one year period from the dispensing date	one year period from the receiving date	two year period from the receiving date	5 year period from the receiving date
How long does the controls inventory is kept in IL	5 years 	Inventory done every year (federally every 2). C2 exact count, c3-5 estimation. Illinois DOES NOT require perpetual c2 inventory like Iowa				
Sig loss of  drug samples should be reported to ...... within .......	 FDA within 5 days 	Can’t be sold (must be given at no cost)	 FDA within 7 days 	 DEA within 5 days 	 DEA within 7 days 	Police within 5 days
How long is the term on the IL board for the pharmacist?	5 years	Can’t do more than 12 years in a row
 Member must be licensed for 5 years and then appointed by governor (board makes recommendations)	1 year	2 years	6 years	10 years
Minimum number of investigators on the board	4 investigators & 1 attorney 	(investigators must be pharmacist, this law started at 2015). DPR appoints Chief Pharmacy Coordinator and 2 Deputy Pharmacy Coordinators, Chief Pharmacy Coordinator (they can’t be on the board) one in Chicago (cook county) one in Springfield	2 investigators & 1 attorney 	5 investigators & 1 attorney 	4 investigators & 2 attorneys 	4 investigators & 1 attorneys  
Requirement for IL pharmacist intern hours to be completed on rotation	Must complete 400 hours with IL pharmacist		Must complete 500 hours with IL pharmacist	Must complete 900 hours with IL pharmacist	Must complete 1200 hours with IL pharmacist	Must complete 1500 hours with IL pharmacist
When does the pharmacy need to issue a new license (when shares are being sold)	10 % of ownership of business or more than half the board of directions or executives offers has issued the change	Changes in the parent company does not need a license to change.	20 % of ownership of business or more than half the board of directions or executives offers has issued the change	25 % of ownership of business or more than half the board of directions or executives offers has issued the change	50 % of ownership of business or more than half the board of directions or executives offers has issued the change	51 % of ownership of business or more than half the board of directions or executives offers has issued the change
Pharmacist can be a PIC as long as they work x hours	Minimum of 8 hours per week in every pharmacy	So, 5 max pharmacies?	2 pharmacies	3 pharmacies 	Minimum of 20 hours per week in every pharmacy	
Rx (non-controls) are valid for ....... from the day of prescribing 	1 year	if prescribed on 1/1/2016 it will be invalid on 01/01/2017. Don’t confuse pick up date with fill date, pick up could be past the 1 year and still be valid.	13 month 	18 month	2 years	
When can after hour cabinet be used?	Only when the pharmacist is not around	Must place physician order authorizing removal within cabinet	Only when the pharmacist is around	Only when the physician is not around	Only when the physician and pharmacist are around	
Electronic visual image prescription Should be provided if DPR asked within	72 hours	Don’t confuse with the hard copy printout of REFILL DATA when there is an inspection is due to be provided to DPR in 48 hours	24 hours	48 hours	96 hours	7 days
What percentage of effervescent formulation of aspirin & acetaminophen does not require child safety cap	15% or less	20 % needs safety cap	20% or less	25% or less	50% or less	
Pediatric studies allow brand name exclusivity to be extended for a period of	6 months	Orphan drug exclusivity gives 7 years	3 month	9 month	12 month	18 month
First generic manufacturer has exclusivity for	180 days		120 days	18 month	1 year	2 years 
Continuous education college credit, one semester accounts for .... CE hours	15 CE hours	One semester = 15 CE hours, one quarter hour = 10 CE hours Don't confuse with CEU. courses completed at recognized professional pharmacy program	10 CE hours	20 CE hours	1 CE hours	2 CE hours
A pharmacist must notify division within  ...... if they have been disciplined by another state board of pharmacy	60 days		10 days	14 days	30 days	90 days
One pharmacist might oversee how many remote sites at once?	Max of 3 at a time per one pharmacist	A pharmacist must be able to be onsite within 1 hour of random inspection. A pharmacist must be able to be onsite within 1 hour of random inspection. Its responsibility of PIC to hire enough pharmacist to oversee the remote sites. random fact: rx could be scanned at remote automated pharmacy.	Max of 2 at a time per one pharmacist	Max of 4 at a time per one pharmacist	Max of 5 at a time per one pharmacist	no limit as long as they are within 1 hour drive
Nuclear pharmacy space requirement 	Must be minimum 300 sq. feet		Must be minimum 500 sq. feet	Must be minimum 1000 sq. feet	Must be minimum 1200 sq. feet	Must be minimum 3000 sq. feet
How many PharmD are on PMP committee?	4 pharmacists	4 MD, 1 APN, 1 PA, 1 DO, 1 podiatrist.	2 Pharmacists	3 Pharmacists	5 Pharmacists 	6 Pharmacists 
Limit on hypodermic syringes	100 per day 	New law increased it to 100 per day. used to be 20 per day. Department of public health must provide pharmacy with material for proper disposal of needles and syringes.	20 per day	40 per day	50 per day	no limit 
What is the BUD for sterile compounding done for emergency	1 hour		24 hours	36 hours 	48 hours	3 days
What is BUD for Unit dose packing?	Always Less than 12 months & must be less than 25% of remaining time of original package	Ex: if original container has 2 years expiration date the repackaged unit does would have 6 months (not 12 month)	Always Less than 12 months & must be less than 15% of remaining time of original package	Always Less than 12 months & must be less than 30% of remaining time of original package	Always Less than 12 months & must be less than 50% of remaining time of original package	Always Less than 12 months & must be less than 20% of remaining time of original package
The BUD for med pak (multiple drugs in one dial slip) is 	Max of 60 days	Must have serial number for med pak and can’t be returned to stock under any condition for re-dispensing.(you can take it back in some conditions but can’t reuse meds again)	Max of 30 days	Max of 45 days	Max of 60 days	Max of 90 days
BUD for Non-aqueous formulation (petrolatum)	6 months or any of the component expiration (25% of expiration of one of the components)	Oil based ointment	3 months or any of the component expiration (25% of expiration of one of the components)	3 months or any of the component expiration (50% of expiration of one of the components)	6 months or any of the component expiration (20% of expiration of one of the components)	6 months or any of the component expiration (50% of expiration of one of the components)
What is dose of elemental iron that needs safety cap	250 mg of elemental iron 	The 325 mg iron sulfate contains 65 mg elemental iron (OTC). other product limits Potassium: 50 mEq , methylprednisolone 84 mg (Medrol pak) , prednisone: 105 mg, medroxyprogesterone oral contraceptive in dial pak	325 mg of elemental iron 	65 mg of elemental iron 	500 mg of elemental iron 	
The BUD for Water containing oral formulation is	14 days and stored in controlled temp 	 Amoxicillin reconstituted  	14 days and stored in room temp 	10 days and stored in controlled temp 	10 days and stored in room temp 	30 days and stored in room temp 
The BUD for water containing topical/dermal and semisolid is	30 days	Clindamycin cream for acne or compounded mouthwash	10 days	14 days	21 days	90 days")

(defn line-to-question [line]
  (let [parts (split line "\t")]
    {
     :question (nth parts 0)
     :answer (nth parts 1)
     :note (nth parts 2)
     :other-options (drop 3 parts)
     }))

(def questions
  (let [lns (split-lines source)]
    (map line-to-question lns)))
