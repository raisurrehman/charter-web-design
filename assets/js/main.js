(function () {
  var EMBEDDED_COURSES = {"live_courses":[{"id":226,"title":"Structural Design Using ETABS & SAFE","url":"https://charter-center.com/courses/details/226/structural-design-using-etabs-safe","type":"live-course","date":"Sep 20, 2026","time":"05:30 PM","image":"https://charter-center.com/storage/2955/jEKGt5mzVxuAa7tZOjeEqgvCgKJj3jHMU38yUueYWpsopqHAKpPwuh1xp2xm.png","instructor":"Rania Hussein Abdalla","avatar":"https://charter-center.com/admin-lte-3/img/avatar.png","level":"Professional","enrolled":661,"cert":true,"rating":0,"reviews":0},{"id":225,"title":"AutoDesk Civil 3D","url":"https://charter-center.com/courses/details/225/autodesk-civil-3d","type":"live-course","date":"Sep 26, 2026","time":"05:45 PM","image":"https://charter-center.com/storage/2958/FwfhpLbEcMqabx20akqkfH8oLDyF7fdHjqnd0JRN3vyd5iTJJQNvi5BpmZSH.png","instructor":"Mohamed Maged Hegazy","avatar":"https://charter-center.com/storage/2137/ZINgX0GgXTYdR0eAUkddtmzM4OK5A9XxU5qRl3KpjuJirjwthu50tJAZODop.jpg","level":"Professional","enrolled":520,"cert":true,"rating":0,"reviews":0},{"id":224,"title":"AI for Project Managers","url":"https://charter-center.com/courses/details/224/ai-for-project-managers","type":"live-course","date":"Sep 21, 2026","time":"04:15 PM","image":"https://charter-center.com/storage/2959/tjkNhLW5TinTNkkm6ZBJhYPaDWVjRgmUZySCO1vQyTxXTrXTMmTobniOrAAs.png","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":741,"cert":true,"rating":0,"reviews":0},{"id":218,"title":"Power BI for Project Controls","url":"https://charter-center.com/courses/details/218/power-bi-for-project-controls","type":"live-course","date":"Sep 28, 2026","time":"05:00 PM","image":"https://charter-center.com/storage/2957/KJut2ElatMnpV3S2j9diPjHBsAvzoVjNdDbQ8jcHeuiTUXK7aqufCTkI3X9J.png","instructor":"Eng. Mohamed Esmat","avatar":"https://charter-center.com/storage/1201/YPaFPmnVVednu8CFTwKzNIXgtL6fhDHFDZb9ipWZtOB8q0xicpgcT2UNVNz6.jpg","level":"Intermediate","enrolled":654,"cert":true,"rating":0,"reviews":0},{"id":217,"title":"Facilities Asset Management","url":"https://charter-center.com/courses/details/217/facilities-asset-management","type":"live-course","date":"Sep 26, 2026","time":"07:00 PM","image":"https://charter-center.com/storage/2749/p6oaDyFmB1fVM1ih4alZiB0bJl8Yg2yN0BwWEB2JmKoLq3PcLHCjTZOC78pj.jpg","instructor":"Amal Aljuhani","avatar":"https://charter-center.com/storage/2534/86TWWYal0M3tXd37iUyk8BQGAMWUetsBKdt53KAjFtljvpiISpSyhBNTxYQB.jpg","level":"Intermediate","enrolled":571,"cert":true,"rating":0,"reviews":0},{"id":216,"title":"CAFM & Asset Lifecycle Management","url":"https://charter-center.com/courses/details/216/cafm-asset-lifecycle-management","type":"live-course","date":"Sep 26, 2026","time":"06:00 PM","image":"https://charter-center.com/storage/2905/u7EqJN1P9gMkOc6E7tjdoBRDG5IejB85IhGUJv2xLbYjXZcmEdqsOQ1gaVsr.png","instructor":"Amal Aljuhani","avatar":"https://charter-center.com/storage/2534/86TWWYal0M3tXd37iUyk8BQGAMWUetsBKdt53KAjFtljvpiISpSyhBNTxYQB.jpg","level":"Intermediate","enrolled":745,"cert":true,"rating":0,"reviews":0},{"id":213,"title":"Contract Risk and Dispute Avoidance","url":"https://charter-center.com/courses/details/213/contract-risk-and-dispute-avoidance","type":"live-course","date":"Sep 28, 2026","time":"08:00 PM","image":"https://charter-center.com/storage/2906/3zpqbckqpcdNBIiWDxvTlG2OJtK183kLA3vNf7MsCgbqBm3vDjAUffhrQlw2.png","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":828,"cert":true,"rating":0,"reviews":0},{"id":208,"title":"Contractor HSE Management","url":"https://charter-center.com/courses/details/208/contractor-hse-management","type":"live-course","date":"Sep 23, 2026","time":"10:00 AM","image":"https://charter-center.com/storage/2907/y8b37ArEQTu1xe9GJCYrP8GmVI0UDb7rNkABXYd3sbRppJu39YE05L05dFzY.png","instructor":"Eman Elzarka","avatar":"https://charter-center.com/storage/223/tyoqdgMUTmjOFE2Zw1V7sn95qMiY1Y9JvHCgLkHBVsOdSgig96U8JDkeRAg4.jpg","level":"Professional","enrolled":615,"cert":true,"rating":0,"reviews":0}],"exams":[{"id":189,"title":"PMP Ultimate Mock Exam","url":"https://charter-center.com/courses/details/189/pmp-ultimate-mock-exam","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/2603/gdg2IuogZ3VCrzV7fHi9xBciOsS3AMt4Fig8Y7ZQAB0uLqGYNnPXziRXBp8g.png","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":868,"cert":false,"rating":5,"reviews":1},{"id":184,"title":"PMP Exam BOOTCAMP","url":"https://charter-center.com/courses/details/184/pmp-exam-bootcamp","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/2557/tWUjMjVreHTZa6djHXE9x7qBjgFfHf3vzTqoYFGHENyn3clMK20ZgNSscNWj.jpg","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":931,"cert":false,"rating":5,"reviews":1},{"id":164,"title":"First Aid Exam","url":"https://charter-center.com/courses/details/164/first-aid-exam","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/2462/S0eE9nJwKhIGWMCOteDbcVplSs0ebVzJvv5COVaBjiUN6KYkKJWULUkOqc3p.jpg","instructor":"Reham Ghanim","avatar":"https://charter-center.com/storage/199/57350EJ89R8mcnDgyyJQ9hBa6lfo0vpRHw10Dfr5fg5tY1yzuOaCr7XdkN4a.jpg","level":"Intermediate","enrolled":677,"cert":false,"rating":5,"reviews":3},{"id":163,"title":"LEED-GA Exams","url":"https://charter-center.com/courses/details/163/leed-ga-exams","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/2454/BDwoUiOcIMSm6I79NyggzL6cjxb1L1SjXdSb37aA2UMFfF5fN5FORZyb4h7B.jpg","instructor":"Mohamad Hachoui","avatar":"https://charter-center.com/storage/2081/fKvdaPB8dSKKi8h1fDSlk5HAbRTeYOwJlsmEg360NmbRglDde9iC7yGvnlAZ.jpg","level":"Professional","enrolled":718,"cert":true,"rating":0,"reviews":0},{"id":162,"title":"Accident investigation","url":"https://charter-center.com/courses/details/162/accident-investigation","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/2438/6ZEeWjlFCRkSC16ziIELKu8yb3EDqholiFRFEZX5j2PJpdwoWfQvMWIPiteE.jpg","instructor":"Saeed Alghamdi","avatar":"https://charter-center.com/storage/2440/Simple-Professional-LinkedIn-Profile-Picture-(1).png","level":"Professional","enrolled":860,"cert":true,"rating":5,"reviews":2},{"id":155,"title":"Ultimate PMI-CP  Exams Simulators 2026","url":"https://charter-center.com/courses/details/155/ultimate-pmi-cp-exams-simulators-2026","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/2170/kaqHMYvHAKxBldCzUzd2Qk4Vr2j67fBw3vLoBxFMDdZcV1gTdGum9O9InJwy.jpg","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":745,"cert":false,"rating":0,"reviews":0},{"id":128,"title":"Ultimate PfMP® Exam Simulator","url":"https://charter-center.com/courses/details/128/ultimate-pfmp-exam-simulator","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/1974/yenBOK0mgiY40maTqNz30d6eMccLwKPU6kvQ7zUerWtU6UhADTkb8ztCeYZL.png","instructor":"Eng. Elsadig Ahmed","avatar":"https://charter-center.com/storage/1219/7WzxRWgKPIIqjg0awWUN0LWDapCPgVpB7r3R4JXr7nkitJxt6zalnkP20V09.jpg","level":"Professional","enrolled":747,"cert":false,"rating":0,"reviews":0},{"id":121,"title":"Ultimate PMP® Exams Simulators","url":"https://charter-center.com/courses/details/121/ultimate-pmp-exams-simulators","type":"exam","date":null,"time":null,"image":"https://charter-center.com/storage/1670/JNwrFRHvAAobzbzwFHxhWUaYtPZuCc1F4FuPatPrXrjMt0VF968wg7dWieel.jpg","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":743,"cert":false,"rating":3,"reviews":2}],"recorded_courses":[{"id":228,"title":"AutoCAD Plumbing Design","url":"https://charter-center.com/courses/details/228/autocad-plumbing-design","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2966/pD9kK2246amnZ6cO1JoRiV9OcmRJo0Yc2YpuTY4KohBIgXS1FDDbDdNqvQws.png","instructor":"Montser Mohamed","avatar":"https://charter-center.com/storage/2965/WhatsApp-Image-2026-08-29-at-9.59.30-AM.jpeg","level":"Professional","enrolled":574,"cert":true,"rating":0,"reviews":0},{"id":191,"title":"Certified Associate in Project Management (CAPM®)","url":"https://charter-center.com/courses/details/191/certified-associate-in-project-management-capm","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2606/aTPknD8DqPd32Wwi2ejoHr7shPZdxmhnD4TZjSKk4tsW0qhFkAqq3mf7lFqU.png","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":646,"cert":true,"rating":0,"reviews":0},{"id":190,"title":"PMP®8 Ed -PMP Exam Prep with AI& Primavera P6","url":"https://charter-center.com/courses/details/190/pmp8-ed-pmp-exam-prep-with-ai-primavera-p6","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2604/ksmGxAINyTvQ1K4nafOJqzwEeeqSWoodM3EEqqNMAPD7oGKFCRtoRqXfB93h.jpg","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":599,"cert":true,"rating":5,"reviews":1},{"id":186,"title":"Construction Quality Control","url":"https://charter-center.com/courses/details/186/construction-quality-control","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2575/OPuRVxKyExQY1zheVU8usW6OIsG9VdwhE1WXlVaS9wSqG3SHHCccmNoglcsr.jpg","instructor":"Amal Aljuhani","avatar":"https://charter-center.com/storage/2534/86TWWYal0M3tXd37iUyk8BQGAMWUetsBKdt53KAjFtljvpiISpSyhBNTxYQB.jpg","level":"Professional","enrolled":506,"cert":false,"rating":4.3,"reviews":4},{"id":185,"title":"Safety supervisor skills","url":"https://charter-center.com/courses/details/185/safety-supervisor-skills","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2576/C1285VKVt3RE2pbltOqqG9C7w9AxqF0aS9LYXX2a5dvIOlub6hg6n54RmgPH.jpg","instructor":"Saeed Alghamdi","avatar":"https://charter-center.com/storage/2440/Simple-Professional-LinkedIn-Profile-Picture-(1).png","level":"Professional","enrolled":701,"cert":false,"rating":5,"reviews":1},{"id":183,"title":"PMP Exam BOOTCAMP","url":"https://charter-center.com/courses/details/183/pmp-exam-bootcamp","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2556/3gW22xejifIWcfQ1WUcknh7F4iFIYS2Igcv5zPZ4wpffX95SJiYD6HWlUaL8.jpg","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":750,"cert":false,"rating":5,"reviews":1},{"id":165,"title":"Certified Facility Manager (CFM)","url":"https://charter-center.com/courses/details/165/certified-facility-manager-cfm","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2547/QXWIqJz0uHjaLhkxydia1BU0ietN2r2bw9HIGBdsX2l0s6TLcg3G8SoB2xdv.jpg","instructor":"Eng. Husam Khader","avatar":"https://charter-center.com/storage/2533/1516933908735.jpg","level":"Professional","enrolled":757,"cert":false,"rating":0,"reviews":0},{"id":161,"title":"Planning, Reporting and Project Control","url":"https://charter-center.com/courses/details/161/planning-reporting-and-project-control","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2502/PcXsrB7iDgfrTavHPl3q5RphVAefn3N5JHdwc4htpcDLDq6pqosej3sogV3L.jpg","instructor":"Mohamed Maged Hegazy","avatar":"https://charter-center.com/storage/2137/ZINgX0GgXTYdR0eAUkddtmzM4OK5A9XxU5qRl3KpjuJirjwthu50tJAZODop.jpg","level":"Intermediate","enrolled":883,"cert":false,"rating":0,"reviews":0}],"new_charter":[{"id":228,"title":"AutoCAD Plumbing Design","url":"https://charter-center.com/courses/details/228/autocad-plumbing-design","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2966/pD9kK2246amnZ6cO1JoRiV9OcmRJo0Yc2YpuTY4KohBIgXS1FDDbDdNqvQws.png","instructor":"Montser Mohamed","avatar":"https://charter-center.com/storage/2965/WhatsApp-Image-2026-08-29-at-9.59.30-AM.jpeg","level":"Professional","enrolled":574,"cert":true,"rating":0,"reviews":0}],"most_explored":[{"id":228,"title":"AutoCAD Plumbing Design","url":"https://charter-center.com/courses/details/228/autocad-plumbing-design","type":"course","date":null,"time":null,"image":"https://charter-center.com/storage/2966/pD9kK2246amnZ6cO1JoRiV9OcmRJo0Yc2YpuTY4KohBIgXS1FDDbDdNqvQws.png","instructor":"Montser Mohamed","avatar":"https://charter-center.com/storage/2965/WhatsApp-Image-2026-08-29-at-9.59.30-AM.jpeg","level":"Professional","enrolled":574,"cert":true,"rating":0,"reviews":0},{"id":226,"title":"Structural Design Using ETABS & SAFE","url":"https://charter-center.com/courses/details/226/structural-design-using-etabs-safe","type":"live-course","date":"Sep 20, 2026","time":"05:30 PM","image":"https://charter-center.com/storage/2955/jEKGt5mzVxuAa7tZOjeEqgvCgKJj3jHMU38yUueYWpsopqHAKpPwuh1xp2xm.png","instructor":"Rania Hussein Abdalla","avatar":"https://charter-center.com/admin-lte-3/img/avatar.png","level":"Professional","enrolled":661,"cert":true,"rating":0,"reviews":0},{"id":225,"title":"AutoDesk Civil 3D","url":"https://charter-center.com/courses/details/225/autodesk-civil-3d","type":"live-course","date":"Sep 26, 2026","time":"05:45 PM","image":"https://charter-center.com/storage/2958/FwfhpLbEcMqabx20akqkfH8oLDyF7fdHjqnd0JRN3vyd5iTJJQNvi5BpmZSH.png","instructor":"Mohamed Maged Hegazy","avatar":"https://charter-center.com/storage/2137/ZINgX0GgXTYdR0eAUkddtmzM4OK5A9XxU5qRl3KpjuJirjwthu50tJAZODop.jpg","level":"Professional","enrolled":520,"cert":true,"rating":0,"reviews":0},{"id":224,"title":"AI for Project Managers","url":"https://charter-center.com/courses/details/224/ai-for-project-managers","type":"live-course","date":"Sep 21, 2026","time":"04:15 PM","image":"https://charter-center.com/storage/2959/tjkNhLW5TinTNkkm6ZBJhYPaDWVjRgmUZySCO1vQyTxXTrXTMmTobniOrAAs.png","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":741,"cert":true,"rating":0,"reviews":0},{"id":218,"title":"Power BI for Project Controls","url":"https://charter-center.com/courses/details/218/power-bi-for-project-controls","type":"live-course","date":"Sep 28, 2026","time":"05:00 PM","image":"https://charter-center.com/storage/2957/KJut2ElatMnpV3S2j9diPjHBsAvzoVjNdDbQ8jcHeuiTUXK7aqufCTkI3X9J.png","instructor":"Eng. Mohamed Esmat","avatar":"https://charter-center.com/storage/1201/YPaFPmnVVednu8CFTwKzNIXgtL6fhDHFDZb9ipWZtOB8q0xicpgcT2UNVNz6.jpg","level":"Intermediate","enrolled":654,"cert":true,"rating":0,"reviews":0},{"id":217,"title":"Facilities Asset Management","url":"https://charter-center.com/courses/details/217/facilities-asset-management","type":"live-course","date":"Sep 26, 2026","time":"07:00 PM","image":"https://charter-center.com/storage/2749/p6oaDyFmB1fVM1ih4alZiB0bJl8Yg2yN0BwWEB2JmKoLq3PcLHCjTZOC78pj.jpg","instructor":"Amal Aljuhani","avatar":"https://charter-center.com/storage/2534/86TWWYal0M3tXd37iUyk8BQGAMWUetsBKdt53KAjFtljvpiISpSyhBNTxYQB.jpg","level":"Intermediate","enrolled":571,"cert":true,"rating":0,"reviews":0},{"id":216,"title":"CAFM & Asset Lifecycle Management","url":"https://charter-center.com/courses/details/216/cafm-asset-lifecycle-management","type":"live-course","date":"Sep 26, 2026","time":"06:00 PM","image":"https://charter-center.com/storage/2905/u7EqJN1P9gMkOc6E7tjdoBRDG5IejB85IhGUJv2xLbYjXZcmEdqsOQ1gaVsr.png","instructor":"Amal Aljuhani","avatar":"https://charter-center.com/storage/2534/86TWWYal0M3tXd37iUyk8BQGAMWUetsBKdt53KAjFtljvpiISpSyhBNTxYQB.jpg","level":"Intermediate","enrolled":745,"cert":true,"rating":0,"reviews":0},{"id":213,"title":"Contract Risk and Dispute Avoidance","url":"https://charter-center.com/courses/details/213/contract-risk-and-dispute-avoidance","type":"live-course","date":"Sep 28, 2026","time":"08:00 PM","image":"https://charter-center.com/storage/2906/3zpqbckqpcdNBIiWDxvTlG2OJtK183kLA3vNf7MsCgbqBm3vDjAUffhrQlw2.png","instructor":"Eng. Abdalla Yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","level":"Professional","enrolled":828,"cert":true,"rating":0,"reviews":0}]};
  var TESTIMONIALS = [{"name":"Salah Saber Osman","role":"Customer","avatar":"https://charter-center.com/storage/1062/X3gCTJCJ1t5rDUgCMrkGuBu4fpmu2IcbKzzECRa2seVD62v1EzWIcmgW3txQ.jpg","quote":"Safety is not something to learn once and forget. It matters at home, on site, and in every workplace. As a civil engineer holding ISO 45001 Internal Auditor, OSHA Academy, and NEBOSH certifications, I know how much this knowledge matters in real work. Charter Center gave me exac…","rating":4},{"name":"Haiyder AlSaiegh","role":"Customer","avatar":"https://charter-center.com/storage/788/Hves8DBs0EtRqbqbaSfNtAaAw2lJRUP9ug04uhmt2pKXWjTcCuPQ1zXjL58F.jpg","quote":"I enrolled in the OSHA course at Garter Institute to enhance my occupational health and safety awareness. Honestly, the trainer demonstrated exceptional command of the course material and had excellent communication skills in delivering the content. I'd also like to commend the c…","rating":5},{"name":"Falaah Taif alshamri","role":"Customer","avatar":"https://charter-center.com/storage/787/sirRxroZn6bSfz5JFtNpRxSyOXIfZBjaBXsFCFkxZsK7f7pmPaEnbxSZKH0u.jpg","quote":"Honestly, this is an outstanding Training Center when it comes to the variety of courses offered, and the prices are very reasonable. What also sets you apart is your customer service—how quickly you respond to clients and provide thorough, helpful answers. More power to you all,…","rating":4},{"name":"Ahmed Mahmoud al-kahlout","role":"Customer","avatar":"https://charter-center.com/storage/786/ykq6Alw3vtU3Wv9PCVzqgaujbgRizHgDzuT53o2jTfgGxH5n4uo73AAvtveA.jpg","quote":"I’d love to share my experience with Charter Center for Training and Development Center. The training team is highly professional and truly masters the courses they deliver. The engineers go above and beyond—they pour their knowledge into you, support you, and explain concepts in…","rating":5},{"name":"Muaz Almarwani","role":"Customer","avatar":"https://charter-center.com/storage/785/vBr5GSIqE91tJBKxuuhgJBDwD7e7HYmnj5o5eycHfJJkTfhFxyKXWsav7YiT.jpg","quote":"First, I’d love to thank Charter Center for educating us and, by God’s grace, helping us achieve our goals. The ease of working with them truly lifted a burden off our shoulders—it wasn’t just about exam prep. They gave us more than knowledge; they opened our eyes to workplace in…","rating":4},{"name":"Eng.Mohannad Al-zahrani","role":"Customer","avatar":"https://charter-center.com/storage/643/NZzEkSoBjzdForPz6ubhdXjaU5dCvTRLaC785T5V0x842uKz1fW9w6fw1bBD.jpg","quote":"My journey with charter Center began in January with the IOSH course, led by Engineer Riham, who encouraged me to pursue other professional certifications. After that, I took the NEBOSH course with Engineer Omar, which was a fantastic experience, and then continued with the ISO t…","rating":5},{"name":"Eng.Saud albishi","role":"Customer","avatar":"https://charter-center.com/storage/642/lxqMw33gMuKQwfDvRnEpIjYnH8gM1jMarhFNZol8DV5r1YWXnBPRSVruv0am.jpg","quote":"Aslam o alaikam, I’m Engineer Saud, Operations Manager from Riyadh. I completed the NEBOSH and ISO 45001 courses with Garter Center, and by God’s grace, I passed them on the first attempt. The center provides professional services, from trainers to resources and support during an…","rating":4},{"name":"Omran Mohammed","role":"Customer","avatar":"https://charter-center.com/storage/180/Oknk6FuWYQnlp7SxszHZDAbIFe2rm6CVIwPKcTmZd4tdTqCBvWUQwmC8oMBG.jpg","quote":"\"God bless you for this wonderful course. We truly benefited a lot. The materials were very engaging, and the course itself was genuinely enjoyable. It wasn’t difficult at all like I had initially expected—it just required focus, study, and understanding more than memorization. O…","rating":4},{"name":"Ayman Yahya","role":"Customer","avatar":"https://charter-center.com/storage/179/N90yc1EQLaFOPOjzlIWL9m403vBapKfYNuoph3o2Hi7WlJFd4zyNn9cJwJRa.jpg","quote":"\"All thanks, after gratitude to Allah Almighty, go to the Charter Training Center for delivering training courses with excellence. My sincere appreciation also goes to all the supervisors for their outstanding service and quick responses to all inquiries, as well as to the entire…","rating":4},{"name":"Qutaiba Al-azawy","role":"Customer","avatar":"https://charter-center.com/storage/178/rQsQ2XXyoRRezUvsNpGamLfHBMFz0mDZzudlzOBaSn7V8CSy7isYJnumXZAL.jpg","quote":"\"I am Engineer Qutaiba Al-Azzawi from Iraq. I hold a Master’s degree in Project Management Engineering and am currently pursuing a PhD at UUM (University Utara Malaysia). Honestly, I’ve had the pleasure of experiencing the Charter Institute for Training and Development. I took bo…","rating":5},{"name":"ELSAYED","role":"Customer","avatar":"https://charter-center.com/storage/176/oA0L5Atf1ro7R0rNHycZobKxzEtTTcX5CAMLInuFSeWwMxReWDnQtXgTfE30.jpg","quote":"\"I would like to extend my sincere thanks to all the staff at the Charter Center, which specializes in occupational health and safety training, for the valuable scientific courses they offer through engineers specialized in this field. A special thanks goes to Engineer Riham for …","rating":5},{"name":"Al-Afifi Ahmed Al-afifi","role":"Customer","avatar":"https://charter-center.com/storage/126/g8UZctHssanmpwcAEfn7VSJMm2U7Y8Q3u551DPXBDYVp2vlb29y1yqrdotJJ.jpg","quote":"\"I had heard a great deal about the Charter Training Center—and as expected, by the grace of God, I joined and earned my OSHA certificate with them, and now I’m pursuing the IOSH certification. I also aspire to continue taking more safety courses, God willing. From my experience …","rating":4},{"name":"Aidaa Al-rewely","role":"Customer","avatar":"https://charter-center.com/storage/124/xwthMyHceA8o9U9eUvy65uR8Q15KkE0SofBxMCvdVy5EWFvvxznuSpzBdVEw.jpg","quote":"\"First of all, I would like to sincerely thank Engineer Riham. She truly gave her all and didn’t fall short in any way. Her explanations were excellent, and every session we attended with her was genuinely enjoyable. The trainees were also amazing—coming from different cities, an…","rating":5},{"name":"Eng.Hassan El-moumen","role":"Customer","avatar":"https://charter-center.com/storage/123/oB8aQPlBld5CsjD9Iyu9xzpClvP3221ktYRUT1SlzCuTWXZrZHMJ411RjI5K.jpg","quote":"\"Peace and blessings be upon you. I am Engineer Hassan Al-Moamen. All praise and thanks be to God, this is the second time I’ve taken a course at the Charter Training and Development Center. They offer highly accredited international certifications, and by the grace of God, this …","rating":4},{"name":"Ibrahim Hagi","role":"Customer","avatar":"https://charter-center.com/storage/90/7DVlVxy13WkHmQPXtdP1DJ1JEXPflW6qRSZudBaf7pspbvRZDcgt360pdEJU.jpg","quote":"\"I am Senior Architect Ibrahim Haqqi Qusayban. Thanks to God first, and then to the Charter Institute, I was able to complete this course under the guidance of the expert Engineer Ezz Al-Din, who truly went above and beyond during the sessions. The course was simple, highly inter…","rating":4},{"name":"Hani Al-Ahdl","role":"Customer","avatar":"https://charter-center.com/storage/87/acZtFQK5VBiB3lGdIxsyOBAXO3MRUv76ATEf58YV67a6kV5krR9dvbwfOzIH.jpg","quote":"\"Peace be upon you. Honestly, the BIM Diploma was a very good course. It added a lot to my knowledge regarding Revit and the BIM system overall.\" — Eng. Hani Al-Ahdal","rating":4},{"name":"Mohammed El-Amin","role":"Customer","avatar":"https://charter-center.com/storage/86/i44AdPvT5oBpEy21OkjKy36F8YCq5ojvvu9FPQgsYG1qMNs5hZVIWwNxeVBI.jpg","quote":"\"To begin, allow me to introduce myself. I am Engineer Mohammed Al-Amin, holding a Bachelor's degree in Civil Engineering. I currently work at Euro Engineering Consultancy under the Taif Municipality. I am a member of the Saudi Quality Council, the Saudi Standards, Metrology and …","rating":5},{"name":"Mishari Al-Yami","role":"Customer","avatar":"https://charter-center.com/storage/85/16HY43AvarTs7SajtOllshKULDLPJi7b4LsarUkiv6c1ouf5Sy6ErqAHLX8T.jpg","quote":"First of all, may God bless you abundantly for this wonderful course—we truly gained so much from it. I would also like to sincerely thank our esteemed engineer, Mr. Salim Badawi, as well as the Charter Training Center for this excellent course, which has greatly enriched our wor…","rating":5},{"name":"Nazeer Al-hassni","role":"Customer","avatar":"https://charter-center.com/storage/84/93mILqIWNR1UmNuPzVM9biRupnxTl5qCHv5sF14vQvbuWMZmaycxA7S4XiDq.jpg","quote":"\"I am Engineer Nadhir Al-Hassani, an architectural engineer and the Head of the Design Department at a real estate company. Honestly, we took the course at the Charter Institute for Training and Development, and it was an excellent course. The content was very impressive—comprehe…","rating":4},{"name":"Eng.Sauud Ali Al-Shahrani","role":"Customer","avatar":"https://charter-center.com/storage/53/azaeqCyte5CEg7OogK7QDMpZIDwB7iK5cRWUoARPic2tBszL73RZ2mJbmCD4.png","quote":"First and foremost, with complete honesty, I thank God that I had the opportunity to deal with a training center like Charter Center. This was my first experience joining your OSHA Group 68 course, and at the beginning, I was somewhat hesitant—allow me to be completely honest abo…","rating":5}];
  var INSTRUCTORS = [{"url":"https://charter-center.com/instructor/profile/4/eng-abdalla-yousif","avatar":"https://charter-center.com/storage/201/PRCJ1BDQBcWWbg1SaKpuWd6LQsjvOTRzei0T2Tmai3OmGkituJRDWaoPJbSV.jpg","name":"ENG. ABDALLA YOUSIF","title":"Projects Manager (PMP®) | Planning and Controls E..."},{"url":"https://charter-center.com/instructor/profile/5/reham-ghanim","avatar":"https://charter-center.com/storage/199/57350EJ89R8mcnDgyyJQ9hBa6lfo0vpRHw10Dfr5fg5tY1yzuOaCr7XdkN4a.jpg","name":"REHAM GHANIM","title":"Civil engineer, MSc in building technology Hse ma..."},{"url":"https://charter-center.com/instructor/profile/6/eng-rafiq-salam-salam","avatar":"https://charter-center.com/storage/203/341JvKXOPD3gChrAa2aMcfI0RgChj34NfeAtl9uofaEdv9QYRbr9G5t9Fseu.jpg","name":"ENG. RAFIQ SALAM SALAM","title":"● Bachelor degree in Chemistry and Geology. ●..."},{"url":"https://charter-center.com/instructor/profile/8/eng-selim-badwy","avatar":"https://charter-center.com/storage/213/cJX6RBoj0W8uxFtC0LNtMgrrY0FBU4oiPHqnO0LoCDibeVqaCjLqXkGUTs1a.jpg","name":"ENG. SELIM BADWY","title":"BIM Manager │ (ACP) Autodesk Certified Professio..."},{"url":"https://charter-center.com/instructor/profile/9/eng-khalid-abdallah","avatar":"https://charter-center.com/storage/216/snzqobS5Oeq6vk66jHiT2w4sMs6Zw3DruGFvn75QvjjAaXwuGnohO8Ob4NE3.jpg","name":"ENG. KHALID ABDALLAH","title":"Certified Risk Professional (CRA® ); from G31000 ..."},{"url":"https://charter-center.com/instructor/profile/10/ahmed-al-muslimi","avatar":"https://charter-center.com/storage/221/UY6kKctwrw9lbPhul6OerbnB7kzICKLUeKYyfQE8g6JyRauDwGKWMAswwjaE.jpg","name":"AHMED AL-MUSLIMI","title":"Holds a masters degree in management (MSc, MIS) H..."},{"url":"https://charter-center.com/instructor/profile/11/eman-elzarka","avatar":"https://charter-center.com/storage/223/tyoqdgMUTmjOFE2Zw1V7sn95qMiY1Y9JvHCgLkHBVsOdSgig96U8JDkeRAg4.jpg","name":"EMAN ELZARKA","title":"HSE Consultation | Risk Assessment | Safety Traini..."},{"url":"https://charter-center.com/instructor/profile/23/eng-sultan-aljohani","avatar":"https://charter-center.com/storage/572/jhRPn8NaSbSwakqta7M0HG61eCef86E4jX1fBTjvAmOjrUwozbIKrhdBmwlO.jpg","name":"ENG. SULTAN ALJOHANI","title":"Eng. Sultan Aljohani Fire Protection Engineer ..."},{"url":"https://charter-center.com/instructor/profile/24/eng-elsadig-ahmed","avatar":"https://charter-center.com/storage/1219/7WzxRWgKPIIqjg0awWUN0LWDapCPgVpB7r3R4JXr7nkitJxt6zalnkP20V09.jpg","name":"ENG. ELSADIG AHMED","title":"Accomplished Portfolio and Program Management Prof..."},{"url":"https://charter-center.com/instructor/profile/39/eng-ayed-al-quraishi","avatar":"https://charter-center.com/storage/605/W4N5jAHxXckjEFsk9YgJozhropt5bweEhjQe8tbkQm5yqCdwsQ8eit0lQ3Xi.jpg","name":"ENG. AYED AL-QURAISHI","title":"Civil Engineer with more than 10 years of experien..."},{"url":"https://charter-center.com/instructor/profile/40/salah-farhan","avatar":"https://charter-center.com/storage/2607/arabic_chemical_engineering_instructor_profile_under_2MB.jpg","name":"SALAH FARHAN","title":"انا مهندس كيميائي عملت مرا�..."},{"url":"https://charter-center.com/instructor/profile/49/eng-mosab-alghanmi","avatar":"https://charter-center.com/storage/705/0BFPr4SFUtyF54ZRxzAZuRtcLdTJHGQYtRw62ofNGoKYtCuW9hSgfT8jCe56.jpg","name":"ENG. MOSAB ALGHANMI","title":"Ministry of Finance – Project Management Office ..."},{"url":"https://charter-center.com/instructor/profile/55/dr-sherif-elsherbini","avatar":"https://charter-center.com/storage/1982/SCKkOjSjtE9b17aBL1EJtonjenlrZLMyF7cmrGgfvmitoS6DM4up8eYwsqGR.jpg","name":"DR. SHERIF ELSHERBINI","title":"Grade: Doctor degree Activities and societies: ..."},{"url":"https://charter-center.com/instructor/profile/56/dr-hatim-sidahmed","avatar":"https://charter-center.com/storage/1267/eRK9VAV6IQkhE8VcnTrIZOgkfTEYzbgDEQcopw90PsI1Iye8pJXsGpLUpKSu.jpg","name":"DR. HATIM SIDAHMED","title":"I am a consultant specializing in preventive medic..."},{"url":"https://charter-center.com/instructor/profile/82/engsamer-al-naser","avatar":"https://charter-center.com/storage/910/ZhWxdiQaN8jOB8KfkDSv054DCn7fttcWwmu80rSHO1lC8MLROvBpird9LcXL.jpg","name":"ENG.SAMER AL-NASER","title":"Eng. Samer Al-Naser Certified PMP® (PMI-USA, 202..."},{"url":"https://charter-center.com/instructor/profile/89/mohamed-sayed-alashhab","avatar":"https://charter-center.com/storage/2632/Charter_Center_Profile_Optimized_Under_1MB.jpg","name":"MOHAMED SAYED ALASHHAB","title":"I am a professor of Industrial and mechanical engi..."},{"url":"https://charter-center.com/instructor/profile/94/eng-ahmed-morsy","avatar":"https://charter-center.com/storage/929/kgCJj8VfSLMDx96Cw4XAPVOpMZGzDdhTff36WzSv4okg9TaBgfcdTShbzJaE.jpg","name":"ENG. AHMED MORSY","title":"Ahmed Morsy has more than 20 years of experience w..."},{"url":"https://charter-center.com/instructor/profile/109/mohammed-alghazal","avatar":"https://charter-center.com/storage/1205/eo0PFy6468nQUFGUU7pgRZDHW06CwLBq1dKI1PrbLh0LnC3qoPomwsBEc4O9.jpg","name":"MOHAMMED ALGHAZAL","title":"University faculty member with over 15 years of pr..."},{"url":"https://charter-center.com/instructor/profile/110/ayman-hamad","avatar":"https://charter-center.com/storage/1177/0qHAvecBV0LB7395zlfCa0OkvlU5WA7YhL9pvvWr34EULPrClEaApgoD3qTB.jpg","name":"AYMAN HAMAD","title":"Mr Ayman Hamad is a leader with over two decades o..."},{"url":"https://charter-center.com/instructor/profile/112/eng-yasser-abdelaleem","avatar":"https://charter-center.com/storage/1204/ypDlcxEIuFudJ4KjzzVWECW7aRoNteBUi0IFr1DppYxw5Ep3O33MlP9aiSUq.jpg","name":"ENG. YASSER ABDELALEEM","title":"Senior Risk manager _ NAGA ARCH. Senior Project Ma..."},{"url":"https://charter-center.com/instructor/profile/115/eng-rami-esmail","avatar":"https://charter-center.com/storage/1202/g6ng71mV9QysJ0rPOilv50iWj51kWKNEFVNfLDCawZd8xE3lAhfCUmAfvtxH.jpg","name":"ENG. RAMI ESMAIL","title":"With 14+ years of diverse engineering experience, ..."},{"url":"https://charter-center.com/instructor/profile/117/eng-nehal-hagras","avatar":"https://charter-center.com/storage/1206/hKKiBqxwdjiK45BxbZ4vfIZbax1vKsCOOMM853vRR1at4jgPGICpDNJNT3E7.png","name":"ENG. NEHAL HAGRAS","title":"Matrouh Water and Wastewater Company's Technical O..."},{"url":"https://charter-center.com/instructor/profile/118/eng-mohamed-esmat","avatar":"https://charter-center.com/storage/1201/YPaFPmnVVednu8CFTwKzNIXgtL6fhDHFDZb9ipWZtOB8q0xicpgcT2UNVNz6.jpg","name":"ENG. MOHAMED ESMAT","title":"With over 22 years of professional experience in p..."},{"url":"https://charter-center.com/instructor/profile/120/eng-mohamed-abdelsatar","avatar":"https://charter-center.com/storage/2093/63855932.jpg","name":"ENG. MOHAMED ABDELSATAR","title":"I have over 18 years of professional experience in..."},{"url":"https://charter-center.com/instructor/profile/121/eng-ibrahim-ismail-hablas","avatar":"https://charter-center.com/storage/2026/6VX2IKZzCVI1EyriL5jlc7hCTQTmj2BkOwWvWIs8gMD1uVnKqb3kVbhQxPUc.jpg","name":"ENG. IBRAHIM ISMAIL HABLAS","title":"Quantity Surveying | Invoicing | PMP | CCP | RMP |..."},{"url":"https://charter-center.com/instructor/profile/122/ahmed-abdel-latif-ahmed-saleh","avatar":"https://charter-center.com/admin-lte-3/img/avatar.png","name":"AHMED ABDEL LATIF AHMED SALEH","title":"Over 38 years of experience in fields of Engineeri..."},{"url":"https://charter-center.com/instructor/profile/123/mohamad-hachoui","avatar":"https://charter-center.com/storage/2081/fKvdaPB8dSKKi8h1fDSlk5HAbRTeYOwJlsmEg360NmbRglDde9iC7yGvnlAZ.jpg","name":"MOHAMAD HACHOUI","title":"Architect and project manager with extensive exper..."},{"url":"https://charter-center.com/instructor/profile/124/mohamed-maged-hegazy","avatar":"https://charter-center.com/storage/2137/ZINgX0GgXTYdR0eAUkddtmzM4OK5A9XxU5qRl3KpjuJirjwthu50tJAZODop.jpg","name":"MOHAMED MAGED HEGAZY","title":"Construction Management • Team Leadership • Pr..."},{"url":"https://charter-center.com/instructor/profile/125/rania-hussein-abdalla","avatar":"https://charter-center.com/admin-lte-3/img/avatar.png","name":"RANIA HUSSEIN ABDALLA","title":"I am a civil / Structural engineer with 9 years of..."},{"url":"https://charter-center.com/instructor/profile/126/saeed-alghamdi","avatar":"https://charter-center.com/storage/2440/Simple-Professional-LinkedIn-Profile-Picture-(1).png","name":"SAEED ALGHAMDI","title":""},{"url":"https://charter-center.com/instructor/profile/127/eng-husam-khader","avatar":"https://charter-center.com/storage/2533/1516933908735.jpg","name":"ENG. HUSAM KHADER","title":""},{"url":"https://charter-center.com/instructor/profile/128/amal-aljuhani","avatar":"https://charter-center.com/storage/2534/86TWWYal0M3tXd37iUyk8BQGAMWUetsBKdt53KAjFtljvpiISpSyhBNTxYQB.jpg","name":"AMAL ALJUHANI","title":"Facility & Operations Management professional with..."},{"url":"https://charter-center.com/instructor/profile/129/montser-mohamed","avatar":"https://charter-center.com/storage/2965/WhatsApp-Image-2026-08-29-at-9.59.30-AM.jpeg","name":"MONTSER MOHAMED","title":"MEP Design Engineer | MEP Trainer | HVAC Design | ..."}];
  var CATEGORIES = [{"id":4,"name":"BIM","slug":"bim","icon":"https://charter-center.com/storage/527/epgVkKMzr0QnHuKJDHhaLL5KB2q9vCtuyMeoUpE6XdLFXcQEqf9feJ8Y1cQ7.png","url":"https://charter-center.com/courses/4/bim","subcategories":[{"id":43,"name":"BIM 4D & 5D (Time & Cost)"},{"id":27,"name":"BIM Architecture"},{"id":45,"name":"BIM for Facilities Management (6D/7D)"},{"id":44,"name":"BIM Management & Standards"},{"id":23,"name":"BIM MEP"},{"id":22,"name":"BIM Structure"}]},{"id":3,"name":"Engineering","slug":"engineering","icon":"https://charter-center.com/storage/128/Gg77RRto5omR5Zq54QqXtRWMoEdH7xxglaRvp9QafEOmr3m1aog3lg8Zpg07.svg","url":"https://charter-center.com/courses/3/engineering","subcategories":[{"id":19,"name":"Architectural Engineering"},{"id":40,"name":"Chemical Engineering"},{"id":14,"name":"Civil Engineering"},{"id":20,"name":"Electrical Engineering"},{"id":21,"name":"Mechanical Engineering"},{"id":42,"name":"Petroleum &amp; Gas Economics"}]},{"id":2,"name":"HSE","slug":"hse","icon":"https://charter-center.com/storage/77/1V4t2JxITE7c1sT2pjYFa5nPcvlB41wHCnvKgZrAeo6647tmdfDNbetxV7Qb.svg","url":"https://charter-center.com/courses/2/hse","subcategories":[{"id":38,"name":"Fire Safety & NFPA Standards"},{"id":3,"name":"IOSH"},{"id":6,"name":"ISO (45001 and HSE-related Standards)"},{"id":2,"name":"OSHA"},{"id":29,"name":"Risk Assessment (Safety & HSE Risks)"}]},{"id":1,"name":"Management","slug":"management","icon":"https://charter-center.com/storage/235/uARKNjh1iWfz9ksgU0e3H5KpT2TpfcubjW1FllDT1ac1mkUMJCV7a3fEWiTy.png","url":"https://charter-center.com/courses/1/management","subcategories":[{"id":35,"name":"Contract Management"},{"id":46,"name":"Facility Management"},{"id":37,"name":"KPIs & Dashboards"},{"id":31,"name":"Planning & Scheduling"},{"id":1,"name":"Project Management"},{"id":33,"name":"Quality Management"},{"id":30,"name":"Risk Management"},{"id":4,"name":"Risk Management (Project &amp; Business Risks)"}]}];


  function refreshIcons() {
    if (window.lucide && lucide.createIcons) {
      lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
    }
  }

  /* Categories section — dynamic */
  function renderCategories() {
    var grid = document.getElementById("catGrid");
    if (!grid) return;
    var list = CATEGORIES || [];
    if (!list.length) {
      grid.innerHTML = '<div class="course-empty">No categories available.</div>';
      return;
    }
    grid.innerHTML = list.map(function (c) {
      var subCount = (c.subcategories && c.subcategories.length) ? c.subcategories.length : 0;
      var blurb = subCount
        ? (subCount + " subcategor" + (subCount === 1 ? "y" : "ies"))
        : "Explore pathways";
      return (
        '<a class="cat-card" href="' + escapeHtml(c.url) + '" target="_blank" rel="noopener">' +
          "<div>" +
            '<img src="' + escapeHtml(c.icon || "") + '" alt="" loading="lazy" />' +
            "<h3>" + escapeHtml(c.name) + "</h3>" +
            "<span>" + escapeHtml(blurb) + "</span>" +
            '<span class="cat-meta"><i data-lucide="arrow-up-right"></i> View courses</span>' +
          "</div>" +
        "</a>"
      );
    }).join("");
    refreshIcons();
  }
  renderCategories();

  /* Testimonials + Instructors sliders */
  function starsHtml(n) {
    var full = Math.max(0, Math.min(5, Number(n) || 5));
    return '<div class="stars">' + "★".repeat(full) + "☆".repeat(5 - full) + "</div>";
  }
  function renderTestimonials() {
    var track = document.getElementById("quoteTrack");
    if (!track) return;
    track.innerHTML = (TESTIMONIALS || []).map(function (t) {
      return '<article class="quote-card">' +
        starsHtml(t.rating) +
        "<p>" + escapeHtml(t.quote) + "</p>" +
        '<div class="quote-person"><img src="' + escapeHtml(t.avatar) + '" alt="" loading="lazy" />' +
        "<div><strong>" + escapeHtml(t.name) + "</strong><span>" + escapeHtml(t.role || "Customer") + "</span></div></div>" +
        "</article>";
    }).join("");
  }
  function renderInstructors() {
    var track = document.getElementById("instructorTrack");
    if (!track) return;
    track.innerHTML = (INSTRUCTORS || []).map(function (p) {
      return '<a class="instructor-card" href="' + escapeHtml(p.url || "https://charter-center.com/") + '" target="_blank" rel="noopener">' +
        '<img src="' + escapeHtml(p.avatar) + '" alt="" loading="lazy" />' +
        '<div class="info"><h3>' + escapeHtml(p.name) + "</h3><p>" + escapeHtml(p.title || "") + "</p></div></a>";
    }).join("");
  }
  function setupSlider(trackId, prevId, nextId) {
    var track = document.getElementById(trackId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if (!track) return;
    function step() {
      var card = track.querySelector(":scope > *");
      return card ? card.getBoundingClientRect().width + 16 : 320;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
  }
  renderTestimonials();
  renderInstructors();
  setupSlider("quoteTrack", "quotePrev", "quoteNext");
  setupSlider("instructorTrack", "instPrev", "instNext");
  refreshIcons();

  /* Mobile nav */
  var menuBtn = document.getElementById("menuBtn");
  var mobileNav = document.getElementById("mobileNav");
  var mobileBackdrop = document.getElementById("mobileNavBackdrop");
  var mobileClose = document.getElementById("mobileClose");

  function setMobileNav(open) {
    if (!mobileNav) return;
    if (open) {
      mobileNav.classList.add("open");
      if (mobileBackdrop) mobileBackdrop.classList.add("open");
      document.body.classList.add("nav-open");
    } else {
      mobileNav.classList.remove("open");
      if (mobileBackdrop) mobileBackdrop.classList.remove("open");
      document.body.classList.remove("nav-open");
    }
    mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
    if (mobileBackdrop) mobileBackdrop.setAttribute("aria-hidden", open ? "false" : "true");
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Menu");
      menuBtn.innerHTML = open
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
    }
    refreshIcons();
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      setMobileNav(!mobileNav.classList.contains("open"));
    });
    if (mobileClose) mobileClose.addEventListener("click", function () { setMobileNav(false); });
    if (mobileBackdrop) mobileBackdrop.addEventListener("click", function () { setMobileNav(false); });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMobileNav(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMobileNav(false);
    });
  }

  /* Course search (mobile sidebar + desktop nav) */
  var mobileSearchInput = document.getElementById("mobileSidebarSearch");
  var mobileSearchPanel = document.getElementById("mobileSearchPanel");
  var mobileSearchList = document.getElementById("mobileSearchList");
  var mobileSearchStatus = document.getElementById("mobileSearchStatus");
  var mobileSearchEmpty = document.getElementById("mobileSearchEmpty");
  var mobileSearchTimer;

  var navSearchInput = document.getElementById("navSearchInput");
  var navSearchPanel = document.getElementById("navSearchPanel");
  var navSearchList = document.getElementById("navSearchList");
  var navSearchStatus = document.getElementById("navSearchStatus");
  var navSearchEmpty = document.getElementById("navSearchEmpty");
  var navSearchWrap = document.getElementById("navSearch");
  var navSearchTimer;

  function slugifyTitle(title) {
    return String(title || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function flattenEmbeddedCourses() {
    var seen = {};
    var out = [];
    Object.keys(EMBEDDED_COURSES || {}).forEach(function (key) {
      (EMBEDDED_COURSES[key] || []).forEach(function (c) {
        if (!c || !c.id || seen[c.id]) return;
        seen[c.id] = true;
        out.push(c);
      });
    });
    return out;
  }

  function renderCourseSearchResults(listEl, courses) {
    if (!listEl) return;
    listEl.innerHTML = courses.map(function (course) {
      var title = course.title || "Course";
      var url = course.url || ("https://charter-center.com/courses/details/" + course.id + "/" + slugifyTitle(title));
      var img = course.featured_image_url || course.image || "";
      var overview = course.overview || course.instructor || "";
      return (
        '<a class="mobile-search-item" href="' + escapeHtml(url) + '" target="_blank" rel="noopener">' +
          '<img src="' + escapeHtml(img) + '" alt="" loading="lazy" />' +
          "<div><strong>" + escapeHtml(title) + "</strong>" +
          (overview ? "<span>" + escapeHtml(String(overview).slice(0, 72)) + "</span>" : "") +
          "</div></a>"
      );
    }).join("");
    refreshIcons();
  }

  function setCourseSearchState(els, state) {
    if (!els.panel) return;
    var open = state !== "idle";
    els.panel.hidden = !open;
    if (els.status) els.status.hidden = state !== "loading";
    if (els.empty) els.empty.hidden = state !== "empty";
    if (els.list) els.list.hidden = state !== "results";
  }

  function searchCoursesLocal(query) {
    var q = query.toLowerCase();
    return flattenEmbeddedCourses().filter(function (c) {
      return (c.title || "").toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);
  }

  function runCourseSearch(query, els) {
    if (!els.panel) return;
    var trimmed = query.trim();
    if (trimmed.length < 2) {
      setCourseSearchState(els, "idle");
      if (els.list) els.list.innerHTML = "";
      return;
    }
    setCourseSearchState(els, "loading");
    fetch("https://charter-center.com/search/courses?search=" + encodeURIComponent(trimmed))
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (data) {
        var courses = Array.isArray(data) ? data : [];
        if (!courses.length) courses = searchCoursesLocal(trimmed);
        if (!courses.length) {
          setCourseSearchState(els, "empty");
          if (els.list) els.list.innerHTML = "";
          return;
        }
        renderCourseSearchResults(els.list, courses.slice(0, 8));
        setCourseSearchState(els, "results");
      })
      .catch(function () {
        var local = searchCoursesLocal(trimmed);
        if (!local.length) {
          setCourseSearchState(els, "empty");
          if (els.list) els.list.innerHTML = "";
          return;
        }
        renderCourseSearchResults(els.list, local);
        setCourseSearchState(els, "results");
      });
  }

  function resetCourseSearch(els, input) {
    if (input) input.value = "";
    if (els.list) els.list.innerHTML = "";
    setCourseSearchState(els, "idle");
  }

  var mobileSearchEls = {
    panel: mobileSearchPanel,
    list: mobileSearchList,
    status: mobileSearchStatus,
    empty: mobileSearchEmpty
  };
  var navSearchEls = {
    panel: navSearchPanel,
    list: navSearchList,
    status: navSearchStatus,
    empty: navSearchEmpty
  };

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", function () {
      clearTimeout(mobileSearchTimer);
      var q = mobileSearchInput.value;
      mobileSearchTimer = setTimeout(function () { runCourseSearch(q, mobileSearchEls); }, 280);
    });
    mobileSearchInput.addEventListener("focus", function () {
      if (mobileSearchInput.value.trim().length >= 2) runCourseSearch(mobileSearchInput.value, mobileSearchEls);
    });
  }

  if (navSearchInput) {
    navSearchInput.addEventListener("input", function () {
      clearTimeout(navSearchTimer);
      var q = navSearchInput.value;
      navSearchTimer = setTimeout(function () { runCourseSearch(q, navSearchEls); }, 280);
    });
    navSearchInput.addEventListener("focus", function () {
      if (navSearchInput.value.trim().length >= 2) runCourseSearch(navSearchInput.value, navSearchEls);
    });
    document.addEventListener("click", function (e) {
      if (!navSearchWrap || !navSearchPanel || navSearchPanel.hidden) return;
      if (!navSearchWrap.contains(e.target)) setCourseSearchState(navSearchEls, "idle");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navSearchPanel && !navSearchPanel.hidden) {
        setCourseSearchState(navSearchEls, "idle");
        navSearchInput.blur();
      }
    });
  }

  if (typeof setMobileNav === "function") {
    var _setMobileNav = setMobileNav;
    setMobileNav = function (open) {
      _setMobileNav(open);
      if (!open) resetCourseSearch(mobileSearchEls, mobileSearchInput);
    };
  }


  /* Navbar style after hero — restore light style on footer */
  var siteHeader = document.querySelector(".site-header");
  var heroEl = document.getElementById("hero");
  var footerEl = document.querySelector(".footer");
  function updateNavScroll() {
    if (!siteHeader || !heroEl) return;
    var pastHero = window.scrollY >= heroEl.offsetTop + heroEl.offsetHeight - 80;
    var atFooter = false;
    if (footerEl) {
      var footerTop = footerEl.getBoundingClientRect().top;
      atFooter = footerTop <= 110;
    }
    siteHeader.classList.toggle("is-scrolled", pastHero && !atFooter);
  }
  updateNavScroll();
  window.addEventListener("scroll", updateNavScroll, { passive: true });
  window.addEventListener("resize", updateNavScroll);
  /* Hero */
  var heroSlides = [
    { img: "https://charter-center.com/storage/796/FLNCgW8GY8i4hsCEeEVQ9p7CI45INyw93sDDjHp3KTxLAsQTIVno79dUzeYP.png", title: "Prepare for the Certification You Need", lead: "Clear lessons, practice questions, and instructor support before your exam date." },
    { img: "https://charter-center.com/storage/795/aF27ersu9WtuS1fIOEe0gmAae7SfplehSP18ZUvvX2b3TS2YUV0emdYxge0H.png", title: "Learn Skills You Can Use at Work", lead: "Charter Center offers live and recorded courses in Management, Engineering, BIM, and HSE." },
    { img: "https://charter-center.com/storage/790/iJAcFLguW3JwHQyE1epAHNeao2mfHNUNTtUWyVwJtrubsdnATwqEyxiM0fBY.png", title: "Get Ready for the Job You Want", lead: "Choose training that fits your field, your level, and the skills your work asks for." },
    { img: "https://charter-center.com/storage/792/f9Udk0T7lbrXIKIEgAatPM1gTv2SS3bVHGriBg5GUZkXNp9wIthr8exB7Zl4.png", title: "Learn From People Who Do the Work", lead: "Charter Center trainers bring real project experience into every live and recorded course." }
  ];
  var heroImg = document.getElementById("heroImg");
  var heroTitle = document.getElementById("heroTitle");
  var heroLead = document.getElementById("heroLead");
  var dots = Array.prototype.slice.call(document.querySelectorAll("#heroDots button"));
  var index = 0;
  function goHero(i) {
    index = (i + heroSlides.length) % heroSlides.length;
    var s = heroSlides[index];
    if (heroImg) heroImg.src = s.img;
    if (heroTitle) heroTitle.textContent = s.title;
    if (heroLead) heroLead.textContent = s.lead;
    dots.forEach(function (d, n) { d.classList.toggle("active", n === index); });
  }
  dots.forEach(function (d) {
    d.addEventListener("click", function () { goHero(Number(d.getAttribute("data-go"))); });
  });
  if (heroSlides.length) setInterval(function () { goHero(index + 1); }, 6500);

  /* Course grid */
  var typeLabel = { "live-course": "Live Course", exam: "Exam Prep", course: "Record Course" };
  var typeBadge = { "live-course": "badge-live", exam: "badge-exam", course: "badge-record" };
  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&" + "amp;")
      .replace(/</g, "&" + "lt;")
      .replace(/>/g, "&" + "gt;")
      .replace(/"/g, "&" + "quot;");
  }
  function cardHtml(c) {
    var badge = typeBadge[c.type] || "badge-record";
    var label = typeLabel[c.type] || "Course";
    var url = c.url || "#";
    var avatar = c.avatar || "https://charter-center.com/admin-lte-3/img/avatar.png";
    var dateLine = c.date
      ? ('<p class="course-date"><i data-lucide="calendar-days"></i><span>' + escapeHtml(c.date) + (c.time ? (" · " + escapeHtml(c.time)) : "") + "</span></p>")
      : "";
    var chips = "";
    if (c.level) chips += '<span class="course-tag">' + escapeHtml(c.level) + "</span>";
    if (c.cert) chips += '<span class="course-tag course-tag--cert"><i data-lucide="badge-check"></i> Certificate</span>';
    var rating = Number(c.rating);
    var ratingHtml =
      rating > 0
        ? ('<span class="course-rating"><i data-lucide="star"></i>' + escapeHtml(rating.toFixed(1)) + "</span>")
        : "";
    return (
      '<article class="course-card">' +
        '<a class="course-media" href="' + escapeHtml(url) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' +
          '<img src="' + escapeHtml(c.image || "") + '" alt="" loading="lazy" />' +
          '<span class="course-badge ' + badge + '">' + label + "</span>" +
          ratingHtml +
        "</a>" +
        '<div class="course-body">' +
          '<h3 class="course-title"><a href="' + escapeHtml(url) + '" target="_blank" rel="noopener">' + escapeHtml(c.title) + "</a></h3>" +
          '<div class="course-instructor">' +
            '<img src="' + escapeHtml(avatar) + '" alt="" width="32" height="32" />' +
            "<span>" + escapeHtml(c.instructor || "Charter Instructor") + "</span>" +
          "</div>" +
          dateLine +
          (chips ? ('<div class="course-tags">' + chips + "</div>") : "") +
          '<div class="course-foot">' +
            '<span class="course-enrolled"><i data-lucide="users"></i>' + (c.enrolled || 0) + " enrolled</span>" +
            '<a class="course-cta" href="' + escapeHtml(url) + '" target="_blank" rel="noopener">View course<i data-lucide="arrow-up-right"></i></a>' +
          "</div>" +
        "</div></article>"
    );
  }
  function renderCourses(list) {
    var grid = document.getElementById("courseGrid");
    if (!grid) return;
    if (!list || !list.length) {
      grid.innerHTML = '<div class="course-empty">No courses available in this tab.</div>';
      return;
    }
    grid.innerHTML = list.map(cardHtml).join("");
    refreshIcons();
  }
  var cache = EMBEDDED_COURSES || {};
  var activeTab = "live_courses";
  function setActiveTab(tab) {
    activeTab = tab;
    document.querySelectorAll(".course-tabs button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
    });
  }
  async function loadTab(tab) {
    setActiveTab(tab);
    renderCourses(cache[tab] || []);
    try {
      var res = await fetch("https://charter-center.com/fetch-courses?tab=" + encodeURIComponent(tab) + "&page=1&per_page=8", {
        headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" }
      });
      if (!res.ok) return;
      var json = await res.json();
      var mapped = (json.data || []).map(function (c) {
        return {
          id: c.id, title: c.title, url: c.url, type: c.type,
          date: c.formatted_date, time: c.formatted_time,
          image: c.featured_image_url,
          instructor: c.instructor && c.instructor.name,
          avatar: c.instructor && c.instructor.avatar,
          level: c.course_level, enrolled: c.enrollments_count,
          cert: !!c.certification,
          rating: c.rating || c.average_rating || 0,
          reviews: c.reviews_count || c.reviews || 0
        };
      });
      if (mapped.length) {
        cache[tab] = mapped;
        if (activeTab === tab) renderCourses(mapped);
      }
    } catch (e) {}
  }
  document.querySelectorAll(".course-tabs button").forEach(function (btn) {
    btn.addEventListener("click", function () { loadTab(btn.getAttribute("data-tab")); });
  });
  if (document.getElementById("courseGrid")) loadTab("live_courses");

  /* Mega menu Categories */
  var megaMenu = document.getElementById("megaMenu");
  var megaBackdrop = document.getElementById("megaBackdrop");
  var categoriesBtn = document.getElementById("categoriesBtn");
  var navCategories = document.getElementById("navCategories");
  var megaCats = document.getElementById("megaCats");
  var megaSubs = document.getElementById("megaSubs");
  var megaCourses = document.getElementById("megaCourses");
  var megaViewAll = document.getElementById("megaViewAll");
  var activeCatId = null;
  var activeSubId = null;
  var hoverTimer = null;
  var coursesReq = 0;
  var megaOpen = false;

  function closeNavDrops() {
    document.querySelectorAll(".has-drop.open").forEach(function (el) {
      el.classList.remove("open");
      var m = el.querySelector(".nav-drop-menu");
      var b = el.querySelector(".nav-drop-btn");
      if (m) m.hidden = true;
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }

  function openMega() {
    if (!megaMenu || megaOpen) return;
    megaOpen = true;
    closeNavDrops();
    megaMenu.classList.add("is-open");
    megaMenu.setAttribute("aria-hidden", "false");
    if (megaBackdrop) {
      megaBackdrop.classList.add("is-open");
      megaBackdrop.setAttribute("aria-hidden", "false");
    }
    if (navCategories) navCategories.classList.add("open");
    if (categoriesBtn) categoriesBtn.setAttribute("aria-expanded", "true");
    if (!activeCatId && CATEGORIES && CATEGORIES[0]) selectCategory(CATEGORIES[0].id);
  }

  function closeMega() {
    if (!megaMenu || !megaOpen) return;
    megaOpen = false;
    clearTimeout(hoverTimer);
    megaMenu.classList.remove("is-open");
    megaMenu.setAttribute("aria-hidden", "true");
    if (megaBackdrop) {
      megaBackdrop.classList.remove("is-open");
      megaBackdrop.setAttribute("aria-hidden", "true");
    }
    if (navCategories) navCategories.classList.remove("open");
    if (categoriesBtn) categoriesBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMega() {
    if (megaOpen) closeMega();
    else openMega();
  }

  function renderCats() {
    if (!megaCats) return;
    megaCats.innerHTML = '<div class="mega-cats-label">Categories</div>' +
      (CATEGORIES || []).map(function (c) {
        return '<button type="button" class="mega-cat" data-id="' + c.id + '">' +
          '<img src="' + escapeHtml(c.icon) + '" alt="" />' +
          "<span>" + escapeHtml(c.name) + "</span></button>";
      }).join("");
  }

  function selectCategory(id) {
    activeCatId = Number(id);
    activeSubId = null;
    var cat = (CATEGORIES || []).find(function (c) { return Number(c.id) === activeCatId; });
    document.querySelectorAll(".mega-cat").forEach(function (el) {
      el.classList.toggle("active", Number(el.getAttribute("data-id")) === activeCatId);
    });
    if (megaViewAll && cat) megaViewAll.href = cat.url;
    if (!cat) return;
    var subs = cat.subcategories || [];
    if (!subs.length) {
      megaSubs.innerHTML = '<div class="mega-empty">No subcategories</div>';
      megaCourses.innerHTML = '<div class="mega-empty">No courses</div>';
      return;
    }
    megaSubs.innerHTML = subs.map(function (s) {
      return '<button type="button" class="mega-sub" data-id="' + s.id + '">' + escapeHtml(s.name) + "</button>";
    }).join("");
    selectSubcategory(subs[0].id);
  }

  function selectSubcategory(id) {
    activeSubId = Number(id);
    document.querySelectorAll(".mega-sub").forEach(function (el) {
      el.classList.toggle("active", Number(el.getAttribute("data-id")) === activeSubId);
    });
    loadMegaCourses(activeSubId);
  }

  async function loadMegaCourses(subId) {
    var req = ++coursesReq;
    megaCourses.innerHTML = '<div class="mega-loading"><div class="mega-spinner"></div><div>Loading courses…</div></div>';
    var list = [];
    try {
      var res = await fetch("https://charter-center.com/get-courses?subcategory_id=" + encodeURIComponent(subId) + "&offset=0&limit=6", {
        headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" }
      });
      if (res.ok) {
        var json = await res.json();
        list = json.courses || [];
      }
    } catch (e) {}
    if (req !== coursesReq) return;
    if (!list.length) {
      megaCourses.innerHTML = '<div class="mega-empty">No courses found</div>';
      return;
    }
    megaCourses.innerHTML = list.slice(0, 6).map(function (c) {
      var type = typeLabel[c.type] || "Course";
      var img = c.featured_image_url || "";
      return '<a class="mega-course" href="' + escapeHtml(c.url) + '" target="_blank" rel="noopener">' +
        '<img src="' + escapeHtml(img) + '" alt="" loading="lazy" />' +
        "<div><strong>" + escapeHtml(c.title) + "</strong><span>" + escapeHtml(type) + (c.course_level ? (" · " + escapeHtml(c.course_level)) : "") + "</span></div></a>";
    }).join("");
  }

  if (megaCats) {
    renderCats();
    megaCats.addEventListener("click", function (e) {
      var btn = e.target.closest(".mega-cat");
      if (!btn) return;
      selectCategory(btn.getAttribute("data-id"));
    });
  }
  if (megaSubs) {
    megaSubs.addEventListener("click", function (e) {
      var btn = e.target.closest(".mega-sub");
      if (!btn) return;
      selectSubcategory(btn.getAttribute("data-id"));
    });
  }

  function scheduleOpen() {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(openMega, 60);
  }
  function scheduleClose() {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(closeMega, 220);
  }

  if (navCategories) {
    navCategories.addEventListener("mouseenter", scheduleOpen);
    navCategories.addEventListener("mouseleave", scheduleClose);
  }
  if (megaMenu) {
    megaMenu.addEventListener("mouseenter", function () {
      clearTimeout(hoverTimer);
      openMega();
    });
    megaMenu.addEventListener("mouseleave", scheduleClose);
  }
  if (categoriesBtn) {
    categoriesBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMega();
    });
  }
  if (megaBackdrop) {
    megaBackdrop.addEventListener("click", closeMega);
    megaBackdrop.addEventListener("mouseenter", function () {
      /* ignore — closing handled by leave timers / click */
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMega();
  });
  document.addEventListener("click", function (e) {
    if (!megaOpen) return;
    if (navCategories && navCategories.contains(e.target)) return;
    if (megaMenu && megaMenu.contains(e.target)) return;
    closeMega();
  });
  /* Reveal */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* More + Language dropdowns */
  function setupDrop(btnId, wrapId, menuId) {
    var btn = document.getElementById(btnId);
    var wrap = document.getElementById(wrapId);
    var menu = document.getElementById(menuId);
    if (!btn || !wrap || !menu) return;
    function close() {
      wrap.classList.remove("open");
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }
    function open() {
      if (typeof closeMega === "function") closeMega();
      document.querySelectorAll(".has-drop.open").forEach(function (el) {
        if (el !== wrap) {
          el.classList.remove("open");
          var m = el.querySelector(".nav-drop-menu");
          var b = el.querySelector(".nav-drop-btn");
          if (m) m.hidden = true;
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
      wrap.classList.add("open");
      menu.hidden = false;
      btn.setAttribute("aria-expanded", "true");
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (wrap.classList.contains("open")) close(); else open();
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });
  }
  setupDrop("moreBtn", "navMore", "moreMenu");
  setupDrop("langBtn", "navLang", "langMenu");
  refreshIcons();
})();