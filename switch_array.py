def switching(array):
  nums = array.copy()
  i = 0
  numbersInEven = []
  while i < len(nums):
    numbersInEven.append(nums[i])
    i += 2
  
  j = 1
  numbersInOdd = []
  while j< len(nums):
    numbersInOdd.append(nums[j])
    j += 2
  
  a = 0
  oddNumInEven = 0
  while a < len(numbersInEven):
    if numbersInEven[0] != numbersInEven[a]:
        oddNumInEven = nums.index(numbersInEven[a])
    a +=1
  
  b = 0
  oddNumInOdd = 0
  while b < len(numbersInOdd):
    if numbersInOdd[0] != numbersInOdd[b]:
        oddNumInOdd = nums.index(numbersInOdd[b])
    b +=1

  if oddNumInEven == 0 and oddNumInOdd == 0:
     return len(nums)
  elif oddNumInEven != 0 and oddNumInOdd != 0:
     if oddNumInEven < oddNumInOdd:
        switching_length = nums.copy()[:oddNumInEven]
        return len(switching_length)
     else:
        switching_length = nums.copy()[:oddNumInOdd]
        return len(switching_length)
  elif oddNumInEven != 0 and oddNumInOdd == 0:
     switching_length = nums.copy()[:oddNumInEven]
     return len(switching_length)
  elif oddNumInEven == 0 and oddNumInOdd != 0:
     switching_length = nums.copy()[:oddNumInOdd]
     return len(switching_length)
