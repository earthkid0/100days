#내야할 금액
pay = float(input("내야 할 금액 = "))
#내고싶은 팁 10,12,15
tip = int(input("내고 싶은 팁 10,12,15 ? = "))
tip = tip * (1/100)
sum = round((pay * tip) + pay , 2)
print("tip = {0}".format(sum))
#같이온 인원수 
people = int(input("같이 온 인원 = "))
print("{0}명".format(people))
#내야할 금액
finally_pay = round(sum / (people), 2)
print("총 내야할 금액 {0}".format(finally_pay))