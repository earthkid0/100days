height = float(input("키 = ")) 
weight = int(input("몸무게 = "))
bmi = round(weight / (height**2),2)

if bmi < 18.5:
    value = "underweight"
elif bmi < 25:
    value = "nomal weight"
elif bmi < 30:
    value = "overweight"
elif bmi <35:
    value = "obese"
else:
    value = "clinically obese"

print("BMI 수치는 {0} , 체중은 {1} 입니다.".format(bmi,value))

