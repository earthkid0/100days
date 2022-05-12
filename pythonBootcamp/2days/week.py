age = int(input("현재 나이 = "))
year_remaining = 90 - age
days = year_remaining * 365
weeks = year_remaining * 52
months = year_remaining * 12
print("현재 남은 일생은 {0}일, {1}주, {2}달 입니다.".format(days, weeks, months))
