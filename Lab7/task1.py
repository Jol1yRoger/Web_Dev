# a = int(input())
# b = int(input())

# print((a**2 + b**2) ** 0.5)


# a = int(input())
# b = int(input())
# print(a if a > b else b)


# a = int(input())
# b = int(input())

# if a % 2 != 0: a += 1

# for i in range(a, b + 1, 2):
#     print(i)


# a = int(input())
# i = 1
# while i ** 2 < a:
#     print(i ** 2)
#     i += 1


# a = int(input())
# b = []
# for i in range(a):
#     b.append(int(input()))

# for i in range(len(b)):
#     if i % 2 == 0:
#         print(b[i])


# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())
# def mmin(a, b, c):
#     print(min([a, b, c, d]))
# mmin(a, b, c, d)



# Hackerrank


# print("Hello, World!")




# import math
# import os
# import random
# import re
# import sys

# n = int(input().strip())

# if n % 2 != 0:
#     print("Weird")
# else:
#     if n in range(2, 6):
#         print("Not Weird")
#     elif n in range(6, 21):
#         print("Weird")
#     else:
#         print("Not Weird")




# if __name__ == '__main__':
#     a = int(input())
#     b = int(input())

# print(a + b, a - b, a * b, sep = "\n")



# if __name__ == '__main__':
#     a = int(input())
#     b = int(input())

# print(a + b, a - b, a * b, sep = "\n")


# if __name__ == '__main__':
#     a = int(input())
#     b = int(input())
#     print(a // b)
#     print(a / b)



# if __name__ == '__main__':
#     n = int(input())
# for i in range(n):
#     print(i * i)


# def is_leap(year):
#     leap = False
    
#     # Write your logic here
#     if year % 4 == 0:
#         if year % 100 == 0:
#             if year % 400 == 0:
#                 leap = True
#                 return leap
#         else:
#             leap = True
#             return leap
            
#     return leap


# if __name__ == '__main__':
#     n = int(input())
#     for i in range(1,n + 1):
#         print(i, end = "")


# if __name__ == '__main__':
#     x = int(input())
#     y = int(input())
#     z = int(input())
#     n = int(input())
#     print([[i, j, k ] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n])


# def minion_game(string):
#     Sscores = 0
#     Kscores = 0
#     vowels = "AEUIO"
#     lenS = len(s)

#     for i, j in enumerate(s):
#         if j in vowels:
#             Kscores += lenS - i
#         else:
#             Sscores += lenS - i

#     if Sscores > Kscores:
#         print("Stuart", Sscores)
#     elif Sscores == Kscores:
#         print("Draw")
#     else:
#         print("Kevin", Kscores)


# a = input()
# array = input().split()
# like = set(input().split())
# dislike = set(input().split())
# print(sum((i in like) - (i in dislike) for i in array))


# Coding bat

# def sleep_in(weekday, vacation):
#   if not weekday and not vacation or vacation:
#     return True
#   return False



# def monkey_trouble(a_smile, b_smile):
#   if a_smile == b_smile: return True
#   return False


# def sum_double(a, b):
#   if a == b: return 2 * (a + b)
#   return a + b



# def diff21(n):
#   if n > 21: return 2 * (n - 21)  
#   return 21 - n

# def parrot_trouble(talking, hour):
#   if talking and (hour < 7 or hour > 20): return True
#   return False


# def makes10(a, b):
#   if a == 10 or b == 10 or a + b == 10: return True
#   return False


# def near_hundred(n):
#   if n in range(90, 111) or n in range(190, 211): return True
#   return False


# def pos_neg(a, b, negative):
#   a = True if a >= 0 else False
#   b = True if b >= 0 else False
#   if (negative and not a and not b) or not negative and ((not a and b) or (a and not b)): return True
#   return False



# def not_string(str):
#   if str[0:3] == 'not': return str
#   return 'not ' + str



# def missing_char(sstr, n):
#   sstr = list(sstr)
#   del sstr[n]
#   return ''.join(sstr)


# def front_back(str):
#   if len(str) <= 1: return str
#   str = list(str)
#   str.insert(0, str.pop())
#   str.append(str[1])
#   del str[1]
#   return ''.join(str)


def front3(str):
  if len(str) <= 3: return 3 * str
  return str[0:3] * 3









def string_times(str, n):
  return str * n


def front_times(str, n):
  if len(str) <= n: return n * str
  return str[0:3] * n


def string_bits(str):
  return str[0:len(str) + 1:2]


def string_splosion(str):
  s = ""
  result = ""
  for i in range(len(str)):
    s += str[i]
    result += s
  return result


def last2(str):
  if len(str) < 2: return 0
  
  find = str[-2:]
  count = 0
  
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == find:
      count = count + 1

  return count


def array_count9(nums):
  return nums.count(9)


def array_front9(nums):
  if len(nums) < 4: return 9 in nums
  return 9 in nums[0:4]


def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False


def string_match(a, b):
  shorter = min(len(a), len(b))
  count = 0
  
  for i in range(shorter-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      count = count + 1

  return count



def hello_name(name):
  return 'Hello {}!'.format(name)


def make_abba(a, b):
  return a + b + b + a


def make_tags(tag, word):
  return "<{0}>{1}</{0}>".format(tag, word)


def make_out_word(out, word):
  return out[0:2] + word + out[2:4]

def extra_end(str):
  return str[-2:] * 3

def first_two(str):
  if len(str) <= 2: return str
  return str[0:2]


def without_end(str):
  return str[1:len(str) - 1]


def combo_string(a, b):
  short = a if len(a) < len(b) else b
  long = b if len(a) < len(b) else a
  
  return short + long + short

def non_start(a, b):
  return a[1:] + b[1:]