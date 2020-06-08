var morphing = anime({
  targets: 'path',
  d: [
    //1
    { value: 'M865.265 490.235C783.597 541.155 716.182 548.026 620 564C410.794 598.745 533.499 418.511 454 208C428.934 141.626 303.503 47.8286 303.503 0M865.265 490.235C961.235 430.397 993.294 391.146 930 326C836.276 229.533 1163.02 124.982 1163.02 0.310268M865.265 490.235C754.532 333.513 639.205 102.5 639.205 0.310268M865.265 490.235C881.632 513.399 896.845 530.762 910.046 540.5C1012.56 616.121 793.683 899.095 710 848C626.318 796.905 523.038 652.73 454 712C402.906 755.865 468.773 870 344 870C219.228 870 150.264 514.325 0 514.325M865.265 490.235C865.265 490.235 155.839 138.778 155.839 0.274279' },
    //2
    { value: 'M901.265 513.235C819.597 564.155 694.182 570.026 598 586C388.794 620.745 573.499 396.511 494 186C468.934 119.626 303.503 47.8286 303.503 0M901.265 513.235C997.235 453.397 1025.29 415.146 962 350C868.276 253.533 1163.02 124.982 1163.02 0.310268M901.265 513.235C790.532 356.513 639.205 102.5 639.205 0.310268M901.265 513.235C917.632 536.399 932.845 553.762 946.046 563.5C1048.56 639.121 769.683 919.095 686 868C602.318 816.905 507.038 624.73 438 684C386.906 727.865 474.773 898 350 898C225.228 898 150.264 514.325 0 514.325M901.265 513.235C901.265 513.235 155.839 138.778 155.839 0.274279' },
    //3
    { value: 'M920.219 532.235C838.551 583.155 707.182 594.026 611 610C401.794 644.745 582.499 454.511 503 244C477.934 177.626 306.503 47.8286 306.503 0M920.219 532.235C1016.19 472.397 1000.29 389.146 937 324C843.276 227.533 1166.02 124.982 1166.02 0.310268M920.219 532.235C775 382 642.205 102.5 642.205 0.310268M920.219 532.235C936.586 555.399 951.799 572.762 965 582.5C1067.51 658.121 834.683 899.095 751 848C667.318 796.905 488.038 588.73 419 648C367.906 691.865 431.276 908 306.503 908C181.731 908 237 480 3 514.325M920.219 532.235C920.219 532.235 158.839 250 158.839 0.274279' },
    //4
    { value: 'M880 494C798.332 544.92 704.182 594.026 608 610C398.794 644.745 609.499 450.511 530 240C504.934 173.626 303.503 114 303.503 0M880 494C975.97 434.162 943.294 365.146 880 300C786.276 203.533 1163.02 198 1163.02 0.310268M880 494C734.781 343.765 639.205 158 639.205 0.310268M880 494C896.367 517.164 992.799 634.262 1006 644C1108.51 719.621 794 934 728 862C662 790 449.038 550.73 380 610C328.906 653.865 465.414 946.809 303.503 908C170 876 286 514.325 0 514.325M880 494C880 494 155.839 324 155.839 0.274279' },
    //5
    { value: 'M920 514.325C838.332 565.245 704.182 594.026 608 610C398.794 644.745 609.499 450.511 530 240C504.934 173.626 303.503 300 303.503 0M920 514.325C1015.97 454.487 933.294 329.146 870 264C776.276 167.533 1163.02 408 1163.02 0.310268M920 514.325C774.781 364.09 639.205 300 639.205 0.310268M920 514.325C936.367 537.489 958 634.69 1014 676C1116.51 751.621 792 914 726 842C660 770 443.038 532.73 374 592C322.906 635.865 491.911 928.809 330 890C196.497 858 200 514.325 0 514.325M920 514.325C920 514.325 155.839 168 155.839 0.274279' },
    //6
    { value: 'M908 489C826.332 539.92 674.182 575.026 578 591C368.794 625.745 609.499 411.511 530 201C504.934 134.626 303.503 249 303.503 5M908 489C1003.97 429.162 971.294 334.146 908 269C814.276 172.533 1084 297 1163.02 5.31027M908 489C762.781 338.765 639.205 305 639.205 5.31027M908 489C924.367 512.164 914 619.69 970 661C1072.51 736.621 788 903 722 831C656 759 463.038 577.73 394 637C342.906 680.865 439.911 937.809 278 899C144.497 867 200 519.325 0 519.325M908 489C908 489 174 235 155.839 5.27428' },
    //7
    { value: 'M920.219 532.235C838.551 583.155 707.182 594.026 611 610C401.794 644.745 582.499 454.511 503 244C477.934 177.626 306.503 47.8286 306.503 0M920.219 532.235C1016.19 472.397 1000.29 389.146 937 324C843.276 227.533 1166.02 124.982 1166.02 0.310268M920.219 532.235C775 382 642.205 102.5 642.205 0.310268M920.219 532.235C936.586 555.399 951.799 572.762 965 582.5C1067.51 658.121 834.683 899.095 751 848C667.318 796.905 488.038 588.73 419 648C367.906 691.865 431.276 908 306.503 908C181.731 908 237 480 3 514.325M920.219 532.235C920.219 532.235 158.839 250 158.839 0.274279' },
    //8
    { value: 'M892 465C810.332 515.92 626.182 571.026 530 587C320.794 621.745 539.499 387.511 460 177C434.934 110.626 303.503 141 303.503 7M892 465C987.97 405.162 971.294 314.146 908 249C826 145 1082 225 1163.02 7.31027M892 465C734 325 639.205 307 639.205 7.31027M892 465C908.367 488.164 900 531.69 956 573C1058.51 648.621 800 909 734 837C668 765 495.038 621.73 426 681C374.906 724.865 451.911 927.809 290 889C156.497 857 200 521.325 0 521.325M892 465C892 465 180 223 155.839 7.27428' },
    //9
    { value: 'M830 457C748.332 507.92 626.182 571.026 530 587C320.794 621.745 515.499 363.511 436 153C410.934 86.6257 303.503 61 303.503 7M830 457C925.97 397.162 1007.29 352.146 944 287C862 183 1082 225 1163.02 7.31027M830 457C722 267 639.205 213 639.205 7.31027M830 457C846.367 480.164 826 491.69 882 533C984.511 608.621 800 909 734 837C668 765 495.038 673.73 426 733C374.906 776.865 483.911 927.809 322 889C188.497 857 168 521.325 0 521.325M830 457C830 457 170 199 155.839 7.27428' },
    //10
    { value: 'M823.424 478.366C741.756 529.286 629.657 569.883 533.475 585.857C324.269 620.602 508.371 369.214 428.872 158.703C403.806 92.3287 303.503 47.8286 303.503 0M823.424 478.366C919.394 418.528 973.34 344.433 910.046 279.287C816.322 182.82 1163.02 124.982 1163.02 0.310268M823.424 478.366C712.691 321.644 639.205 102.5 639.205 0.310268M823.424 478.366C839.791 501.53 855.004 518.893 868.205 528.631C970.716 604.252 803.351 871.989 719.668 820.894C635.986 769.799 497.91 712.573 428.872 771.843C377.778 815.708 461.25 900 336.477 900C211.705 900 150.264 514.325 0 514.325M823.424 478.366C823.424 478.366 155.839 138.778 155.839 0.274279' }
  ],
  easing: 'linear',
  duration: 5000,
  loop: true
});
