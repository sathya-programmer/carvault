(function(){
  var CARS=[
  ['Toyota','Corolla','Sedan','Petrol / Hybrid','1.8L–2.0L 4-cyl','~138–169 hp','5','~$22,000','2019','CV0001'],
  ['Toyota','Camry','Sedan','Hybrid','2.5L 4-cyl hybrid','~225 hp','5','~$28,000','2024','CV0002'],
  ['Toyota','RAV4','Compact SUV','Petrol / Hybrid / Plug-in hybrid','2.5L 4-cyl (+ electric motors)','~203–302 hp','5','~$29,000','2019','CV0003'],
  ['Toyota','Land Cruiser','Off-Road / 4x4','Hybrid','2.4L turbo 4-cyl hybrid','~326 hp','5','~$57,000','2024','CV0004'],
  ['Toyota','GR Supra','Sports Car','Petrol','3.0L turbo inline-6','~382 hp','2','~$56,000','2019','CV0005'],
  ['BMW','3 Series','Sedan','Petrol / Plug-in hybrid','2.0L turbo 4-cyl','~255 hp','5','~$46,000','2019','CV0006'],
  ['BMW','X5','Luxury SUV','Petrol / Diesel / Plug-in hybrid','3.0L turbo inline-6','~375 hp','5','~$66,000','2018','CV0007'],
  ['BMW','M3','Sedan','Petrol','3.0L twin-turbo inline-6','~473–503 hp','5','~$77,000','2021','CV0008'],
  ['BMW','i4','Sedan','Electric','Electric motor(s)','~281–536 hp','5','~$52,000','2021','CV0009'],
  ['Mercedes-Benz','C-Class','Sedan','Petrol (mild hybrid)','2.0L turbo 4-cyl','~255 hp','5','~$48,000','2021','CV0010'],
  ['Mercedes-Benz','E-Class','Sedan','Petrol (mild hybrid)','2.0L turbo 4-cyl','~255 hp','5','~$63,000','2023','CV0011'],
  ['Mercedes-Benz','S-Class','Luxury Car','Petrol (mild hybrid) / Plug-in hybrid','3.0L turbo inline-6','~429 hp','5','~$118,000','2020','CV0012'],
  ['Mercedes-Benz','G-Class','Off-Road / 4x4','Petrol / Electric','3.0L turbo inline-6 (G 550)','~416 hp','5','~$143,000','2018','CV0013'],
  ['Honda','Civic','Sedan','Petrol','2.0L 4-cyl','~158 hp','5','~$24,000','2022','CV0014'],
  ['Honda','Accord','Sedan','Hybrid','2.0L 4-cyl hybrid','~204 hp','5','~$29,000','2023','CV0015'],
  ['Honda','CR-V','Compact SUV','Petrol / Hybrid','1.5L turbo 4-cyl','~190 hp','5','~$31,000','2023','CV0016'],
  ['Honda','Civic Type R','Hot Hatch','Petrol','2.0L turbo 4-cyl','~315 hp','5','~$45,000','2023','CV0017'],
  ['Ford','Mustang','Muscle Car','Petrol','2.3L turbo 4-cyl / 5.0L V8','~315–480 hp','4','~$32,000','2024','CV0018'],
  ['Ford','F-150','Pickup Truck','Petrol / Hybrid / Electric (Lightning)','2.7L twin-turbo V6 (base)','~325 hp','5–6','~$37,000','2021','CV0019'],
  ['Ford','Explorer','SUV','Petrol','2.3L turbo 4-cyl','~300 hp','7','~$40,000','2020','CV0020'],
  ['Ford','Bronco','Off-Road / 4x4','Petrol','2.3L turbo 4-cyl','~300 hp','4–5','~$40,000','2021','CV0021'],
  ['Tesla','Model 3','Sedan','Electric','Electric motor(s)','~280–510 hp (by version)','5','~$39,000','2017','CV0022'],
  ['Tesla','Model Y','Crossover','Electric','Electric motor(s)','~295–500 hp (by version)','5','~$44,000','2020','CV0023'],
  ['Tesla','Model S','Luxury Car','Electric','Dual / tri-motor','~670–1,020 hp','5','~$75,000','2012','CV0024'],
  ['Tesla','Cybertruck','Pickup Truck','Electric','Dual / tri-motor','~600–845 hp','5','~$80,000','2023','CV0025'],
  ['Audi','A4','Sedan','Petrol (mild hybrid)','2.0L turbo 4-cyl','~201–261 hp','5','~$42,000','2016','CV0026'],
  ['Audi','Q5','Compact SUV','Petrol / Plug-in hybrid','2.0L turbo 4-cyl','~261 hp','5','~$47,000','2017','CV0027'],
  ['Audi','Q7','Luxury SUV','Petrol','3.0L turbo V6','~335 hp','7','~$60,000','2015','CV0028'],
  ['Audi','RS6 Avant','Station Wagon / Estate','Petrol (mild hybrid)','4.0L twin-turbo V8','~591–621 hp','5','~$120,000','2019','CV0029'],
  ['Volkswagen','Golf GTI','Hot Hatch','Petrol','2.0L turbo 4-cyl','~241 hp','5','~$32,000','2021','CV0030'],
  ['Volkswagen','Tiguan','Compact SUV','Petrol','2.0L turbo 4-cyl','~184 hp','5–7','~$30,000','2017','CV0031'],
  ['Volkswagen','ID.4','Crossover','Electric','Electric motor(s)','~201–295 hp','5','~$39,000','2020','CV0032'],
  ['Volkswagen','Jetta','Sedan','Petrol','1.5L turbo 4-cyl','~158 hp','5','~$22,000','2019','CV0033'],
  ['Porsche','911 Carrera','Sports Car','Petrol / Hybrid (newest version)','3.0L twin-turbo flat-6','~380–530 hp (by model year)','2+2','~$116,000','2019','CV0034'],
  ['Porsche','Cayenne','Luxury SUV','Petrol / Plug-in hybrid','3.0L turbo V6','~348 hp','5','~$81,000','2018','CV0035'],
  ['Porsche','Macan','Compact SUV','Petrol / Electric','2.0L turbo 4-cyl (petrol)','~261 hp','5','~$62,000','2014','CV0036'],
  ['Porsche','Taycan','Luxury Car','Electric','Electric motor(s)','~402–1,019 hp','4–5','~$99,000','2019','CV0037'],
  ['Ferrari','296 GTB','Supercar','Plug-in hybrid','3.0L twin-turbo V6 + electric motor','~819 hp','2','~$322,000','2021','CV0038'],
  ['Ferrari','Roma','Grand Tourer (GT)','Petrol','3.9L twin-turbo V8','~612 hp','2+2','~$245,000','2019','CV0039'],
  ['Ferrari','SF90 Stradale','Hypercar','Plug-in hybrid','4.0L twin-turbo V8 + 3 electric motors','~986 hp','2','~$525,000','2019','CV0040'],
  ['Ferrari','Purosangue','Luxury SUV','Petrol','6.5L V12','~715 hp','4','~$400,000','2022','CV0041'],
  ['Lamborghini','Revuelto','Supercar','Plug-in hybrid','6.5L V12 + 3 electric motors','~1,001 hp','2','~$600,000','2023','CV0042'],
  ['Lamborghini','Urus','Luxury SUV','Petrol / Plug-in hybrid','4.0L twin-turbo V8','~657–789 hp','5','~$240,000','2017','CV0043'],
  ['Lamborghini','Huracán','Supercar','Petrol','5.2L V10','~631 hp','2','~$250,000 (when new; production ended 2024)','2014','CV0044'],
  ['Nissan','Altima','Sedan','Petrol','2.5L 4-cyl','~188 hp','5','~$27,000','2019','CV0045'],
  ['Nissan','Rogue','Compact SUV','Petrol','1.5L turbo 3-cyl','~201 hp','5','~$29,000','2021','CV0046'],
  ['Nissan','GT-R','Sports Car','Petrol','3.8L twin-turbo V6','~565 hp','4','~$120,000','2007','CV0047'],
  ['Nissan','Leaf','Hatchback','Electric','Electric motor','~147–214 hp','5','~$29,000','2017','CV0048'],
  ['Hyundai','Elantra','Sedan','Petrol / Hybrid','2.0L 4-cyl','~147 hp','5','~$22,000','2020','CV0049'],
  ['Hyundai','Tucson','Compact SUV','Petrol / Hybrid','2.5L 4-cyl','~187 hp','5','~$28,000','2021','CV0050'],
  ['Hyundai','Santa Fe','SUV','Petrol / Hybrid','2.5L 4-cyl','~191 hp','5–7','~$34,000','2023','CV0051'],
  ['Hyundai','Ioniq 5','Crossover','Electric','Electric motor(s)','~168–320 hp','5','~$42,000','2021','CV0052'],
  ['Kia','Seltos','Compact SUV','Petrol','2.0L 4-cyl','~147 hp','5','~$25,000','2019','CV0053'],
  ['Kia','Sportage','Compact SUV','Petrol / Hybrid','2.5L 4-cyl','~187 hp','5','~$28,000','2022','CV0054'],
  ['Kia','Telluride','SUV','Petrol','3.8L V6','~291 hp','7–8','~$38,000','2019','CV0055'],
  ['Kia','EV6','Crossover','Electric','Electric motor(s)','~225–576 hp','5','~$43,000','2021','CV0056'],
  ['Chevrolet','Corvette','Sports Car','Petrol / Hybrid (E-Ray)','6.2L V8','~495 hp','2','~$69,000','2019','CV0057'],
  ['Chevrolet','Silverado 1500','Pickup Truck','Petrol / Diesel','2.7L turbo 4-cyl','~310 hp','5–6','~$37,000','2019','CV0058'],
  ['Chevrolet','Tahoe','Full-size SUV','Petrol','5.3L V8','~355 hp','7–8','~$59,000','2021','CV0059'],
  ['Chevrolet','Camaro','Muscle Car','Petrol','2.0L turbo 4-cyl / 6.2L V8','~275–650 hp','4','~$30,000 (when new; production ended 2024)','2016','CV0060'],
  ['Jeep','Wrangler','Off-Road / 4x4','Petrol / Plug-in hybrid','3.6L V6 / 2.0L turbo 4-cyl','~270–285 hp','4–5','~$33,000','2018','CV0061'],
  ['Jeep','Grand Cherokee','SUV','Petrol / Plug-in hybrid','3.6L V6','~293 hp','5','~$40,000','2021','CV0062'],
  ['Jeep','Compass','Compact SUV','Petrol','2.0L turbo 4-cyl','~200 hp','5','~$30,000','2017','CV0063'],
  ['Jeep','Gladiator','Pickup Truck','Petrol','3.6L V6','~285 hp','5','~$38,000','2019','CV0064'],
  ['Volvo','XC90','Luxury SUV','Mild hybrid / Plug-in hybrid','2.0L turbo 4-cyl','~247–455 hp','7','~$60,000','2015','CV0065'],
  ['Volvo','XC60','Compact SUV','Mild hybrid / Plug-in hybrid','2.0L turbo 4-cyl','~247 hp','5','~$47,000','2017','CV0066'],
  ['Volvo','S90','Sedan','Mild hybrid / Plug-in hybrid','2.0L turbo 4-cyl','~247 hp','5','~$55,000','2016','CV0067'],
  ['Volvo','EX30','Crossover','Electric','Electric motor(s)','~268 hp','5','~$35,000','2023','CV0068'],
  ['Land Rover','Defender','Off-Road / 4x4','Petrol / Diesel / Plug-in hybrid','2.0L turbo 4-cyl / 3.0L inline-6','~296–395 hp','5–7','~$58,000','2020','CV0069'],
  ['Land Rover','Range Rover','Luxury SUV','Petrol / Diesel / Plug-in hybrid','3.0L inline-6 (V8 option)','~395–523 hp','5','~$108,000','2022','CV0070'],
  ['Land Rover','Range Rover Sport','Luxury SUV','Petrol / Plug-in hybrid','3.0L inline-6','~395 hp','5','~$86,000','2022','CV0071'],
  ['Land Rover','Range Rover Evoque','Compact SUV','Petrol (mild hybrid)','2.0L turbo 4-cyl','~246 hp','5','~$51,000','2019','CV0072'],
  ['Rolls-Royce','Phantom','Limousine','Petrol','6.75L twin-turbo V12','~563 hp','5','~$460,000','2017','CV0073'],
  ['Rolls-Royce','Ghost','Luxury Car','Petrol','6.75L twin-turbo V12','~563 hp','5','~$350,000','2020','CV0074'],
  ['Rolls-Royce','Cullinan','Luxury SUV','Petrol','6.75L twin-turbo V12','~563 hp','5','~$400,000','2018','CV0075'],
  ['Rolls-Royce','Spectre','Coupe','Electric','Dual electric motors','~577 hp','4','~$420,000','2023','CV0076'],
  ['Bentley','Continental GT','Grand Tourer (GT)','Petrol / Plug-in hybrid (newest)','4.0L twin-turbo V8 / V8 hybrid','~542–771 hp','4','~$230,000','2018','CV0077'],
  ['Bentley','Continental GTC','Convertible','Petrol / Plug-in hybrid (newest)','4.0L twin-turbo V8 / V8 hybrid','~542–771 hp','4','~$250,000','2019','CV0078'],
  ['Bentley','Flying Spur','Luxury Car','Petrol / Plug-in hybrid','4.0L twin-turbo V8 / V8 hybrid','~542–771 hp','5','~$215,000','2019','CV0079'],
  ['Bentley','Bentayga','Luxury SUV','Petrol / Plug-in hybrid','4.0L twin-turbo V8','~542 hp','4–5','~$200,000','2015','CV0080'],
  ['Aston Martin','DB12','Grand Tourer (GT)','Petrol','4.0L twin-turbo V8','~671 hp','2+2','','2023','CV0081'],
  ['Aston Martin','Vantage','Sports Car','Petrol','4.0L twin-turbo V8','~656 hp','2','','2024','CV0082'],
  ['Aston Martin','DBX707','Luxury SUV','Petrol','4.0L twin-turbo V8','~697 hp','5','','2022','CV0083'],
  ['Lada','Niva Legend','Off-Road / 4x4','Petrol','1.7L 4-cyl','~83 hp','5','','1977','CV0084'],
  ['Lada','Granta','Sedan','Petrol','1.6L 4-cyl','~90–106 hp','5','','2011','CV0085'],
  ['Lada','Vesta','Sedan','Petrol','1.6L–1.8L 4-cyl','~106–122 hp','5','','2015','CV0086'],
  ['BAIC','EU5','Sedan','Electric','Electric motor','—','5','','2018','CV0087'],
  ['BAIC','X7','Compact SUV','Petrol','1.5L turbo 4-cyl','~177 hp','5','','2019','CV0088'],
  ['Beijing','BJ40','Off-Road / 4x4','Petrol','2.0L turbo 4-cyl','~227 hp','5','','2014','CV0089'],
  ['Beijing','BJ80','Off-Road / 4x4','Petrol','Turbo petrol','—','5','','2014','CV0090'],
  ['Arcfox','Alpha S','Sedan','Electric','Electric motor','—','5','','2021','CV0091'],
  ['Arcfox','Alpha T','Crossover','Electric','Electric motor','—','5','','2021','CV0092'],
  ['MINI','Cooper','Hatchback','Petrol / Electric','1.5L turbo 3-cyl (petrol)','~134–201 hp','4','','2024','CV0093'],
  ['MINI','Countryman','Compact SUV','Petrol / Electric','1.5L–2.0L turbo (petrol)','~161–312 hp','5','','2024','CV0094'],
  ['BYD','Seal','Sedan','Electric','Electric motor(s)','~308–530 hp','5','','2022','CV0095'],
  ['BYD','Atto 3','Crossover','Electric','Electric motor','~201 hp','5','','2022','CV0096'],
  ['BYD','Dolphin','Hatchback','Electric','Electric motor','~94–201 hp','5','','2021','CV0097'],
  ['Denza','D9','Minivan / MPV','Plug-in hybrid / Electric','Plug-in hybrid or electric','—','7','','2022','CV0098'],
  ['Denza','N7','Crossover','Electric','Electric motor(s)','—','5','','2024','CV0099'],
  ['Fangchengbao','Bao 5','Off-Road / 4x4','Plug-in hybrid','Turbo petrol + electric motors','—','5','','2023','CV0100'],
  ['Fangchengbao','Bao 8','Off-Road / 4x4','Plug-in hybrid','Turbo petrol + electric motors','—','5','','2024','CV0101'],
  ['Yangwang','U8','Off-Road / 4x4','Plug-in hybrid','2.0L turbo + 4 electric motors','~1,180 hp','5','','2023','CV0102'],
  ['Yangwang','U9','Supercar','Electric','4 electric motors','~1,287 hp','2','','2024','CV0103'],
  ['Changan','CS75 Plus','Compact SUV','Petrol','1.5L–2.0L turbo 4-cyl','~178–233 hp','5','','2019','CV0104'],
  ['Changan','UNI-K','Mid-size SUV','Petrol','2.0L turbo 4-cyl','~233 hp','5','','2020','CV0105'],
  ['Deepal','S07','Compact SUV','Electric / Plug-in hybrid','Electric or range-extender','—','5','','2023','CV0106'],
  ['Deepal','SL03','Sedan','Electric / Plug-in hybrid','Electric or range-extender','—','5','','2022','CV0107'],
  ['Avatr','11','Crossover','Electric','Electric motor(s)','—','5','','2022','CV0108'],
  ['Avatr','12','Fastback','Electric','Electric motor(s)','—','5','','2023','CV0109'],
  ['Chery','Tiggo 8 Pro','Mid-size SUV','Petrol / Plug-in hybrid','1.6L–2.0L turbo 4-cyl','~197–254 hp','5–7','','2021','CV0110'],
  ['Chery','Tiggo 7 Pro','Compact SUV','Petrol','1.5L–1.6L turbo 4-cyl','~156–197 hp','5','','2020','CV0111'],
  ['Exeed','TXL','Mid-size SUV','Petrol','1.6L–2.0L turbo 4-cyl','—','5–7','','2019','CV0112'],
  ['Exeed','VX','Mid-size SUV','Petrol','2.0L turbo 4-cyl','—','7','','2021','CV0113'],
  ['Jetour','Dashing','Compact SUV','Petrol','1.5L turbo 4-cyl','~156 hp','5','','2022','CV0114'],
  ['Jetour','T2','Off-Road / 4x4','Petrol','2.0L turbo 4-cyl','~254 hp','5','','2023','CV0115'],
  ['iCar','03','Off-Road / 4x4','Electric / Plug-in hybrid','Electric or range-extender','—','5','','2023','CV0116'],
  ['iCar','V23','Compact SUV','Electric','Electric motor','—','5','','2024','CV0117'],
  ['Luxeed','S7','Sedan','Electric','Electric motor(s)','—','5','','2024','CV0118'],
  ['Luxeed','R7','Crossover','Electric','Electric motor(s)','—','5','','2025','CV0119'],
  ['Dongfeng','Nammi 01','Hatchback','Electric','Electric motor','—','4','','2022','CV0120'],
  ['Dongfeng','Nammi Box','Hatchback','Electric','Electric motor','—','4','','2023','CV0121'],
  ['Voyah','Free','Mid-size SUV','Electric / Plug-in hybrid','Electric or range-extender','—','5','','2021','CV0122'],
  ['Voyah','Dreamer','Minivan / MPV','Electric / Plug-in hybrid','Electric or range-extender','—','7','','2022','CV0123'],
  ['Voyah','Passion','Sedan','Electric','Electric motor(s)','—','5','','2023','CV0124'],
  ['M-Hero','917','Off-Road / 4x4','Plug-in hybrid','Range-extender hybrid','—','5','','2023','CV0125'],
  ['Aeolus','Shine','Compact SUV','Petrol','1.5L turbo 4-cyl','—','5','','2020','CV0126'],
  ['Aeolus','Yixuan','Sedan','Petrol','1.5L turbo 4-cyl','—','5','','2020','CV0127'],
  ['FAW','Besturn B70','Sedan','Petrol','1.8L–2.0L 4-cyl','—','5','','2019','CV0128'],
  ['FAW','Besturn B50','Sedan','Petrol','1.6L 4-cyl','—','5','','2012','CV0129'],
  ['Hongqi','H9','Luxury Car','Petrol','2.0L turbo / 3.0L V6','—','5','','2020','CV0130'],
  ['Hongqi','E-HS9','Luxury SUV','Electric','Electric motor(s)','—','5–7','','2020','CV0131'],
  ['Hongqi','L5','Limousine','Petrol','4.0L twin-turbo V8','—','4–5','','2018','CV0132'],
  ['Bestune','T77','Compact SUV','Petrol','1.5L turbo 4-cyl','—','5','','2018','CV0133'],
  ['Bestune','T99','Mid-size SUV','Petrol','2.0L turbo 4-cyl','—','5–7','','2020','CV0134'],
  ['Lincoln','Navigator','Full-size SUV','Petrol','3.5L twin-turbo V6','~440 hp','7–8','','2018','CV0135'],
  ['Lincoln','Aviator','Luxury SUV','Petrol / Plug-in hybrid','3.0L twin-turbo V6','~400 hp','6–7','','2020','CV0136'],
  ['Lincoln','Corsair','Compact SUV','Petrol / Plug-in hybrid','2.0L turbo 4-cyl','~250 hp','5','','2020','CV0137'],
  ['GAC','GS8','Mid-size SUV','Petrol / Hybrid','2.0L turbo 4-cyl','~258 hp','7','','2022','CV0138'],
  ['GAC','GS4','Compact SUV','Petrol / Hybrid','1.5L turbo 4-cyl','—','5','','2015','CV0139'],
  ['GAC','M8','Minivan / MPV','Petrol / Hybrid','2.0L turbo 4-cyl','~258 hp','7','','2018','CV0140'],
  ['Aion','Y','Crossover','Electric','Electric motor','—','5','','2021','CV0141'],
  ['Aion','V','Crossover','Electric','Electric motor','—','5','','2019','CV0142'],
  ['Hyptec','SSR','Supercar','Electric','3 electric motors','~1,225 hp','2','','2023','CV0143'],
  ['Hyptec','HT','Crossover','Electric','Electric motor(s)','—','5','','2023','CV0144'],
  ['Geely','Coolray','Compact SUV','Petrol','1.5L turbo 3-cyl','~174 hp','5','','2018','CV0145'],
  ['Geely','Monjaro','Mid-size SUV','Petrol','2.0L turbo 4-cyl','~238 hp','5–7','','2022','CV0146'],
  ['Lynk & Co','01','Compact SUV','Petrol / Plug-in hybrid','2.0L turbo 4-cyl','—','5','','2017','CV0147'],
  ['Lynk & Co','03','Sedan','Petrol / Plug-in hybrid','2.0L turbo 4-cyl','—','5','','2018','CV0148'],
  ['Lynk & Co','05','Crossover','Petrol / Plug-in hybrid','2.0L turbo 4-cyl','—','5','','2020','CV0149'],
  ['Zeekr','001','Fastback','Electric','Electric motor(s)','~536–1,265 hp','5','','2021','CV0150'],
  ['Zeekr','007','Sedan','Electric','Electric motor(s)','—','5','','2023','CV0151'],
  ['Zeekr','X','Crossover','Electric','Electric motor(s)','—','5','','2023','CV0152'],
  ['Cadillac','Escalade','Full-size SUV','Petrol','6.2L V8','~420 hp','7–8','','2021','CV0153'],
  ['Cadillac','CT5','Sedan','Petrol','2.0L turbo / 3.0L twin-turbo / 6.2L supercharged V8','~237–668 hp','5','','2020','CV0154'],
  ['Cadillac','Lyriq','Luxury SUV','Electric','Electric motor(s)','~340–500 hp','5','','2023','CV0155'],
  ['Buick','Enclave','SUV','Petrol','3.6L V6','~310 hp','7','','2018','CV0156'],
  ['Buick','Encore GX','Compact SUV','Petrol','1.2L–1.3L turbo 3-cyl','~137–155 hp','5','','2020','CV0157'],
  ['GMC','Sierra 1500','Pickup Truck','Petrol / Diesel','2.7L turbo 4-cyl (base)','~310 hp','5–6','','2019','CV0158'],
  ['GMC','Yukon','Full-size SUV','Petrol / Diesel','5.3L V8','~355 hp','7–8','','2021','CV0159'],
  ['GMC','Hummer EV','Pickup Truck','Electric','3 electric motors','up to ~1,000 hp','5','','2022','CV0160'],
  ['GWM','Poer','Pickup Truck','Petrol / Diesel','2.0L turbo 4-cyl','—','5','','2019','CV0161'],
  ['GWM','Cannon','Pickup Truck','Petrol / Diesel','2.0L turbo 4-cyl','—','5','','2019','CV0162'],
  ['Haval','H6','Compact SUV','Petrol / Hybrid','1.5L–2.0L turbo 4-cyl','—','5','','2021','CV0163'],
  ['Haval','Jolion','Compact SUV','Petrol / Hybrid','1.5L turbo 4-cyl','—','5','','2021','CV0164'],
  ['Tank','300','Off-Road / 4x4','Petrol / Hybrid','2.0L turbo 4-cyl','~220 hp','5','','2021','CV0165'],
  ['Tank','500','Off-Road / 4x4','Petrol / Plug-in hybrid','3.0L turbo V6','~354 hp','5–7','','2021','CV0166'],
  ['Ora','Good Cat','Hatchback','Electric','Electric motor','—','5','','2021','CV0167'],
  ['Ora','Funky Cat','Hatchback','Electric','Electric motor','—','5','','2022','CV0168'],
  ['Wey','Mocha','Mid-size SUV','Plug-in hybrid','2.0L turbo + electric motors','—','5','','2022','CV0169'],
  ['Wey','Blue Mountain','Mid-size SUV','Plug-in hybrid','2.0L turbo + electric motor','—','6–7','','2021','CV0170'],
  ['Acura','MDX','Luxury SUV','Petrol','3.5L V6','~290 hp','7','','2022','CV0171'],
  ['Acura','Integra','Liftback','Petrol','1.5L turbo 4-cyl','~200 hp','5','','2023','CV0172'],
  ['Acura','TLX','Sedan','Petrol','2.0L turbo 4-cyl','~272 hp','5','','2021','CV0173'],
  ['Genesis','G80','Luxury Car','Petrol / Electric','2.5L turbo / 3.5L twin-turbo V6','~300–375 hp','5','','2021','CV0174'],
  ['Genesis','GV70','Compact SUV','Petrol / Electric','2.5L turbo 4-cyl','~300 hp','5','','2021','CV0175'],
  ['Genesis','GV80','Luxury SUV','Petrol / Diesel','2.5L turbo 4-cyl','~300 hp','5–7','','2020','CV0176'],
  ['IKCO','Samand','Sedan','Petrol','1.7L–1.8L 4-cyl','—','5','','2002','CV0177'],
  ['IKCO','Dena','Sedan','Petrol','1.7L 4-cyl','—','5','','2011','CV0178'],
  ['Isuzu','D-Max','Pickup Truck','Diesel','1.9L–3.0L turbo diesel','~150–190 hp','5','','2019','CV0179'],
  ['Isuzu','mu-X','SUV','Diesel','1.9L–3.0L turbo diesel','~150–190 hp','7','','2021','CV0180'],
  ['Jaguar','F-Type','Sports Car','Petrol','2.0L turbo / 5.0L supercharged V8','~296–567 hp','2','','2013','CV0181'],
  ['Jaguar','F-Pace','Luxury SUV','Petrol / Diesel / Plug-in hybrid','2.0L turbo 4-cyl','~247 hp','5','','2016','CV0182'],
  ['Jaguar','I-Pace','Crossover','Electric','2 electric motors','~394 hp','5','','2018','CV0183'],
  ['Koenigsegg','Jesko','Hypercar','Petrol','5.0L twin-turbo V8','~1,280–1,600 hp','2','','2019','CV0184'],
  ['Koenigsegg','Regera','Hypercar','Plug-in hybrid','5.0L twin-turbo V8 + electric motors','~1,500 hp','2','','2015','CV0185'],
  ['Koenigsegg','Gemera','Hypercar','Plug-in hybrid','2.0L 3-cyl + electric motors','~1,700 hp','4','','2020','CV0186'],
  ['Li Auto','L9','Full-size SUV','Plug-in hybrid (range-extender)','1.5L turbo + electric motors','~449 hp','6','','2022','CV0187'],
  ['Li Auto','L7','Luxury SUV','Plug-in hybrid (range-extender)','1.5L turbo + electric motors','~449 hp','5','','2023','CV0188'],
  ['Li Auto','Mega','Minivan / MPV','Electric','Electric motor','—','7','','2024','CV0189'],
  ['Lucid','Air','Luxury Car','Electric','Electric motor(s)','~430–1,234 hp','5','','2021','CV0190'],
  ['Lucid','Gravity','Luxury SUV','Electric','Electric motor(s)','—','5–7','','2025','CV0191'],
  ['Mahindra','Thar','Off-Road / 4x4','Petrol / Diesel','2.0L turbo petrol / 2.2L diesel','~150–152 hp','4','','2020','CV0192'],
  ['Mahindra','XUV700','Mid-size SUV','Petrol / Diesel','2.0L turbo petrol / 2.2L diesel','~153–197 hp','5–7','','2021','CV0193'],
  ['Mahindra','Scorpio-N','SUV','Petrol / Diesel','2.0L turbo petrol / 2.2L diesel','~130–200 hp','6–7','','2022','CV0194'],
  ['Maserati','MC20','Supercar','Petrol','3.0L twin-turbo V6','~621 hp','2','','2020','CV0195'],
  ['Maserati','GranTurismo','Grand Tourer (GT)','Petrol / Electric','3.0L twin-turbo V6','~483–542 hp','2+2','','2023','CV0196'],
  ['Maserati','Levante','Luxury SUV','Petrol','3.0L twin-turbo V6','~345–424 hp','5','','2016','CV0197'],
  ['Mazda','Mazda3','Hatchback','Petrol','2.0L–2.5L 4-cyl','~155–186 hp','5','','2019','CV0198'],
  ['Mazda','CX-5','Compact SUV','Petrol','2.5L 4-cyl','~187 hp','5','','2017','CV0199'],
  ['Mazda','MX-5 Miata','Roadster','Petrol','2.0L 4-cyl','~181 hp','2','','2015','CV0200'],
  ['McLaren','Artura','Supercar','Plug-in hybrid','3.0L twin-turbo V6 + electric motor','~671 hp','2','','2021','CV0201'],
  ['McLaren','750S','Supercar','Petrol','4.0L twin-turbo V8','~740 hp','2','','2023','CV0202'],
  ['McLaren','GT','Grand Tourer (GT)','Petrol','4.0L twin-turbo V8','~612 hp','2','','2019','CV0203'],
  ['Mercedes-AMG','AMG GT','Sports Car','Petrol','4.0L twin-turbo V8','~577–639 hp','2+2','','2023','CV0204'],
  ['Mercedes-AMG','C 63','Sedan','Plug-in hybrid','2.0L turbo 4-cyl + electric motor','~671 hp','5','','2023','CV0205'],
  ['Mercedes-AMG','G 63','Off-Road / 4x4','Petrol','4.0L twin-turbo V8','~577 hp','5','','2018','CV0206'],
  ['Mercedes-Maybach','S-Class','Luxury Car','Petrol','4.0L twin-turbo V8 / 6.0L twin-turbo V12','~496–621 hp','4–5','','2021','CV0207'],
  ['Mercedes-Maybach','GLS 600','Luxury SUV','Petrol (mild hybrid)','4.0L twin-turbo V8','~550 hp','4–5','','2020','CV0208'],
  ['Mitsubishi','Outlander','Compact SUV','Petrol / Plug-in hybrid','2.5L 4-cyl','~181 hp','5–7','','2021','CV0209'],
  ['Mitsubishi','Pajero Sport','Off-Road / 4x4','Diesel','2.4L turbo diesel','~181 hp','7','','2015','CV0210'],
  ['Mitsubishi','Triton','Pickup Truck','Diesel','2.4L turbo diesel','~181 hp','5','','2023','CV0211'],
  ['NIO','ET7','Luxury Car','Electric','2 electric motors','~644 hp','5','','2021','CV0212'],
  ['NIO','ET5','Sedan','Electric','Electric motor(s)','—','5','','2022','CV0213'],
  ['NIO','ES8','Luxury SUV','Electric','2 electric motors','—','6–7','','2018','CV0214'],
  ['ONVO','L60','Mid-size SUV','Electric','Electric motor','—','5','','2024','CV0215'],
  ['ONVO','L90','Full-size SUV','Electric','Electric motor','—','6','','2025','CV0216'],
  ['Firefly','Firefly','Hatchback','Electric','Electric motor','—','4','','2024','CV0217'],
  ['Infiniti','QX60','SUV','Petrol','3.5L V6','~295 hp','7','','2022','CV0218'],
  ['Infiniti','Q50','Sedan','Petrol','3.0L twin-turbo V6','~300–400 hp','5','','2013','CV0219'],
  ['Infiniti','QX55','Compact SUV','Petrol','2.0L turbo 4-cyl','~268 hp','5','','2021','CV0220'],
  ['Proton','X50','Compact SUV','Petrol','1.5L turbo 3-cyl','~174 hp','5','','2020','CV0221'],
  ['Proton','Saga','Sedan','Petrol','1.3L 4-cyl','~94 hp','5','','2016','CV0222'],
  ['Proton','X70','Mid-size SUV','Petrol','1.8L turbo 4-cyl','~181 hp','5','','2018','CV0223'],
  ['Renault','Clio','Hatchback','Petrol / Hybrid','1.0L–1.6L','~91–143 hp','5','','2019','CV0224'],
  ['Renault','Captur','Compact SUV','Petrol / Hybrid','1.0L–1.3L turbo','~91–154 hp','5','','2019','CV0225'],
  ['Renault','Megane E-Tech','Crossover','Electric','Electric motor','~130–220 hp','5','','2022','CV0226'],
  ['Dacia','Duster','Compact SUV','Petrol / Diesel / Hybrid','1.0L–1.6L','~90–150 hp','5','','2024','CV0227'],
  ['Dacia','Sandero','Hatchback','Petrol','1.0L 3-cyl','~90 hp','5','','2021','CV0228'],
  ['Dacia','Spring','Hatchback','Electric','Electric motor','~44–65 hp','4','','2021','CV0229'],
  ['Alpine','A110','Sports Car','Petrol','1.8L turbo 4-cyl','~249–296 hp','2','','2017','CV0230'],
  ['Alpine','A290','Hot Hatch','Electric','Electric motor','~177–217 hp','5','','2024','CV0231'],
  ['Rimac','Nevera','Hypercar','Electric','4 electric motors','~1,914 hp','2','','2021','CV0232'],
  ['Rimac','Nevera R','Hypercar','Electric','4 electric motors','~2,107 hp','2','','2024','CV0233'],
  ['Bugatti','Chiron','Hypercar','Petrol','8.0L quad-turbo W16','~1,479 hp','2','','2016','CV0234'],
  ['Bugatti','Tourbillon','Hypercar','Plug-in hybrid','8.3L V16 + electric motors','~1,775 hp','2','','2024','CV0235'],
  ['Bugatti','Veyron','Hypercar','Petrol','8.0L quad-turbo W16','~1,001 hp','2','','2005','CV0236'],
  ['Rivian','R1T','Pickup Truck','Electric','Electric motors','~835–1,025 hp','5','','2021','CV0237'],
  ['Rivian','R1S','Luxury SUV','Electric','Electric motors','~835–1,025 hp','5–7','','2022','CV0238'],
  ['MG','MG4','Hatchback','Electric','Electric motor','~168–241 hp','5','','2022','CV0239'],
  ['MG','ZS','Compact SUV','Petrol / Hybrid / Electric','1.5L 4-cyl (petrol)','~106–174 hp','5','','2017','CV0240'],
  ['MG','Hector','Mid-size SUV','Petrol / Diesel','1.5L turbo petrol / 2.0L diesel','~141–168 hp','5–7','','2019','CV0241'],
  ['MG','Cyberster','Roadster','Electric','Electric motor(s)','~335–510 hp','2','','2024','CV0242'],
  ['Roewe','RX5','Compact SUV','Petrol','1.5L turbo 4-cyl','~169 hp','5','','2016','CV0243'],
  ['Roewe','i6','Sedan','Petrol','1.0L–1.5L turbo','—','5','','2017','CV0244'],
  ['Maxus','T60','Pickup Truck','Diesel','2.0L–2.8L turbo diesel','—','5','','2017','CV0245'],
  ['Maxus','G10','Minivan / MPV','Petrol / Diesel','2.0L 4-cyl','—','7–9','','2015','CV0246'],
  ['IM Motors','LS6','Mid-size SUV','Electric','Electric motor(s)','—','5','','2023','CV0247'],
  ['IM Motors','L6','Sedan','Electric','Electric motor(s)','—','5','','2024','CV0248'],
  ['IM Motors','LS7','Mid-size SUV','Electric','Electric motor(s)','—','5','','2022','CV0249'],
  ['Abarth','595','Hot Hatch','Petrol','1.4L turbo 4-cyl','~145–180 hp','4','','2008','CV0250'],
  ['Abarth','500e','Hot Hatch','Electric','Electric motor','~153 hp','4','','2023','CV0251'],
  ['Alfa Romeo','Giulia','Sedan','Petrol','2.0L turbo / 2.9L twin-turbo V6','~280–505 hp','5','','2016','CV0252'],
  ['Alfa Romeo','Stelvio','Compact SUV','Petrol','2.0L turbo 4-cyl','~280 hp','5','','2017','CV0253'],
  ['Alfa Romeo','Tonale','Compact SUV','Petrol / Plug-in hybrid','1.3L–1.5L turbo','~160–275 hp','5','','2022','CV0254'],
  ['Chrysler','Pacifica','Minivan / MPV','Petrol / Plug-in hybrid','3.6L V6','~287 hp','7–8','','2017','CV0255'],
  ['Chrysler','300','Sedan','Petrol','3.6L V6 / 5.7L V8','~292–363 hp','5','','2011','CV0256'],
  ['Citroën','C3','Hatchback','Petrol / Diesel','1.2L 3-cyl','~82–110 hp','5','','2016','CV0257'],
  ['Citroën','C4','Crossover','Petrol / Diesel / Electric','1.2L turbo 3-cyl','~130 hp','5','','2020','CV0258'],
  ['Citroën','C5 Aircross','Compact SUV','Petrol / Diesel / Plug-in hybrid','1.2L–1.6L','~130–225 hp','5','','2018','CV0259'],
  ['Dodge','Challenger','Muscle Car','Petrol','3.6L V6 / 6.2L supercharged V8','~303–807 hp','5','','2008','CV0260'],
  ['Dodge','Charger','Muscle Car','Petrol','3.6L V6 / 6.4L V8','~292–485 hp','5','','2011','CV0261'],
  ['Dodge','Durango','SUV','Petrol','3.6L V6 / 6.4L V8','~293–475 hp','7','','2011','CV0262'],
  ['DS','DS 7','Compact SUV','Petrol / Diesel / Plug-in hybrid','1.6L turbo 4-cyl','~130–300 hp','5','','2018','CV0263'],
  ['DS','DS 3','Crossover','Petrol / Electric','1.2L turbo 3-cyl','~130–156 hp','5','','2019','CV0264'],
  ['DS','DS 9','Sedan','Plug-in hybrid','1.6L turbo + electric motor','~225–360 hp','5','','2021','CV0265'],
  ['Fiat','500','Hatchback','Petrol / Hybrid / Electric','1.0L mild hybrid','~70–118 hp','4','','2007','CV0266'],
  ['Fiat','Panda','Hatchback','Petrol / Hybrid','1.0L mild hybrid','~70 hp','5','','2011','CV0267'],
  ['Fiat','Tipo','Sedan','Petrol','1.0L turbo 3-cyl','~100 hp','5','','2016','CV0268'],
  ['Lancia','Ypsilon','Hatchback','Petrol / Hybrid / Electric','1.2L mild hybrid','~70–156 hp','5','','2024','CV0269'],
  ['Lancia','Delta Integrale','Classic Car','Petrol','2.0L turbo 4-cyl','~210 hp','5','','1987','CV0270'],
  ['Opel','Corsa','Hatchback','Petrol / Diesel / Electric','1.2L 3-cyl','~75–154 hp','5','','2019','CV0271'],
  ['Opel','Astra','Hatchback','Petrol / Plug-in hybrid','1.2L turbo 3-cyl','~110–225 hp','5','','2021','CV0272'],
  ['Opel','Mokka','Compact SUV','Petrol / Electric','1.2L turbo 3-cyl','~100–156 hp','5','','2020','CV0273'],
  ['Peugeot','208','Hatchback','Petrol / Electric','1.2L 3-cyl','~75–156 hp','5','','2019','CV0274'],
  ['Peugeot','308','Hatchback','Petrol / Plug-in hybrid','1.2L turbo 3-cyl','~130–225 hp','5','','2021','CV0275'],
  ['Peugeot','3008','Compact SUV','Petrol / Hybrid / Electric','1.2L turbo 3-cyl','~136–300 hp','5','','2024','CV0276'],
  ['Ram','1500','Pickup Truck','Petrol / Diesel','3.6L V6 / 5.7L V8','~305–702 hp','5–6','','2019','CV0277'],
  ['Ram','2500','Pickup Truck','Petrol / Diesel','6.4L V8 / 6.7L diesel','~370–410 hp','6','','2019','CV0278'],
  ['Ram','ProMaster','Van','Petrol','3.6L V6','~280 hp','2–3','','2014','CV0279'],
  ['Vauxhall','Corsa','Hatchback','Petrol / Diesel / Electric','1.2L 3-cyl','~75–154 hp','5','','2019','CV0280'],
  ['Vauxhall','Astra','Hatchback','Petrol / Plug-in hybrid','1.2L turbo 3-cyl','~110–225 hp','5','','2021','CV0281'],
  ['Vauxhall','Mokka','Compact SUV','Petrol / Electric','1.2L turbo 3-cyl','~100–156 hp','5','','2020','CV0282'],
  ['Subaru','Outback','Station Wagon / Estate','Petrol','2.5L / 2.4L turbo 4-cyl','~182–260 hp','5','','2020','CV0283'],
  ['Subaru','Forester','Compact SUV','Petrol','2.5L 4-cyl','~182 hp','5','','2019','CV0284'],
  ['Subaru','WRX','Sedan','Petrol','2.4L turbo 4-cyl','~271 hp','5','','2022','CV0285'],
  ['Subaru','BRZ','Coupe','Petrol','2.4L 4-cyl','~228 hp','4','','2021','CV0286'],
  ['Suzuki','Swift','Hatchback','Petrol (mild hybrid)','1.2L 3-cyl','~82–90 hp','5','','2024','CV0287'],
  ['Suzuki','Jimny','Off-Road / 4x4','Petrol','1.5L 4-cyl','~102 hp','4','','2018','CV0288'],
  ['Suzuki','Vitara','Compact SUV','Petrol / Hybrid','1.4L turbo 4-cyl','~129 hp','5','','2015','CV0289'],
  ['Tata','Nexon','Compact SUV','Petrol / Diesel / Electric','1.2L turbo 3-cyl / 1.5L diesel','~113–118 hp','5','','2017','CV0290'],
  ['Tata','Harrier','Mid-size SUV','Diesel','2.0L turbo diesel','~168 hp','5','','2019','CV0291'],
  ['Tata','Safari','SUV','Diesel','2.0L turbo diesel','~168 hp','6–7','','2021','CV0292'],
  ['Tata','Punch','Compact SUV','Petrol / Electric','1.2L 3-cyl','~86 hp','5','','2021','CV0293'],
  ['Daihatsu','Rocky','Compact SUV','Petrol / Hybrid','1.0L turbo / 1.2L 3-cyl','~86–98 hp','5','','2019','CV0294'],
  ['Daihatsu','Copen','Roadster','Petrol','0.66L turbo 3-cyl','~64 hp','2','','2014','CV0295'],
  ['Daihatsu','Mira e:S','Kei Car','Petrol','0.66L 3-cyl','~52 hp','4','','2011','CV0296'],
  ['Lexus','RX','Luxury SUV','Petrol / Hybrid / Plug-in hybrid','2.4L turbo / 2.5L hybrid','~275–366 hp','5','','2023','CV0297'],
  ['Lexus','ES','Sedan','Hybrid / Petrol','2.5L 4-cyl hybrid','~215 hp','5','','2019','CV0298'],
  ['Lexus','LC 500','Grand Tourer (GT)','Petrol','5.0L V8','~471 hp','2+2','','2017','CV0299'],
  ['VinFast','VF 8','Mid-size SUV','Electric','Electric motor(s)','~349–402 hp','5','','2022','CV0300'],
  ['VinFast','VF 9','Full-size SUV','Electric','Electric motors','~402 hp','6–7','','2022','CV0301'],
  ['VinFast','VF 3','Microcar','Electric','Electric motor','~43 hp','4','','2024','CV0302'],
  ['Škoda','Octavia','Liftback','Petrol / Diesel / Plug-in hybrid','1.0L–2.0L','~110–265 hp','5','','2020','CV0303'],
  ['Škoda','Superb','Liftback','Petrol / Diesel / Plug-in hybrid','1.5L–2.0L','~150–265 hp','5','','2023','CV0304'],
  ['Škoda','Kodiaq','Mid-size SUV','Petrol / Diesel / Plug-in hybrid','1.5L–2.0L','~150–245 hp','5–7','','2024','CV0305'],
  ['SEAT','Ibiza','Hatchback','Petrol','1.0L 3-cyl','~80–110 hp','5','','2017','CV0306'],
  ['SEAT','Leon','Hatchback','Petrol / Plug-in hybrid','1.0L–2.0L','~110–245 hp','5','','2020','CV0307'],
  ['SEAT','Ateca','Compact SUV','Petrol / Diesel','1.0L–2.0L','~110–190 hp','5','','2016','CV0308'],
  ['CUPRA','Formentor','Crossover','Petrol / Plug-in hybrid','1.5L–2.0L turbo','~150–390 hp','5','','2020','CV0309'],
  ['CUPRA','Born','Hatchback','Electric','Electric motor','~204–231 hp','5','','2021','CV0310'],
  ['CUPRA','Leon','Hot Hatch','Petrol / Plug-in hybrid','1.5L–2.0L turbo','~150–310 hp','5','','2020','CV0311'],
  ['XPeng','P7','Sedan','Electric','Electric motor(s)','~276–473 hp','5','','2020','CV0312'],
  ['XPeng','G6','Crossover','Electric','Electric motor(s)','—','5','','2023','CV0313'],
  ['XPeng','G9','Mid-size SUV','Electric','Electric motor(s)','—','5','','2022','CV0314'],
  ['Aston Martin','Vantage Roadster','Convertible','Petrol','4.0L twin-turbo V8','~656 hp','2','','2025','CV0315'],
  ['Aston Martin','Vantage S','Sports Car','Petrol','4.0L twin-turbo V8','~670 hp','2','','2025','CV0316'],
  ['Aston Martin','Vantage S Roadster','Convertible','Petrol','4.0L twin-turbo V8','~670 hp','2','','2025','CV0317'],
  ['Aston Martin','DB12 Volante','Convertible','Petrol','4.0L twin-turbo V8','~671 hp','4','','2023','CV0318'],
  ['Aston Martin','DB12 S','Grand Tourer (GT)','Petrol','4.0L twin-turbo V8','~690 hp','4','','2025','CV0319'],
  ['Aston Martin','DB12 S Volante','Convertible','Petrol','4.0L twin-turbo V8','~690 hp','4','','2025','CV0320'],
  ['Aston Martin','Vanquish','Grand Tourer (GT)','Petrol','5.2L twin-turbo V12','~824 hp','4','','2024','CV0321'],
  ['Aston Martin','Vanquish Volante','Convertible','Petrol','5.2L twin-turbo V12','~824 hp','4','','2025','CV0322'],
  ['Aston Martin','DBX','Luxury SUV','Petrol','4.0L twin-turbo V8','~542 hp','5','','2020','CV0323'],
  ['Aston Martin','DBX S','Luxury SUV','Petrol','4.0L twin-turbo V8','~717 hp','5','','2025','CV0324'],
  ['Aston Martin','Valhalla','Supercar','Plug-in hybrid','4.0L twin-turbo V8 (+ electric motors)','~1,064 hp','2','','2025','CV0325'],
  ['Aston Martin','Valkyrie','Hypercar','Hybrid','6.5L naturally aspirated V12 (+ electric motor)','~1,160 hp','2','','2021','CV0326'],
  ['Aston Martin','Valkyrie Spider','Hypercar','Hybrid','6.5L naturally aspirated V12 (+ electric motor)','~1,160 hp','2','','2022','CV0327'],
  ['Aston Martin','Valkyrie AMR Pro','Supercar','Petrol','6.5L naturally aspirated V12','~1,100 hp (est.)','1','','—','CV0328'],
  ['Aston Martin','Valkyrie LM','Hypercar','Hybrid','6.5L naturally aspirated V12','—','2','','2025','CV0329'],
  ['Aston Martin','Valour','Supercar','Petrol','5.2L twin-turbo V12','~705 hp','2','','2023','CV0330'],
  ['Aston Martin','Valiant','Supercar','Petrol','5.2L twin-turbo V12','~735 hp','1','','2024','CV0331'],
  ['Aston Martin','Valen','Supercar','Petrol','5.2L twin-turbo V12','~838 hp','1','','2026','CV0332'],
  ['Bentley','Bentayga EWB','Luxury SUV','Petrol','—','—','5','','—','CV0333'],
  ['Bentley','Bentayga Speed','Luxury SUV','Petrol','—','—','5','','—','CV0334'],
  ['Bentley','Bentayga EWB Mulliner','Luxury SUV','Petrol','—','—','5','','—','CV0335'],
  ['Bentley','Continental GT Speed','Grand Tourer (GT)','Petrol','—','—','4','','—','CV0336'],
  ['Bentley','Continental GT Speed Convertible','Convertible','Petrol','—','—','4','','—','CV0337'],
  ['Bentley','Flying Spur Speed','Luxury Car','Petrol / Plug-in hybrid','—','—','5','','—','CV0338'],
  ['Bentley','Flying Spur Mulliner','Luxury Car','Petrol / Plug-in hybrid','—','—','5','','—','CV0339'],
  ['Bentley','Bacalar','Roadster','Petrol','—','—','2','','—','CV0340'],
  ['Bentley','Batur','Grand Tourer (GT)','Petrol','—','—','2','','—','CV0341'],
  ['Bentley','Batur Convertible','Convertible','Petrol','—','—','2','','—','CV0342'],
  ['Bentley','Mulliner Blower','Classic Car','Petrol','—','—','2','','—','CV0343'],
  ['Bentley','Mulliner Blower Continuation Series','Classic Car','Petrol','—','—','2','','—','CV0344'],
  ['Ferrari','Amalfi','Grand Tourer (GT)','Petrol','—','—','2','','—','CV0345'],
  ['Ferrari','296 GTS','Convertible','Petrol','—','—','2','','—','CV0346'],
  ['Ferrari','12Cilindri','Grand Tourer (GT)','Petrol','—','—','2','','—','CV0347'],
  ['Ferrari','12Cilindri Spider','Convertible','Petrol','—','—','2','','—','CV0348'],
  ['Ferrari','Roma Spider','Convertible','Petrol','—','—','2','','—','CV0349'],
  ['Ferrari','SF90 Spider','Convertible','Petrol','—','—','2','','—','CV0350'],
  ['Ferrari','849 Testarossa','Supercar','Plug-in hybrid','—','—','2','','—','CV0351'],
  ['Ferrari','849 Testarossa Spider','Convertible','Petrol','—','—','2','','—','CV0352'],
  ['Ferrari','296 Speciale','Supercar','Plug-in hybrid','—','—','2','','—','CV0353'],
  ['Ferrari','296 Speciale A','Supercar','Plug-in hybrid','—','—','2','','—','CV0354'],
  ['Ferrari','F80','Hypercar','Plug-in hybrid','—','—','2','','—','CV0355'],
  ['Ferrari','Daytona SP3','Supercar','Petrol','—','—','2','','—','CV0356'],
  ['Ferrari','499P Modificata','Hypercar','Petrol','—','—','1','','—','CV0357'],
  ['Ferrari','KC23','Hypercar','Petrol','—','—','1','','—','CV0358'],
  ['Ferrari','Monza SP1','Supercar','Petrol','—','—','2','','—','CV0359'],
  ['Ferrari','Monza SP2','Supercar','Petrol','—','—','2','','—','CV0360'],
  ['Koenigsegg','CC8S','Hypercar','Petrol','—','—','2','','—','CV0361'],
  ['Koenigsegg','CCR','Hypercar','Petrol','—','—','2','','—','CV0362'],
  ['Koenigsegg','CCX','Hypercar','Petrol','—','—','2','','—','CV0363'],
  ['Koenigsegg','CCXR','Hypercar','Petrol','—','—','2','','—','CV0364'],
  ['Koenigsegg','Agera','Hypercar','Petrol','—','—','2','','—','CV0365'],
  ['Koenigsegg','Agera R','Hypercar','Petrol','—','—','2','','—','CV0366'],
  ['Koenigsegg','Agera S','Hypercar','Petrol','—','—','2','','—','CV0367'],
  ['Koenigsegg','Agera RS','Hypercar','Petrol','—','—','2','','—','CV0368'],
  ['Koenigsegg','One:1','Hypercar','Petrol','—','—','2','','—','CV0369'],
  ['Koenigsegg','Jesko Attack','Hypercar','Petrol','—','—','2','','—','CV0370'],
  ['Koenigsegg','Jesko Absolut','Hypercar','Petrol','—','—','2','','—','CV0371'],
  ['Koenigsegg','CC850','Hypercar','Petrol','—','—','2','','—','CV0372'],
  ['Koenigsegg','Chimera','Hypercar','Petrol','—','—','2','','—','CV0373'],
  ['Li Auto','L6','Mid-size SUV','Plug-in hybrid (range-extender)','—','—','5','','—','CV0374'],
  ['Li Auto','L8','Mid-size SUV','Plug-in hybrid (range-extender)','—','—','5','','—','CV0375'],
  ['Li Auto','i8','Mid-size SUV','Electric','—','—','5','','—','CV0376'],
  ['Li Auto','i6','Mid-size SUV','Electric','—','—','5','','—','CV0377'],
  ['Li Auto','i9','Mid-size SUV','Electric','—','—','5','','—','CV0378'],
  ['Lucid','Air Pure','Luxury Car','Electric','—','—','5','','—','CV0379'],
  ['Lucid','Air Touring','Luxury Car','Electric','—','—','5','','—','CV0380'],
  ['Lucid','Air Grand Touring','Luxury Car','Electric','—','—','5','','—','CV0381'],
  ['Lucid','Air Sapphire','Luxury Car','Electric','—','—','5','','—','CV0382'],
  ['Lucid','Gravity Touring','Luxury SUV','Electric','—','—','7','','—','CV0383'],
  ['Lucid','Gravity Grand Touring','Luxury SUV','Electric','—','—','7','','—','CV0384'],
  ['Lucid','Gravity X','Luxury SUV','Electric','—','—','7','','—','CV0385'],
  ['Lamborghini','Temerario','Supercar','Plug-in hybrid','—','—','2','','—','CV0386'],
  ['Lamborghini','Urus S','Luxury SUV','Petrol','—','—','5','','—','CV0387'],
  ['Lamborghini','Urus SE','Luxury SUV','Petrol','—','—','5','','—','CV0388'],
  ['Lamborghini','Urus Performante','Luxury SUV','Petrol','—','—','5','','—','CV0389'],
  ['Lamborghini','Fenomeno','Supercar','Plug-in hybrid','—','—','2','','—','CV0390'],
  ['Lamborghini','Countach LPI 800-4','Supercar','Plug-in hybrid','—','—','2','','—','CV0391'],
  ['Lamborghini','Sián FKP 37','Supercar','Plug-in hybrid','—','—','2','','—','CV0392'],
  ['Lamborghini','Sián Roadster','Convertible','Petrol','—','—','2','','—','CV0393'],
  ['Lamborghini','Centenario','Supercar','Plug-in hybrid','—','—','2','','—','CV0394'],
  ['Lamborghini','Centenario Roadster','Convertible','Petrol','—','—','2','','—','CV0395'],
  ['Lamborghini','Veneno','Supercar','Plug-in hybrid','—','—','2','','—','CV0396'],
  ['Lamborghini','Veneno Roadster','Convertible','Petrol','—','—','2','','—','CV0397'],
  ['Lamborghini','Aventador','Supercar','Petrol','—','—','2','','—','CV0398'],
  ['Lamborghini','Aventador SVJ','Supercar','Petrol','—','—','2','','—','CV0399'],
  ['Lamborghini','Huracán STO','Supercar','Petrol','—','—','2','','—','CV0400'],
  ['Lamborghini','Huracán Tecnica','Supercar','Petrol','—','—','2','','—','CV0401'],
  ['Lamborghini','Huracán Sterrato','Supercar','Petrol','—','—','2','','—','CV0402'],
  ['Lamborghini','Huracán EVO','Supercar','Petrol','—','—','2','','—','CV0403'],
  ['Lamborghini','Gallardo','Supercar','Petrol','—','—','2','','—','CV0404'],
  ['Lamborghini','Murciélago','Supercar','Petrol','—','—','2','','—','CV0405'],
  ['Lamborghini','Diablo','Supercar','Petrol','—','—','2','','—','CV0406'],
  ['Lamborghini','Countach','Supercar','Petrol','—','—','2','','—','CV0407'],
  ['Lamborghini','Miura','Supercar','Petrol','—','—','2','','—','CV0408'],
  ['Lamborghini','Sián','Supercar','Plug-in hybrid','—','—','2','','—','CV0409'],
  ['Mahindra','XUV 3XO','Compact SUV','Petrol / Diesel','—','—','5','','—','CV0410'],
  ['Mahindra','XUV400','SUV','Electric','—','—','5','','—','CV0411'],
  ['Mahindra','Scorpio','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV0412'],
  ['Mahindra','Thar Roxx','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV0413'],
  ['Mahindra','Bolero','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV0414'],
  ['Mahindra','Bolero Neo','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV0415'],
  ['Mahindra','Marazzo','Minivan / MPV','Diesel','—','—','7','','—','CV0416'],
  ['Mahindra','XUV500','SUV','Diesel','—','—','7','','—','CV0417'],
  ['Mahindra','TUV300','SUV','Diesel','—','—','7','','—','CV0418'],
  ['Mahindra','KUV100','SUV','Diesel','—','—','7','','—','CV0419'],
  ['Mahindra','Alturas G4','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV0420'],
  ['Mahindra','BE 6','SUV','Electric','—','—','5','','—','CV0421'],
  ['Mahindra','BE 6e','SUV','Electric','—','—','5','','—','CV0422'],
  ['Mahindra','XEV 9e','SUV','Electric','—','—','5','','—','CV0423'],
  ['Mahindra','XEV 9S','SUV','Electric','—','—','5','','—','CV0424'],
  ['Mahindra','XEV 9','SUV','Electric','—','—','5','','—','CV0425'],
  ['Mahindra','XUV 9e','SUV','Electric','—','—','5','','—','CV0426'],
  ['Mahindra','Thar.e','SUV','Electric','—','—','5','','—','CV0427'],
  ['Mahindra','Vision Thar','Concept Car','Petrol','—','—','5','','—','CV0428'],
  ['Mahindra','Global Pik Up','Pickup Truck','Diesel','—','—','5','','—','CV0429'],
  ['Maserati','Grecale','Mid-size SUV','Petrol','—','—','5','','—','CV0430'],
  ['Maserati','GranCabrio','Convertible','Petrol','—','—','4','','—','CV0431'],
  ['Maserati','MC20 Cielo','Convertible','Petrol','—','—','2','','—','CV0432'],
  ['Maserati','MCPura','Supercar','Petrol','—','—','2','','—','CV0433'],
  ['Maserati','MCPura Cielo','Convertible','Petrol','—','—','2','','—','CV0434'],
  ['Maserati','Quattroporte','Luxury Car','Petrol','—','—','5','','—','CV0435'],
  ['Maserati','Ghibli','Luxury Car','Petrol','—','—','5','','—','CV0436'],
  ['Maserati','MC20 Icona','Supercar','Petrol','—','—','2','','—','CV0437'],
  ['Maserati','MC20 Leggenda','Supercar','Petrol','—','—','2','','—','CV0438'],
  ['Maserati','MC20 Cielo Notte','Convertible','Petrol','—','—','2','','—','CV0439'],
  ['Maserati','GranTurismo Folgore','Grand Tourer (GT)','Electric','—','—','4','','—','CV0440'],
  ['Maserati','GranCabrio Folgore','Grand Tourer (GT)','Electric','—','—','4','','—','CV0441'],
  ['Mazda','Mazda2','Hatchback','Petrol','—','—','5','','—','CV0442'],
  ['Mazda','Mazda6e','Sedan','Electric','—','—','5','','—','CV0443'],
  ['Mazda','CX-3','Compact SUV','Petrol','—','—','5','','—','CV0444'],
  ['Mazda','CX-30','Compact SUV','Petrol','—','—','5','','—','CV0445'],
  ['Mazda','CX-50','Compact SUV','Petrol','—','—','5','','—','CV0446'],
  ['Mazda','CX-60','Mid-size SUV','Petrol / Plug-in hybrid','—','—','5','','—','CV0447'],
  ['Mazda','CX-70','Mid-size SUV','Petrol / Plug-in hybrid','—','—','5','','—','CV0448'],
  ['Mazda','CX-80','Mid-size SUV','Petrol / Plug-in hybrid','—','—','7','','—','CV0449'],
  ['Mazda','CX-90','Mid-size SUV','Petrol / Plug-in hybrid','—','—','7','','—','CV0450'],
  ['Mazda','CX-90 PHEV','Mid-size SUV','Petrol / Plug-in hybrid','—','—','7','','—','CV0451'],
  ['Mazda','CX-90 Inline 6','Mid-size SUV','Petrol / Plug-in hybrid','—','—','7','','—','CV0452'],
  ['Mazda','MX-30','Compact SUV','Electric','—','—','5','','—','CV0453'],
  ['Mazda','EZ-6','Sedan','Electric','—','—','5','','—','CV0454'],
  ['Mazda','EZ-60','Sedan','Electric','—','—','5','','—','CV0455'],
  ['Mazda','CX-8','Mid-size SUV','Petrol / Plug-in hybrid','—','—','7','','—','CV0456'],
  ['Mazda','CX-9','Mid-size SUV','Petrol / Plug-in hybrid','—','—','7','','—','CV0457'],
  ['Mazda','MX-5 Miata RF','Roadster','Petrol','—','—','2','','—','CV0458'],
  ['Mazda','MX-5 Miata 35th Anniversary','Roadster','Petrol','—','—','2','','—','CV0459'],
  ['Mazda','Mazda3 Turbo','Hatchback','Petrol','—','—','5','','—','CV0460'],
  ['McLaren','Artura Spider','Convertible','Plug-in hybrid','—','—','2','','—','CV0461'],
  ['McLaren','750S Spider','Convertible','Petrol','—','—','2','','—','CV0462'],
  ['McLaren','GTS','Grand Tourer (GT)','Petrol','—','—','2','','—','CV0463'],
  ['McLaren','W1','Hypercar','Plug-in hybrid','—','—','2','','—','CV0464'],
  ['McLaren','750S Le Mans','Supercar','Petrol','—','—','2','','—','CV0465'],
  ['McLaren','Senna','Hypercar','Petrol','—','—','2','','—','CV0466'],
  ['McLaren','Senna GTR','Hypercar','Petrol','—','—','2','','—','CV0467'],
  ['McLaren','Speedtail','Hypercar','Petrol','—','—','2','','—','CV0468'],
  ['McLaren','Elva','Hypercar','Petrol','—','—','2','','—','CV0469'],
  ['McLaren','Sabre','Hypercar','Petrol','—','—','2','','—','CV0470'],
  ['McLaren','Solus GT','Hypercar','Petrol','—','—','2','','—','CV0471'],
  ['McLaren','P1','Hypercar','Petrol','—','—','2','','—','CV0472'],
  ['McLaren','P1 GTR','Hypercar','Petrol','—','—','2','','—','CV0473'],
  ['McLaren','765LT','Supercar','Petrol','—','—','2','','—','CV0474'],
  ['McLaren','765LT Spider','Convertible','Petrol','—','—','2','','—','CV0475'],
  ['McLaren','720S','Supercar','Petrol','—','—','2','','—','CV0476'],
  ['McLaren','720S Spider','Convertible','Petrol','—','—','2','','—','CV0477'],
  ['McLaren','600LT','Supercar','Petrol','—','—','2','','—','CV0478'],
  ['McLaren','600LT Spider','Convertible','Petrol','—','—','2','','—','CV0479'],
  ['McLaren','570S','Supercar','Petrol','—','—','2','','—','CV0480'],
  ['McLaren','570S Spider','Convertible','Petrol','—','—','2','','—','CV0481'],
  ['McLaren','570GT','Supercar','Petrol','—','—','2','','—','CV0482'],
  ['McLaren','540C','Supercar','Petrol','—','—','2','','—','CV0483'],
  ['McLaren','675LT','Supercar','Petrol','—','—','2','','—','CV0484'],
  ['McLaren','650S','Supercar','Petrol','—','—','2','','—','CV0485'],
  ['McLaren','650S Spider','Convertible','Petrol','—','—','2','','—','CV0486'],
  ['McLaren','MP4-12C','Supercar','Petrol','—','—','2','','—','CV0487'],
  ['McLaren','12C Spider','Convertible','Petrol','—','—','2','','—','CV0488'],
  ['Mitsubishi','Outlander PHEV','Mid-size SUV','Plug-in hybrid','—','—','7','','—','CV0489'],
  ['Mitsubishi','Eclipse Cross','Compact SUV','Petrol','—','—','5','','—','CV0490'],
  ['Mitsubishi','ASX','Compact SUV','Petrol','—','—','5','','—','CV0491'],
  ['Mitsubishi','RVR','Compact SUV','Petrol','—','—','5','','—','CV0492'],
  ['Mitsubishi','Xforce','Compact SUV','Petrol','—','—','5','','—','CV0493'],
  ['Mitsubishi','Xpander','Minivan / MPV','Petrol','—','—','7','','—','CV0494'],
  ['Mitsubishi','Xpander Cross','Minivan / MPV','Petrol','—','—','7','','—','CV0495'],
  ['Mitsubishi','L200','Pickup Truck','Diesel','—','—','5','','—','CV0496'],
  ['Mitsubishi','Delica D:5','Minivan / MPV','Diesel','—','—','7','','—','CV0497'],
  ['Mitsubishi','Delica Mini','Kei Car','Petrol','—','—','4','','—','CV0498'],
  ['Mitsubishi','Colt','Hatchback','Petrol','—','—','5','','—','CV0499'],
  ['Mitsubishi','Mirage','Hatchback','Petrol','—','—','5','','—','CV0500'],
  ['Mitsubishi','Attrage','Sedan','Petrol','—','—','5','','—','CV0501'],
  ['Mitsubishi','Pajero','Off-Road / 4x4','Petrol / Diesel','—','—','7','','—','CV0502'],
  ['Mitsubishi','Lancer','Sedan','Petrol','—','—','5','','—','CV0503'],
  ['Mitsubishi','Lancer Evolution','Sedan','Petrol','—','—','5','','—','CV0504'],
  ['Mitsubishi','Eclipse','Coupe','Petrol','—','—','4','','—','CV0505'],
  ['Mitsubishi','3000GT','Coupe','Petrol','—','—','4','','—','CV0506'],
  ['Mitsubishi','Galant','Sedan','Petrol','—','—','5','','—','CV0507'],
  ['Mitsubishi','FTO','Coupe','Petrol','—','—','4','','—','CV0508'],
  ['Mitsubishi','i-MiEV','Hatchback','Electric','—','—','4','','—','CV0509'],
  ['Proton','Persona','Sedan','Petrol','—','—','5','','—','CV0510'],
  ['Proton','Iriz','Hatchback','Petrol','—','—','5','','—','CV0511'],
  ['Proton','S70','Sedan','Petrol','—','—','5','','—','CV0512'],
  ['Proton','X90','Mid-size SUV','Petrol','—','—','7','','—','CV0513'],
  ['Proton','X70 PHEV','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0514'],
  ['Proton','e.MAS 5','Hatchback','Electric','—','—','5','','—','CV0515'],
  ['Proton','e.MAS 7','Compact SUV','Electric','—','—','5','','—','CV0516'],
  ['Proton','Exora','Minivan / MPV','Petrol','—','—','7','','—','CV0517'],
  ['Proton','Prevé','Sedan','Petrol','—','—','5','','—','CV0518'],
  ['Proton','Suprima S','Sedan','Petrol','—','—','5','','—','CV0519'],
  ['Proton','Perdana','Sedan','Petrol','—','—','5','','—','CV0520'],
  ['Proton','Inspira','Sedan','Petrol','—','—','5','','—','CV0521'],
  ['Proton','Waja','Sedan','Petrol','—','—','5','','—','CV0522'],
  ['Proton','Satria Neo','Hatchback','Petrol','—','—','5','','—','CV0523'],
  ['Proton','Gen-2','Hatchback','Petrol','—','—','5','','—','CV0524'],
  ['Proton','Savvy','Hatchback','Petrol','—','—','5','','—','CV0525'],
  ['Proton','Ertiga','Minivan / MPV','Petrol','—','—','7','','—','CV0526'],
  ['Rivian','R2','Mid-size SUV','Electric','—','—','5','','—','CV0527'],
  ['Rivian','R3','Compact SUV','Electric','—','—','5','','—','CV0528'],
  ['Rivian','R3X','Compact SUV','Electric','—','—','5','','—','CV0529'],
  ['Rivian','EDV 500','Van','Electric','—','—','2','','—','CV0530'],
  ['Rivian','EDV 700','Van','Electric','—','—','2','','—','CV0531'],
  ['Tesla','Model X','Mid-size SUV','Electric','—','—','6','','—','CV0532'],
  ['Tesla','Cybercab','Concept Car','Electric','—','—','2','','—','CV0533'],
  ['Tesla','Roadster','Roadster','Electric','—','—','4','','—','CV0534'],
  ['Tesla','Semi','Commercial Truck','Electric','—','—','1','','—','CV0535'],
  ['VinFast','VF 5','Compact SUV','Electric','—','—','5','','—','CV0536'],
  ['VinFast','VF 6','Compact SUV','Electric','—','—','5','','—','CV0537'],
  ['VinFast','VF 7','Compact SUV','Electric','—','—','5','','—','CV0538'],
  ['VinFast','VF e34','Compact SUV','Electric','—','—','5','','—','CV0539'],
  ['VinFast','VF Wild','Pickup Truck','Electric','—','—','5','','—','CV0540'],
  ['VinFast','LimoGreen','Minivan / MPV','Electric','—','—','7','','—','CV0541'],
  ['VinFast','Minio Green','Subcompact','Electric','—','—','4','','—','CV0542'],
  ['VinFast','Herio Green','Subcompact','Electric','—','—','4','','—','CV0543'],
  ['VinFast','Nerio Green','Subcompact','Electric','—','—','4','','—','CV0544'],
  ['VinFast','EC Van','Van','Electric','—','—','2','','—','CV0545'],
  ['XPeng','P5','Sedan','Electric','—','—','5','','—','CV0546'],
  ['XPeng','P7i','Sedan','Electric','—','—','5','','—','CV0547'],
  ['XPeng','G3','Compact SUV','Electric','—','—','5','','—','CV0548'],
  ['XPeng','G7','Mid-size SUV','Electric','—','—','5','','—','CV0549'],
  ['XPeng','X9','Minivan / MPV','Electric','—','—','7','','—','CV0550'],
  ['XPeng','X9 Ultra','Minivan / MPV','Electric','—','—','7','','—','CV0551'],
  ['XPeng','MONA M03','Sedan','Electric','—','—','5','','—','CV0552'],
  ['XPeng','MONA M03 Max','Sedan','Electric','—','—','5','','—','CV0553'],
  ['XPeng','P7+ Max','Sedan','Electric','—','—','5','','—','CV0554'],
  ['XPeng','X9 MPV','Minivan / MPV','Electric','—','—','7','','—','CV0555'],
  ['Subaru','Impreza','Hatchback','Petrol','—','—','5','','—','CV0556'],
  ['Subaru','Legacy','Sedan','Petrol','—','—','5','','—','CV0557'],
  ['Subaru','Crosstrek','Compact SUV','Petrol','—','—','5','','—','CV0558'],
  ['Subaru','Ascent','Mid-size SUV','Petrol','—','—','8','','—','CV0559'],
  ['Subaru','Solterra','Compact SUV','Electric','—','—','5','','—','CV0560'],
  ['Subaru','Trailseeker','Compact SUV','Electric','—','—','5','','—','CV0561'],
  ['Subaru','Uncharted','Compact SUV','Electric','—','—','5','','—','CV0562'],
  ['Subaru','Rex','Hatchback','Petrol','—','—','5','','—','CV0563'],
  ['Subaru','Levorg','Station Wagon / Estate','Petrol','—','—','5','','—','CV0564'],
  ['Subaru','Justy','Hatchback','Petrol','—','—','5','','—','CV0565'],
  ['Subaru','BRZ tS','Coupe','Petrol','—','—','4','','—','CV0566'],
  ['Subaru','WRX STI','Sedan','Petrol','—','—','5','','—','CV0567'],
  ['Subaru','WRX TR','Sedan','Petrol','—','—','5','','—','CV0568'],
  ['Subaru','BRZ STI Sport','Coupe','Petrol','—','—','4','','—','CV0569'],
  ['Subaru','S209','Sedan','Petrol','—','—','5','','—','CV0570'],
  ['Suzuki','Alto','Hatchback','Petrol','—','—','5','','—','CV0571'],
  ['Suzuki','Alto K10','Hatchback','Petrol','—','—','5','','—','CV0572'],
  ['Suzuki','Celerio','Hatchback','Petrol','—','—','5','','—','CV0573'],
  ['Suzuki','Dzire','Sedan','Petrol','—','—','5','','—','CV0574'],
  ['Suzuki','Baleno','Hatchback','Petrol','—','—','5','','—','CV0575'],
  ['Suzuki','Fronx','Compact SUV','Petrol','—','—','5','','—','CV0576'],
  ['Suzuki','Ignis','Hatchback','Petrol','—','—','5','','—','CV0577'],
  ['Suzuki','Wagon R','Hatchback','Petrol','—','—','5','','—','CV0578'],
  ['Suzuki','S-Presso','Hatchback','Petrol','—','—','5','','—','CV0579'],
  ['Suzuki','Brezza','Compact SUV','Petrol','—','—','5','','—','CV0580'],
  ['Suzuki','Grand Vitara','Compact SUV','Petrol','—','—','5','','—','CV0581'],
  ['Suzuki','Ertiga','Minivan / MPV','Petrol','—','—','7','','—','CV0582'],
  ['Suzuki','XL6','Minivan / MPV','Petrol','—','—','7','','—','CV0583'],
  ['Suzuki','Invicto','Minivan / MPV','Petrol','—','—','7','','—','CV0584'],
  ['Suzuki','Ciaz','Sedan','Petrol','—','—','5','','—','CV0585'],
  ['Suzuki','S-Cross','Compact SUV','Petrol','—','—','5','','—','CV0586'],
  ['Suzuki','Across','Compact SUV','Petrol','—','—','5','','—','CV0587'],
  ['Suzuki','Hustler','Hatchback','Petrol','—','—','5','','—','CV0588'],
  ['Suzuki','Spacia','Hatchback','Petrol','—','—','5','','—','CV0589'],
  ['Suzuki','Solio','Hatchback','Petrol','—','—','5','','—','CV0590'],
  ['Suzuki','Every','Hatchback','Petrol','—','—','5','','—','CV0591'],
  ['Suzuki','Jimny 5-Door','Off-Road / 4x4','Petrol','—','—','4','','—','CV0592'],
  ['Suzuki','Swift Sport','Hatchback','Petrol','—','—','5','','—','CV0593'],
  ['Suzuki','Jimny Sierra','Off-Road / 4x4','Petrol','—','—','4','','—','CV0594'],
  ['Suzuki','Swift RS','Hatchback','Petrol','—','—','5','','—','CV0595'],
  ['Volvo','EX40','Compact SUV','Electric','—','—','5','','—','CV0596'],
  ['Volvo','EX90','Mid-size SUV','Electric','—','—','7','','—','CV0597'],
  ['Volvo','EC40','Compact SUV','Electric','—','—','5','','—','CV0598'],
  ['Volvo','ES90','Sedan','Electric','—','—','5','','—','CV0599'],
  ['Volvo','XC40','Compact SUV','Petrol','—','—','5','','—','CV0600'],
  ['Volvo','S60','Sedan','Petrol','—','—','5','','—','CV0601'],
  ['Volvo','V60','Station Wagon / Estate','Petrol','—','—','5','','—','CV0602'],
  ['Volvo','V90','Station Wagon / Estate','Petrol','—','—','5','','—','CV0603'],
  ['Volvo','EM90','Mid-size SUV','Electric','—','—','7','','—','CV0604'],
  ['Volvo','C40 Recharge','Compact SUV','Electric','—','—','5','','—','CV0605'],
  ['Volvo','V60 Polestar Engineered','Station Wagon / Estate','Petrol','—','—','5','','—','CV0606'],
  ['Volvo','S60 Polestar Engineered','Sedan','Petrol','—','—','5','','—','CV0607'],
  ['Volvo','XC60 Polestar Engineered','Mid-size SUV','Petrol','—','—','5','','—','CV0608'],
  ['Volvo','XC90 T8','Mid-size SUV','Petrol','—','—','5','','—','CV0609'],
  ['Isuzu','D-Max V-Cross','Pickup Truck','Diesel','—','—','5','','—','CV0610'],
  ['Isuzu','D-Max X-Rider','Pickup Truck','Diesel','—','—','5','','—','CV0611'],
  ['Isuzu','D-Max Arctic Trucks AT35','Pickup Truck','Diesel','—','—','5','','—','CV0612'],
  ['Isuzu','MU-X X-Terrain','SUV','Diesel','—','—','7','','—','CV0613'],
  ['Isuzu','MU-X RS','SUV','Diesel','—','—','7','','—','CV0614'],
  ['Isuzu','MU-X 4x4','SUV','Diesel','—','—','7','','—','CV0615'],
  ['Isuzu','MU-X 4x2','SUV','Diesel','—','—','7','','—','CV0616'],
  ['Isuzu','MU-X EV','SUV','Electric','—','—','7','','—','CV0617'],
  ['Isuzu','MU-7','SUV','Diesel','—','—','7','','—','CV0618'],
  ['Isuzu','MU-7 Active','SUV','Diesel','—','—','7','','—','CV0619'],
  ['Isuzu','MU-X LS','SUV','Diesel','—','—','7','','—','CV0620'],
  ['Isuzu','Panther','SUV','Diesel','—','—','7','','—','CV0621'],
  ['Isuzu','Crosswind','SUV','Diesel','—','—','7','','—','CV0622'],
  ['Isuzu','VehiCROSS','Off-Road / 4x4','Petrol','—','—','2','','—','CV0623'],
  ['Isuzu','ELF','Commercial Truck','Diesel','—','—','3','','—','CV0624'],
  ['Isuzu','Forward','Commercial Truck','Diesel','—','—','3','','—','CV0625'],
  ['Isuzu','Giga','Commercial Truck','Diesel','—','—','3','','—','CV0626'],
  ['Isuzu','N-Series','Commercial Truck','Diesel','—','—','3','','—','CV0627'],
  ['Isuzu','F-Series','Commercial Truck','Diesel','—','—','3','','—','CV0628'],
  ['Isuzu','C-Series','Commercial Truck','Diesel','—','—','3','','—','CV0629'],
  ['IKCO','Tara','Sedan','Petrol','—','—','5','','—','CV0630'],
  ['IKCO','Dena Plus','Sedan','Petrol','—','—','5','','—','CV0631'],
  ['IKCO','Soren','Sedan','Petrol','—','—','5','','—','CV0632'],
  ['IKCO','Runna','Sedan','Petrol','—','—','5','','—','CV0633'],
  ['IKCO','Arisun','Pickup Truck','Petrol','—','—','3','','—','CV0634'],
  ['IKCO','Haima S5','Compact SUV','Petrol','—','—','5','','—','CV0635'],
  ['IKCO','Haima S7','Compact SUV','Petrol','—','—','5','','—','CV0636'],
  ['IKCO','Haima 8S','Compact SUV','Petrol','—','—','5','','—','CV0637'],
  ['IKCO','Haima 7X','Compact SUV','Petrol','—','—','5','','—','CV0638'],
  ['IKCO','Peugeot 405','Sedan','Petrol','—','—','5','','—','CV0639'],
  ['IKCO','Peugeot Pars','Sedan','Petrol','—','—','5','','—','CV0640'],
  ['IKCO','Peugeot 206','Hatchback','Petrol','—','—','5','','—','CV0641'],
  ['IKCO','Peugeot 207','Hatchback','Petrol','—','—','5','','—','CV0642'],
  ['IKCO','Peugeot 2008','Compact SUV','Petrol','—','—','5','','—','CV0643'],
  ['Tata','Tiago','Hatchback','Petrol','—','—','5','','—','CV0644'],
  ['Tata','Tigor','Sedan','Petrol','—','—','5','','—','CV0645'],
  ['Tata','Altroz','Hatchback','Petrol','—','—','5','','—','CV0646'],
  ['Tata','Curvv','Compact SUV','Petrol','—','—','5','','—','CV0647'],
  ['Tata','Tiago EV','Hatchback','Electric','—','—','5','','—','CV0648'],
  ['Tata','Tigor EV','Sedan','Electric','—','—','5','','—','CV0649'],
  ['Tata','Punch EV','Compact SUV','Electric','—','—','5','','—','CV0650'],
  ['Tata','Nexon EV','Compact SUV','Electric','—','—','5','','—','CV0651'],
  ['Tata','Curvv EV','Compact SUV','Electric','—','—','5','','—','CV0652'],
  ['Tata','Harrier EV','Mid-size SUV','Electric','—','—','5','','—','CV0653'],
  ['Tata','Sierra','Mid-size SUV','Petrol','—','—','5','','—','CV0654'],
  ['Tata','Avinya','Concept Car','Electric','—','—','5','','—','CV0655'],
  ['Tata','Altroz Racer','Hatchback','Petrol','—','—','5','','—','CV0656'],
  ['Tata','Nexon iCNG','Compact SUV','Petrol / CNG','—','—','5','','—','CV0657'],
  ['Tata','Punch iCNG','Compact SUV','Petrol / CNG','—','—','5','','—','CV0658'],
  ['Tata','Curvv iCNG','Compact SUV','Petrol / CNG','—','—','5','','—','CV0659'],
  ['Rolls-Royce','Phantom Extended','Luxury Car','Petrol','6.75L twin-turbo V12','~563 hp','5','','2017','CV0660'],
  ['Rolls-Royce','Ghost Extended','Luxury Car','Petrol','—','—','5','','—','CV0661'],
  ['Rolls-Royce','Spectre Black Badge','Coupe','Electric','Dual electric motors','~659 hp','4','','2025','CV0662'],
  ['Rolls-Royce','Ghost Black Badge','Luxury Car','Petrol','6.75L twin-turbo V12','~592 hp','5','','2021','CV0663'],
  ['Rolls-Royce','Cullinan Black Badge','Luxury SUV','Petrol','6.75L twin-turbo V12','~592 hp','5','','2019','CV0664'],
  ['Rolls-Royce','Boat Tail','Coupe','Petrol','—','—','2','','—','CV0665'],
  ['Rolls-Royce','Droptail','Coupe','Petrol','—','—','2','','—','CV0666'],
  ['Rolls-Royce','Amethyst Droptail','Coupe','Petrol','—','—','2','','—','CV0667'],
  ['Rolls-Royce','Arcadia Droptail','Coupe','Petrol','—','—','2','','—','CV0668'],
  ['Rolls-Royce','La Rose Noire Droptail','Coupe','Petrol','—','—','2','','—','CV0669'],
  ['Rolls-Royce','Cullinan Series II','Luxury SUV','Petrol','—','—','5','','2024','CV0670'],
  ['Rolls-Royce','Black Badge Ghost','Luxury Car','Petrol','6.75L twin-turbo V12','~592 hp','5','','—','CV0671'],
  ['Rolls-Royce','Black Badge Cullinan','Luxury SUV','Petrol','6.75L twin-turbo V12','~592 hp','5','','—','CV0672'],
  ['Honda','City','Sedan','Petrol','—','—','5','','—','CV0673'],
  ['Honda','Amaze','Sedan','Petrol','—','—','5','','—','CV0674'],
  ['Honda','Integra','Liftback','Petrol','—','—','5','','—','CV0675'],
  ['Honda','HR-V','Compact SUV','Petrol','—','—','5','','—','CV0676'],
  ['Honda','ZR-V','Compact SUV','Petrol','—','—','5','','—','CV0677'],
  ['Honda','BR-V','Minivan / MPV','Petrol','—','—','7','','—','CV0678'],
  ['Honda','WR-V','Compact SUV','Petrol','—','—','5','','—','CV0679'],
  ['Honda','Elevate','Compact SUV','Petrol','—','—','5','','—','CV0680'],
  ['Honda','Pilot','Mid-size SUV','Petrol','—','—','7','','—','CV0681'],
  ['Honda','Passport','Mid-size SUV','Petrol','—','—','7','','—','CV0682'],
  ['Honda','Odyssey','Minivan / MPV','Petrol / Hybrid','—','—','8','','—','CV0683'],
  ['Honda','Prologue','Compact SUV','Electric','—','—','5','','—','CV0684'],
  ['Honda','e:Ny1','Compact SUV','Electric','—','—','5','','—','CV0685'],
  ['Honda','NSX','Supercar','Hybrid','—','—','2','','—','CV0686'],
  ['Honda','Prelude','Coupe','Hybrid','—','—','4','','—','CV0687'],
  ['Honda','Civic Si','Sedan','Petrol','—','—','5','','—','CV0688'],
  ['Acura','Integra Type S','Hatchback','Petrol','—','—','5','','—','CV0689'],
  ['Acura','TLX Type S','Sedan','Petrol','—','—','5','','—','CV0690'],
  ['Acura','ADX','Luxury SUV','Petrol','—','—','5','','—','CV0691'],
  ['Acura','RDX','Luxury SUV','Petrol','—','—','5','','—','CV0692'],
  ['Acura','MDX Type S','Luxury SUV','Petrol','—','—','5','','—','CV0693'],
  ['Acura','ZDX','Mid-size SUV','Electric','—','—','5','','—','CV0694'],
  ['Acura','ZDX Type S','Luxury SUV','Petrol','—','—','5','','—','CV0695'],
  ['Acura','NSX','Supercar','Hybrid','—','—','2','','—','CV0696'],
  ['Acura','NSX Type S','Luxury SUV','Petrol','—','—','5','','—','CV0697'],
  ['Nissan','Micra','Hatchback','Petrol','—','—','5','','—','CV0698'],
  ['Nissan','Versa','Sedan','Petrol','—','—','5','','—','CV0699'],
  ['Nissan','Sentra','Sedan','Petrol','—','—','5','','—','CV0700'],
  ['Nissan','Maxima','Sedan','Petrol','—','—','5','','—','CV0701'],
  ['Nissan','Kicks','Compact SUV','Petrol','—','—','5','','—','CV0702'],
  ['Nissan','Juke','Compact SUV','Petrol','—','—','5','','—','CV0703'],
  ['Nissan','Qashqai','Compact SUV','Petrol','—','—','5','','—','CV0704'],
  ['Nissan','X-Trail','Mid-size SUV','Petrol','—','—','5','','—','CV0705'],
  ['Nissan','Pathfinder','Mid-size SUV','Petrol','—','—','7','','—','CV0706'],
  ['Nissan','Armada','Mid-size SUV','Petrol','—','—','7','','—','CV0707'],
  ['Nissan','Murano','Mid-size SUV','Petrol','—','—','5','','—','CV0708'],
  ['Nissan','Ariya','Compact SUV','Electric','—','—','5','','—','CV0709'],
  ['Nissan','Z','Sports Car','Petrol','—','—','2','','—','CV0710'],
  ['Nissan','Magnite','Compact SUV','Petrol','—','—','5','','—','CV0711'],
  ['Nissan','Patrol','Full-size SUV','Petrol','—','—','8','','—','CV0712'],
  ['Nissan','Navara','Pickup Truck','Diesel','—','—','5','','—','CV0713'],
  ['Nissan','Frontier','Pickup Truck','Diesel','—','—','5','','—','CV0714'],
  ['Nissan','Serena','Minivan / MPV','Petrol','—','—','8','','—','CV0715'],
  ['Nissan','Note','Hatchback','Hybrid','—','—','5','','—','CV0716'],
  ['Nissan','Elgrand','Minivan / MPV','Petrol','—','—','8','','—','CV0717'],
  ['Infiniti','QX50','Luxury SUV','Petrol','—','—','5','','—','CV0718'],
  ['Infiniti','QX80','Full-size SUV','Petrol','—','—','7','','—','CV0719'],
  ['Infiniti','QX30','Luxury SUV','Petrol','—','—','5','','—','CV0720'],
  ['Infiniti','QX70','Luxury SUV','Petrol','—','—','5','','—','CV0721'],
  ['Infiniti','Q70','Sedan','Petrol','—','—','5','','—','CV0722'],
  ['Infiniti','Q60','Coupe','Petrol','—','—','4','','—','CV0723'],
  ['Chevrolet','Trax','Compact SUV','Petrol','—','—','5','','—','CV0724'],
  ['Chevrolet','Trailblazer','Compact SUV','Petrol','—','—','5','','—','CV0725'],
  ['Chevrolet','Equinox','Compact SUV','Petrol','—','—','5','','—','CV0726'],
  ['Chevrolet','Blazer','Mid-size SUV','Petrol','—','—','5','','—','CV0727'],
  ['Chevrolet','Traverse','Mid-size SUV','Petrol','—','—','5','','—','CV0728'],
  ['Chevrolet','Suburban','Full-size SUV','Petrol','—','—','8','','—','CV0729'],
  ['Chevrolet','Colorado','Pickup Truck','Petrol','—','—','5','','—','CV0730'],
  ['Chevrolet','Malibu','Sedan','Petrol','—','—','5','','—','CV0731'],
  ['Chevrolet','Bolt','Hatchback','Electric','—','—','5','','—','CV0732'],
  ['Chevrolet','Equinox EV','SUV','Electric','—','—','5','','—','CV0733'],
  ['Chevrolet','Blazer EV','SUV','Electric','—','—','5','','—','CV0734'],
  ['Chevrolet','Silverado EV','SUV','Electric','—','—','5','','—','CV0735'],
  ['Cadillac','CT4','Sedan','Petrol','—','—','5','','—','CV0736'],
  ['Cadillac','CT6','Sedan','Petrol','—','—','5','','—','CV0737'],
  ['Cadillac','XT4','Luxury SUV','Petrol','—','—','5','','—','CV0738'],
  ['Cadillac','XT5','Luxury SUV','Petrol','—','—','5','','—','CV0739'],
  ['Cadillac','XT6','Luxury SUV','Petrol','—','—','5','','—','CV0740'],
  ['Cadillac','Celestiq','Luxury Car','Electric','—','—','4','','—','CV0741'],
  ['Cadillac','Optiq','Luxury SUV','Electric','—','—','5','','—','CV0742'],
  ['Cadillac','Vistiq','Luxury SUV','Electric','—','—','5','','—','CV0743'],
  ['Cadillac','Escalade IQ','Full-size SUV','Electric','—','—','7','','—','CV0744'],
  ['Cadillac','Escalade IQL','Full-size SUV','Electric','—','—','7','','—','CV0745'],
  ['Buick','Envista','Compact SUV','Petrol','—','—','5','','—','CV0746'],
  ['Buick','Envision','Compact SUV','Petrol','—','—','5','','—','CV0747'],
  ['Buick','GL8','Minivan / MPV','Petrol','—','—','7','','—','CV0748'],
  ['Buick','Electra E5','Compact SUV','Electric','—','—','5','','—','CV0749'],
  ['Buick','Electra E4','Compact SUV','Electric','—','—','5','','—','CV0750'],
  ['GMC','Terrain','Compact SUV','Petrol','—','—','5','','—','CV0751'],
  ['GMC','Acadia','Mid-size SUV','Petrol','—','—','7','','—','CV0752'],
  ['GMC','Yukon XL','Full-size SUV','Petrol','—','—','8','','—','CV0753'],
  ['GMC','Canyon','Pickup Truck','Petrol','—','—','5','','—','CV0754'],
  ['GMC','Hummer EV SUV','SUV','Electric','—','—','5','','—','CV0755'],
  ['GMC','Sierra EV','Pickup Truck','Electric','—','—','5','','—','CV0756'],
  ['Ford','Mustang Dark Horse','Muscle Car','Petrol','—','—','4','','—','CV0757'],
  ['Ford','Taurus','Full-size Car','Petrol','—','—','5','','—','CV0758'],
  ['Ford','Puma','Compact SUV','Petrol','—','—','5','','—','CV0759'],
  ['Ford','Kuga','Compact SUV','Petrol','—','—','5','','—','CV0760'],
  ['Ford','Edge','Mid-size SUV','Petrol','—','—','5','','—','CV0761'],
  ['Ford','Bronco Sport','Compact SUV','Petrol','—','—','5','','—','CV0762'],
  ['Ford','Everest','Mid-size SUV','Petrol','—','—','7','','—','CV0763'],
  ['Ford','Expedition','Mid-size SUV','Petrol','—','—','7','','—','CV0764'],
  ['Ford','Escape','Compact SUV','Petrol','—','—','5','','—','CV0765'],
  ['Ford','Territory','Mid-size SUV','Petrol','—','—','5','','—','CV0766'],
  ['Ford','Maverick','Pickup Truck','Petrol','—','—','5','','—','CV0767'],
  ['Ford','Ranger','Pickup Truck','Petrol','—','—','5','','—','CV0768'],
  ['Ford','Transit','Van','Diesel','—','—','3','','—','CV0769'],
  ['Ford','E-Transit','Van','Electric','—','—','3','','—','CV0770'],
  ['Ford','GT','Supercar','Petrol','—','—','2','','—','CV0771'],
  ['Ford','Mustang Mach-E','Crossover','Electric','—','—','5','','—','CV0772'],
  ['Ford','Mustang Shelby GT500','Muscle Car','Petrol','—','—','4','','—','CV0773'],
  ['Ford','Mustang Shelby GT350','Muscle Car','Petrol','—','—','4','','—','CV0774'],
  ['Ford','Raptor','Pickup Truck','Petrol','—','—','5','','—','CV0775'],
  ['Ford','Ranger Raptor','Pickup Truck','Petrol','—','—','5','','—','CV0776'],
  ['Lincoln','Nautilus','Luxury SUV','Petrol','—','—','5','','—','CV0777'],
  ['Lincoln','Navigator L','Full-size SUV','Petrol','—','—','7','','—','CV0778'],
  ['Lincoln','Z','Sedan','Petrol','—','—','5','','—','CV0779'],
  ['Lincoln','Star','Luxury SUV','Petrol','—','—','5','','—','CV0780'],
  ['Lincoln','Continental','Sedan','Petrol','—','—','5','','—','CV0781'],
  ['Lincoln','MKZ','Sedan','Petrol','—','—','5','','—','CV0782'],
  ['Lincoln','MKC','Luxury SUV','Petrol','—','—','5','','—','CV0783'],
  ['Lincoln','MKX','Luxury SUV','Petrol','—','—','5','','—','CV0784'],
  ['Lincoln','MKS','Sedan','Petrol','—','—','5','','—','CV0785'],
  ['Lincoln','MKT','Luxury SUV','Petrol','—','—','7','','—','CV0786'],
  ['Toyota','Crown','Sedan','Hybrid','—','—','5','','—','CV0787'],
  ['Toyota','Prius','Hatchback','Petrol / Hybrid','—','—','5','','—','CV0788'],
  ['Toyota','Yaris','Hatchback','Petrol','—','—','5','','—','CV0789'],
  ['Toyota','Yaris Cross','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV0790'],
  ['Toyota','GR Yaris','Hot Hatch','Petrol','—','—','5','','—','CV0791'],
  ['Toyota','GR Corolla','Hot Hatch','Petrol','—','—','5','','—','CV0792'],
  ['Toyota','Corolla Cross','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV0793'],
  ['Toyota','C-HR','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV0794'],
  ['Toyota','bZ4X','Compact SUV','Electric','—','—','5','','—','CV0795'],
  ['Toyota','Urban Cruiser','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV0796'],
  ['Toyota','Urban Cruiser Hyryder','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV0797'],
  ['Toyota','Fortuner','Mid-size SUV','Petrol','—','—','7','','—','CV0798'],
  ['Toyota','Land Cruiser Prado','Mid-size SUV','Petrol','—','—','7','','—','CV0799'],
  ['Toyota','4Runner','Mid-size SUV','Petrol','—','—','7','','—','CV0800'],
  ['Toyota','Sequoia','Full-size SUV','Petrol / Hybrid','—','—','7','','—','CV0801'],
  ['Toyota','Highlander','Full-size SUV','Petrol / Hybrid','—','—','7','','—','CV0802'],
  ['Toyota','Grand Highlander','Full-size SUV','Petrol / Hybrid','—','—','7','','—','CV0803'],
  ['Toyota','Sienna','Minivan / MPV','Petrol','—','—','7','','—','CV0804'],
  ['Toyota','Venza','Mid-size SUV','Hybrid','—','—','5','','—','CV0805'],
  ['Toyota','Innova','Minivan / MPV','Petrol','—','—','7','','—','CV0806'],
  ['Toyota','Innova HyCross','Minivan / MPV','Petrol','—','—','7','','—','CV0807'],
  ['Toyota','Hilux','Pickup Truck','Petrol','—','—','5','','—','CV0808'],
  ['Toyota','Tacoma','Pickup Truck','Petrol','—','—','5','','—','CV0809'],
  ['Toyota','Tundra','Pickup Truck','Petrol','—','—','5','','—','CV0810'],
  ['Toyota','Alphard','Minivan / MPV','Petrol','—','—','7','','—','CV0811'],
  ['Toyota','Vellfire','Minivan / MPV','Petrol','—','—','7','','—','CV0812'],
  ['Toyota','HiAce','Minivan / MPV','Petrol','—','—','7','','—','CV0813'],
  ['Toyota','GR86','Coupe','Petrol','—','—','4','','—','CV0814'],
  ['Toyota','Mirai','Sedan','Hydrogen fuel cell','—','—','5','','—','CV0815'],
  ['Toyota','GR010 Hybrid','Hypercar','Hybrid','—','—','1','','—','CV0816'],
  ['Lexus','LBX','Compact SUV','Hybrid','—','—','5','','—','CV0817'],
  ['Lexus','UX','Compact SUV','Hybrid','—','—','5','','—','CV0818'],
  ['Lexus','NX','Luxury SUV','Petrol / Hybrid','—','—','5','','—','CV0819'],
  ['Lexus','GX','Luxury SUV','Petrol','—','—','7','','—','CV0820'],
  ['Lexus','LX','Luxury SUV','Petrol','—','—','7','','—','CV0821'],
  ['Lexus','LS','Luxury Car','Petrol / Hybrid','—','—','5','','—','CV0822'],
  ['Lexus','LM','Minivan / MPV','Petrol / Hybrid','—','—','4','','—','CV0823'],
  ['Lexus','LC','Coupe','Petrol / Hybrid','—','—','4','','—','CV0824'],
  ['Lexus','RC','Coupe','Petrol','—','—','4','','—','CV0825'],
  ['Lexus','RZ','Luxury SUV','Electric','—','—','5','','—','CV0826'],
  ['Lexus','TX','Luxury SUV','Petrol','—','—','7','','—','CV0827'],
  ['Lexus','IS','Sedan','Petrol / Hybrid','—','—','5','','—','CV0828'],
  ['Lexus','GX 550','Luxury SUV','Petrol','—','—','7','','—','CV0829'],
  ['Lexus','LX 600','Luxury SUV','Petrol','—','—','7','','—','CV0830'],
  ['Lexus','LX 700h','Luxury SUV','Petrol','—','—','7','','—','CV0831'],
  ['Lexus','LC 500 Convertible','Coupe','Petrol / Hybrid','—','—','4','','—','CV0832'],
  ['Lexus','RZ 450e','Luxury SUV','Electric','—','—','5','','—','CV0833'],
  ['Daihatsu','Ayla','Hatchback','Petrol','—','—','5','','—','CV0834'],
  ['Daihatsu','Sigra','Minivan / MPV','Petrol','—','—','7','','—','CV0835'],
  ['Daihatsu','Terios','Compact SUV','Petrol','—','—','5','','—','CV0836'],
  ['Daihatsu','Xenia','Minivan / MPV','Petrol','—','—','7','','—','CV0837'],
  ['Daihatsu','Gran Max','Minivan / MPV','Petrol','—','—','7','','—','CV0838'],
  ['Daihatsu','Hijet','Van','Petrol','—','—','2','','—','CV0839'],
  ['Daihatsu','Tanto','Kei Car','Petrol','—','—','4','','—','CV0840'],
  ['Daihatsu','Move','Kei Car','Petrol','—','—','4','','—','CV0841'],
  ['Daihatsu','Mira','Kei Car','Petrol','—','—','4','','—','CV0842'],
  ['Daihatsu','Taft','Compact SUV','Petrol','—','—','5','','—','CV0843'],
  ['Daihatsu','Cast','Kei Car','Petrol','—','—','4','','—','CV0844'],
  ['Daihatsu','Thor','Hatchback','Petrol','—','—','5','','—','CV0845'],
  ['Daihatsu','Boon','Hatchback','Petrol','—','—','5','','—','CV0846'],
  ['Daihatsu','Altis','Sedan','Hybrid','—','—','5','','—','CV0847'],
  ['Daihatsu','Rocky e:Smart','Compact SUV','Petrol','—','—','5','','—','CV0848'],
  ['BYD','Dolphin Surf','Hatchback','Electric','—','—','5','','—','CV0849'],
  ['BYD','Atto 2','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0850'],
  ['BYD','Sealion 7','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0851'],
  ['BYD','Sealion 6','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0852'],
  ['BYD','Seal U','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0853'],
  ['BYD','Han','Sedan','Plug-in hybrid','—','—','5','','—','CV0854'],
  ['BYD','Tang','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0855'],
  ['BYD','Qin Plus','Sedan','Plug-in hybrid','—','—','5','','—','CV0856'],
  ['BYD','Qin L','Sedan','Plug-in hybrid','—','—','5','','—','CV0857'],
  ['BYD','Destroyer 05','Sedan','Plug-in hybrid','—','—','5','','—','CV0858'],
  ['BYD','Song Plus','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0859'],
  ['BYD','Song L','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0860'],
  ['BYD','Song Pro','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0861'],
  ['BYD','Frigate 07','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0862'],
  ['BYD','e2','Hatchback','Electric','—','—','5','','—','CV0863'],
  ['BYD','Seagull','Hatchback','Electric','—','—','5','','—','CV0864'],
  ['BYD','Yuan Plus','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0865'],
  ['BYD','Yuan Pro','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0866'],
  ['BYD','Yuan Up','Compact SUV','Plug-in hybrid','—','—','5','','—','CV0867'],
  ['Denza','N9','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0868'],
  ['Denza','Z9','Sedan','Plug-in hybrid','—','—','5','','—','CV0869'],
  ['Denza','N8','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0870'],
  ['Denza','Z9 GT','Sedan','Plug-in hybrid','—','—','5','','—','CV0871'],
  ['Denza','Z9L','Sedan','Plug-in hybrid','—','—','5','','—','CV0872'],
  ['Denza','N8L','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0873'],
  ['Denza','D9 Premier','Minivan / MPV','Plug-in hybrid','—','—','7','','—','CV0874'],
  ['Denza','D9 DM-i','Minivan / MPV','Plug-in hybrid','—','—','7','','—','CV0875'],
  ['Yangwang','U7','Sedan','Electric','—','—','5','','—','CV0876'],
  ['Yangwang','U9 Xtreme','Supercar','Electric','—','—','2','','—','CV0877'],
  ['Yangwang','U6','Sedan','Electric','—','—','5','','—','CV0878'],
  ['Fangchengbao','Bao 3','Compact SUV','Electric','—','—','5','','—','CV0879'],
  ['Fangchengbao','Bao 5 Super Edition','Off-Road / 4x4','Plug-in hybrid','—','—','5','','—','CV0880'],
  ['Fangchengbao','Bao 5 Hi4-T','Off-Road / 4x4','Plug-in hybrid','—','—','5','','—','CV0881'],
  ['Fangchengbao','Bao 8 Hi4-T','Off-Road / 4x4','Plug-in hybrid','—','—','5','','—','CV0882'],
  ['Fangchengbao','Titanium 3','Compact SUV','Electric','—','—','5','','—','CV0883'],
  ['Changan','CS35 Plus','Compact SUV','Petrol','—','—','5','','—','CV0884'],
  ['Changan','CS55 Plus','Compact SUV','Petrol','—','—','5','','—','CV0885'],
  ['Changan','CS85 Coupe','Compact SUV','Petrol','—','—','5','','—','CV0886'],
  ['Changan','CS95','Compact SUV','Petrol','—','—','5','','—','CV0887'],
  ['Changan','UNI-T','Crossover','Petrol','—','—','5','','—','CV0888'],
  ['Changan','UNI-V','Crossover','Petrol','—','—','5','','—','CV0889'],
  ['Changan','UNI-Z','Crossover','Petrol','—','—','5','','—','CV0890'],
  ['Changan','Eado','Sedan','Petrol','—','—','5','','—','CV0891'],
  ['Changan','Eado Plus','Sedan','Petrol','—','—','5','','—','CV0892'],
  ['Changan','Lumin','Microcar','Electric','—','—','4','','—','CV0893'],
  ['Changan','Q05','Sedan','Electric','—','—','5','','—','CV0894'],
  ['Changan','Q06','Sedan','Electric','—','—','5','','—','CV0895'],
  ['Changan','Q07','Sedan','Electric','—','—','5','','—','CV0896'],
  ['Changan','A05','Sedan','Electric','—','—','5','','—','CV0897'],
  ['Changan','A06','Sedan','Electric','—','—','5','','—','CV0898'],
  ['Changan','A07','Sedan','Electric','—','—','5','','—','CV0899'],
  ['Deepal','S05','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0900'],
  ['Deepal','S09','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0901'],
  ['Deepal','L07','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0902'],
  ['Deepal','G318','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0903'],
  ['Avatr','06','Sedan','Plug-in hybrid','—','—','5','','—','CV0904'],
  ['Avatr','07','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0905'],
  ['Avatr','08','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0906'],
  ['Chery','Q','Hatchback','Electric','—','—','4','','—','CV0907'],
  ['Chery','Tiggo 2 Pro','Compact SUV','Petrol','—','—','5','','—','CV0908'],
  ['Chery','Tiggo 4','Compact SUV','Petrol','—','—','5','','—','CV0909'],
  ['Chery','Tiggo 4 CSH','Compact SUV','Petrol','—','—','5','','—','CV0910'],
  ['Chery','Tiggo 7','Compact SUV','Petrol','—','—','5','','—','CV0911'],
  ['Chery','Tiggo 7 CSH','Compact SUV','Petrol','—','—','5','','—','CV0912'],
  ['Chery','Tiggo 8','Compact SUV','Petrol','—','—','5','','—','CV0913'],
  ['Chery','Tiggo 8 CSH','Compact SUV','Petrol','—','—','5','','—','CV0914'],
  ['Chery','Tiggo 9','Compact SUV','Petrol','—','—','5','','—','CV0915'],
  ['Chery','Tiggo 9 CSH','Compact SUV','Petrol','—','—','5','','—','CV0916'],
  ['Chery','Tiggo V','Compact SUV','Petrol','—','—','5','','—','CV0917'],
  ['Chery','Arrizo 6','Sedan','Petrol','—','—','5','','—','CV0918'],
  ['Chery','Arrizo 8','Sedan','Petrol','—','—','5','','—','CV0919'],
  ['Chery','Arrizo 8 CSH','Sedan','Petrol','—','—','5','','—','CV0920'],
  ['Chery','Himla','Pickup Truck','Petrol','—','—','5','','—','CV0921'],
  ['Exeed','RX','Compact SUV','Petrol','—','—','5','','—','CV0922'],
  ['Exeed','LX','Compact SUV','Petrol','—','—','5','','—','CV0923'],
  ['Exeed','MX','Compact SUV','Petrol','—','—','5','','—','CV0924'],
  ['Exlantix','ES','Sedan','Electric','—','—','5','','—','CV0925'],
  ['Exlantix','ET','Mid-size SUV','Electric','—','—','5','','—','CV0926'],
  ['Exlantix','ET8','Mid-size SUV','Electric','—','—','5','','—','CV0927'],
  ['iCar','03T','Compact SUV','Electric','—','—','5','','—','CV0928'],
  ['iCar','V27','Compact SUV','Electric','—','—','5','','—','CV0929'],
  ['Jetour','X50','Compact SUV','Petrol','—','—','5','','—','CV0930'],
  ['Jetour','X70','Compact SUV','Petrol','—','—','5','','—','CV0931'],
  ['Jetour','X70 Plus','Compact SUV','Petrol','—','—','5','','—','CV0932'],
  ['Jetour','X90','Compact SUV','Petrol','—','—','5','','—','CV0933'],
  ['Jetour','X90 Plus','Compact SUV','Petrol','—','—','5','','—','CV0934'],
  ['Jetour','Traveller','Off-Road / 4x4','Petrol','—','—','5','','—','CV0935'],
  ['Jetour','T1','Off-Road / 4x4','Petrol','—','—','5','','—','CV0936'],
  ['Jetour','T2 i-DM','Off-Road / 4x4','Petrol','—','—','5','','—','CV0937'],
  ['Jetour','G700','Off-Road / 4x4','Plug-in hybrid','—','—','5','','—','CV0938'],
  ['Jetour','X1','Compact SUV','Petrol','—','—','5','','—','CV0939'],
  ['Jetour','X2','Compact SUV','Petrol','—','—','5','','—','CV0940'],
  ['Luxeed','R8','Sedan','Electric','—','—','5','','—','CV0941'],
  ['Luxeed','S9','Sedan','Electric','—','—','5','','—','CV0942'],
  ['Dongfeng','007','Sedan','Electric','—','—','5','','—','CV0943'],
  ['Dongfeng','008','Sedan','Electric','—','—','5','','—','CV0944'],
  ['Dongfeng','Mage','Compact SUV','Electric','—','—','5','','—','CV0945'],
  ['Dongfeng','Huge','Compact SUV','Electric','—','—','5','','—','CV0946'],
  ['Dongfeng','eπ 007','Sedan','Electric','—','—','5','','—','CV0947'],
  ['Dongfeng','eπ 008','Sedan','Electric','—','—','5','','—','CV0948'],
  ['Dongfeng','L7','Sedan','Electric','—','—','5','','—','CV0949'],
  ['Dongfeng','E70','Sedan','Electric','—','—','5','','—','CV0950'],
  ['Voyah','Courage','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0951'],
  ['Voyah','Taishan','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0952'],
  ['M-Hero','817','Off-Road / 4x4','Plug-in hybrid','—','—','5','','—','CV0953'],
  ['Forthing','S7','Compact SUV','Petrol','—','—','5','','—','CV0954'],
  ['Forthing','V9','Minivan / MPV','Petrol','—','—','7','','—','CV0955'],
  ['Forthing','T5 EVO','Compact SUV','Petrol','—','—','5','','—','CV0956'],
  ['Forthing','T5','Compact SUV','Petrol','—','—','5','','—','CV0957'],
  ['Forthing','Friday','Compact SUV','Petrol','—','—','5','','—','CV0958'],
  ['Forthing','M5','Minivan / MPV','Petrol','—','—','7','','—','CV0959'],
  ['Forthing','M7','Minivan / MPV','Petrol','—','—','7','','—','CV0960'],
  ['Forthing','M5 EV','Minivan / MPV','Petrol','—','—','7','','—','CV0961'],
  ['Aeolus','Yixuan Max','Compact SUV','Petrol','—','—','5','','—','CV0962'],
  ['Aeolus','Haohan','Sedan','Petrol','—','—','5','','—','CV0963'],
  ['Aeolus','Haohan Mach','Sedan','Petrol','—','—','5','','—','CV0964'],
  ['Aeolus','Haohan PHEV','Sedan','Petrol','—','—','5','','—','CV0965'],
  ['Aeolus','GZ','Compact SUV','Petrol','—','—','5','','—','CV0966'],
  ['Aeolus','L7','Sedan','Petrol','—','—','5','','—','CV0967'],
  ['Aeolus','E70','Hatchback','Electric','—','—','5','','—','CV0968'],
  ['Aeolus','E70 Pro','Hatchback','Electric','—','—','5','','—','CV0969'],
  ['Aeolus','AX7','Compact SUV','Petrol','—','—','5','','—','CV0970'],
  ['Aeolus','AX7 Pro','Compact SUV','Petrol','—','—','5','','—','CV0971'],
  ['Aeolus','AX5','Compact SUV','Petrol','—','—','5','','—','CV0972'],
  ['Aeolus','A60','Compact SUV','Petrol','—','—','5','','—','CV0973'],
  ['Aeolus','A60 EV','Hatchback','Electric','—','—','5','','—','CV0974'],
  ['Aeolus','E30','Hatchback','Electric','—','—','5','','—','CV0975'],
  ['Aeolus','E30L','Hatchback','Electric','—','—','5','','—','CV0976'],
  ['GAC','GS3','Compact SUV','Petrol','—','—','5','','—','CV0977'],
  ['GAC','GS5','Compact SUV','Petrol','—','—','5','','—','CV0978'],
  ['GAC','EMZOOM','Sedan','Electric','—','—','5','','—','CV0979'],
  ['GAC','EMKOO','Sedan','Electric','—','—','5','','—','CV0980'],
  ['GAC','EMPOW','Sedan','Electric','—','—','5','','—','CV0981'],
  ['GAC','S7','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0982'],
  ['GAC','S9','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV0983'],
  ['GAC','M6','Minivan / MPV','Petrol','—','—','7','','—','CV0984'],
  ['GAC','E9','Minivan / MPV','Plug-in hybrid','—','—','7','','—','CV0985'],
  ['GAC','E8','Minivan / MPV','Plug-in hybrid','—','—','7','','—','CV0986'],
  ['Aion','Y Plus','Compact SUV','Electric','—','—','5','','—','CV0987'],
  ['Aion','UT','Compact SUV','Electric','—','—','5','','—','CV0988'],
  ['Aion','ES','Compact SUV','Electric','—','—','5','','—','CV0989'],
  ['Aion','i60','Compact SUV','Electric','—','—','5','','—','CV0990'],
  ['Hyptec','HL','Mid-size SUV','Electric','—','—','5','','—','CV0991'],
  ['Hongqi','H5','Sedan','Petrol','—','—','5','','—','CV0992'],
  ['Hongqi','H6','Sedan','Petrol','—','—','5','','—','CV0993'],
  ['Hongqi','HS3','Compact SUV','Electric','—','—','5','','—','CV0994'],
  ['Hongqi','HS5','Mid-size SUV','Electric','—','—','5','','—','CV0995'],
  ['Hongqi','HS7','Full-size SUV','Electric','—','—','5','','—','CV0996'],
  ['Hongqi','E-HS7','Full-size SUV','Electric','—','—','5','','—','CV0997'],
  ['Hongqi','EH7','Sedan','Electric','—','—','5','','—','CV0998'],
  ['Hongqi','E-QM5','Sedan','Electric','—','—','5','','—','CV0999'],
  ['Hongqi','HQ9','Minivan / MPV','Petrol','—','—','7','','—','CV1000'],
  ['Hongqi','Guoya','Limousine','Petrol','—','—','5','','—','CV1001'],
  ['Hongqi','Ousado','Minivan / MPV','Petrol','—','—','7','','—','CV1002'],
  ['Bestune','B70','Sedan','Petrol','—','—','5','','—','CV1003'],
  ['Bestune','B70S','Sedan','Petrol','—','—','5','','—','CV1004'],
  ['Bestune','T55','Compact SUV','Petrol','—','—','5','','—','CV1005'],
  ['Bestune','T90','Compact SUV','Petrol','—','—','5','','—','CV1006'],
  ['Bestune','M9','Sedan','Petrol','—','—','5','','—','CV1007'],
  ['Bestune','NAT','Hatchback','Electric','—','—','4','','—','CV1008'],
  ['Bestune','Xiaoma','Hatchback','Electric','—','—','4','','—','CV1009'],
  ['Joyee','N09','Compact SUV','Electric','—','—','5','','—','CV1010'],
  ['Joyee','S08','Compact SUV','Electric','—','—','5','','—','CV1011'],
  ['Joyee','S04','Compact SUV','Electric','—','—','5','','—','CV1012'],
  ['GWM','Cannon Alpha','Pickup Truck','Petrol','—','—','5','','—','CV1013'],
  ['GWM','Wingle 5','Pickup Truck','Petrol','—','—','5','','—','CV1014'],
  ['GWM','Wingle 7','Pickup Truck','Petrol','—','—','5','','—','CV1015'],
  ['GWM','King Kong Poer','Pickup Truck','Petrol','—','—','5','','—','CV1016'],
  ['GWM','Shanhai Cannon','Pickup Truck','Petrol','—','—','5','','—','CV1017'],
  ['Haval','H6 GT','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1018'],
  ['Haval','H9','Compact SUV','Petrol','—','—','5','','—','CV1019'],
  ['Haval','H5','Compact SUV','Petrol','—','—','5','','—','CV1020'],
  ['Haval','Dargo','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1021'],
  ['Haval','Big Dog','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1022'],
  ['Haval','Xiaolong Max','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1023'],
  ['Haval','Ruge','Compact SUV','Petrol','—','—','5','','—','CV1024'],
  ['Haval','F7','Compact SUV','Petrol','—','—','5','','—','CV1025'],
  ['Tank','400','Off-Road / 4x4','Petrol','—','—','5','','—','CV1026'],
  ['Tank','700','Off-Road / 4x4','Plug-in hybrid','—','—','7','','—','CV1027'],
  ['Tank','800','Off-Road / 4x4','Plug-in hybrid','—','—','7','','—','CV1028'],
  ['Ora','03','Hatchback','Electric','—','—','5','','—','CV1029'],
  ['Ora','07','Hatchback','Electric','—','—','5','','—','CV1030'],
  ['Ora','Ballet Cat','Hatchback','Electric','—','—','5','','—','CV1031'],
  ['Wey','Coffee 01','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV1032'],
  ['Wey','Coffee 02','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV1033'],
  ['Wey','05','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV1034'],
  ['Wey','07','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV1035'],
  ['Wey','09','Mid-size SUV','Plug-in hybrid','—','—','5','','—','CV1036'],
  ['NIO','ET5 Touring','Sedan','Electric','—','—','5','','—','CV1037'],
  ['NIO','ES6','Mid-size SUV','Electric','—','—','5','','—','CV1038'],
  ['NIO','ES7','Mid-size SUV','Electric','—','—','5','','—','CV1039'],
  ['NIO','EC6','Crossover','Electric','—','—','5','','—','CV1040'],
  ['NIO','EC7','Crossover','Electric','—','—','5','','—','CV1041'],
  ['NIO','EL6','Mid-size SUV','Electric','—','—','5','','—','CV1042'],
  ['NIO','EL7','Mid-size SUV','Electric','—','—','5','','—','CV1043'],
  ['NIO','EL8','Mid-size SUV','Electric','—','—','5','','—','CV1044'],
  ['NIO','ET9','Sedan','Electric','—','—','5','','—','CV1045'],
  ['ONVO','L80','Mid-size SUV','Electric','—','—','5','','—','CV1046'],
  ['ONVO','L70','Mid-size SUV','Electric','—','—','5','','—','CV1047'],
  ['Land Rover','Range Rover Velar','Luxury SUV','Petrol / Diesel','—','—','5','','—','CV1048'],
  ['Land Rover','Defender 90','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV1049'],
  ['Land Rover','Defender 110','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV1050'],
  ['Land Rover','Defender 130','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV1051'],
  ['Land Rover','Defender Octa','Off-Road / 4x4','Petrol / Diesel','—','—','5','','—','CV1052'],
  ['Land Rover','Discovery','Mid-size SUV','Petrol / Diesel','—','—','7','','—','CV1053'],
  ['Land Rover','Discovery Sport','Mid-size SUV','Petrol / Diesel','—','—','7','','—','CV1054'],
  ['Jaguar','E-PACE','Compact SUV','Petrol','—','—','5','','—','CV1055'],
  ['Jaguar','XE','Sedan','Petrol','—','—','5','','—','CV1056'],
  ['Jaguar','XF','Sedan','Petrol','—','—','5','','—','CV1057'],
  ['Jaguar','XJ','Sedan','Petrol','—','—','5','','—','CV1058'],
  ['Jaguar','X-Type','Sedan','Petrol','—','—','5','','—','CV1059'],
  ['Jaguar','XK','Grand Tourer (GT)','Petrol','—','—','4','','—','CV1060'],
  ['Jaguar','XKR','Grand Tourer (GT)','Petrol','—','—','4','','—','CV1061'],
  ['Renault','Arkana','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV1062'],
  ['Renault','Austral','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV1063'],
  ['Renault','Rafale','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV1064'],
  ['Renault','Espace','Minivan / MPV','Petrol / Hybrid','—','—','7','','—','CV1065'],
  ['Renault','Symbioz','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV1066'],
  ['Renault','Megane','Hatchback','Petrol','—','—','5','','—','CV1067'],
  ['Renault','Scenic E-Tech','Compact SUV','Electric','—','—','5','','—','CV1068'],
  ['Renault','5 E-Tech','Hatchback','Electric','—','—','5','','—','CV1069'],
  ['Renault','4 E-Tech','Hatchback','Electric','—','—','5','','—','CV1070'],
  ['Renault','Twingo','Hatchback','Petrol','—','—','4','','—','CV1071'],
  ['Renault','Koleos','Compact SUV','Petrol / Hybrid','—','—','5','','—','CV1072'],
  ['Renault','Kangoo','Van','Diesel','—','—','3','','—','CV1073'],
  ['Renault','Trafic','Van','Diesel','—','—','3','','—','CV1074'],
  ['Renault','Master','Van','Diesel','—','—','3','','—','CV1075'],
  ['Renault','Megane R.S.','Hot Hatch','Petrol','—','—','5','','—','CV1076'],
  ['Renault','Clio R.S.','Hot Hatch','Petrol','—','—','5','','—','CV1077'],
  ['Renault','5 Turbo 3E','Hot Hatch','Electric','—','—','2','','—','CV1078'],
  ['Dacia','Sandero Stepway','Hatchback','Petrol','—','—','5','','—','CV1079'],
  ['Dacia','Logan','Sedan','Petrol','—','—','5','','—','CV1080'],
  ['Dacia','Jogger','Minivan / MPV','Petrol','—','—','7','','—','CV1081'],
  ['Dacia','Bigster','Compact SUV','Petrol','—','—','5','','—','CV1082'],
  ['Alpine','A110 GT','Sports Car','Petrol','—','—','2','','—','CV1083'],
  ['Alpine','A110 S','Sports Car','Petrol','—','—','2','','—','CV1084'],
  ['Alpine','A110 R','Sports Car','Petrol','—','—','2','','—','CV1085'],
  ['Alpine','A390','Crossover','Electric','—','—','5','','—','CV1086'],
  ['Alpine','Alpenglow','Concept Car','Hydrogen combustion','—','—','2','','—','CV1087'],
  ['Rimac','Concept One','Hypercar','Electric','—','—','2','','—','CV1088'],
  ['Rimac','C Two','Hypercar','Electric','—','—','2','','—','CV1089'],
  ['Rimac','Nevera Time Attack','Hypercar','Electric','—','—','2','','—','CV1090'],
  ['Rimac','Verne','Supercar','Electric','—','—','2','','—','CV1091'],
  ['Bugatti','Veyron Super Sport','Hypercar','Petrol','—','—','2','','—','CV1092'],
  ['Bugatti','Veyron Grand Sport','Hypercar','Petrol','—','—','2','','—','CV1093'],
  ['Bugatti','Chiron Sport','Hypercar','Petrol','—','—','2','','—','CV1094'],
  ['Bugatti','Chiron Pur Sport','Hypercar','Petrol','—','—','2','','—','CV1095'],
  ['Bugatti','Chiron Super Sport','Hypercar','Petrol','—','—','2','','—','CV1096'],
  ['Bugatti','Divo','Hypercar','Petrol','—','—','2','','—','CV1097'],
  ['Bugatti','Centodieci','Hypercar','Petrol','—','—','2','','—','CV1098'],
  ['Bugatti','La Voiture Noire','Hypercar','Petrol','—','—','2','','—','CV1099'],
  ['Bugatti','Bolide','Hypercar','Petrol','—','—','2','','—','CV1100'],
  ['Bugatti','Mistral','Hypercar','Petrol','—','—','2','','—','CV1101'],
  ['Bugatti','EB110','Classic Car','Petrol','—','—','2','','—','CV1102'],
  ['Bugatti','EB112','Classic Car','Petrol','—','—','2','','—','CV1103'],
  ['Bugatti','Type 35','Classic Car','Petrol','—','—','2','','—','CV1104'],
  ['Bugatti','Type 41 Royale','Classic Car','Petrol','—','—','2','','—','CV1105'],
  ['Bugatti','Type 57','Classic Car','Petrol','—','—','2','','—','CV1106'],
  ['Bugatti','Type 57 SC Atlantic','Classic Car','Petrol','—','—','2','','—','CV1107'],
  ['Geely','Emgrand','Sedan','Petrol','—','—','5','','—','CV1108'],
  ['Geely','Preface','Sedan','Petrol','—','—','5','','—','CV1109'],
  ['Geely','Atlas','Compact SUV','Petrol','—','—','5','','—','CV1110'],
  ['Geely','Okavango','Minivan / MPV','Petrol','—','—','7','','—','CV1111'],
  ['Geely','Starray','Compact SUV','Petrol','—','—','5','','—','CV1112'],
  ['Geely','EX5','Compact SUV','Electric','—','—','5','','—','CV1113'],
  ['Geely','EX5 EM-i','Compact SUV','Electric','—','—','5','','—','CV1114'],
  ['Geely','Galaxy E5','Compact SUV','Electric','—','—','5','','—','CV1115'],
  ['Geely','Galaxy L6','Compact SUV','Electric','—','—','5','','—','CV1116'],
  ['Geely','Galaxy L7','Compact SUV','Electric','—','—','5','','—','CV1117'],
  ['Geely','Galaxy L9','Compact SUV','Electric','—','—','5','','—','CV1118'],
  ['Geely','Galaxy Starship 7','Compact SUV','Electric','—','—','5','','—','CV1119'],
  ['Geely','Galaxy Starship 8','Compact SUV','Electric','—','—','5','','—','CV1120'],
  ['Zeekr','009','Minivan / MPV','Electric','—','—','6','','—','CV1121'],
  ['Zeekr','7X','Mid-size SUV','Electric','—','—','5','','—','CV1122'],
  ['Zeekr','7GT','Station Wagon / Estate','Electric','—','—','5','','—','CV1123'],
  ['Zeekr','009 Grand','Minivan / MPV','Electric','—','—','6','','—','CV1124'],
  ['Zeekr','MIX','Minivan / MPV','Electric','—','—','6','','—','CV1125'],
  ['Lynk & Co','02','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1126'],
  ['Lynk & Co','06','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1127'],
  ['Lynk & Co','08','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1128'],
  ['Lynk & Co','09','Compact SUV','Plug-in hybrid','—','—','5','','—','CV1129'],
  ['Lynk & Co','10','Sedan','Electric','—','—','5','','—','CV1130'],
  ['MG','MG3','Hatchback','Hybrid','—','—','5','','—','CV1131'],
  ['MG','MG5','Station Wagon / Estate','Petrol','—','—','5','','—','CV1132'],
  ['MG','MG6','Liftback','Petrol','—','—','5','','—','CV1133'],
  ['MG','MG7','Liftback','Petrol','—','—','5','','—','CV1134'],
  ['MG','MG ZS EV','Compact SUV','Electric','—','—','5','','—','CV1135'],
  ['MG','MG HS','Mid-size SUV','Petrol','—','—','5','','—','CV1136'],
  ['MG','MG RX5','Mid-size SUV','Petrol','—','—','5','','—','CV1137'],
  ['MG','MG RX8','Mid-size SUV','Petrol','—','—','5','','—','CV1138'],
  ['MG','MG Marvel R','Compact SUV','Electric','—','—','5','','—','CV1139'],
  ['MG','MG4 X','Compact SUV','Electric','—','—','5','','—','CV1140'],
  ['Roewe','D5X','Sedan','Petrol','—','—','5','','—','CV1141'],
  ['Roewe','D7','Sedan','Petrol','—','—','5','','—','CV1142'],
  ['Roewe','D6','Sedan','Petrol','—','—','5','','—','CV1143'],
  ['Roewe','M7','Sedan','Petrol','—','—','5','','—','CV1144'],
  ['Roewe','i5','Sedan','Petrol','—','—','5','','—','CV1145'],
  ['Roewe','RX8','Minivan / MPV','Petrol','—','—','7','','—','CV1146'],
  ['Roewe','iMAX8','Minivan / MPV','Petrol','—','—','7','','—','CV1147'],
  ['Roewe','Ei5','Sedan','Petrol','—','—','5','','—','CV1148'],
  ['IM Motors','L7','Sedan','Electric','—','—','5','','—','CV1149'],
  ['IM Motors','LS8','Mid-size SUV','Electric','—','—','5','','—','CV1150'],
  ['IM Motors','LS9','Mid-size SUV','Electric','—','—','5','','—','CV1151'],
  ['Maxus','D60','Minivan / MPV','Petrol','—','—','7','','—','CV1152'],
  ['Maxus','D90','Minivan / MPV','Petrol','—','—','7','','—','CV1153'],
  ['Maxus','G50','Minivan / MPV','Petrol','—','—','7','','—','CV1154'],
  ['Maxus','G70','Minivan / MPV','Petrol','—','—','7','','—','CV1155'],
  ['Maxus','G90','Minivan / MPV','Petrol','—','—','7','','—','CV1156'],
  ['Maxus','MIFA 7','Minivan / MPV','Electric','—','—','7','','—','CV1157'],
  ['Maxus','MIFA 9','Minivan / MPV','Electric','—','—','7','','—','CV1158'],
  ['Maxus','T90','Pickup Truck','Diesel','—','—','5','','—','CV1159'],
  ['Maxus','eTerron 9','Mid-size SUV','Electric','—','—','7','','—','CV1160'],
  ['Shangjie','H5','Sedan','Electric','—','—','5','','—','CV1161'],
  ['Shangjie','Z7','Sedan','Electric','—','—','5','','—','CV1162'],
  ['Shangjie','Z7T','Sedan','Electric','—','—','5','','—','CV1163'],
  ['BMW','1 Series','Hatchback','Petrol','—','—','5','','—','CV1164'],
  ['BMW','2 Series','Coupe','Petrol','—','—','4','','—','CV1165'],
  ['BMW','4 Series','Coupe','Petrol','—','—','4','','—','CV1166'],
  ['BMW','5 Series','Sedan','Petrol','—','~190–381 hp','5','','2023','CV1167'],
  ['BMW','7 Series','Sedan','Petrol','—','—','5','','—','CV1168'],
  ['BMW','8 Series','Coupe','Petrol','—','—','4','','—','CV1169'],
  ['BMW','X1','Compact SUV','Petrol','—','—','5','','—','CV1170'],
  ['BMW','X2','Compact SUV','Petrol','—','—','5','','—','CV1171'],
  ['BMW','X3','Mid-size SUV','Petrol','—','—','5','','—','CV1172'],
  ['BMW','X4','Mid-size SUV','Petrol','—','—','5','','—','CV1173'],
  ['BMW','X6','Mid-size SUV','Petrol','—','—','5','','—','CV1174'],
  ['BMW','X7','Luxury SUV','Petrol','—','—','5','','—','CV1175'],
  ['BMW','XM','Luxury SUV','Petrol','—','—','5','','—','CV1176'],
  ['BMW','i5','Sedan','Electric','Electric motor(s)','~335–593 hp','5','','2023','CV1177'],
  ['BMW','i7','Sedan','Electric','—','—','5','','—','CV1178'],
  ['BMW','iX','Mid-size SUV','Electric','—','—','5','','—','CV1179'],
  ['BMW','iX1','Mid-size SUV','Electric','—','—','5','','—','CV1180'],
  ['BMW','iX2','Mid-size SUV','Electric','—','—','5','','—','CV1181'],
  ['BMW','Z4','Roadster','Petrol','—','—','2','','—','CV1182'],
  ['BMW','M2','Coupe','Petrol','—','—','4','','—','CV1183'],
  ['BMW','M4','Coupe','Petrol','—','—','4','','—','CV1184'],
  ['BMW','M5','Sedan','Petrol','—','—','5','','—','CV1185'],
  ['BMW','M8','Coupe','Petrol','—','—','4','','—','CV1186'],
  ['MINI','Cooper 5-Door','Hatchback','Petrol','—','—','5','','—','CV1187'],
  ['MINI','Cooper Convertible','Convertible','Petrol','—','—','4','','—','CV1188'],
  ['MINI','Aceman','Compact SUV','Electric','—','—','5','','—','CV1189'],
  ['MINI','Countryman Electric','Compact SUV','Electric','—','—','5','','—','CV1190'],
  ['MINI','John Cooper Works','Hot Hatch','Petrol','—','—','4','','—','CV1191'],
  ['MINI','John Cooper Works Convertible','Convertible','Petrol','—','—','4','','—','CV1192'],
  ['MINI','John Cooper Works Countryman','Compact SUV','Petrol','—','—','5','','—','CV1193'],
  ['BAIC','BJ30','Off-Road / 4x4','Petrol','—','—','5','','—','CV1194'],
  ['BAIC','BJ40','Off-Road / 4x4','Petrol','—','—','5','','—','CV1195'],
  ['BAIC','BJ40 SE','Off-Road / 4x4','Petrol','—','—','5','','—','CV1196'],
  ['BAIC','BJ40 Pro','Off-Road / 4x4','Petrol','—','—','5','','—','CV1197'],
  ['BAIC','BJ60','Off-Road / 4x4','Petrol','—','—','5','','—','CV1198'],
  ['BAIC','BJ80','Off-Road / 4x4','Petrol','—','—','5','','—','CV1199'],
  ['BAIC','B30','Compact SUV','Petrol','—','—','5','','—','CV1200'],
  ['BAIC','B40 P','Compact SUV','Petrol','—','—','5','','—','CV1201'],
  ['BAIC','X3','Compact SUV','Petrol','—','—','5','','—','CV1202'],
  ['BAIC','X35','Compact SUV','Petrol','—','—','5','','—','CV1203'],
  ['BAIC','X55','Compact SUV','Petrol','—','—','5','','—','CV1204'],
  ['BAIC','U5 Plus','Compact SUV','Petrol','—','—','5','','—','CV1205'],
  ['Arcfox','αS5','Sedan','Electric','—','—','5','','—','CV1206'],
  ['Arcfox','αT5','Mid-size SUV','Electric','—','—','5','','—','CV1207'],
  ['Arcfox','T1','Mid-size SUV','Electric','—','—','5','','—','CV1208'],
  ['Arcfox','T5','Mid-size SUV','Electric','—','—','5','','—','CV1209'],
  ['Arcfox','S5','Sedan','Electric','—','—','5','','—','CV1210'],
  ['Arcfox','S7','Sedan','Electric','—','—','5','','—','CV1211'],
  ['Arcfox','T','Mid-size SUV','Electric','—','—','5','','—','CV1212'],
  ['Arcfox','S','Sedan','Electric','—','—','5','','—','CV1213'],
  ['Stelato','S9','Sedan','Electric','—','—','5','','—','CV1214'],
  ['Stelato','S9T','Sedan','Electric','—','—','5','','—','CV1215'],
  ['Beijing','BJ30','Off-Road / 4x4','Petrol','—','—','5','','—','CV1216'],
  ['Beijing','BJ30e','Off-Road / 4x4','Electric','—','—','5','','—','CV1217'],
  ['Beijing','BJ40 Plus','Off-Road / 4x4','Petrol','—','—','5','','—','CV1218'],
  ['Beijing','BJ40e','Off-Road / 4x4','Electric','—','—','5','','—','CV1219'],
  ['Beijing','BJ60','Off-Road / 4x4','Petrol','—','—','5','','—','CV1220'],
  ['Beijing','BJ60e','Off-Road / 4x4','Electric','—','—','5','','—','CV1221'],
  ['Beijing','BJ80e','Off-Road / 4x4','Electric','—','—','5','','—','CV1222'],
  ['Beijing','X7','Compact SUV','Petrol','—','—','5','','—','CV1223'],
  ['Beijing','X55','Compact SUV','Petrol','—','—','5','','—','CV1224'],
  ['Beijing','X5','Compact SUV','Petrol','—','—','5','','—','CV1225'],
  ['Beijing','X3','Compact SUV','Petrol','—','—','5','','—','CV1226'],
  ['Beijing','U5 Plus','Compact SUV','Petrol','—','—','5','','—','CV1227'],
  ['Beijing','EU5','Sedan','Electric','—','—','5','','—','CV1228'],
  ['Beijing','EU5 Plus','Sedan','Electric','—','—','5','','—','CV1229'],
  ['Beijing','EU7','Sedan','Electric','—','—','5','','—','CV1230'],
  ['Beijing','EU7 Plus','Sedan','Electric','—','—','5','','—','CV1231'],
  ['Mercedes-Benz','A-Class','Hatchback','Petrol','—','—','5','','—','CV1232'],
  ['Mercedes-Benz','B-Class','Hatchback','Petrol','—','—','5','','—','CV1233'],
  ['Mercedes-Benz','CLA','Sedan','Petrol','—','—','5','','—','CV1234'],
  ['Mercedes-Benz','CLE','Coupe','Petrol','—','—','4','','—','CV1235'],
  ['Mercedes-Benz','CLS','Sedan','Petrol','—','—','5','','—','CV1236'],
  ['Mercedes-Benz','GLA','Compact SUV','Petrol','—','—','5','','—','CV1237'],
  ['Mercedes-Benz','GLB','Compact SUV','Petrol','—','—','5','','—','CV1238'],
  ['Mercedes-Benz','GLC','Mid-size SUV','Petrol','—','—','5','','—','CV1239'],
  ['Mercedes-Benz','GLE','Mid-size SUV','Petrol','—','—','5','','—','CV1240'],
  ['Mercedes-Benz','GLS','Luxury SUV','Petrol','—','—','7','','—','CV1241'],
  ['Mercedes-Benz','EQE','Sedan','Electric','—','—','5','','—','CV1242'],
  ['Mercedes-Benz','EQS','Sedan','Electric','—','—','5','','—','CV1243'],
  ['Mercedes-Benz','EQA','Compact SUV','Electric','—','—','5','','—','CV1244'],
  ['Mercedes-Benz','EQB','Compact SUV','Electric','—','—','5','','—','CV1245'],
  ['Mercedes-Benz','EQC','Mid-size SUV','Electric','—','—','5','','—','CV1246'],
  ['Mercedes-Benz','EQE SUV','Mid-size SUV','Electric','—','—','5','','—','CV1247'],
  ['Mercedes-Benz','EQS SUV','Mid-size SUV','Electric','—','—','5','','—','CV1248'],
  ['Mercedes-Benz','SL','Roadster','Petrol','—','—','2','','—','CV1249'],
  ['Mercedes-AMG','AMG A 35','Hatchback','Petrol','—','—','5','','—','CV1250'],
  ['Mercedes-AMG','AMG A 45 S','Hatchback','Petrol','—','—','5','','—','CV1251'],
  ['Mercedes-AMG','AMG C 43','Sedan','Petrol','—','—','5','','—','CV1252'],
  ['Mercedes-AMG','AMG C 63 S E Performance','Sedan','Petrol','—','—','5','','—','CV1253'],
  ['Mercedes-AMG','AMG E 53','Sedan','Petrol','—','—','5','','—','CV1254'],
  ['Mercedes-AMG','AMG E 63','Sedan','Petrol','—','—','5','','—','CV1255'],
  ['Mercedes-AMG','AMG S 63','Sedan','Petrol','—','—','5','','—','CV1256'],
  ['Mercedes-AMG','AMG GT 43','Coupe','Petrol','—','—','4','','—','CV1257'],
  ['Mercedes-AMG','AMG GT 55','Coupe','Petrol','—','—','4','','—','CV1258'],
  ['Mercedes-AMG','AMG GT 63','Coupe','Petrol','—','—','4','','—','CV1259'],
  ['Mercedes-AMG','AMG SL 43','Roadster','Petrol','—','—','2','','—','CV1260'],
  ['Mercedes-AMG','AMG SL 55','Roadster','Petrol','—','—','2','','—','CV1261'],
  ['Mercedes-AMG','AMG SL 63','Roadster','Petrol','—','—','2','','—','CV1262'],
  ['Mercedes-Maybach','EQS SUV','Luxury SUV','Electric','—','—','4','','—','CV1263'],
  ['Mercedes-Maybach','SL 680 Monogram Series','Roadster','Petrol','—','—','2','','—','CV1264'],
  ['Mercedes-Maybach','S 680','Luxury Car','Petrol','—','—','4','','—','CV1265'],
  ['Mercedes-Maybach','S 580','Luxury Car','Petrol','—','—','4','','—','CV1266'],
  ['Hyundai','i10','Hatchback','Petrol','—','—','5','','—','CV1267'],
  ['Hyundai','i20','Hatchback','Petrol','—','—','5','','—','CV1268'],
  ['Hyundai','i30','Hatchback','Petrol','—','—','5','','—','CV1269'],
  ['Hyundai','Accent','Sedan','Petrol','—','—','5','','—','CV1270'],
  ['Hyundai','Sonata','Sedan','Petrol','—','—','5','','—','CV1271'],
  ['Hyundai','Grandeur','Sedan','Petrol','—','—','5','','—','CV1272'],
  ['Hyundai','Venue','Compact SUV','Petrol','—','—','5','','—','CV1273'],
  ['Hyundai','Creta','Compact SUV','Petrol','—','—','5','','—','CV1274'],
  ['Hyundai','Palisade','Mid-size SUV','Petrol','—','—','7','','—','CV1275'],
  ['Hyundai','Exter','Compact SUV','Petrol','—','—','5','','—','CV1276'],
  ['Hyundai','Alcazar','Mid-size SUV','Petrol','—','—','7','','—','CV1277'],
  ['Hyundai','Bayon','Compact SUV','Petrol','—','—','5','','—','CV1278'],
  ['Hyundai','Kona','Compact SUV','Petrol','—','—','5','','—','CV1279'],
  ['Hyundai','Ioniq 6','Sedan','Electric','—','—','5','','—','CV1280'],
  ['Hyundai','Ioniq 9','Mid-size SUV','Electric','—','—','7','','—','CV1281'],
  ['Hyundai','Casper','Compact SUV','Petrol','—','—','5','','—','CV1282'],
  ['Hyundai','Stargazer','Minivan / MPV','Petrol','—','—','7','','—','CV1283'],
  ['Hyundai','Staria','Minivan / MPV','Petrol','—','—','7','','—','CV1284'],
  ['Hyundai','Nexo','Compact SUV','Hydrogen fuel cell','—','—','5','','—','CV1285'],
  ['Hyundai','Ioniq 5 N','Hot Hatch','Petrol','—','—','5','','—','CV1286'],
  ['Hyundai','i20 N','Hot Hatch','Petrol','—','—','5','','—','CV1287'],
  ['Hyundai','i30 N','Hot Hatch','Petrol','—','—','5','','—','CV1288'],
  ['Hyundai','Elantra N','Hot Hatch','Petrol','—','—','5','','—','CV1289'],
  ['Hyundai','Kona N','Hot Hatch','Petrol','—','—','5','','—','CV1290'],
  ['Genesis','G70','Sedan','Petrol','—','—','5','','—','CV1291'],
  ['Genesis','G90','Sedan','Petrol','—','—','5','','—','CV1292'],
  ['Genesis','GV60','Compact SUV','Electric','—','—','5','','—','CV1293'],
  ['Genesis','GV80 Coupe','Luxury SUV','Petrol','—','—','5','','—','CV1294'],
  ['Genesis','Electrified G80','Sedan','Electric','—','—','5','','—','CV1295'],
  ['Genesis','Electrified GV70','Sedan','Electric','—','—','5','','—','CV1296'],
  ['Genesis','Magma GV60','Compact SUV','Electric','—','—','5','','—','CV1297'],
  ['Kia','Picanto','Hatchback','Petrol','—','—','5','','—','CV1298'],
  ['Kia','Rio','Sedan','Petrol','—','—','5','','—','CV1299'],
  ['Kia','Forte','Sedan','Petrol','—','—','5','','—','CV1300'],
  ['Kia','K3','Sedan','Petrol','—','—','5','','—','CV1301'],
  ['Kia','K4','Sedan','Petrol','—','—','5','','—','CV1302'],
  ['Kia','K5','Sedan','Petrol','—','—','5','','—','CV1303'],
  ['Kia','K8','Sedan','Petrol','—','—','5','','—','CV1304'],
  ['Kia','K9','Sedan','Petrol','—','—','5','','—','CV1305'],
  ['Kia','Sonet','Compact SUV','Petrol','—','—','5','','—','CV1306'],
  ['Kia','Sorento','Mid-size SUV','Petrol / Diesel','—','—','7','','—','CV1307'],
  ['Kia','Carnival','Minivan / MPV','Petrol','—','—','7','','—','CV1308'],
  ['Kia','Carens','Minivan / MPV','Petrol','—','—','7','','—','CV1309'],
  ['Kia','EV3','Compact SUV','Electric','—','—','5','','—','CV1310'],
  ['Kia','EV4','Compact SUV','Electric','—','—','5','','—','CV1311'],
  ['Kia','EV5','Compact SUV','Electric','—','—','5','','—','CV1312'],
  ['Kia','EV9','Mid-size SUV','Electric','—','—','7','','—','CV1313'],
  ['Kia','EV6 GT','Crossover','Electric','—','—','5','','—','CV1314'],
  ['Kia','Tasman','Pickup Truck','Petrol','—','—','5','','—','CV1315'],
  ['Porsche','718 Cayman','Coupe','Petrol','—','—','2','','—','CV1316'],
  ['Porsche','718 Boxster','Roadster','Petrol','—','—','2','','—','CV1317'],
  ['Porsche','911','Sports Car','Petrol','—','—','4','','—','CV1318'],
  ['Porsche','Panamera','Luxury Car','Petrol','—','—','4','','—','CV1319'],
  ['Porsche','911 Carrera T','Sports Car','Petrol','—','—','4','','—','CV1320'],
  ['Porsche','911 Carrera S','Sports Car','Petrol','—','—','4','','—','CV1321'],
  ['Porsche','911 Turbo','Sports Car','Petrol','—','—','4','','—','CV1322'],
  ['Porsche','911 Turbo S','Sports Car','Petrol','—','—','4','','—','CV1323'],
  ['Porsche','911 GT3','Sports Car','Petrol','—','—','4','','—','CV1324'],
  ['Porsche','911 GT3 RS','Sports Car','Petrol','—','—','4','','—','CV1325'],
  ['Porsche','911 GT3 Touring','Sports Car','Petrol','—','—','4','','—','CV1326'],
  ['Porsche','911 Dakar','Sports Car','Petrol','—','—','2','','—','CV1327'],
  ['Porsche','911 S/T','Sports Car','Petrol','—','—','4','','—','CV1328'],
  ['Porsche','718 Cayman GT4 RS','Coupe','Petrol','—','—','2','','—','CV1329'],
  ['Porsche','718 Spyder RS','Roadster','Petrol','—','—','2','','—','CV1330'],
  ['Porsche','918 Spyder','Sports Car','Petrol','—','—','4','','—','CV1331'],
  ['Volkswagen','Golf','Hatchback','Petrol','—','—','5','','—','CV1332'],
  ['Volkswagen','Polo','Hatchback','Petrol','—','—','5','','—','CV1333'],
  ['Volkswagen','Passat','Sedan','Petrol','—','—','5','','—','CV1334'],
  ['Volkswagen','Arteon','Fastback','Petrol','—','—','5','','—','CV1335'],
  ['Volkswagen','T-Roc','Compact SUV','Petrol','—','—','5','','—','CV1336'],
  ['Volkswagen','T-Cross','Compact SUV','Petrol','—','—','5','','—','CV1337'],
  ['Volkswagen','Touareg','Mid-size SUV','Petrol','—','—','5','','—','CV1338'],
  ['Volkswagen','Taos','Compact SUV','Petrol','—','—','5','','—','CV1339'],
  ['Volkswagen','ID.3','Hatchback','Petrol','—','—','5','','—','CV1340'],
  ['Volkswagen','ID.5','Crossover','Electric','—','—','5','','—','CV1341'],
  ['Volkswagen','ID.7','Sedan','Electric','—','—','5','','—','CV1342'],
  ['Volkswagen','ID. Buzz','Minivan / MPV','Electric','—','—','7','','—','CV1343'],
  ['Volkswagen','Golf R','Hot Hatch','Petrol','—','—','5','','—','CV1344'],
  ['Audi','A1','Hatchback','Petrol','—','—','5','','—','CV1345'],
  ['Audi','A3','Hatchback','Petrol','—','—','5','','—','CV1346'],
  ['Audi','A5','Fastback','Petrol','—','—','5','','—','CV1347'],
  ['Audi','A6','Sedan','Petrol','—','—','5','','—','CV1348'],
  ['Audi','A7','Fastback','Petrol','—','—','5','','—','CV1349'],
  ['Audi','A8','Sedan','Petrol','—','—','5','','—','CV1350'],
  ['Audi','Q2','Compact SUV','Petrol','—','—','5','','—','CV1351'],
  ['Audi','Q3','Compact SUV','Petrol','—','—','5','','—','CV1352'],
  ['Audi','Q4 e-tron','Mid-size SUV','Electric','—','—','5','','—','CV1353'],
  ['Audi','Q6 e-tron','Mid-size SUV','Electric','—','—','5','','—','CV1354'],
  ['Audi','Q8','Luxury SUV','Petrol','—','—','5','','—','CV1355'],
  ['Audi','e-tron GT','Grand Tourer (GT)','Electric','—','—','4','','—','CV1356'],
  ['Audi','RS3','Hot Hatch','Petrol','—','—','5','','—','CV1357'],
  ['Audi','RS4','Sedan','Petrol','—','—','5','','—','CV1358'],
  ['Audi','RS5','Fastback','Petrol','—','—','5','','—','CV1359'],
  ['Audi','RS7','Sedan','Petrol','—','—','5','','—','CV1360'],
  ['Audi','RS Q3','Compact SUV','Petrol','—','—','5','','—','CV1361'],
  ['Audi','RS Q8','Luxury SUV','Petrol','—','—','5','','—','CV1362'],
  ['Audi','R8','Supercar','Petrol','—','—','2','','—','CV1363'],
  ['Škoda','Fabia','Hatchback','Petrol','—','—','5','','—','CV1364'],
  ['Škoda','Scala','Hatchback','Petrol','—','—','5','','—','CV1365'],
  ['Škoda','Kamiq','Compact SUV','Petrol','—','—','5','','—','CV1366'],
  ['Škoda','Karoq','Compact SUV','Petrol','—','—','5','','—','CV1367'],
  ['Škoda','Enyaq','Mid-size SUV','Electric','—','—','5','','—','CV1368'],
  ['Škoda','Elroq','Mid-size SUV','Electric','—','—','5','','—','CV1369'],
  ['Škoda','Kylaq','Compact SUV','Petrol','—','—','5','','—','CV1370'],
  ['Škoda','Slavia','Sedan','Petrol','—','—','5','','—','CV1371'],
  ['Škoda','Kushaq','Compact SUV','Petrol','—','—','5','','—','CV1372'],
  ['SEAT','Arona','Compact SUV','Petrol','—','—','5','','—','CV1373'],
  ['SEAT','Tarraco','Minivan / MPV','Petrol','—','—','7','','—','CV1374'],
  ['SEAT','Alhambra','Minivan / MPV','Petrol','—','—','7','','—','CV1375'],
  ['SEAT','Mii','Hatchback','Petrol','—','—','4','','—','CV1376'],
  ['CUPRA','Ateca','Compact SUV','Petrol','—','—','5','','—','CV1377'],
  ['CUPRA','Tavascan','Compact SUV','Electric','—','—','5','','—','CV1378'],
  ['CUPRA','Terramar','Compact SUV','Petrol','—','—','5','','—','CV1379'],
  ['CUPRA','Raval','Hatchback','Electric','—','—','5','','—','CV1380'],
  ['Abarth','600e','Hot Hatch','Electric','—','—','4','','—','CV1381'],
  ['Alfa Romeo','Junior','Compact SUV','Hybrid','—','—','5','','—','CV1382'],
  ['Alfa Romeo','33 Stradale','Supercar','Petrol','—','—','2','','—','CV1383'],
  ['Chrysler','Voyager','Minivan / MPV','Plug-in hybrid','—','—','7','','—','CV1384'],
  ['Citroën','C3 Aircross','Compact SUV','Petrol','—','—','5','','—','CV1385'],
  ['Citroën','C4 X','Compact SUV','Petrol','—','—','5','','—','CV1386'],
  ['Citroën','C5 X','Crossover','Petrol','—','—','5','','—','CV1387'],
  ['Citroën','Ami','Microcar','Electric','—','—','2','','—','CV1388'],
  ['Citroën','ë-C3','Hatchback','Electric','—','—','5','','—','CV1389'],
  ['Dodge','Hornet','Compact SUV','Petrol','—','—','5','','—','CV1390'],
  ['DS','DS 4','Compact SUV','Petrol','—','—','5','','—','CV1391'],
  ['DS','DS N°4','Compact SUV','Petrol','—','—','5','','—','CV1392'],
  ['DS','DS N°8','Crossover','Electric','—','—','5','','—','CV1393'],
  ['Fiat','500e','Hatchback','Electric','—','—','4','','—','CV1394'],
  ['Fiat','Grande Panda','Hatchback','Petrol','—','—','5','','—','CV1395'],
  ['Fiat','600','Compact SUV','Petrol','—','—','5','','—','CV1396'],
  ['Fiat','Doblo','Van','Diesel','—','—','3','','—','CV1397'],
  ['Fiat','Ducato','Van','Diesel','—','—','3','','—','CV1398'],
  ['Jeep','Renegade','Compact SUV','Petrol','—','—','5','','—','CV1399'],
  ['Jeep','Avenger','Compact SUV','Petrol','—','—','5','','—','CV1400'],
  ['Jeep','Cherokee','Mid-size SUV','Petrol','—','—','5','','—','CV1401'],
  ['Jeep','Wagoneer','Full-size SUV','Petrol','—','—','7','','—','CV1402'],
  ['Jeep','Grand Wagoneer','Full-size SUV','Petrol','—','—','7','','—','CV1403'],
  ['Lancia','Gamma','Hatchback','Petrol','—','—','5','','—','CV1404'],
  ['Opel','Frontera','Compact SUV','Petrol','—','—','5','','—','CV1405'],
  ['Opel','Grandland','Compact SUV','Petrol','—','—','5','','—','CV1406'],
  ['Opel','Combo','Van','Diesel','—','—','5','','—','CV1407'],
  ['Opel','Zafira','Minivan / MPV','Petrol','—','—','7','','—','CV1408'],
  ['Peugeot','2008','Compact SUV','Petrol','—','—','5','','—','CV1409'],
  ['Peugeot','408','Fastback','Petrol','—','—','5','','—','CV1410'],
  ['Peugeot','5008','Compact SUV','Petrol','—','—','5','','—','CV1411'],
  ['Peugeot','508','Sedan','Petrol','—','—','5','','—','CV1412'],
  ['Peugeot','Rifter','Van','Diesel','—','—','5','','—','CV1413'],
  ['Peugeot','Partner','Van','Diesel','—','—','5','','—','CV1414'],
  ['Ram','3500','Pickup Truck','Diesel','—','—','6','','—','CV1415'],
  ['Ram','Rampage','Pickup Truck','Petrol','—','—','5','','—','CV1416'],
  ['Vauxhall','Frontera','Compact SUV','Petrol','—','—','5','','—','CV1417'],
  ['Vauxhall','Grandland','Compact SUV','Petrol','—','—','5','','—','CV1418'],
  ['Vauxhall','Combo','Van','Diesel','—','—','5','','—','CV1419'],
  ['Vauxhall','Vivaro','Van','Diesel','—','—','5','','—','CV1420']
  ].map(function(a){return{b:a[0],n:a[1],c:a[2],pt:a[3],e:a[4],hp:a[5],s:a[6],p:a[7],y:a[8],id:a[9]}});

  /* ---- researched data (accuracy first): market-specific, every field sourced; unknown values stay empty ----
     fs = which sources (index into src) back each field; ver = Verified | Partially Verified | Not Available.
     Overlay below fills ONLY empty engine / power / year cells - existing populated values are never overwritten. */
  var CV_RESEARCH={"Toyota|GR86":{"mkt":"United States · 2026 model year","e":"2.4L naturally aspirated flat-four (boxer)","hp":"228 hp","y":"2021","my":"2026","fuel":"Petrol (premium recommended)","acc":"0–60 mph: 6.1 s (automatic)","top":null,"w":"2,851 lb (1,293 kg), base trim","price":null,"src":[["Toyota USA – GR86 (manufacturer)","https://www.toyota.com/86/"],["Kelley Blue Book – 2026 GR86 specs","https://www.kbb.com/toyota/gr86/2026/specs"],["Kelley Blue Book – 2026 GR86 Premium","https://www.kbb.com/toyota/gr86/2026/premium"],["iSeeCars – 2026 GR86 specs","https://www.iseecars.com/car/2026-toyota-gr86-specs"],["Valley Hi Toyota (dealer) – 2026 GR86 specs","https://www.valleyhitoyota.com/2026-toyota-gr86-specs-features-model-research/"],["Paul Tan – GR 86 global debut, 5 Apr 2021","https://paultan.org/2021/04/05/2021-toyota-gr-86-global-debut"],["Kuruma News – GR86 world premiere, 5 Apr 2021","https://kuruma-news.jp/photo/364053"]],"fs":{"e":[0,1],"hp":[0,1],"y":[5,6],"fuel":[1,2],"acc":[0,4],"w":[1,3],"seats":[2,3],"my":[0,1]},"ver":"Partially Verified","note":"US-market figures (SAE net). Japan/global press quotes 235 PS for the same engine, so the two markets are not mixed. Generation year comes from press coverage of the April 2021 world premiere (second generation, sold from autumn 2021), not a manufacturer newsroom page. Price not recorded: the Toyota page shows a stale starting price that disagrees with KBB. Top speed and 0–100 km/h not found for this market."},"Toyota|GR Corolla":{"mkt":"United States · 2026 model year","e":"1.6L turbocharged 3-cylinder","hp":"300 hp","y":"2022","my":"2026","fuel":"Petrol (premium unleaded)","acc":null,"top":null,"w":null,"price":null,"src":[["Kelley Blue Book – 2026 GR Corolla specs","https://www.kbb.com/toyota/gr-corolla/2026/specs"],["Cars.com – 2026 GR Corolla specs","https://www.cars.com/research/toyota-gr_corolla-2026/specs/482094/"],["Valley Hi Toyota (dealer) – 2026 GR Corolla specs","https://www.valleyhitoyota.com/2026-toyota-gr-corolla-specs-features-model-research/"],["Wikipedia – Toyota GR Corolla","https://www.Wikipedia.com/wiki/Toyota_GR_Corolla"],["The Shop – Toyota debuts GR Corolla (Apr 2022)","https://theshopmag.com/features/toyota-debuts-gr-corolla/"],["WhichCar – 2023 GR Corolla reveal, 1 Apr 2022","https://whichcar.com.au/?p=527110"]],"fs":{"e":[0,1],"hp":[0,1],"y":[3,4,5],"fuel":[1],"seats":[1],"my":[0,1]},"ver":"Partially Verified","note":"US-market figures. Kerb weight not recorded because sources disagree (3,274 lb on KBB vs 3,296 lb / 1,495 kg on dealer pages). 0–60 mph (4.9 s) appears only on one dealer page, so it is not recorded. Price not recorded: sources disagree and prices change often. Launch year is the April 2022 introduction (model years 2023 onward)."},"Toyota|bZ4X":{"mkt":"United States · 2026 model year (sold in the US as “bZ”, renamed from bZ4X)","e":"Electric motor (FWD) / dual electric motors (AWD)","hp":"168–338 hp","y":null,"my":"2026","fuel":"Electric","batt":"57.7 kWh (base XLE FWD) / 74.7 kWh (other trims)","rng":"EPA est. 236–314 mi, depending on trim","acc":null,"top":null,"w":"4,057–4,453 lb, depending on trim","price":null,"src":[["Valley Hi Toyota (dealer) – 2026 bZ specs","https://www.valleyhitoyota.com/2026-toyota-bz-specs-features-model-research/"],["Kelley Blue Book – 2026 bZ specs","https://www.kbb.com/toyota/bz/2026/specs"],["Kelley Blue Book – 2026 bZ XLE","https://www.kbb.com/toyota/bz/2026/xle"],["Edmunds – 2026 Toyota bZ","https://www.edmunds.com/toyota/bz/2026"],["autoevolution – Toyota bZ (2026)","https://www.autoevolution.com/cars/toyota-bz-2026.html"],["Toyota Walnut Creek (dealer) – 2026 bZ","https://www.toyotawc.com/2026-toyota-bz"],["TFLcar – 2026 Toyota bZ","https://tflcar.com/?p=153573"],["Carvana – 2026 Toyota bZ","https://www.carvana.com/buy/2026-toyota-bz/"]],"fs":{"e":[0,4],"hp":[0,1,4,7],"batt":[0,2,4,5],"rng":[1,5,6,7],"w":[1,3,4,5],"seats":[2],"fuel":[1],"my":[1,2]},"ver":"Partially Verified","note":"US-market figures only; bZ4X specifications in other markets differ and were not researched or mixed in. Generation launch year not recorded (no source found in this pass). 0–60 mph appears on a single KBB page only, so it is not recorded. Weight and range are given as trim ranges because they vary by trim and drivetrain."}};
  CARS.forEach(function(c){var r=CV_RESEARCH[c.b+'|'+c.n];if(!r)return;
    ['e','hp','y'].forEach(function(k){if(r[k]&&(c[k]==='—'||c[k]===''))c[k]=r[k]})});

  var COUNTRY={"Exlantix":"China","Forthing":"China","Joyee":"China","Shangjie":"China","Stelato":"China","Abarth":"Italy","Acura":"Japan","Alfa Romeo":"Italy","Alpine":"France","Ariel":"United Kingdom","Aston Martin":"United Kingdom","Audi":"Germany","Bentley":"United Kingdom","BMW":"Germany","Bugatti":"France","Buick":"United States","BYD":"China","Cadillac":"United States","Caterham":"United Kingdom","Changan":"China","Chery":"China","Chevrolet":"United States","Chrysler":"United States","Citroën":"France","CUPRA":"Spain","Dacia":"Romania","Daewoo":"South Korea","Daihatsu":"Japan","Datsun":"Japan","Dodge":"United States","DS":"France","Ferrari":"Italy","Fiat":"Italy","Fisker":"United States","Force Motors":"India","Ford":"United States","Geely":"China","Genesis":"South Korea","GMC":"United States","GWM":"China","Haval":"China","Honda":"Japan","Hongqi":"China","Hummer":"United States","Hyundai":"South Korea","Ineos":"United Kingdom","Infiniti":"Japan","Isuzu":"Japan","Jaguar":"United Kingdom","Jeep":"United States","Kia":"South Korea","Koenigsegg":"Sweden","Lada":"Russia","Lamborghini":"Italy","Lancia":"Italy","Land Rover":"United Kingdom","Lexus":"Japan","Lincoln":"United States","Lotus":"United Kingdom","Lucid":"United States","Lynk & Co":"China","Mahindra":"India","Maruti Suzuki":"India","Maserati":"Italy","Mercedes-Maybach":"Germany","Mazda":"Japan","McLaren":"United Kingdom","Mercedes-Benz":"Germany","MG":"United Kingdom","MINI":"United Kingdom","Mitsubishi":"Japan","Morgan":"United Kingdom","NIO":"China","Nissan":"Japan","Oldsmobile":"United States","Opel":"Germany","Pagani":"Italy","Peugeot":"France","Plymouth":"United States","Polestar":"Sweden","Pontiac":"United States","Porsche":"Germany","Proton":"Malaysia","Ram":"United States","Renault":"France","Rimac":"Croatia","Rivian":"United States","Rolls-Royce":"United Kingdom","Rover":"United Kingdom","Saab":"Sweden","Saturn":"United States","Scion":"Japan","SEAT":"Spain","Škoda":"Czech Republic","Smart":"Germany","SsangYong":"South Korea","Subaru":"Japan","Suzuki":"Japan","Tata":"India","Tesla":"United States","Toyota":"Japan","Vauxhall":"United Kingdom","Volkswagen":"Germany","Volvo":"Sweden","Wuling":"China","XPeng":"China","Zeekr":"China","Li Auto":"China","GAC":"China","Dongfeng":"China","BAIC":"China","VinFast":"Vietnam","IKCO":"Iran","Beijing":"China","Arcfox":"China","Denza":"China","Fangchengbao":"China","Yangwang":"China","Deepal":"China","Avatr":"China","Exeed":"China","Jetour":"China","iCar":"China","Luxeed":"China","Voyah":"China","M-Hero":"China","Aeolus":"China","FAW":"China","Bestune":"China","Aion":"China","Hyptec":"China","Tank":"China","Ora":"China","Wey":"China","Mercedes-AMG":"Germany","ONVO":"China","Firefly":"China","Roewe":"China","Maxus":"China","IM Motors":"China"};
  var COMPANY_BRANDS={"Aston Martin": ["Aston Martin"], "AvtoVAZ": ["Lada"], "BAIC Group": ["BAIC", "Beijing", "Arcfox", "Stelato"], "Bentley Motors": ["Bentley"], "BMW Group": ["BMW", "MINI", "Rolls-Royce"], "BYD": ["BYD", "Denza", "Fangchengbao", "Yangwang"], "Changan Automobile": ["Changan", "Deepal", "Avatr"], "Chery": ["Chery", "Exeed", "Jetour", "iCar", "Luxeed", "Exlantix"], "Dongfeng Motor": ["Dongfeng", "Voyah", "M-Hero", "Aeolus", "Forthing"], "FAW Group": ["FAW", "Hongqi", "Bestune", "Joyee"], "Ferrari": ["Ferrari"], "Ford Motor Company": ["Ford", "Lincoln"], "GAC Group": ["GAC", "Aion", "Hyptec"], "Geely": ["Geely", "Lynk & Co", "Zeekr"], "General Motors": ["Chevrolet", "Cadillac", "Buick", "GMC"], "Great Wall Motor": ["GWM", "Haval", "Tank", "Ora", "Wey"], "Honda": ["Honda", "Acura"], "Hyundai Motor Group": ["Hyundai", "Kia", "Genesis"], "Iran Khodro": ["IKCO"], "Isuzu Motors": ["Isuzu"], "Jaguar Land Rover": ["Jaguar", "Land Rover"], "Koenigsegg": ["Koenigsegg"], "Lamborghini": ["Lamborghini"], "Li Auto": ["Li Auto"], "Lucid Motors": ["Lucid"], "Mahindra & Mahindra": ["Mahindra"], "Maserati": ["Maserati"], "Mazda": ["Mazda"], "McLaren": ["McLaren"], "Mercedes-Benz Group": ["Mercedes-Benz", "Mercedes-AMG", "Mercedes-Maybach"], "Mitsubishi Motors": ["Mitsubishi"], "NIO": ["NIO", "ONVO", "Firefly"], "Nissan": ["Nissan", "Infiniti"], "Porsche": ["Porsche"], "Proton": ["Proton"], "Renault Group": ["Renault", "Dacia", "Alpine"], "Rimac": ["Rimac", "Bugatti"], "Rivian": ["Rivian"], "Rolls-Royce Motor Cars": ["Rolls-Royce"], "SAIC Motor": ["MG", "Roewe", "Maxus", "IM Motors", "Shangjie"], "Stellantis": ["Abarth", "Alfa Romeo", "Chrysler", "Citroën", "Dodge", "DS", "Fiat", "Jeep", "Lancia", "Maserati", "Opel", "Peugeot", "Ram", "Vauxhall"], "Subaru Corporation": ["Subaru"], "Suzuki Motor Corporation": ["Suzuki"], "Tata Motors": ["Tata"], "Tesla": ["Tesla"], "Toyota": ["Toyota", "Lexus", "Daihatsu"], "VinFast": ["VinFast"], "Volkswagen Group": ["Volkswagen", "Audi", "Škoda", "SEAT", "CUPRA", "Bentley", "Lamborghini", "Porsche"], "Volvo Cars": ["Volvo"], "XPeng": ["XPeng"]};
  var COMPANY_HQ={"Toyota": "Japan", "Volkswagen Group": "Germany", "Hyundai Motor Group": "South Korea", "General Motors": "United States", "Ford Motor Company": "United States", "Honda": "Japan", "Nissan": "Japan", "BMW Group": "Germany", "Mercedes-Benz Group": "Germany", "Stellantis": "Netherlands", "Tesla": "United States", "BYD": "China", "Geely": "China", "SAIC Motor": "China", "Chery": "China", "Changan Automobile": "China", "Great Wall Motor": "China", "Tata Motors": "India", "Mahindra & Mahindra": "India", "Suzuki Motor Corporation": "Japan", "Mazda": "Japan", "Subaru Corporation": "Japan", "Mitsubishi Motors": "Japan", "Isuzu Motors": "Japan", "Renault Group": "France", "Volvo Cars": "Sweden", "Jaguar Land Rover": "United Kingdom", "Ferrari": "Italy", "Lamborghini": "Italy", "Maserati": "Italy", "Aston Martin": "United Kingdom", "McLaren": "United Kingdom", "Rolls-Royce Motor Cars": "United Kingdom", "Bentley Motors": "United Kingdom", "Porsche": "Germany", "Koenigsegg": "Sweden", "Rimac": "Croatia", "Lucid Motors": "United States", "Rivian": "United States", "NIO": "China", "XPeng": "China", "Li Auto": "China", "GAC Group": "China", "Dongfeng Motor": "China", "FAW Group": "China", "BAIC Group": "China", "VinFast": "Vietnam", "Proton": "Malaysia", "AvtoVAZ": "Russia", "Iran Khodro": "Iran"};
  var BLURB={"Japan":"Known for reliable, fuel-efficient cars and pioneering hybrids, led by Toyota, Honda and Nissan.","Germany":"Famous for precision engineering, luxury and performance: BMW, Mercedes-Benz, Audi, Porsche and Volkswagen.","United States":"Home of muscle cars, big pickup trucks, rugged SUVs and Tesla's electric cars: Ford, Chevrolet, Jeep and Tesla.","Italy":"Famous for exotic supercars and beautiful design: Ferrari, Lamborghini, Maserati and Alfa Romeo.","United Kingdom":"Known for luxury, off-roaders and British sports cars: Rolls-Royce, Bentley, Land Rover, Aston Martin and McLaren.","South Korea":"Known for value, technology and fast-growing electric cars: Hyundai, Kia and Genesis.","Sweden":"Famous for safety and Scandinavian design, plus hypercars: Volvo, Koenigsegg and Polestar.","France":"Known for stylish everyday cars and hypercars: Renault, Peugeot, Citroën and Bugatti.","China":"The world's largest car market and a leader in electric vehicles: BYD, Geely, Nio and XPeng.","India":"Known for affordable cars and tough SUVs: Tata, Mahindra and Maruti Suzuki.","Spain":"Known for sporty, compact cars: SEAT and Cupra.","Czech Republic":"Known for practical, good-value family cars: Škoda.","Malaysia":"Home of the national car maker Proton.","Romania":"Known for budget-friendly cars: Dacia.","Russia":"Known for classic, affordable cars: Lada.","Croatia":"Home of Rimac, maker of record-breaking electric hypercars.","Vietnam":"Home of VinFast, a fast-growing maker of electric vehicles.","Iran":"Home of Iran Khodro, the country's largest car maker."};
  var $=function(i){return document.getElementById(i)};
  var box=$('searchBox'),input=box.querySelector('input'),btn=box.querySelector('.btn');
  var sec=$('explore'),grid=$('cargrid'),modal=$('carModal'),mBody=$('mBody');
  var state={brand:'',cat:'',pt:'',yr:'',co:'',cp:'',q:'',all:false};
  var lastFocus=null;

  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function norm(t){return String(t).toLowerCase().replace(/[^a-z0-9]+/g,'')}
  /* brand logos supplied in logos.zip (embedded so paths never break on deploy) */
  var LOGOS={"Abarth": "images/hero/hero-001.jpg", "Acura": "images/hero/hero-002.jpg", "Aeolus": "images/hero/hero-003.png", "Aion": "images/hero/hero-004.jpg", "Alfa Romeo": "images/hero/hero-005.jpg", "Alpine": "images/hero/hero-006.jpg", "Avatr": "images/hero/hero-007.png", "BAIC": "images/hero/hero-008.jpg", "Bestune": "images/hero/hero-009.jpg", "Buick": "images/hero/hero-010.jpg", "Changan": "images/hero/hero-011.jpg", "Chery": "images/hero/hero-012.jpg", "Chrysler": "images/hero/hero-013.jpg", "Citroën": "images/hero/hero-014.jpg", "CUPRA": "images/hero/hero-015.png", "Dacia": "images/hero/hero-016.jpg", "Daihatsu": "images/hero/hero-017.jpg", "Deepal": "images/hero/hero-018.jpg", "Denza": "images/hero/hero-019.jpg", "Dodge": "images/hero/hero-020.jpg", "Dongfeng": "images/hero/hero-021.jpg", "DS": "images/hero/hero-022.jpg", "Exeed": "images/hero/hero-023.png", "Fangchengbao": "images/hero/hero-024.jpg", "FAW": "images/hero/hero-025.jpg", "Fiat": "images/hero/hero-026.jpg", "Firefly": "images/hero/hero-027.png", "GAC": "images/hero/hero-028.jpg", "Geely": "images/hero/hero-029.png", "GMC": "images/hero/hero-030.png", "GWM": "images/hero/hero-031.jpg", "Haval": "images/hero/hero-032.jpg", "Hongqi": "images/hero/hero-033.jpg", "Hyptec": "images/hero/hero-034.png", "iCar": "images/hero/hero-035.png", "IKCO": "images/hero/hero-036.jpg", "IM Motors": "images/hero/hero-037.jpg", "Isuzu": "images/hero/hero-038.jpg", "Jaguar": "images/hero/hero-039.jpg", "Jetour": "images/hero/hero-040.jpg", "Koenigsegg": "images/hero/hero-041.jpg", "Lada": "images/hero/hero-042.jpg", "Lancia": "images/hero/hero-043.jpg", "Li Auto": "images/hero/hero-044.png", "Lincoln": "images/hero/hero-045.png", "Lucid": "images/hero/hero-046.png", "Luxeed": "images/hero/hero-047.jpg", "Lynk & Co": "images/hero/hero-048.jpg", "M-Hero": "images/hero/hero-049.jpg", "Maxus": "images/hero/hero-050.jpg", "Mazda": "images/hero/hero-051.jpg", "Mercedes-AMG": "images/hero/hero-052.jpg", "Mercedes-Maybach": "images/hero/hero-053.jpg", "MG": "images/hero/hero-054.jpg", "MINI": "images/hero/hero-055.jpg", "Mitsubishi": "images/hero/hero-056.jpg", "Infiniti": "images/hero/hero-057.jpg", "NIO": "images/hero/hero-058.jpg", "ONVO": "images/hero/hero-059.jpg", "Opel": "images/hero/hero-060.jpg", "Ora": "images/hero/hero-061.jpg", "Peugeot": "images/hero/hero-062.png", "Proton": "images/hero/hero-063.jpg", "Ram": "images/hero/hero-064.jpg", "Renault": "images/hero/hero-065.jpg", "Rimac": "images/hero/hero-066.jpg", "Rivian": "images/hero/hero-067.png", "Roewe": "images/hero/hero-068.jpg", "SEAT": "images/hero/hero-069.jpg", "Škoda": "images/hero/hero-070.jpg", "Subaru": "images/hero/hero-071.jpg", "Suzuki": "images/hero/hero-072.jpg", "Tank": "images/hero/hero-073.jpg", "Vauxhall": "images/hero/hero-074.jpg", "VinFast": "images/hero/hero-075.jpg", "Voyah": "images/hero/hero-076.jpg", "Wey": "images/hero/hero-077.png", "XPeng": "images/hero/hero-078.jpg", "Beijing": "images/hero/hero-079.jpg", "Arcfox": "images/hero/hero-080.jpg", "Exlantix": "images/hero/hero-081.png", "Forthing": "images/hero/hero-082.png", "Joyee": "images/hero/hero-083.png", "Shangjie": "images/hero/hero-084.png", "Stelato": "images/hero/hero-085.png", "Yangwang": "images/hero/hero-086.png", "Zeekr": "images/hero/hero-087.png"};
  function logoFor(b){
    var t=[].slice.call(document.querySelectorAll('#brandTiles .tile')).filter(function(x){return norm(x.querySelector('span').textContent)===norm(b)})[0];
    var lg=t&&t.querySelector('.lg');
    if(lg&&lg.querySelector('img'))return lg.outerHTML;
    var lk2=Object.keys(LOGOS).filter(function(k){return norm(k)===norm(b)})[0];
    if(lk2)return '<div class="lg"><img src="'+LOGOS[lk2]+'" alt="'+esc(b)+' logo"></div>';
    var w=b.replace(/[^A-Za-z0-9 ]/g,'').split(/\s+/).filter(Boolean);
    var ini=(w.length>1?w.map(function(x){return x[0]}).join(''):b.slice(0,2)).toUpperCase().slice(0,3);
    return '<div class="lg ph"><b>'+esc(ini)+'</b></div>';
  }
  function hasCars(b){return CARS.some(function(c){return c.b===b})?1:0}
  function brandNames(){var o={};CARS.forEach(function(c){o[c.b]=1});return Object.keys(o)}

  /* keep the chips in the hero in sync */
  function setChip(key,val){
    var chip=document.querySelector('.chip[data-dd="'+key+'"]');if(!chip)return;
    var label={brand:'Brand',category:'Car Category',powertrain:'Powertrain',year:'Year',country:'Country / Origin',company:'Company'}[key];
    chip.dataset.val=val||'';
    if(key==='country'&&val)chip.querySelector('.lbl').innerHTML=window.CV_FLAG(val)+label+': '+val;else chip.querySelector('.lbl').textContent=val?label+': '+val:label;
    chip.classList.toggle('picked',!!val);
  }

  function ptMatch(c,sel){
    var t=c.pt.toLowerCase();
    switch(sel){
      case 'Petrol':return t.indexOf('petrol')>-1;
      case 'Diesel':return t.indexOf('diesel')>-1;
      case 'Electric':return t.indexOf('electric')>-1;
      case 'Hybrid':return t.indexOf('hybrid')>-1;
      case 'Plug-in Hybrid':return t.indexOf('plug-in hybrid')>-1;
      case 'Mild Hybrid':return t.indexOf('mild hybrid')>-1;
    }
    return true;
  }
  function render(){
    var has=state.brand||state.cat||state.pt||state.yr||state.co||state.cp||state.q||state.all;
    if(!has){sec.hidden=true;return}
    sec.hidden=false;
    var q=norm(state.q);
    var list=CARS.filter(function(c){
      if(state.brand&&c.b!==state.brand)return false;
      if(state.cat&&c.c!==state.cat)return false;
      if(state.pt&&!ptMatch(c,state.pt))return false;
      if(state.yr&&c.y!==state.yr)return false;
      if(state.co&&COUNTRY[c.b]!==state.co)return false;
      if(state.cp&&(COMPANY_BRANDS[state.cp]||[]).indexOf(c.b)<0)return false;
      if(q&&norm(c.b+c.n+c.c+c.pt).indexOf(q)<0)return false;
      return true;
    });
    // breadcrumb
    var cr='<a data-go="home">Brands</a>';
    if(state.cp)cr+=' › <a data-go="company">'+esc(state.cp)+'</a>';
    if(state.brand)cr+=' › <a data-go="brand">'+esc(state.brand)+'</a>';
    if(state.cat)cr+=' › '+esc(state.cat);
    if(state.pt)cr+=' › '+esc(state.pt);
    if(state.yr)cr+=' › '+esc(state.yr);
    if(state.co)cr+=' › '+esc(state.co);
    if(state.q)cr+=' › Search: “'+esc(state.q)+'”';
    if(state.all&&!state.brand&&!state.cat&&!state.q)cr+=' › All cars';
    $('crumbs').innerHTML=cr;
    var parts=[state.cp,state.brand,state.co,state.cat,state.pt,state.yr].filter(Boolean);
    var title=parts.length?parts.join(' · '):(state.q?'Search results':'All Cars');
    $('xtitle').textContent=title;
    if(state.all&&!state.brand&&!state.cat&&!state.q)list=list.slice().sort(function(x,y){return x.b.localeCompare(y.b)||x.n.localeCompare(y.n)});
    $('xcount').textContent=list.length+(list.length===1?' car':' cars');
    var ex=$('xextra');
    if(state.cp&&!state.brand){
      var cbl=(COMPANY_BRANDS[state.cp]||[]).slice().sort(function(a,b){return (hasCars(b)-hasCars(a))||a.localeCompare(b)});
      var hq=COMPANY_HQ[state.cp]||'';
      ex.innerHTML='<div class="xextra-in"><p><b>'+esc(state.cp)+'</b> · Headquarters: '+window.CV_FLAG(hq)+esc(hq)+' · '+cbl.length+(cbl.length===1?' brand':' brands')+'</p><div class="btiles">'
        +cbl.map(function(b){
          var n=CARS.filter(function(c){return c.b===b}).length;
          return '<div class="tile'+(n?'':' nocar')+'" data-b="'+esc(b)+'" tabindex="0" role="button">'+logoFor(b)+'<span>'+esc(b)+'</span><em class="bc">'+(n?n+(n===1?' car':' cars'):'No cars yet')+'</em></div>';
        }).join('')
        +'</div></div>';
    }else if(state.co&&!state.brand){
      var bl=ALL_BRANDS.concat(brandNames().filter(function(b){return ALL_BRANDS.indexOf(b)<0}))
        .filter(function(b){return COUNTRY[b]===state.co}).sort(function(a,b){return (hasCars(b)-hasCars(a))||a.localeCompare(b)});
      ex.innerHTML='<div class="xextra-in"><p>'+window.CV_FLAG(state.co)+esc(BLURB[state.co]||'')+'</p><div class="pills">'
        +bl.map(function(b){return '<button type="button" class="pill'+(hasCars(b)?' has':'')+'" data-b="'+esc(b)+'">'+esc(b)+'</button>'}).join('')
        +'</div><div class="pilllegend">Highlighted brands have cars listed. Click a brand to see them.</div></div>';
    }else ex.innerHTML='';
    if(!list.length){
      var msg=state.cp&&!state.brand&&!state.cat&&!state.pt&&!state.yr&&!state.co&&!state.q
        ? 'Cars for <b>'+esc(state.cp)+'</b> haven’t been added yet.<br>Pick one of its brands above to explore.'
        : state.co&&!state.brand&&!state.cat&&!state.pt&&!state.yr&&!state.q
        ? 'Cars from <b>'+esc(state.co)+'</b> haven’t been added yet.<br>Pick one of its brands above to explore.'
        : state.brand&&!state.cat&&!state.pt&&!state.yr&&!state.q
        ? 'Cars for <b>'+esc(state.brand)+'</b> haven’t been added yet.<br>Try one of the top brands like Toyota, BMW, Ford or Tesla.'
        : 'No cars match your selection.<br>Try a different brand, category or search word.';
      grid.innerHTML='<div class="empty">'+msg+'</div>';
    }else{
      grid.innerHTML=list.map(function(c){
        var i=CARS.indexOf(c);
        return '<div class="ccard" data-i="'+i+'" tabindex="0" role="button">'
          +cardInner(c,companyOf(c.b))+'</div>';
      }).join('');
    }
  }
  /* simplified car card: company, brand, model, View Details */
  /* Car Viewer: every photo is linked to a car by its permanent database ID (row column 10, "CV0001"...).
     Names are never used to find a photo, so renaming a car cannot break or mix up its image.
     Store format (#cvImgData): { "CV0123": { i:[primary, ...gallery], f:[source file names] } } */
  var CV_IMG_STORE=null;
  function cvImgStore(){
    if(CV_IMG_STORE===null){try{CV_IMG_STORE=window.CV_IMG_DATA||{}}catch(x){CV_IMG_STORE={}}}
    return CV_IMG_STORE;
  }
  function carImagesFor(id){var e=id&&cvImgStore()[id];return e&&e.i&&e.i.length?e.i:[]}
  function cvPlaceholder(){
    return '<div class="cvph" role="img" aria-label="Image Unavailable">'
      +'<svg viewBox="0 0 96 48" width="92" height="46" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
      +'<path d="M10 35h-3v-7c0-2 1-3 3-4l9-2 8-9c1-1 3-2 5-2h26c3 0 5 1 7 3l8 8 9 2c3 1 4 2 4 5v6h-3"/><path d="M33 35h30M24 20h48"/><circle cx="25" cy="36" r="6"/><circle cx="71" cy="36" r="6"/></svg>'
      +'<span>Image Unavailable</span></div>';
  }
  /* ===== Wikimedia Commons fallback (used ONLY when a car has no local CarVault image) =====
     Local images in #cvImgData always win. For a car without one, Commons is searched once, the match is
     verified strictly (brand + exact model + generation/year checks), and the result - or "no match" - is
     cached in localStorage and on the car's .img field so it is never searched or downloaded again. */
  var WK_KEY='cv_wikimedia_img_v1',WK_NEG_TTL=30*864e5,WK=null,WK_PEND={};
  function wkStore(){if(WK===null){try{WK=JSON.parse(localStorage.getItem(WK_KEY)||'{}')||{}}catch(x){WK={}}
    var sd=window.CV_WIKI_SEED;if(sd&&typeof sd==='object')Object.keys(sd).forEach(function(k){var v=sd[k];if(v&&v.u&&v.p&&!WK[k])WK[k]=v})}   /* optional pre-built cache: window.CV_WIKI_SEED = {carId: entry} */
    return WK}
  function wkSave(){try{localStorage.setItem(WK_KEY,JSON.stringify(WK))}catch(x){}}
  function wkNorm(s){return ' '+String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim()+' '}
  var WK_ALIAS={'Mercedes-Benz':['mercedes benz','mercedes'],'Volkswagen':['volkswagen','vw'],'Chevrolet':['chevrolet','chevy'],'Rolls-Royce':['rolls royce'],'Land Rover':['land rover']};
  var WK_BAD=/ (logo|emblem|badge|interior|dashboard|cockpit|engine|wheels?|rims?|steering|seats?|trunk|headlights?|taillights?|tail lights?|grille|brochure|poster|advert|advertisement|diagram|drawing|sketch|render|rendering|model car|scale model|toy|miniature|lego|hot wheels|diecast|die cast|crash|crashed|wreck|wrecked|burnt|burned|damaged|cutaway|chassis|blueprint|patent|stamp|postcard|cartoon|illustration|screenshot|wallpaper|infotainment|console|exhaust|sunroof|pedals?|gear ?shift|shifter|tyres?|tires?|key fob|manual|catalog|catalogue) /;
  var WK_NEXT_OK=/^(sedan|saloon|hatchback|hatch|wagon|estate|touring|coupe|convertible|cabriolet|cabrio|roadster|spyder|spider|suv|crossover|van|pickup|truck|front|rear|side|parked|facelift|lci|phase|mk\d*|mark|series|generation|gen|in|at|on|near|during|with|from|by|driving|seen|at)$/;
  var WK_MODELS=null;
  function wkModelsOf(b){
    if(!WK_MODELS){WK_MODELS={};CARS.forEach(function(x){(WK_MODELS[x.b]=WK_MODELS[x.b]||[]).push(wkNorm(x.n))})}
    return WK_MODELS[b]||[];
  }
  function wkYear(v){var m=String(v||'').match(/(19[5-9]\d|20[0-3]\d)/);return m?+m[1]:0}
  function wkCached(c){
    var e=wkStore()[c.id];
    if(!e)return null;
    if(e.n&&(!e.r||Date.now()-(e.ts||0)>WK_NEG_TTL)){delete WK[c.id];wkSave();return null}   /* old 'no match' entries (before the other-generation pass) are searched again */
    if(e.u)c.img=e;                                          /* the car's image field now holds the cached Commons image */
    return e;
  }
  function wkText(html){try{return (new DOMParser().parseFromString(String(html||''),'text/html').body.textContent||'').replace(/\s+/g,' ').trim()}catch(x){return ''}}
  /* strict check of one Commons file against one car; returns a score (>0) or 0 = reject */
  function wkScore(c,pg,rx){      /* rx = relaxed: same brand + exact model, any generation (shown with a label) */
    var ii=pg.imageinfo&&pg.imageinfo[0];if(!ii)return 0;
    if(!/^image\/(jpeg|png|webp)$/.test(ii.mime||''))return 0;
    var md=ii.extmetadata||{},lic=(md.LicenseShortName&&md.LicenseShortName.value)||'';
    if(!lic||/fair use|non-free|copyrighted/i.test(lic))return 0;
    var title=wkNorm((pg.title||'').replace(/^File:/,'').replace(/\.[a-z0-9]+$/i,'')+' '+((md.ObjectName&&md.ObjectName.value)||''));
    var cats=wkNorm((md.Categories&&md.Categories.value)||'');
    var bk=[wkNorm(c.b)].concat((WK_ALIAS[c.b]||[]).map(wkNorm)),mdl=wkNorm(String(c.n).replace(/\([^)]*\)/g,' '));
    var bHit=bk.filter(function(b){return title.indexOf(b)>-1})[0];
    if(!bHit||title.indexOf(mdl)<0)return 0;                 /* brand AND exact model must be in the file's own title */
    if(WK_BAD.test(title)||WK_BAD.test(cats))return 0;       /* logos, interiors, engines, drawings, toys ... */
    if(/ (concept|prototype|show car) /.test(title)&&!/ (concept|prototype) /.test(mdl))return 0;
    var sib=wkModelsOf(c.b);                                 /* "Corolla" must not match "Corolla Cross" etc. */
    for(var i=0;i<sib.length;i++){var m2=sib[i].trim(),m1=mdl.trim();if(m2!==m1&&m2.indexOf(m1+' ')===0&&title.indexOf(' '+m2+' ')>-1)return 0}
    var gen=wkYear(c.y),R=(typeof CV_RESEARCH!=='undefined')&&CV_RESEARCH[c.b+'|'+c.n],my=R?wkYear(R.my):0;
    var rest=title.split(mdl).join(' ');bk.forEach(function(b){rest=rest.split(b).join(' ')});
    var ty=(rest.match(/\b(19[5-9]\d|20[0-3]\d)\b/g)||[]).map(Number),sc=0;
    if(!rx&&gen&&ty.some(function(y){return y<gen-1}))return 0;   /* older generation */
    if(!rx&&my&&ty.some(function(y){return y>my+2}))return 0;
    var pd=wkYear((md.DateTimeOriginal&&md.DateTimeOriginal.value)||(md.DateTime&&md.DateTime.value));
    if(ty.length)sc+=30;                                     /* explicit year inside the allowed generation window */
    else if(!rx){
      if(gen&&!pd)return 0;                                  /* no year in title and no photo date: generation can't be confirmed */
      if(gen&&pd&&pd<gen-1)return 0;                         /* photographed before this generation existed */
    }
    sc+=title.indexOf(bHit.trim()+' '+mdl.trim()+' ')>-1?40:20;
    if(rx&&gen&&ty.length)sc-=Math.min(30,Math.min.apply(null,ty.map(function(y){return Math.abs(y-gen)})));   /* prefer the nearest generation */
    if(rx){                                                  /* relaxed pass: the model name must not continue into a different model ("Mustang" vs "Mustang Mach-E") */
      var at=title.indexOf(mdl),nx=at<0?'':title.slice(at+mdl.length).trim().split(' ')[0];
      if(nx&&!/^(19|20)\d\d$/.test(nx)&&!/^[a-z]{1,2}\d{1,3}[a-z]?$/.test(nx)&&!WK_NEXT_OK.test(nx))return 0;
    }
    var w=ii.width||0,h=ii.height||1;
    if(w<640)return 0;
    if(w>=1000)sc+=10;
    if(w/h>=1.25&&w/h<=2.4)sc+=10;else if(w/h<1)sc-=15;
    return sc;
  }
  function wkApi(q){
    var u='https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=40'
      +'&gsrsearch='+encodeURIComponent(q+' filetype:bitmap')+'&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=1280'
      +'&iiextmetadatafilter='+encodeURIComponent('Artist|LicenseShortName|LicenseUrl|ObjectName|DateTimeOriginal|DateTime|Categories');
    return fetch(u).then(function(r){if(!r.ok)throw new Error('http');return r.json()});
  }
  function wkLookup(c){
    var y=wkYear(c.y),qs=['"'+c.b+' '+c.n+'"'+(y?' '+y:''),'"'+c.b+' '+c.n+'"'],all=[];
    function pick(rx){var best=null,bs=0;all.forEach(function(pg){var s=wkScore(c,pg,rx);if(s>bs){bs=s;best=pg}});return best}
    function build(best,rx){
      var ii=best.imageinfo[0],md=ii.extmetadata||{},https=function(u){return /^https:\/\//.test(u||'')?u:''};
      var a=wkText(md.Artist&&md.Artist.value);if(a.length>120)a=a.slice(0,117)+'…';
      return{u:https(ii.thumburl||ii.url),p:https(ii.descriptionurl),t:(best.title||'').replace(/^File:/,''),a:a,
        l:(md.LicenseShortName&&md.LicenseShortName.value)||'',lu:https(md.LicenseUrl&&md.LicenseUrl.value),x:rx?1:0,ts:Date.now()};
    }
    function run(i){
      return wkApi(qs[i]).then(function(j){
        (j&&j.query&&j.query.pages?Object.keys(j.query.pages).map(function(k){return j.query.pages[k]}):[]).forEach(function(pg){all.push(pg)});
        var st=pick(false);if(st)return build(st,false);              /* exact generation / year first */
        if(i+1<qs.length)return run(i+1);
        var rl=pick(true);return rl?build(rl,true):null;               /* else: same model, other generation (labeled) */
      });
    }
    return run(0);
  }
  /* resolves to a cached/new Commons entry, or null when no reliable match exists; never runs for cars with a local image */
  function wkResolve(c){
    if(!c||carImagesFor(c.id).length)return Promise.resolve(null);
    var hit=wkCached(c);
    if(hit)return Promise.resolve(hit.u?hit:null);
    if(WK_PEND[c.id])return WK_PEND[c.id];
    WK_PEND[c.id]=wkLookup(c).then(function(e){
      delete WK_PEND[c.id];
      if(e&&e.u&&e.p){wkStore()[c.id]=e;c.img=e;wkSave();return e}
      wkStore()[c.id]={n:1,r:1,ts:Date.now()};wkSave();return null;
    },function(){delete WK_PEND[c.id];return null});         /* network error: not cached, so it is retried next time */
    return WK_PEND[c.id];
  }
  function wkFail(id){var s=wkStore();delete s[id];wkSave();CARS.forEach(function(c){if(c.id===id)c.img=null})}
  window.CarVaultImages={                                    /* one entry point for every page that shows a car image */
    get:function(c){var l=carImagesFor(c.id);if(l.length)return{src:l[0],source:'local'};var e=wkCached(c);return e&&e.u?{src:e.u,source:'wikimedia'}:null},
    resolve:function(c){var l=carImagesFor(c.id);if(l.length)return Promise.resolve({src:l[0],source:'local'});
      return wkResolve(c).then(function(e){return e?{src:e.u,source:'wikimedia'}:null})},
    /* Full check of every car. Run in the browser console (needs internet):  CarVaultImages.audit()
       Looks up each car without a local image (throttled, results cached), tests that every image actually loads,
       and prints counts plus the list of cars that still have no reliable image. */
    audit:function(o){
      o=o||{};var delay=o.delay||700,list=CARS.slice(),i=0,net=false,
        R={total:list.length,local:0,wikimedia:0,wikimediaOtherGeneration:0,unavailable:[],broken:[]};
      function test(src){return new Promise(function(ok){var im=new Image(),t=setTimeout(function(){ok(false)},15000);im.onload=function(){clearTimeout(t);ok(true)};im.onerror=function(){clearTimeout(t);ok(false)};im.src=src})}
      function nm(c){return c.id+' '+c.b+' '+c.n}
      function next(){return new Promise(function(r){setTimeout(r,net?delay:0)}).then(step)}
      function step(){
        if(i>=list.length){
          console.table({'cars checked':R.total,'local image works':R.local,'Wikimedia (exact)':R.wikimedia,'Wikimedia (other generation, labeled)':R.wikimediaOtherGeneration,'no reliable image (placeholder)':R.unavailable.length,'broken image':R.broken.length});
          if(R.unavailable.length)console.log('No reliable image:\n'+R.unavailable.join('\n'));
          if(R.broken.length)console.log('Broken:\n'+R.broken.join('\n'));
          return R;
        }
        var c=list[i++];if(i%25===0)console.log('CarVault image audit '+i+'/'+R.total);
        var loc=carImagesFor(c.id);net=false;
        if(loc.length)return test(loc[0]).then(function(ok){if(ok)R.local++;else R.broken.push(nm(c)+' (local)');return next()});
        net=!wkCached(c);
        return wkResolve(c).then(function(e){
          if(!e){R.unavailable.push(nm(c));return next()}
          return test(e.u).then(function(ok){if(ok){if(e.x)R.wikimediaOtherGeneration++;else R.wikimedia++}else{R.broken.push(nm(c));wkFail(c.id)}return next()});
        });
      }
      return step();
    },
    /* Download the cached Commons matches as JSON; paste it into the file as  window.CV_WIKI_SEED = {...}  to ship them pre-built. */
    exportCache:function(){
      var out={},s=wkStore();Object.keys(s).forEach(function(k){if(s[k]&&s[k].u)out[k]=s[k]});
      var txt=JSON.stringify(out);
      try{var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'application/json'}));a.download='carvault-image-cache.json';document.body.appendChild(a);a.click();a.remove()}catch(x){}
      return txt;
    }
  };
  function carViewerHtml(c,wk){
    var im=carImagesFor(c.id);
    if(!im.length&&wk&&wk.u){                                /* Wikimedia fallback: single image + attribution */
      return '<div class="cvwrap"><img class="cvmain" data-wk="'+esc(c.id)+'" src="'+esc(wk.u)+'" alt="'+esc(c.b+' '+c.n)+'">'+(wk.x?'<div class="cvnote">Photo of another generation of this model</div>':'')+'</div>';
    }
    if(!im.length)return cvPlaceholder();
    var h='<div class="cvwrap"><img class="cvmain" src="'+im[0]+'" alt="'+esc(c.b+' '+c.n)+'">';
    if(im.length>1)h+='<div class="cvgal" role="group" aria-label="Gallery">'+im.map(function(u,k){
      return '<button type="button" class="cvth'+(k?'':' on')+'" aria-label="Show image '+(k+1)+'"><img src="'+u+'" alt=""></button>'}).join('')+'</div>';
    return h+'</div>';
  }
  var cvTimer=null;
  function cvSetOpen(open){                                  /* open / close the Car View panel (Car Details stays underneath) */
    var p=document.getElementById('cvPanel');if(!p)return;
    var b=document.querySelector('.cvbtn');
    void p.offsetHeight;                                     /* settle the collapsed state so the transition always runs */
    p.classList.toggle('open',open);
    if(open){p.removeAttribute('inert');p.setAttribute('aria-hidden','false')}else{p.setAttribute('inert','');p.setAttribute('aria-hidden','true')}
    if(b){b.setAttribute('aria-expanded',open?'true':'false');b.classList.toggle('on',open)}
    if(open){var rm=false;try{rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(x){}
      try{p.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'})}catch(x){p.scrollIntoView()}}
  }
  function cvAutoReturn(){                                   /* no image: show the message, then go back to Car Details after 1 second */
    clearTimeout(cvTimer);
    cvTimer=setTimeout(function(){
      var bx=document.getElementById('cvBox');
      cvSetOpen(false);
      if(bx)bx.removeAttribute('data-ready');                /* next click rebuilds the viewer */
    },1000);
  }
  document.addEventListener('error',function(e){   /* a photo that fails to load never leaves a broken icon */
    var t=e.target;if(t&&t.classList&&t.classList.contains('cvmain')){if(t.getAttribute('data-wk'))wkFail(t.getAttribute('data-wk'));var bx=document.getElementById('cvBox');if(bx){bx.innerHTML=cvPlaceholder();var p=document.getElementById('cvPanel');if(p&&p.classList.contains('open'))cvAutoReturn()}}
  },true);
  document.addEventListener('click',function(e){
    var th=e.target.closest&&e.target.closest('.cvth');
    if(th){var w=th.closest('.cvwrap'),m=w&&w.querySelector('.cvmain');if(m){m.src=th.querySelector('img').src;[].forEach.call(w.querySelectorAll('.cvth'),function(x){x.classList.toggle('on',x===th)})}return}
    var bk=e.target.closest&&e.target.closest('.cvback');
    if(bk){                                                  /* Back: Car View -> Car Details; from Car Details -> previous page */
      var op=document.getElementById('cvPanel');
      if(op&&op.classList.contains('open')){clearTimeout(cvTimer);cvSetOpen(false);return}
      var par={};try{par=JSON.parse(bk.getAttribute('data-par')||'{}')}catch(x){}
      goBack(par);return;
    }
    var b=e.target.closest&&e.target.closest('.cvbtn');if(!b)return;
    var p=document.getElementById('cvPanel'),bx=document.getElementById('cvBox');if(!p||!bx)return;
    if(p.classList.contains('open'))return;                  /* Car View only opens; Back closes it */
    if(bx.getAttribute('data-ready')!=='1'){                 /* first open: build the viewer for THIS car (by ID) */
      var id=b.getAttribute('data-id'),car=CARS.filter(function(x){return x.id===id})[0];
      var wkc=car&&!carImagesFor(car.id).length?wkCached(car):null;
      if(car&&!carImagesFor(car.id).length&&!wkc){            /* no local image and nothing cached yet: look up Wikimedia Commons once */
        bx.innerHTML='<div class="cvmsg">Loading image…</div>';bx.setAttribute('data-busy',id);
        wkResolve(car).then(function(e){
          var b2=document.getElementById('cvBox');if(!b2||b2.getAttribute('data-busy')!==id)return;
          b2.removeAttribute('data-busy');b2.innerHTML=e?carViewerHtml(car,e):cvPlaceholder();b2.setAttribute('data-ready','1');
          var p2=document.getElementById('cvPanel');if(!e&&p2&&p2.classList.contains('open'))cvAutoReturn();
        });
      }else{bx.innerHTML=car?carViewerHtml(car,wkc):cvPlaceholder();bx.setAttribute('data-ready','1')}
    }
    clearTimeout(cvTimer);
    cvSetOpen(true);
    if(bx.querySelector('.cvph'))cvAutoReturn();
  });
  function cardInner(c,co){
    return '<div class="cb">'+esc(co||c.b)+'</div>'
      +'<div class="cbr">'+esc(c.b)+'</div>'
      +'<div class="cn">'+esc(c.n)+'</div>'
      +'<div class="cview">View Details &nbsp;→</div>';
  }
  /* ================= multi-page routing: URL parameters + History API ================= */
  var pages=$('pages'),heroEl=document.querySelector('.hero'),brandsSec=$('brands'),depth=0;
  function qs(p){var s=[];Object.keys(p).forEach(function(k){var v=p[k];if(v===''||v==null||v===false)return;s.push(encodeURIComponent(k)+'='+encodeURIComponent(v===true?'1':v))});return s.length?'?'+s.join('&'):'?'}
  function getRoute(){var o={};new URLSearchParams(location.search).forEach(function(v,k){o[k]=v});return o}
  function parseHref(h){var o={};new URLSearchParams(h.replace(/^[^?]*\?/,'')).forEach(function(v,k){o[k]=v});return o}
  function go(p,replace){
    var url=qs(p);
    try{
      var st={n:replace?depth:depth+1};
      if(replace)history.replaceState(st,'',url);else history.pushState(st,'',url);
      depth=st.n;
    }catch(err){try{sessionStorage.setItem('cvnav','1')}catch(x){}location.assign(url);return}      /* e.g. sandboxed/file previews: fall back to a real page load */
    applyRoute(true);
  }
  function goBack(parent){var fb=false;try{fb=sessionStorage.getItem('cvnav')==='1'}catch(x){}if(depth>0||fb)history.back();else go(parent||{})}
  function companyOf(b,pref){
    var ks=Object.keys(COMPANY_BRANDS);
    if(pref&&(COMPANY_BRANDS[pref]||[]).indexOf(b)>-1)return pref;
    var m=ks.filter(function(k){return COMPANY_BRANDS[k].indexOf(b)>-1});
    return m.filter(function(k){return norm(k)===norm(b)})[0]||m[0]||'';
  }
  function lk(p,cls,inner){return '<a class="'+cls+'" data-nav href="'+esc(qs(p))+'">'+inner+'</a>'}
  function companyLogo(co){
    var bl=COMPANY_BRANDS[co]||[];
    var pref=bl.filter(function(b){return norm(b)===norm(co)||norm(co).indexOf(norm(b))===0});
    var c=pref.concat(bl);
    for(var i=0;i<c.length;i++){var h=logoFor(c[i]);if(h.indexOf('<img')>-1)return h}
    return logoFor(co);
  }
  function pageHead(logo,kick,title,meta,backParent,noBack){
    return '<div class="phead">'+logo+'<div><div class="pk">'+esc(kick)+'</div><h2>'+esc(title)+'</h2>'+(meta?'<div class="pm">'+meta+'</div>':'')+'</div>'
      +(noBack?'':'<button class="xclear xback" type="button" data-back=\''+esc(JSON.stringify(backParent))+'\'>← Back</button>')+'</div>';
  }
  function notFound(msg){return '<div class="cargrid"><div class="empty">'+msg+'<br><a data-nav href="?" style="color:var(--blue)">Back to home</a></div></div>'}
  function brandTile(b,co){
    var n=CARS.filter(function(c){return c.b===b}).length;
    return lk({page:'brand',brand:b,company:co},'tile'+(n?'':' nocar'),logoFor(b)+'<span>'+esc(b)+'</span><em class="bc">'+(n?n+(n===1?' car':' cars'):'No cars yet')+'</em>');
  }
  function allBrandList(){
    var seen={},out=[];
    function add(b){if(!b)return;var k=norm(b);if(seen[k])return;seen[k]=1;out.push(b)}
    CARS.forEach(function(c){add(c.b)});
    Object.keys(COMPANY_BRANDS).forEach(function(k){COMPANY_BRANDS[k].forEach(add)});
    return out.sort(function(a,b){return a.localeCompare(b)});
  }
  function pgBrands(){
    var list=allBrandList();
    document.title='Brands – CarVault';
    return '<div class="xhead"><h2>All Brands</h2><span class="xcount">'+list.length+(list.length===1?' brand':' brands')+'</span><button class="xclear xback" type="button" data-back="{}">← Back</button></div>'
      +'<div class="bgrid">'+list.map(function(b){
          var n=CARS.filter(function(c){return c.b===b}).length,cy=COUNTRY[b]||'';
          return lk({page:'brand',brand:b,from:'brands'},'bcard',
            logoFor(b)
            +'<div class="bn">'+esc(b)+'</div>'
            +'<div class="bo">'+(cy?window.CV_FLAG(cy)+esc(cy):'—')+'</div>'
            +'<div class="bm">'+n+(n===1?' model':' models')+'</div>'
            +'<div class="cview">View Brand &nbsp;→</div>');
        }).join('')+'</div>';
  }
  function companiesByCountry(){
    var m={};
    Object.keys(COMPANY_BRANDS).forEach(function(co){var cy=COMPANY_HQ[co];if(!cy)return;(m[cy]=m[cy]||[]).push(co)});
    Object.keys(m).forEach(function(k){m[k].sort(function(a,b){return a.localeCompare(b)})});
    return m;
  }
  function coTile(co,extra){
    var n=COMPANY_BRANDS[co].length;
    var p={page:'company',company:co};Object.keys(extra).forEach(function(k){p[k]=extra[k]});
    return lk(p,'tile',companyLogo(co)+'<span>'+esc(co)+'</span><em class="bc">'+n+(n===1?' brand':' brands')+'</em>');
  }
  function pgOrigins(){
    var m=companiesByCountry(),cs=Object.keys(m).sort(function(a,b){return a.localeCompare(b)});
    document.title='Country / Origin – CarVault';
    return '<div class="xhead"><h2>Country / Origin</h2><span class="xcount">'+cs.length+' countries</span><button class="xclear xback" type="button" data-back="{}">← Back</button></div>'
      +'<div class="bgrid">'+cs.map(function(cy){
          var n=m[cy].length;
          return lk({page:'country',country:cy},'bcard',
            '<div class="cflag">'+window.CV_FLAG(cy)+'</div>'
            +'<div class="bn">'+esc(cy)+'</div>'
            +'<div class="bm">'+n+(n===1?' company':' companies')+'</div>'
            +'<div class="cview">View Companies &nbsp;→</div>');
        }).join('')+'</div>';
  }
  function pgCountry(r){
    var cy=r.country,m=companiesByCountry(),l=m[cy];
    if(!l)return notFound('Country <b>'+esc(cy||'')+'</b> was not found.');
    document.title=cy+' – CarVault';
    return '<div class="xhead"><h2>'+window.CV_FLAG(cy)+esc(cy)+'</h2><span class="xcount">'+l.length+(l.length===1?' company':' companies')+'</span><button class="xclear xback" type="button" data-back=\''+esc(JSON.stringify({page:'origins'}))+'\'>← Back</button></div>'
      +'<div class="btiles co">'+l.map(function(co){return coTile(co,{from:'country',country:cy})}).join('')+'</div>';
  }
  function pgAbout(){
    var IC={"explore": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 15l2-6h14l2 6v4H3zM3 15h18M7 19v1M17 19v1\"/></svg>", "companies": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"1\"/><path d=\"M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2\"/></svg>", "brands": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z\"/></svg>", "cats": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.500\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.500\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.500\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.500\"/></svg>", "power": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/></svg>", "globe": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18\"/></svg>", "info": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v6M12 7.500v.01\"/></svg>"};
    var FEAT=[["explore", "Explore Cars", "Browse individual car models and view detailed information."], ["companies", "Companies", "Discover automobile manufacturers and explore their brands and models."], ["brands", "Brands", "Explore automotive brands and the cars associated with each brand."], ["cats", "Categories", "Discover cars by categories such as SUV, Sedan, Coupe, Hatchback, MPV, Pickup, Sports, Luxury, Supercar, and more."], ["power", "Powertrain", "Explore vehicles based on Petrol, Diesel, Hybrid, Plug-in Hybrid, Electric, and other powertrain types."], ["globe", "Country / Origin", "Discover automobile companies based on their country of origin."]];
    var STEPS=[["Country / Origin", "Where a manufacturer comes from"], ["Companies", "The manufacturers behind the brands"], ["Brands", "The marques each company owns"], ["Models", "The cars within every brand"], ["Car Details", "Specifications, powertrain, year and more"]];
    var hero=(window.cvHeroSrc&&(window.cvHeroSrc[3]||window.cvHeroSrc[0]))||'';
    document.title='About – CarVault';
    return '<div class="ab">'
      +'<div class="ab-hero ab-rv">'+'<img class="bgimg" '+(hero?'src="'+hero+'" ':'')+'alt="" aria-hidden="true">'
        +'<div class="ht"><div class="ab-kick">CarVault</div><h1>About <span>CarVault</span></h1>'
        +'<p>Your digital destination for exploring the world of automobiles.</p>'
        +'<button type="button" class="ab-more" data-abgo="abFeat">Discover what\u2019s inside &nbsp;\u2193</button></div></div>'
      +'<div class="ab-sec ab-rv"><h2>What is CarVault?</h2><p class="ab-lead">CarVault is a modern automotive exploration platform designed to make discovering cars simple, organized, and enjoyable. Explore cars through companies, brands, categories, powertrains, years, and countries of origin \u2014 all through one structured platform.</p></div>'
      +'<div class="ab-sec" id="abFeat"><h2 class="ab-rv">What can you explore?</h2><div class="ab-grid">'
        +FEAT.map(function(f,i){return '<div class="ab-card ab-rv" style="transition-delay:'+(i%3)*90+'ms"><div class="ab-ic">'+IC[f[0]]+'</div><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>'}).join('')
      +'</div></div>'
      +'<div class="ab-sec"><h2 class="ab-rv">How CarVault is organized</h2><p class="ab-sub ab-rv">Every car is reached through the same simple hierarchy.</p><div class="ab-flow">'
        +STEPS.map(function(t,i){return (i?'<div class="ab-arrow ab-rv" aria-hidden="true"></div>':'')+'<div class="ab-step ab-rv"><div class="ab-num">'+(i+1)+'</div><div><b>'+t[0]+'</b><span>'+t[1]+'</span></div></div>'}).join('')
      +'</div></div>'
      +'<div class="ab-sec ab-goal"><div class="ab-rv"><h2>Our Goal</h2><p class="ab-lead">CarVault aims to make automotive discovery easier by bringing structured car information into one simple and visually engaging platform.</p></div>'
        +'<div class="ab-big ab-rv">Explore.<span>Discover.</span>Understand Cars.</div></div>'
      +'<div class="ab-sec"><div class="ab-data ab-rv"><div class="ab-ic">'+IC.info+'</div><div><h3>Data &amp; Information</h3><p>CarVault organizes automotive information from multiple data sources. Specifications, model years, generations, prices, images, and other details may vary by market and should be verified with official sources where necessary.</p></div></div></div>'
      +'<div class="ab-cta ab-rv"><h2>Start Exploring</h2><p>Discover companies, brands, categories, and cars from around the world.</p>'
        +'<a class="btn" data-nav href="'+esc(qs({page:'companies'}))+'">Explore Cars \u2192</a></div>'
      +'</div>';
  }
  function abReveal(){
    var els=[].slice.call(pages.querySelectorAll('.ab-rv'));
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }
  function pgCompanies(){
    var cs=Object.keys(COMPANY_BRANDS).sort(function(a,b){return a.localeCompare(b)});
    document.title='Companies – CarVault';
    return '<div class="xhead"><h2>Companies</h2><span class="xcount">'+cs.length+' companies</span><button class="xclear xback" type="button" data-back="{}">← Back</button></div>'
      +'<div class="btiles co">'+cs.map(function(c){
          var n=COMPANY_BRANDS[c].length;
          return lk({page:'company',company:c},'tile',companyLogo(c)+'<span>'+esc(c)+'</span><em class="bc">'+n+(n===1?' brand':' brands')+'</em>');
        }).join('')+'</div>';
  }
  function pgCompany(r){
    var co=r.company;
    if(!COMPANY_BRANDS[co])return notFound('Company <b>'+esc(co||'')+'</b> was not found.');
    var bl=COMPANY_BRANDS[co].slice().sort(function(a,b){return (hasCars(b)-hasCars(a))||a.localeCompare(b)});
    var hq=COMPANY_HQ[co]||'';
    document.title=co+' – CarVault';
    return pageHead(companyLogo(co),'Company',co,(hq?window.CV_FLAG(hq)+'Headquarters: '+esc(hq)+' · ':'')+bl.length+(bl.length===1?' brand':' brands'),r.from==='country'?{page:'country',country:r.country}:r.from==='origins'?{page:'origins'}:{page:'companies'})
      +'<div class="btiles">'+bl.map(function(b){return brandTile(b,co)}).join('')+'</div>';
  }
  function pgBrand(r){
    var b=r.brand,known=brandNames().concat(ALL_BRANDS).indexOf(b)>-1||Object.keys(COMPANY_BRANDS).some(function(k){return COMPANY_BRANDS[k].indexOf(b)>-1});
    if(!b||!known)return notFound('Brand <b>'+esc(b||'')+'</b> was not found.');
    var co=companyOf(b,r.company),list=CARS.filter(function(c){return c.b===b}),cy=COUNTRY[b]||'';
    document.title=b+' – CarVault';
    return pageHead(logoFor(b),'Brand',b,(cy?window.CV_FLAG(cy)+esc(cy)+' · ':'')+(co?esc(co)+' · ':'')+list.length+(list.length===1?' car':' cars'),r.from==='brands'?{page:'brands'}:(co?{page:'company',company:co}:{page:'companies'}))
      +'<div class="cargrid">'+(list.length?list.map(function(c){
          return lk({page:'car',brand:b,car:c.n,company:co},'ccard',
            cardInner(c,co));
        }).join(''):'<div class="empty">Cars for <b>'+esc(b)+'</b> haven’t been added yet.</div>')+'</div>';
  }
  function na(v){return(v==null||v===''||v==='—')?'<span class="na">Not available</span>':esc(v)}
  function vstat(v){var k=v==='Verified'?'ok':v==='Partially Verified'?'part':'none';return '<span class="vs '+k+'">'+esc(v)+'</span>'}
  var FLBL={e:'Engine',hp:'Power',y:'Generation year',fuel:'Fuel type',acc:'Acceleration',w:'Kerb weight',seats:'Seats',batt:'Battery',rng:'Range',price:'Price'};
  function srcHtml(R){
    if(!R)return '<div class="srcs"><h3>Sources</h3><p class="sn">No researched sources recorded for this car yet.</p></div>';
    var lis=R.src.map(function(s,i){
      var used=Object.keys(R.fs).filter(function(k){return R.fs[k].indexOf(i)>-1}).map(function(k){return FLBL[k]||k});
      return '<li><a href="'+esc(s[1])+'" target="_blank" rel="noopener noreferrer">'+esc(s[0])+'</a>'+(used.length?'<small> — '+esc(used.join(', '))+'</small>':'')+'</li>';
    }).join('');
    return '<div class="srcs"><h3>Sources</h3><ol>'+lis+'</ol>'+(R.note?'<p class="sn">'+esc(R.note)+'</p>':'')+'</div>';
  }
  function pgCar(r){
    var c=CARS.filter(function(x){return x.b===r.brand&&x.n===r.car})[0];
    if(!c)return notFound('That car was not found.');
    var co=companyOf(c.b,r.company),cy=COUNTRY[c.b]||'';
    document.title=c.b+' '+c.n+' – CarVault';
    var rows=[['Company',esc(co||'—')],['Brand',esc(c.b)],['Car / Model',esc(c.n)],['Country / Origin',cy?window.CV_FLAG(cy)+esc(cy):'—'],['Body type',esc(c.c)],['Powertrain',esc(c.pt)],['Engine / Motor',na(c.e)],['Power',na(c.hp)],['Seats',esc(c.s)],['Current generation launched',na(c.y)]].filter(function(x){return x[1].indexOf('class="na"')<0});   /* rows with no data are hidden instead of showing "Not available" */
    var R=CV_RESEARCH[c.b+'|'+c.n]||null;
    if(R){
      rows.push(['Market',esc(R.mkt)],['Latest model year',na(R.my)],['Fuel type',na(R.fuel)]);
      if(R.batt||R.rng)rows.push(['Battery capacity',na(R.batt)],['Electric range',na(R.rng)]);
      rows.push(['0–100 km/h / 0–60 mph',na(R.acc)],['Top speed',na(R.top)],['Kerb weight',na(R.w)],['Price / range',na(R.price)]);
    }
    var par={page:'brand',brand:c.b,company:co};
    return '<div class="cpage">'+pageHead(logoFor(c.b),c.b,c.n,'',par,true)
      +'<div class="cdetail"><div class="cvpanel" id="cvPanel" aria-hidden="true" inert><div class="cvclip"><div class="cvbox" id="cvBox"></div></div></div>'
      +'<table class="dt">'+rows.map(function(x){return '<tr><td>'+x[0]+'</td><td>'+x[1]+'</td></tr>'}).join('')+'</table>'
            +'<div class="mact" data-par=\''+esc(JSON.stringify(par))+'\'>'+'<button type="button" class="cvbtn" data-id="'+esc(c.id)+'" aria-expanded="false" aria-controls="cvPanel">Car View</button>'+'</div></div></div>';
  }
  function renderPage(pg,r){
    pages.innerHTML=pg==='companies'?pgCompanies():pg==='brands'?pgBrands():pg==='about'?pgAbout():pg==='origins'?pgOrigins():pg==='country'?pgCountry(r):pg==='company'?pgCompany(r):pg==='brand'?pgBrand(r):pgCar(r);
  }
  function resetChips(){['brand','category','powertrain','year','country','company'].forEach(function(k){setChip(k,'')})}
  /* smooth-scroll a newly opened page to the very top (with a safety net so it never ends mid-page) */
  var topTok=0;
  function scrollToTop(){
    var tok=++topTok,reduce=false;
    try{reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(x){}
    function y(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}
    function hard(){window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0}
    if(reduce){hard();return}
    if(y()>0){try{window.scrollTo({top:0,left:0,behavior:'smooth'})}catch(x){hard();return}}
    var evs=['wheel','touchstart','keydown','mousedown'];
    function stop(){topTok++;evs.forEach(function(n){window.removeEventListener(n,stop)})}
    evs.forEach(function(n){window.addEventListener(n,stop,{passive:true})});
    setTimeout(function(){
      evs.forEach(function(n){window.removeEventListener(n,stop)});
      if(tok===topTok&&y()>0)hard();
    },900);
  }
  /* global fixed Back button (bottom-right): shown on every page except Home.
     All old top-right Back buttons are hidden by CSS; their parent route is reused as the safe fallback. */
  var gBack=$('cvGBack'),gParent={};
  function cvGBackUpdate(pg,inner){
    if(!gBack)return;
    gParent={};
    var ob=document.querySelector('#pages .xback,#pages .mact'),raw=ob&&(ob.getAttribute('data-back')||ob.getAttribute('data-par'));
    if(raw){try{gParent=JSON.parse(raw)||{}}catch(x){gParent={}}}
    gBack.hidden=!inner&&pg!=='results';                      /* Home = no page route and not the results view */
  }
  if(gBack)gBack.addEventListener('click',function(){goBack(gParent)});   /* history.back(); falls back to the parent page (or Home) when there is no earlier CarVault page */
  function applyRoute(sc){
    var r=getRoute(),pg=r.page||'',inner=/^(companies|company|brands|brand|car|origins|country|about)$/.test(pg);
    closeModal();closeSug();
    heroEl.style.display=inner?'none':'';brandsSec.style.display=inner?'none':'';
    pages.hidden=!inner;
    $('navHome').classList.toggle('on',!inner);$('navExplore').classList.toggle('on',inner&&pg!=='brands'&&pg!=='origins'&&pg!=='country'&&pg!=='about');$('navAbout').classList.toggle('on',pg==='about');$('navBrandsLink').classList.toggle('on',pg==='brands');
    if(inner){
      sec.hidden=true;state={brand:'',cat:'',pt:'',yr:'',co:'',cp:'',q:'',all:false};resetChips();input.value='';
      renderPage(pg,r);if(pg==='about')abReveal();
    }else if(pg==='results'){
      pages.innerHTML='';
      state={brand:'',cat:r.cat||'',pt:r.pt||'',yr:r.yr||'',co:r.co||'',cp:'',q:r.q||'',all:r.all==='1'};
      resetChips();setChip('category',state.cat);setChip('powertrain',state.pt);setChip('year',state.yr);setChip('country',state.co);
      input.value=state.q;document.title='CarVault – Explore · Compare · Drive Your Dream';
      render();
    }else{
      pages.innerHTML='';state={brand:'',cat:'',pt:'',yr:'',co:'',cp:'',q:'',all:false};resetChips();input.value='';sec.hidden=true;
      document.title='CarVault – Explore · Compare · Drive Your Dream';
    }
    cvGBackUpdate(pg,inner);
    if(!sc&&pg!=='results')return;
    if(pg==='results'&&!sec.hidden)sec.scrollIntoView({block:'start'});else scrollToTop();
  }
  function show(scroll){
    var has=state.cat||state.pt||state.yr||state.co||state.q||state.all;
    go(has?{page:'results',cat:state.cat,pt:state.pt,yr:state.yr,co:state.co,q:state.q,all:state.all}:{});
  }

  function pickBrand(b){go({page:'brand',brand:b,company:companyOf(b)})}
  window.cvGoOrigins=function(){go({page:'origins'})};
  function pickCompany(v){go(v?{page:'company',company:v}:{page:'companies'})}
  function pillBrand(b){pickBrand(b)}
  function pickCountry(v){
    state.co=v;state.q='';state.all=false;
    show(!!v);
  }
  function pickYear(v){
    state.yr=v;state.q='';state.all=false;
    show(!!v);
  }
  function pickPt(v){
    state.pt=v;state.q='';state.all=false;
    show(!!v);
  }
  function pickCat(c){
    state.cat=c;state.q='';state.all=false;
    show(!!c);
  }
  function runSearch(text){
    text=(text||'').trim();
    closeSug();
    var n=norm(text);
    if(n){
      var pm=Object.keys(COMPANY_BRANDS).filter(function(x){return norm(x)===n})[0];
      if(pm){pickCompany(pm);return}
      var bm=brandNames().concat(ALL_BRANDS).filter(function(b){return norm(b)===n})[0];
      if(bm){pickBrand(bm);return}
      var cm=CARS.filter(function(c){return norm(c.n)===n||norm(c.b+c.n)===n})[0];
      if(cm){openModal(CARS.indexOf(cm));return}
    }
    state={brand:'',cat:'',q:text,all:!text};
    setChip('brand','');setChip('category','');setChip('powertrain','');setChip('year','');setChip('country','');setChip('company','');
    show(true);
  }

  /* ---- all brand names (for search + "coming soon" state) ---- */
  var ALL_BRANDS=[];
  (function(){
    var src=document.querySelector('.chip[data-dd="brand"]');
    // brand list lives inside the dropdown script; read it from the panel once it is built
    setTimeout(function(){
      var ps=document.querySelectorAll('.ddp');
      if(ps[0]){ps[0].querySelectorAll('li[data-v]').forEach(function(li){if(li.dataset.v)ALL_BRANDS.push(li.dataset.v)})}
    },0);
  })();

  /* ---- search suggestions ---- */
  var sug=document.createElement('div');sug.className='sug';box.appendChild(sug);
  var items=[],act=-1;
  function closeSug(){sug.classList.remove('show');act=-1}
  function buildSug(){
    var n=norm(input.value);
    if(!n){closeSug();return}
    var bs=brandNames().concat(ALL_BRANDS.filter(function(b){return brandNames().indexOf(b)<0}))
      .filter(function(b){return norm(b).indexOf(n)>-1}).sort(function(a,b){return (norm(a).indexOf(n)===0?0:1)-(norm(b).indexOf(n)===0?0:1)||a.localeCompare(b)}).slice(0,6);
    var cs=CARS.filter(function(c){return norm(c.b+c.n).indexOf(n)>-1}).slice(0,6);
    var cos=Object.keys(COMPANY_BRANDS).filter(function(x){return norm(x).indexOf(n)>-1}).sort().slice(0,4);
    items=[];
    var h='';
    if(cos.length){h+='<h6>COMPANIES</h6>';cos.forEach(function(x){items.push({t:'p',v:x});h+='<div class="it" data-k="'+(items.length-1)+'"><span>'+esc(x)+'</span><small>'+COMPANY_BRANDS[x].length+(COMPANY_BRANDS[x].length===1?' brand':' brands')+'</small></div>'})}
    if(bs.length){h+='<h6>BRANDS</h6>';bs.forEach(function(b){items.push({t:'b',v:b});h+='<div class="it" data-k="'+(items.length-1)+'"><span>'+esc(b)+'</span><small>'+(CARS.some(function(c){return c.b===b})?'View cars':'Brand')+'</small></div>'})}
    if(cs.length){h+='<h6>CARS</h6>';cs.forEach(function(c){items.push({t:'c',v:CARS.indexOf(c)});h+='<div class="it" data-k="'+(items.length-1)+'"><span>'+esc(c.b+' '+c.n)+'</span><small>'+esc(c.c)+'</small></div>'})}
    if(!items.length){closeSug();return}
    sug.innerHTML=h;sug.classList.add('show');act=-1;
  }
  function chooseItem(k){
    var it=items[k];if(!it)return;
    if(it.t==='p')pickCompany(it.v);
    else if(it.t==='b')pickBrand(it.v);
    else openModal(it.v)
  }
  function hilite(){
    var els=sug.querySelectorAll('.it');
    els.forEach(function(e,i){e.classList.toggle('act',i===act)});
    if(els[act])els[act].scrollIntoView({block:'nearest'});
  }
  input.addEventListener('input',buildSug);
  input.addEventListener('focus',buildSug);
  input.addEventListener('keydown',function(e){
    var open=sug.classList.contains('show'),n=sug.querySelectorAll('.it').length;
    if(e.key==='ArrowDown'&&open){e.preventDefault();act=(act+1)%n;hilite()}
    else if(e.key==='ArrowUp'&&open){e.preventDefault();act=(act-1+n)%n;hilite()}
    else if(e.key==='Enter'){e.preventDefault();if(open&&act>-1)chooseItem(act);else runSearch(input.value)}
    else if(e.key==='Escape'){closeSug()}
  });
  sug.addEventListener('mousedown',function(e){
    var it=e.target.closest('.it');if(it){e.preventDefault();chooseItem(+it.dataset.k)}
  });
  btn.addEventListener('click',function(){runSearch(input.value)});
  document.addEventListener('click',function(e){if(!box.contains(e.target))closeSug()});

  /* ---- dropdown chips (Brand / Car Category) ---- */
  window.addEventListener('cv:pick',function(e){
    var d=e.detail;
    if(d.key==='brand'){
      if(d.v){pickBrand(d.v)}
      else{go({})}
    }else if(d.key==='company'){pickCompany(d.v)}
    else if(d.key==='country'){pickCountry(d.v)}
    else if(d.key==='year'){pickYear(d.v)}
    else if(d.key==='powertrain'){pickPt(d.v)}
    else{pickCat(d.v)}
  });

  /* ---- top brand tiles ---- */
  document.querySelectorAll('#brandTiles .tile').forEach(function(t){
    t.addEventListener('click',function(){
      var name=t.querySelector('span').textContent.trim();
      var match=brandNames().concat(ALL_BRANDS).filter(function(b){return norm(b)===norm(name)})[0]||name;
      pickBrand(match);
    });
  });

  /* ---- nav "Brands": page listing each unique brand once ---- */
  $('navBrandsLink').addEventListener('click',function(e){
    if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();go({page:'brands'});
  });

  /* ---- nav "About" ---- */
  $('navAbout').addEventListener('click',function(e){
    if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();go({page:'about'});
  });
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-abgo]');if(!b)return;
    var t=document.getElementById(b.getAttribute('data-abgo'));
    if(t)t.scrollIntoView({behavior:'smooth',block:'start'});
  });

  /* ---- nav + clear + breadcrumbs ---- */
  $('navExplore').addEventListener('click',function(e){
    if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();go({page:'companies'});
  });
  $('xback').addEventListener('click',function(){goBack({})});
  $('xclear').addEventListener('click',function(){go({})});
  $('crumbs').addEventListener('click',function(e){
    var a=e.target.closest('a');if(!a)return;
    if(a.dataset.go==='home')go({});
  });
  /* links + back buttons on the company / brand / car pages */
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[data-nav]');
    if(a){
      if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      e.preventDefault();go(parseHref(a.getAttribute('href')));return;
    }
    var bk=e.target.closest('#pages [data-back]');
    if(bk){var p={};try{p=JSON.parse(bk.getAttribute('data-back'))}catch(x){}goBack(p)}
  });
  window.addEventListener('popstate',function(){depth=(history.state&&history.state.n)||0;applyRoute(true)});

  /* ---- car details: now a separate page (no modal) ---- */
  function openModal(i){
    var c=CARS[i];if(!c)return;
    go({page:'car',brand:c.b,car:c.n,company:companyOf(c.b)});
  }
  function closeModal(){
    modal.hidden=true;document.body.style.overflow='';
    if(lastFocus&&lastFocus.focus)try{lastFocus.focus()}catch(e){}
  }
  $('mClose').addEventListener('click',closeModal);
  modal.addEventListener('click',function(e){if(e.target===modal)closeModal()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!modal.hidden)closeModal()});
  grid.addEventListener('click',function(e){var c=e.target.closest('.ccard');if(c)openModal(+c.dataset.i)});
  $('xextra').addEventListener('click',function(e){var b=e.target.closest('.pill,.tile[data-b]');if(b){state.cp?pillBrand(b.dataset.b):pickBrand(b.dataset.b)}});
  $('xextra').addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){var b=e.target.closest('.tile[data-b]');if(b){e.preventDefault();state.cp?pillBrand(b.dataset.b):pickBrand(b.dataset.b)}}});
  grid.addEventListener('keydown',function(e){
    if(e.key==='Enter'||e.key===' '){var c=e.target.closest('.ccard');if(c){e.preventDefault();openModal(+c.dataset.i)}}
  });
  /* ---- start: read the URL so refresh / shared links open the right page ---- */
  try{history.scrollRestoration='manual'}catch(x){}
  depth=(history.state&&history.state.n)||0;
  applyRoute(false);
})();
