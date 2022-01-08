const getSleepHours = day => {
    if (day === 'Monday') {
    return 8;
    } else if (day === 'Tuesday') {
      return 7;
    } else if (day === 'Wednesday'){
      return 6;
     } else if (day === 'Thursday') {
       return 5;
     } else if (day === 'Friday') {
       return 9;
     } else if (day === 'Saturday') {
       return 8;
     } else if (day === 'Sunday') {
       return 9;
     }
     else {
       return 'Error';
     }
    };
    /*using switch statements
    const getSleepHours = day => {
      switch (day){
      case 'Monday': 
        return 8
        break;
      case 'Tuesday':
          return 7
          break;
      case 'Wednesday':
         return 6
         break;
      case 'Thursday:
          return 5
          break;
      case 'Friday':
          return 9
          break;
       case 'Saturday':
           return 8
           break;
        case 'Sunday':
           return 9
           break;
         default :
           return "Error"
      };*/
   
      /* testing the function by calling it multiple times to ensure it works
      console.log(getSleepHours ('Mfonday'));
      console.log(getSleepHours ('Tuesday'));
      console.log(getSleepHours ('Wednesday'));
      console.log(getSleepHours ('Thursday'));
      console.log(getSleepHours ('Friday'));
      console.log(getSleepHours ('Saturday'));
      console.log(getSleepHours ('Sunday'));
      */
     const getActualSleepHours = () =>
         getSleepHours('Monday')
       + getSleepHours('Tuesday') 
       + getSleepHours('Wednesday') 
       + getSleepHours('Thursday') 
       + getSleepHours('Friday') 
       + getSleepHours('Saturday') 
       + getSleepHours('Sunday') ;
   
      const getIdealSleepHours =() =>{
         const idealHours = 8;
         /* multiply my idealHours by 7 to get my total hours i prefer per week*/
         return idealHours * 7
       };
   
      /* prints the sum of all the sleep hours in the week
   console.log(getActualSleepHours()); */
     /* if my idealHours is 8, should print 56
       console.log(getIdealSleepHours());*/
   
   /* To use literal numbers and the plus sign operator to rewrite getActualSleepHours()
   
   const getActualSleepHours = () => 8 + 7 + 6 + 5+ 9 + 8 + 9;
   then making idealHours a parameter to pass it an argument
   const getIdealSleepHours = idealHours => idealHours * 7
   so calling the function:
   const calculateSleepDebt = () =>{
     ...
     
     const idealSleepHours = getIdealSleepHours(8);
     ...
   };
   
   */
   
   const calculateSleepDebt =() => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
     if (actualSleepHours === idealSleepHours) {
       console.log('Great! You got the perfect amount of sleep');
   
    /* } else if (actualSleepHours > idealSleepHours){
       console.log('Get to work!, You got more sleep than needed this week');*/
     } else if (actualSleepHours > idealSleepHours){
       console.log("Get to work! You got" + " " (idealSleepHours - actualSleepHours) + " hours sleep than you should this week.");
     }
   
     /*} else if (actualSleepHours < idealSleepHours){
       console.log('Take a break! And get more sleep');*/
   
       else if (actualSleepHours < idealSleepHours){
         console.log('Take a break, you got ' +(idealSleepHours - actualSleepHours) + ' hours less sleep this week');
     } else {
       console.log('Check your code, something went wrong');
     }
   };
   
   calculateSleepDebt();