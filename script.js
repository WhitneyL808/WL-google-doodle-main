// Check JS is Connected
console.log('JS Connected');

// gsap.fromTo ("#witchqueen-logo",
//   {x: 0, y: 0, delay: 1, duration: 2,},
//   {x: 25, y: 60, delay: 1 , duration: 2,});

gsap.fromTo ( "#traveler-fill",
   {x: 0, y: 0, delay: 1, duration: 2,},
  {x: 170, y: -170, delay: 1 , duration: 2,}
           );

gsap.fromTo ( "#traveler-background",
  {x: 0, y: 0, delay: 1,duration: 2,},
  {x: 170, y: -170, delay: 1, duration: 2,}
           );

gsap.from ( "#traveler-fill",
   {opacity: 0, delay: 3,},
           );
            
gsap.from ( "#traveler-background",
  {opacity: 0, delay: 3,});

gsap.to ( "#traveler-background",
  {opacity: 100, delay: 10, y: -200,});

gsap.to ( "#traveler-fill",
  {opacity: 100, delay: 10, y: -200,});

gsap.fromTo ( "#savathun-head",
    {x: 200, y: -200, delay: 5, duration: 2, repeat: 1,},
    {x: 174, y: 170, delay: 5, duration: 2,});

gsap.fromTo("#eye1, #eye2, #eye3", 
    {x: 200, y: -200, ease:"elastic", delay: 4, duration: 4, repeat: 1,},
    {x: 174, y: 170, delay: 4, ease:"elastic", duration: 4,});
