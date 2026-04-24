/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 4905.0, "series": [{"data": [[0.0, 5.0], [0.1, 8.0], [0.2, 8.0], [0.3, 9.0], [0.4, 9.0], [0.5, 9.0], [0.6, 10.0], [0.7, 10.0], [0.8, 11.0], [0.9, 11.0], [1.0, 11.0], [1.1, 11.0], [1.2, 12.0], [1.3, 12.0], [1.4, 12.0], [1.5, 13.0], [1.6, 13.0], [1.7, 13.0], [1.8, 14.0], [1.9, 14.0], [2.0, 14.0], [2.1, 14.0], [2.2, 15.0], [2.3, 15.0], [2.4, 15.0], [2.5, 16.0], [2.6, 16.0], [2.7, 16.0], [2.8, 17.0], [2.9, 17.0], [3.0, 17.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 19.0], [3.6, 19.0], [3.7, 19.0], [3.8, 19.0], [3.9, 20.0], [4.0, 20.0], [4.1, 20.0], [4.2, 21.0], [4.3, 21.0], [4.4, 21.0], [4.5, 21.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 23.0], [5.1, 23.0], [5.2, 23.0], [5.3, 23.0], [5.4, 24.0], [5.5, 24.0], [5.6, 24.0], [5.7, 25.0], [5.8, 25.0], [5.9, 25.0], [6.0, 26.0], [6.1, 26.0], [6.2, 27.0], [6.3, 27.0], [6.4, 27.0], [6.5, 28.0], [6.6, 28.0], [6.7, 28.0], [6.8, 29.0], [6.9, 29.0], [7.0, 30.0], [7.1, 30.0], [7.2, 31.0], [7.3, 31.0], [7.4, 32.0], [7.5, 33.0], [7.6, 33.0], [7.7, 34.0], [7.8, 36.0], [7.9, 36.0], [8.0, 37.0], [8.1, 38.0], [8.2, 39.0], [8.3, 40.0], [8.4, 41.0], [8.5, 42.0], [8.6, 43.0], [8.7, 44.0], [8.8, 45.0], [8.9, 46.0], [9.0, 47.0], [9.1, 48.0], [9.2, 49.0], [9.3, 50.0], [9.4, 51.0], [9.5, 52.0], [9.6, 53.0], [9.7, 53.0], [9.8, 54.0], [9.9, 55.0], [10.0, 56.0], [10.1, 57.0], [10.2, 58.0], [10.3, 58.0], [10.4, 59.0], [10.5, 60.0], [10.6, 60.0], [10.7, 61.0], [10.8, 62.0], [10.9, 62.0], [11.0, 63.0], [11.1, 64.0], [11.2, 65.0], [11.3, 66.0], [11.4, 67.0], [11.5, 68.0], [11.6, 69.0], [11.7, 70.0], [11.8, 71.0], [11.9, 71.0], [12.0, 72.0], [12.1, 73.0], [12.2, 73.0], [12.3, 73.0], [12.4, 74.0], [12.5, 74.0], [12.6, 74.0], [12.7, 75.0], [12.8, 75.0], [12.9, 75.0], [13.0, 76.0], [13.1, 76.0], [13.2, 76.0], [13.3, 76.0], [13.4, 77.0], [13.5, 77.0], [13.6, 77.0], [13.7, 77.0], [13.8, 78.0], [13.9, 78.0], [14.0, 78.0], [14.1, 78.0], [14.2, 79.0], [14.3, 79.0], [14.4, 80.0], [14.5, 80.0], [14.6, 80.0], [14.7, 81.0], [14.8, 81.0], [14.9, 81.0], [15.0, 82.0], [15.1, 82.0], [15.2, 82.0], [15.3, 82.0], [15.4, 83.0], [15.5, 83.0], [15.6, 83.0], [15.7, 84.0], [15.8, 84.0], [15.9, 84.0], [16.0, 85.0], [16.1, 85.0], [16.2, 85.0], [16.3, 86.0], [16.4, 86.0], [16.5, 86.0], [16.6, 86.0], [16.7, 87.0], [16.8, 87.0], [16.9, 87.0], [17.0, 87.0], [17.1, 88.0], [17.2, 88.0], [17.3, 88.0], [17.4, 88.0], [17.5, 89.0], [17.6, 89.0], [17.7, 89.0], [17.8, 89.0], [17.9, 89.0], [18.0, 90.0], [18.1, 90.0], [18.2, 90.0], [18.3, 90.0], [18.4, 90.0], [18.5, 91.0], [18.6, 91.0], [18.7, 91.0], [18.8, 91.0], [18.9, 91.0], [19.0, 91.0], [19.1, 92.0], [19.2, 92.0], [19.3, 92.0], [19.4, 92.0], [19.5, 92.0], [19.6, 92.0], [19.7, 93.0], [19.8, 93.0], [19.9, 93.0], [20.0, 93.0], [20.1, 93.0], [20.2, 94.0], [20.3, 94.0], [20.4, 94.0], [20.5, 94.0], [20.6, 94.0], [20.7, 94.0], [20.8, 95.0], [20.9, 95.0], [21.0, 95.0], [21.1, 95.0], [21.2, 95.0], [21.3, 95.0], [21.4, 95.0], [21.5, 96.0], [21.6, 96.0], [21.7, 96.0], [21.8, 96.0], [21.9, 96.0], [22.0, 96.0], [22.1, 96.0], [22.2, 96.0], [22.3, 97.0], [22.4, 97.0], [22.5, 97.0], [22.6, 97.0], [22.7, 97.0], [22.8, 97.0], [22.9, 97.0], [23.0, 98.0], [23.1, 98.0], [23.2, 98.0], [23.3, 98.0], [23.4, 98.0], [23.5, 98.0], [23.6, 98.0], [23.7, 98.0], [23.8, 98.0], [23.9, 98.0], [24.0, 99.0], [24.1, 99.0], [24.2, 99.0], [24.3, 99.0], [24.4, 99.0], [24.5, 99.0], [24.6, 99.0], [24.7, 99.0], [24.8, 99.0], [24.9, 100.0], [25.0, 100.0], [25.1, 100.0], [25.2, 100.0], [25.3, 100.0], [25.4, 100.0], [25.5, 100.0], [25.6, 100.0], [25.7, 100.0], [25.8, 100.0], [25.9, 100.0], [26.0, 101.0], [26.1, 101.0], [26.2, 101.0], [26.3, 101.0], [26.4, 101.0], [26.5, 101.0], [26.6, 101.0], [26.7, 102.0], [26.8, 102.0], [26.9, 102.0], [27.0, 102.0], [27.1, 102.0], [27.2, 102.0], [27.3, 103.0], [27.4, 103.0], [27.5, 103.0], [27.6, 103.0], [27.7, 103.0], [27.8, 103.0], [27.9, 104.0], [28.0, 104.0], [28.1, 104.0], [28.2, 104.0], [28.3, 104.0], [28.4, 104.0], [28.5, 104.0], [28.6, 105.0], [28.7, 105.0], [28.8, 105.0], [28.9, 105.0], [29.0, 105.0], [29.1, 105.0], [29.2, 105.0], [29.3, 106.0], [29.4, 106.0], [29.5, 106.0], [29.6, 106.0], [29.7, 106.0], [29.8, 107.0], [29.9, 107.0], [30.0, 107.0], [30.1, 107.0], [30.2, 108.0], [30.3, 108.0], [30.4, 108.0], [30.5, 108.0], [30.6, 108.0], [30.7, 108.0], [30.8, 109.0], [30.9, 109.0], [31.0, 109.0], [31.1, 109.0], [31.2, 110.0], [31.3, 110.0], [31.4, 110.0], [31.5, 110.0], [31.6, 110.0], [31.7, 110.0], [31.8, 111.0], [31.9, 111.0], [32.0, 111.0], [32.1, 112.0], [32.2, 112.0], [32.3, 112.0], [32.4, 112.0], [32.5, 112.0], [32.6, 113.0], [32.7, 113.0], [32.8, 113.0], [32.9, 113.0], [33.0, 113.0], [33.1, 114.0], [33.2, 114.0], [33.3, 114.0], [33.4, 114.0], [33.5, 115.0], [33.6, 115.0], [33.7, 115.0], [33.8, 116.0], [33.9, 116.0], [34.0, 116.0], [34.1, 117.0], [34.2, 117.0], [34.3, 117.0], [34.4, 118.0], [34.5, 118.0], [34.6, 118.0], [34.7, 118.0], [34.8, 119.0], [34.9, 119.0], [35.0, 119.0], [35.1, 120.0], [35.2, 120.0], [35.3, 120.0], [35.4, 121.0], [35.5, 121.0], [35.6, 121.0], [35.7, 121.0], [35.8, 122.0], [35.9, 122.0], [36.0, 122.0], [36.1, 123.0], [36.2, 123.0], [36.3, 123.0], [36.4, 124.0], [36.5, 124.0], [36.6, 124.0], [36.7, 125.0], [36.8, 126.0], [36.9, 126.0], [37.0, 127.0], [37.1, 128.0], [37.2, 128.0], [37.3, 129.0], [37.4, 129.0], [37.5, 130.0], [37.6, 131.0], [37.7, 132.0], [37.8, 132.0], [37.9, 133.0], [38.0, 133.0], [38.1, 134.0], [38.2, 135.0], [38.3, 135.0], [38.4, 136.0], [38.5, 137.0], [38.6, 137.0], [38.7, 138.0], [38.8, 139.0], [38.9, 140.0], [39.0, 141.0], [39.1, 142.0], [39.2, 143.0], [39.3, 144.0], [39.4, 145.0], [39.5, 146.0], [39.6, 147.0], [39.7, 148.0], [39.8, 148.0], [39.9, 149.0], [40.0, 150.0], [40.1, 151.0], [40.2, 152.0], [40.3, 152.0], [40.4, 153.0], [40.5, 154.0], [40.6, 155.0], [40.7, 156.0], [40.8, 157.0], [40.9, 159.0], [41.0, 160.0], [41.1, 161.0], [41.2, 162.0], [41.3, 163.0], [41.4, 164.0], [41.5, 164.0], [41.6, 165.0], [41.7, 166.0], [41.8, 166.0], [41.9, 167.0], [42.0, 168.0], [42.1, 168.0], [42.2, 169.0], [42.3, 169.0], [42.4, 170.0], [42.5, 170.0], [42.6, 171.0], [42.7, 172.0], [42.8, 172.0], [42.9, 173.0], [43.0, 173.0], [43.1, 173.0], [43.2, 174.0], [43.3, 174.0], [43.4, 175.0], [43.5, 175.0], [43.6, 175.0], [43.7, 176.0], [43.8, 176.0], [43.9, 176.0], [44.0, 177.0], [44.1, 177.0], [44.2, 177.0], [44.3, 177.0], [44.4, 178.0], [44.5, 178.0], [44.6, 178.0], [44.7, 178.0], [44.8, 179.0], [44.9, 179.0], [45.0, 179.0], [45.1, 180.0], [45.2, 180.0], [45.3, 181.0], [45.4, 181.0], [45.5, 181.0], [45.6, 182.0], [45.7, 182.0], [45.8, 182.0], [45.9, 183.0], [46.0, 183.0], [46.1, 183.0], [46.2, 184.0], [46.3, 184.0], [46.4, 184.0], [46.5, 184.0], [46.6, 185.0], [46.7, 185.0], [46.8, 185.0], [46.9, 186.0], [47.0, 186.0], [47.1, 187.0], [47.2, 187.0], [47.3, 187.0], [47.4, 187.0], [47.5, 188.0], [47.6, 188.0], [47.7, 188.0], [47.8, 188.0], [47.9, 189.0], [48.0, 189.0], [48.1, 189.0], [48.2, 190.0], [48.3, 190.0], [48.4, 190.0], [48.5, 190.0], [48.6, 191.0], [48.7, 191.0], [48.8, 191.0], [48.9, 191.0], [49.0, 192.0], [49.1, 192.0], [49.2, 192.0], [49.3, 192.0], [49.4, 193.0], [49.5, 193.0], [49.6, 193.0], [49.7, 194.0], [49.8, 194.0], [49.9, 194.0], [50.0, 194.0], [50.1, 195.0], [50.2, 195.0], [50.3, 195.0], [50.4, 195.0], [50.5, 195.0], [50.6, 196.0], [50.7, 196.0], [50.8, 196.0], [50.9, 196.0], [51.0, 197.0], [51.1, 197.0], [51.2, 197.0], [51.3, 197.0], [51.4, 198.0], [51.5, 198.0], [51.6, 198.0], [51.7, 198.0], [51.8, 198.0], [51.9, 199.0], [52.0, 199.0], [52.1, 199.0], [52.2, 199.0], [52.3, 199.0], [52.4, 200.0], [52.5, 200.0], [52.6, 200.0], [52.7, 200.0], [52.8, 200.0], [52.9, 200.0], [53.0, 200.0], [53.1, 201.0], [53.2, 201.0], [53.3, 201.0], [53.4, 201.0], [53.5, 201.0], [53.6, 202.0], [53.7, 202.0], [53.8, 202.0], [53.9, 202.0], [54.0, 203.0], [54.1, 203.0], [54.2, 203.0], [54.3, 204.0], [54.4, 204.0], [54.5, 204.0], [54.6, 204.0], [54.7, 205.0], [54.8, 205.0], [54.9, 205.0], [55.0, 205.0], [55.1, 206.0], [55.2, 206.0], [55.3, 206.0], [55.4, 207.0], [55.5, 207.0], [55.6, 207.0], [55.7, 208.0], [55.8, 208.0], [55.9, 209.0], [56.0, 209.0], [56.1, 209.0], [56.2, 210.0], [56.3, 210.0], [56.4, 210.0], [56.5, 211.0], [56.6, 211.0], [56.7, 212.0], [56.8, 212.0], [56.9, 213.0], [57.0, 213.0], [57.1, 213.0], [57.2, 214.0], [57.3, 214.0], [57.4, 215.0], [57.5, 215.0], [57.6, 216.0], [57.7, 216.0], [57.8, 217.0], [57.9, 217.0], [58.0, 218.0], [58.1, 218.0], [58.2, 218.0], [58.3, 219.0], [58.4, 220.0], [58.5, 220.0], [58.6, 221.0], [58.7, 222.0], [58.8, 223.0], [58.9, 223.0], [59.0, 224.0], [59.1, 225.0], [59.2, 226.0], [59.3, 227.0], [59.4, 228.0], [59.5, 229.0], [59.6, 230.0], [59.7, 231.0], [59.8, 231.0], [59.9, 233.0], [60.0, 234.0], [60.1, 236.0], [60.2, 237.0], [60.3, 239.0], [60.4, 240.0], [60.5, 242.0], [60.6, 243.0], [60.7, 245.0], [60.8, 246.0], [60.9, 248.0], [61.0, 249.0], [61.1, 251.0], [61.2, 252.0], [61.3, 254.0], [61.4, 256.0], [61.5, 258.0], [61.6, 260.0], [61.7, 261.0], [61.8, 262.0], [61.9, 263.0], [62.0, 265.0], [62.1, 266.0], [62.2, 267.0], [62.3, 269.0], [62.4, 270.0], [62.5, 271.0], [62.6, 272.0], [62.7, 272.0], [62.8, 273.0], [62.9, 274.0], [63.0, 275.0], [63.1, 275.0], [63.2, 276.0], [63.3, 277.0], [63.4, 277.0], [63.5, 278.0], [63.6, 278.0], [63.7, 279.0], [63.8, 279.0], [63.9, 280.0], [64.0, 281.0], [64.1, 281.0], [64.2, 282.0], [64.3, 282.0], [64.4, 283.0], [64.5, 284.0], [64.6, 284.0], [64.7, 285.0], [64.8, 285.0], [64.9, 286.0], [65.0, 286.0], [65.1, 287.0], [65.2, 287.0], [65.3, 288.0], [65.4, 288.0], [65.5, 289.0], [65.6, 289.0], [65.7, 290.0], [65.8, 290.0], [65.9, 291.0], [66.0, 291.0], [66.1, 292.0], [66.2, 293.0], [66.3, 293.0], [66.4, 294.0], [66.5, 294.0], [66.6, 295.0], [66.7, 295.0], [66.8, 295.0], [66.9, 296.0], [67.0, 296.0], [67.1, 297.0], [67.2, 297.0], [67.3, 297.0], [67.4, 298.0], [67.5, 298.0], [67.6, 298.0], [67.7, 299.0], [67.8, 299.0], [67.9, 299.0], [68.0, 299.0], [68.1, 300.0], [68.2, 300.0], [68.3, 300.0], [68.4, 301.0], [68.5, 301.0], [68.6, 302.0], [68.7, 302.0], [68.8, 303.0], [68.9, 303.0], [69.0, 304.0], [69.1, 304.0], [69.2, 305.0], [69.3, 305.0], [69.4, 306.0], [69.5, 307.0], [69.6, 308.0], [69.7, 309.0], [69.8, 309.0], [69.9, 310.0], [70.0, 311.0], [70.1, 312.0], [70.2, 313.0], [70.3, 314.0], [70.4, 314.0], [70.5, 315.0], [70.6, 317.0], [70.7, 318.0], [70.8, 319.0], [70.9, 320.0], [71.0, 321.0], [71.1, 322.0], [71.2, 323.0], [71.3, 325.0], [71.4, 326.0], [71.5, 328.0], [71.6, 330.0], [71.7, 333.0], [71.8, 335.0], [71.9, 338.0], [72.0, 340.0], [72.1, 343.0], [72.2, 346.0], [72.3, 348.0], [72.4, 351.0], [72.5, 354.0], [72.6, 356.0], [72.7, 359.0], [72.8, 363.0], [72.9, 365.0], [73.0, 367.0], [73.1, 369.0], [73.2, 372.0], [73.3, 373.0], [73.4, 375.0], [73.5, 376.0], [73.6, 377.0], [73.7, 377.0], [73.8, 378.0], [73.9, 379.0], [74.0, 380.0], [74.1, 381.0], [74.2, 382.0], [74.3, 383.0], [74.4, 385.0], [74.5, 385.0], [74.6, 387.0], [74.7, 388.0], [74.8, 389.0], [74.9, 390.0], [75.0, 391.0], [75.1, 392.0], [75.2, 393.0], [75.3, 394.0], [75.4, 395.0], [75.5, 396.0], [75.6, 396.0], [75.7, 397.0], [75.8, 398.0], [75.9, 399.0], [76.0, 399.0], [76.1, 400.0], [76.2, 400.0], [76.3, 401.0], [76.4, 402.0], [76.5, 402.0], [76.6, 404.0], [76.7, 405.0], [76.8, 405.0], [76.9, 407.0], [77.0, 408.0], [77.1, 409.0], [77.2, 410.0], [77.3, 412.0], [77.4, 414.0], [77.5, 416.0], [77.6, 418.0], [77.7, 420.0], [77.8, 422.0], [77.9, 425.0], [78.0, 427.0], [78.1, 430.0], [78.2, 434.0], [78.3, 438.0], [78.4, 441.0], [78.5, 448.0], [78.6, 450.0], [78.7, 455.0], [78.8, 461.0], [78.9, 467.0], [79.0, 469.0], [79.1, 472.0], [79.2, 474.0], [79.3, 476.0], [79.4, 477.0], [79.5, 479.0], [79.6, 480.0], [79.7, 483.0], [79.8, 484.0], [79.9, 486.0], [80.0, 488.0], [80.1, 489.0], [80.2, 492.0], [80.3, 493.0], [80.4, 495.0], [80.5, 497.0], [80.6, 498.0], [80.7, 499.0], [80.8, 500.0], [80.9, 502.0], [81.0, 503.0], [81.1, 504.0], [81.2, 506.0], [81.3, 507.0], [81.4, 508.0], [81.5, 510.0], [81.6, 513.0], [81.7, 515.0], [81.8, 517.0], [81.9, 520.0], [82.0, 523.0], [82.1, 527.0], [82.2, 532.0], [82.3, 535.0], [82.4, 540.0], [82.5, 550.0], [82.6, 555.0], [82.7, 563.0], [82.8, 569.0], [82.9, 574.0], [83.0, 577.0], [83.1, 580.0], [83.2, 581.0], [83.3, 584.0], [83.4, 588.0], [83.5, 590.0], [83.6, 592.0], [83.7, 594.0], [83.8, 596.0], [83.9, 598.0], [84.0, 600.0], [84.1, 601.0], [84.2, 603.0], [84.3, 605.0], [84.4, 607.0], [84.5, 609.0], [84.6, 612.0], [84.7, 616.0], [84.8, 619.0], [84.9, 621.0], [85.0, 626.0], [85.1, 632.0], [85.2, 644.0], [85.3, 657.0], [85.4, 667.0], [85.5, 673.0], [85.6, 679.0], [85.7, 685.0], [85.8, 689.0], [85.9, 693.0], [86.0, 696.0], [86.1, 698.0], [86.2, 700.0], [86.3, 701.0], [86.4, 703.0], [86.5, 706.0], [86.6, 708.0], [86.7, 712.0], [86.8, 716.0], [86.9, 722.0], [87.0, 732.0], [87.1, 739.0], [87.2, 754.0], [87.3, 768.0], [87.4, 775.0], [87.5, 779.0], [87.6, 783.0], [87.7, 788.0], [87.8, 792.0], [87.9, 796.0], [88.0, 799.0], [88.1, 801.0], [88.2, 805.0], [88.3, 810.0], [88.4, 817.0], [88.5, 820.0], [88.6, 830.0], [88.7, 838.0], [88.8, 852.0], [88.9, 863.0], [89.0, 871.0], [89.1, 880.0], [89.2, 884.0], [89.3, 892.0], [89.4, 896.0], [89.5, 900.0], [89.6, 904.0], [89.7, 907.0], [89.8, 910.0], [89.9, 913.0], [90.0, 920.0], [90.1, 928.0], [90.2, 947.0], [90.3, 968.0], [90.4, 974.0], [90.5, 984.0], [90.6, 990.0], [90.7, 998.0], [90.8, 1000.0], [90.9, 1004.0], [91.0, 1010.0], [91.1, 1015.0], [91.2, 1022.0], [91.3, 1030.0], [91.4, 1037.0], [91.5, 1055.0], [91.6, 1071.0], [91.7, 1079.0], [91.8, 1085.0], [91.9, 1092.0], [92.0, 1096.0], [92.1, 1100.0], [92.2, 1105.0], [92.3, 1112.0], [92.4, 1119.0], [92.5, 1129.0], [92.6, 1145.0], [92.7, 1166.0], [92.8, 1175.0], [92.9, 1185.0], [93.0, 1190.0], [93.1, 1196.0], [93.2, 1201.0], [93.3, 1206.0], [93.4, 1215.0], [93.5, 1225.0], [93.6, 1240.0], [93.7, 1269.0], [93.8, 1281.0], [93.9, 1288.0], [94.0, 1297.0], [94.1, 1304.0], [94.2, 1314.0], [94.3, 1336.0], [94.4, 1369.0], [94.5, 1386.0], [94.6, 1396.0], [94.7, 1404.0], [94.8, 1411.0], [94.9, 1421.0], [95.0, 1440.0], [95.1, 1476.0], [95.2, 1486.0], [95.3, 1497.0], [95.4, 1502.0], [95.5, 1513.0], [95.6, 1544.0], [95.7, 1573.0], [95.8, 1586.0], [95.9, 1597.0], [96.0, 1606.0], [96.1, 1618.0], [96.2, 1634.0], [96.3, 1675.0], [96.4, 1689.0], [96.5, 1701.0], [96.6, 1710.0], [96.7, 1724.0], [96.8, 1770.0], [96.9, 1787.0], [97.0, 1799.0], [97.1, 1811.0], [97.2, 1866.0], [97.3, 1886.0], [97.4, 1899.0], [97.5, 1921.0], [97.6, 1982.0], [97.7, 2001.0], [97.8, 2023.0], [97.9, 2081.0], [98.0, 2101.0], [98.1, 2120.0], [98.2, 2181.0], [98.3, 2285.0], [98.4, 2314.0], [98.5, 2378.0], [98.6, 2422.0], [98.7, 2525.0], [98.8, 2628.0], [98.9, 2716.0], [99.0, 2886.0], [99.1, 2968.0], [99.2, 3040.0], [99.3, 3102.0], [99.4, 3204.0], [99.5, 3370.0], [99.6, 3698.0], [99.7, 4093.0], [99.8, 4342.0], [99.9, 4485.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 5508.0, "series": [{"data": [[0.0, 4965.0], [600.0, 443.0], [700.0, 370.0], [800.0, 292.0], [900.0, 258.0], [1000.0, 257.0], [1100.0, 222.0], [1200.0, 173.0], [1300.0, 123.0], [1400.0, 139.0], [1500.0, 114.0], [1600.0, 114.0], [1700.0, 104.0], [1800.0, 80.0], [1900.0, 58.0], [2000.0, 59.0], [2100.0, 50.0], [2200.0, 22.0], [2300.0, 43.0], [2400.0, 24.0], [2500.0, 15.0], [2600.0, 21.0], [2800.0, 17.0], [2700.0, 15.0], [2900.0, 32.0], [3000.0, 23.0], [3100.0, 20.0], [3200.0, 17.0], [3300.0, 9.0], [3400.0, 6.0], [3500.0, 4.0], [3700.0, 1.0], [3600.0, 6.0], [3800.0, 8.0], [3900.0, 7.0], [4000.0, 6.0], [4100.0, 8.0], [4200.0, 6.0], [4300.0, 16.0], [4400.0, 10.0], [4600.0, 9.0], [4500.0, 3.0], [4700.0, 2.0], [4800.0, 1.0], [4900.0, 1.0], [100.0, 5508.0], [200.0, 3130.0], [300.0, 1607.0], [400.0, 943.0], [500.0, 639.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 927.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16163.0, "series": [{"data": [[0.0, 16163.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2910.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 927.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 33.80176767676767, "minX": 1.7770155E12, "maxY": 188.79612661391033, "series": [{"data": [[1.7770155E12, 188.79612661391033], [1.77701556E12, 33.80176767676767]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77701556E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 9.0, "minX": 1.0, "maxY": 709.0, "series": [{"data": [[2.0, 14.333333333333332], [3.0, 28.0], [4.0, 14.285714285714286], [5.0, 10.625], [6.0, 44.18181818181818], [7.0, 41.333333333333336], [8.0, 36.2], [9.0, 29.833333333333332], [10.0, 245.0], [11.0, 88.0], [12.0, 35.666666666666664], [13.0, 49.879999999999995], [14.0, 83.0], [15.0, 105.66666666666667], [16.0, 124.0], [17.0, 120.16666666666667], [18.0, 85.56756756756758], [19.0, 52.75], [20.0, 93.15384615384615], [21.0, 51.5], [22.0, 91.62500000000001], [23.0, 75.92307692307693], [24.0, 160.5], [25.0, 151.33333333333334], [26.0, 164.83333333333331], [27.0, 114.44000000000003], [28.0, 182.0], [29.0, 93.0], [30.0, 97.14285714285714], [31.0, 130.125], [33.0, 140.69565217391303], [32.0, 105.47619047619048], [35.0, 33.333333333333336], [34.0, 133.57692307692307], [37.0, 91.4], [36.0, 223.5], [39.0, 198.5], [38.0, 141.62162162162167], [41.0, 150.04761904761907], [40.0, 207.21428571428575], [43.0, 108.18181818181817], [42.0, 120.0], [45.0, 184.07142857142858], [44.0, 237.92592592592595], [47.0, 173.66666666666666], [46.0, 110.37500000000001], [49.0, 224.897435897436], [48.0, 169.4285714285714], [51.0, 192.66666666666669], [50.0, 177.2142857142857], [53.0, 206.78082191780823], [52.0, 94.0], [55.0, 505.0], [54.0, 276.75], [57.0, 170.5], [56.0, 208.83870967741936], [59.0, 183.15384615384616], [58.0, 187.0], [61.0, 169.61538461538464], [60.0, 181.75], [63.0, 489.0], [62.0, 188.25], [67.0, 253.0], [66.0, 644.25], [65.0, 158.1818181818182], [64.0, 238.1538461538462], [71.0, 139.40909090909093], [70.0, 59.0], [69.0, 157.2], [68.0, 383.52439024390236], [75.0, 430.0], [74.0, 239.33333333333334], [73.0, 293.8441558441558], [72.0, 344.8333333333333], [79.0, 18.0], [78.0, 15.75], [77.0, 187.25], [76.0, 136.33333333333331], [83.0, 29.666666666666668], [82.0, 9.0], [81.0, 291.17073170731703], [80.0, 150.42857142857142], [87.0, 108.50000000000001], [86.0, 29.5], [85.0, 42.5], [84.0, 43.333333333333336], [91.0, 182.09523809523807], [90.0, 150.35], [89.0, 17.666666666666668], [88.0, 346.77419354838713], [95.0, 175.16666666666669], [94.0, 111.66666666666666], [93.0, 87.0], [92.0, 54.375], [99.0, 122.56000000000003], [98.0, 71.5], [97.0, 59.0], [96.0, 291.20000000000005], [103.0, 557.3333333333334], [102.0, 174.24242424242425], [101.0, 158.8235294117647], [100.0, 260.75], [107.0, 355.0], [106.0, 709.0], [105.0, 133.16666666666669], [104.0, 111.33333333333333], [111.0, 144.4], [110.0, 119.00000000000001], [109.0, 95.8], [108.0, 263.0434782608696], [115.0, 293.6000000000001], [114.0, 78.0], [113.0, 177.0], [112.0, 99.0], [119.0, 161.33333333333334], [118.0, 189.81249999999997], [117.0, 198.8775510204082], [116.0, 97.7391304347826], [123.0, 507.375], [122.0, 188.79166666666666], [121.0, 248.25], [120.0, 351.77272727272725], [127.0, 325.1764705882353], [126.0, 229.94999999999996], [125.0, 117.0], [124.0, 199.409090909091], [135.0, 57.93333333333334], [132.0, 340.75], [131.0, 276.2191780821918], [130.0, 381.6875000000001], [129.0, 335.81818181818187], [128.0, 411.2058823529412], [143.0, 220.90476190476187], [142.0, 209.6], [141.0, 336.90909090909093], [140.0, 360.448275862069], [139.0, 219.73333333333332], [138.0, 278.4], [137.0, 254.64383561643842], [136.0, 119.97435897435894], [151.0, 277.25], [150.0, 323.6], [149.0, 224.0588235294118], [148.0, 246.48], [147.0, 148.83333333333334], [146.0, 265.33333333333337], [145.0, 199.44444444444443], [144.0, 117.5], [159.0, 213.2], [158.0, 294.57142857142856], [157.0, 310.8913043478261], [156.0, 362.0], [155.0, 259.37391304347835], [154.0, 107.5], [153.0, 143.71999999999997], [152.0, 281.6], [167.0, 400.3255813953488], [166.0, 435.44047619047626], [165.0, 320.1052631578948], [164.0, 183.91304347826087], [163.0, 300.5135135135135], [162.0, 256.40625000000006], [161.0, 352.7551020408163], [160.0, 335.96296296296293], [175.0, 338.5], [174.0, 248.8571428571428], [173.0, 198.0], [172.0, 287.02941176470586], [171.0, 281.07692307692304], [170.0, 326.72727272727263], [169.0, 375.2903225806452], [168.0, 541.888888888889], [183.0, 109.0], [182.0, 353.364238410596], [181.0, 258.7833333333334], [180.0, 323.9255319148936], [179.0, 314.8], [178.0, 234.8277777777778], [177.0, 283.0833333333334], [176.0, 380.3513513513514], [191.0, 287.73214285714283], [190.0, 98.50000000000001], [189.0, 223.33333333333334], [188.0, 301.21052631578937], [187.0, 285.3030303030303], [186.0, 297.8492063492064], [185.0, 319.43617021276594], [184.0, 522.3333333333333], [199.0, 383.064786249449], [198.0, 337.1492537313435], [197.0, 369.334437086093], [196.0, 348.93955094991344], [195.0, 346.3636363636364], [194.0, 343.7045454545455], [193.0, 357.7064220183486], [192.0, 390.5963855421686], [200.0, 420.47797394583307], [1.0, 14.818181818181818]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[182.6583499999996, 374.4583999999991]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 7224.683333333333, "minX": 1.7770155E12, "maxY": 2.40236055E7, "series": [{"data": [[1.7770155E12, 2.40236055E7], [1.77701556E12, 990805.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7770155E12, 175218.65], [1.77701556E12, 7224.683333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77701556E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 140.89267676767687, "minX": 1.7770155E12, "maxY": 384.0889733444382, "series": [{"data": [[1.7770155E12, 384.0889733444382], [1.77701556E12, 140.89267676767687]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77701556E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 115.37373737373716, "minX": 1.7770155E12, "maxY": 354.23276759683324, "series": [{"data": [[1.7770155E12, 354.23276759683324], [1.77701556E12, 115.37373737373716]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77701556E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.7770155E12, "maxY": 5.86739900041657, "series": [{"data": [[1.7770155E12, 5.86739900041657], [1.77701556E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77701556E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.7770155E12, "maxY": 4905.0, "series": [{"data": [[1.7770155E12, 4905.0], [1.77701556E12, 1800.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7770155E12, 973.1000000000022], [1.77701556E12, 287.70000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7770155E12, 2903.91], [1.77701556E12, 882.4899999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7770155E12, 1485.0999999999985], [1.77701556E12, 420.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7770155E12, 5.0], [1.77701556E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7770155E12, 197.0], [1.77701556E12, 99.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77701556E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 11.0, "minX": 27.0, "maxY": 2567.5, "series": [{"data": [[536.0, 256.5], [526.0, 151.0], [532.0, 266.0], [528.0, 211.0], [520.0, 225.5], [524.0, 154.0], [542.0, 182.5], [539.0, 208.0], [527.0, 226.0], [513.0, 210.0], [565.0, 171.0], [545.0, 209.0], [563.0, 204.0], [557.0, 212.0], [567.0, 164.0], [569.0, 183.0], [579.0, 180.0], [603.0, 104.0], [106.0, 2567.5], [224.0, 75.5], [258.0, 110.0], [280.0, 155.0], [283.0, 112.0], [297.0, 77.0], [316.0, 90.5], [340.0, 323.0], [339.0, 223.0], [425.0, 219.0], [426.0, 104.0], [27.0, 11.0], [455.0, 215.0], [468.0, 244.0], [474.0, 197.5], [467.0, 210.0], [487.0, 206.0], [481.0, 118.0], [495.0, 199.0], [507.0, 333.0], [496.0, 219.0], [506.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 603.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 8.0, "minX": 27.0, "maxY": 2557.5, "series": [{"data": [[536.0, 211.0], [526.0, 123.0], [532.0, 209.0], [528.0, 189.0], [520.0, 197.0], [524.0, 107.0], [542.0, 133.5], [539.0, 191.0], [527.0, 199.0], [513.0, 198.0], [565.0, 115.0], [545.0, 185.0], [563.0, 184.0], [557.0, 187.0], [567.0, 114.0], [569.0, 122.0], [579.0, 133.0], [603.0, 95.0], [106.0, 2557.5], [224.0, 44.0], [258.0, 96.5], [280.0, 109.0], [283.0, 99.0], [297.0, 74.0], [316.0, 77.0], [340.0, 297.5], [339.0, 198.0], [425.0, 202.0], [426.0, 96.0], [27.0, 8.0], [455.0, 192.0], [468.0, 205.0], [474.0, 174.5], [467.0, 195.0], [487.0, 189.0], [481.0, 105.0], [495.0, 181.0], [507.0, 299.0], [496.0, 193.0], [506.0, 179.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 603.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 12.316666666666666, "minX": 1.7770155E12, "maxY": 321.01666666666665, "series": [{"data": [[1.7770155E12, 321.01666666666665], [1.77701556E12, 12.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77701556E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 13.2, "minX": 1.7770155E12, "maxY": 320.1333333333333, "series": [{"data": [[1.7770155E12, 320.1333333333333], [1.77701556E12, 13.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77701556E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 13.2, "minX": 1.7770155E12, "maxY": 320.1333333333333, "series": [{"data": [[1.7770155E12, 320.1333333333333], [1.77701556E12, 13.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77701556E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 13.2, "minX": 1.7770155E12, "maxY": 320.1333333333333, "series": [{"data": [[1.7770155E12, 320.1333333333333], [1.77701556E12, 13.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77701556E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

