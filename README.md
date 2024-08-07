# Crypto Tax Calculator

hosted link: https://66b31177ff075566db3e905c--extraordinary-haupia-e38f46.netlify.app/

Hi All
This is web app to calculate tax on crypto currency based on various factors like purchase price, expences, taxes etc. This webapp uses javascript in frontend and react library,

![image](https://github.com/user-attachments/assets/ee0cf028-e76f-4c96-aafb-b1c9a1cf4a33)
I have put capital gain amount (highlighted in green) as sale price of crypto - purchase price of crypto - expenses

Tax calculated depends upon which tax bracked you fall in for eg if your income is less than or equal to $18,200 then you have no tax 
![image](https://github.com/user-attachments/assets/250b1cb6-9f86-4ec8-b436-e986d6204384)
![image](https://github.com/user-attachments/assets/b3b85df9-0bee-425b-bbe9-e3b75f92c42e)

Capital gain amount and Discount for long term gains is only considered if the investment type is of one year or more
![image](https://github.com/user-attachments/assets/3ff36222-f4d1-434d-9d56-29053d3538b7)
![image](https://github.com/user-attachments/assets/66031152-46c3-49ce-bd92-601eb0b629cd)


Formula used for calculations: 
1) Capital Gains Amount will be calculated as (Sale Price - Purchase Price - Expenses).
2) If “Investment Type” is selected as “Long Term”, then “Discount for Long Term Gains” would be calculated as 50% of “Capital Gains Amount”, only if “Capital Gains Amount” is a positive value. If “Investment Type” is selected as “Short
Term”, then the section with “Capital Gains Amount” and “Discount for Long Term Gains” would be hidden, as shown in the figma design on the right side.
3) Net Capital Gains would be calculated as (Capital Gains Amount - Discount for Long Term Gains) in case of Long Term and according to point (1) in case of Short Term.
4) Tax to be paid will be calculated accrding to this
   0 to 18,200 is 0%
   18,201 to 45,000 is nill + 19% of excess over 18,200
   $45,001 to $120,000 is $5092 + 32.5% of excess over 45,000
   $120,001 to $180,000 is $29,467 + 37% of excess over $120,000
   from $180,001 is $51,667 + 45% of excess over $180,000


Example
Purchase Price = 50
Sale Price = 100
Expenses = 20
Investment Type = Long Term
Annual Income = ($45001 - $120000).
For the above inputs, calculation would be:
Tax Rate = “$5092 + 32.5% of excess over $45000”
Capital Gains Amount = 30
Long Term Capital Gains Discount = 15
Net Capital Gains Amount = 15
Tax you need to pay = 4.875 (which is 32.5% of 15)


Additional feature:
The web app is made tablet friendly in addition to mobile and PC screen friendly
![image](https://github.com/user-attachments/assets/825e5e79-863d-4f4d-aaf3-118146db530b)
![image](https://github.com/user-attachments/assets/038f43ab-cf2a-4700-a0a2-727b8299dff8)
![image](https://github.com/user-attachments/assets/3603e7f2-3d7b-4818-8eb9-66e8ea5c1f9a)

Future scope: 
Currently only tax rate of australia is considered i whould like to make this a full stack web app where multiple countries are added and tax rate can be modified using crud operations to database.

