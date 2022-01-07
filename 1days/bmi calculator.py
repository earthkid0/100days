height = float(input("키 = ")) 
weight = int(input("몸무게 = "))
bmi = round(weight / (height**2),2)
print("BMI 수치는 {0} 입니다.".format(bmi))