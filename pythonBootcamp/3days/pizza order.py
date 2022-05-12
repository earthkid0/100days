from cmath import pi


print("피자 가게에 오신걸 환영합니다.")
size = input("피자 사이즈 ? S, M or L ")
add_pepperoni = input("페퍼로니 추가? Y or N ")
extra_cheese = input("치즈 추가? Y or N ")

# S = 15, M = 20, L = 25, Pepperoni + S = +2, Pepperoni + M or L = +3, cheese = +1
pay = 0
if size == "S":
    pay += 15
elif size == "M":
    pay += 20
elif size == "L":
    pay += 25
else:
    print("다시 주문해주세요.")

if add_pepperoni == "Y" and size == "S":
    pay += 2
elif add_pepperoni == "Y" and size == "M" or "L":
    pay += 3
else:
    pay += 0

if extra_cheese == "Y":
    pay += 1
else:
    pay += 0

print("총 계산할 금액 = ${0} ".format(pay))
