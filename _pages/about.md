---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
<style>
    /* The colorscheme is mostly taken from Catppuccin, with Latte for foreground and Frappé for background */
    .experience-card {
        display: flex;
        align-items: center;
        background: #f9f9f9;
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 0px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .experience-card:hover {

        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
    .experience-logo {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        border-radius: 8px;
        object-fit: contain;
    }
    .experience-info {
        font-family: "Segoe UI", sans-serif;
    }
    .experience-info strong {
        font-size: 1.1em;
    }
    .experience-info a {
        text-decoration: none;
        color: #179299;
    }
    .experience-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    .experience-card {
        box-sizing: border-box;
    }
    .publication-card {
        display: flex;
        align-items: center;
        padding: 3px;
        border: 1.5px solid #ddd;
        border-radius: 8px;
        background: #fff;
        box-sizing: border-box;
        margin-bottom: 20px; 
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .publication-card:hover {

        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .publication-card.featured {
        border-color: #209fb5;       /* 更浅的浅蓝色色边框 */
        background: #ebf5f9;         /* 非常浅的浅蓝色背景 */
        box-shadow: 0 4px 8px rgba(133, 193, 220, 0.2); /* 更柔和的初始阴影 */
        z-index: 10;
    }

    .publication-card.featured:hover {
        box-shadow: 0 8px 16px rgba(133, 193, 220, 0.6); 
    }

</style>
<html>
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
        body {
            background-color:	 #FFFFFF;
            font-family: 'Arial Rounded MT Bold', 'Verdana', sans-serif;
            font-size: 15px;
        }
        .main-heading {
            font-family: 'Permanent Marker', cursive;
            text-align: center;
            color: #209fb5;
        }
        div.markdown-body a,a {
            text-decoration: none !important;
            color: #209fb5;
            transition: all 0.3s ease; /* 平滑过渡效果 */
        }
        div.markdown-body b,b {
            text-decoration: none !important;
            color: #209fb5;
            transition: all 0.3s ease; /* 平滑过渡效果 */
        }
        div.markdown-body a:hover, a:hover {
            color: #7287fd;            /* 悬浮时变深一点的颜色 */
            text-decoration: underline; /* 加上悬浮时的下划线 */
        }
    </style>
</head>
<body>
<h1 class="main-heading">Hi there <img src="assets/imgs/Hi.gif" width="40px"> Welcome to my Homepage!</h1>
</body>
</html>

I am a research intern at <a href='https://seed.bytedance.com'>ByteDance Seed</a> <a href='https://seed.bytedance.com/direction/robotics'>Robotics</a>.

I received my bachelor's degree from the <a href='https://speit.sjtu.edu.cn/'>SJTU-Paris Elite Institute of Technology</a>, <a href='https://www.sjtu.edu.cn'>Shanghai Jiao Tong University</a>, majoring in French with a minor in Information Engineering.

During my undergraduate studies, I conducted research advised by <a href='https://www.mvig.org/'>Prof. Cewu Lu</a>, working on simulated and real-world grasp evaluation pipelines. I also worked remotely with <a href='https://www.pair.toronto.edu/'>PAIR Lab</a> under the supervision of <a href='https://animesh.garg.tech/'>Prof. Animesh Garg</a>, where I focused on simulation for robotic grasping and generalized object manipulation. Moreover, I completed my graduation thesis under supervision by <a href='https://robotics.sjtu.edu.cn/en/minglu/467.html'>Prof. Jun-Guo Lu</a>, working on reinforcement learning and behavior cloning for humanoid robot locomotion.

My research interests include embodied intelligence and robotic manipulation.

Acknowledgements: Thanks to [Yue Su](https://selen-suyue.github.io/) for his amazing website template.


News
---------------
- **[Oct 2025]** I have joined ByteDance Seed Robotics as a research intern.
- **[Aug 2025]** *[GBC](https://sjtu-mvasl-robotics.github.io/gbc/)* is available on arXiv.
- **[Aug 2025]** *[AnyPlace](https://any-place.github.io/)* has been accepted by CoRL 2025.
- **[Jun 2025]** I received my bachelor's degree and was named Outstanding Graduate of Shanghai Jiao Tong University.


Experience
--------------
<div class="experience-container">
  <div class="experience-card">
    <img src="assets/imgs/experiences/bytedance.png" alt="Seed logo" class="experience-logo">
    <div class="experience-info">
      <strong>ByteDance Seed</strong><br>
      Oct 2025 - Now, Beijing<br>
      Research Intern at <a href="https://seed.bytedance.com/"><em>Seed</em></a> <a href='https://seed.bytedance.com/direction/robotics'><em>Robotics</em></a>
    </div>
  </div>

  <div class="experience-card">
    <img src="assets/imgs/experiences/ABB_logo.svg" alt="HKU logo" class="experience-logo">
    <div class="experience-info">
      <strong>ABB</strong><br>
      Jun 2024 - Aug 2024, Shanghai<br>
      Intern for Robot 3D Vision at <a href="https://www.abb.com/global"><em>ABB</em></a> <a href="https://www.abb.com/global/en/company/innovation/corporate-research-centers/"><em>Corporate Research Cetner</em></a>
    </div>
  </div>

  <div class="experience-card">
    <img src="assets/imgs/experiences/SJTU.png" alt="SJTU logo" class="experience-logo">
    <div class="experience-info">
      <strong>Shanghai Jiao Tong University</strong><br>
      Aug 2021 - June 2025, Shanghai
      Undergraduate student and Outstanding Graduate of <a href="https://www.sjtu.edu.cn/"><em>SJTU</em></a>
    </div>
  </div>
</div>


Publications
--------------
<div class="publication-card featured">
  <div style="display: flex; align-items: center;">
    <div style="margin-right: 20px;">
      <img src="assets/imgs/gbc-preview.png" alt="GBC" width="1000" height="100" class="lightbox-image">
    </div>
    <div>
      <strong>GBC: Generalized Behavior-Cloning Framework for Whole-Body Humanoid Imitation</strong><br>
      <i style="font-size: 13px;">
        <a href="https://securitycfs.github.io/" target="_blank"><strong>Yifei Yao</strong></a>,
        <a href="https://charles-cyluo.github.io/" target="_blank"><strong>Chengyuan Luo</strong></a>,
        <a href="" target="_blank"><strong>Jiaheng Du</strong></a>,
        <a href="https://scholar.google.com/citations?hl=en&user=6iFVV7YAAAAJ" target="_blank"><strong>Wentao He</strong></a>,
        <a href="https://robotics.sjtu.edu.cn/en/minglu/467.html" target="_blank"><strong>Jun-Guo Lu</strong></a>
      </i>
      <br>
      GBC is a unified framework enabling generalized humanoid controllers across different robot morphologies by translating human motion to robot action.
      <br>
      <b><i style="color:#7287fd;">arXiv Preprint &nbsp;</i></b>
      <a href="https://arxiv.org/abs/2508.09960"><em>[arXiv]</em></a>
      <a href="https://github.com/sjtu-mvasl-robotics/GBC"><em>[code]</em></a>
      <a href="https://sjtu-mvasl-robotics.github.io/gbc/"><em>[website]</em></a>
    </div>
  </div>
</div>

<div class="publication-card featured">
  <div style="display: flex; align-items: center;">
    <div style="margin-right: 20px;">
      <img src="https://any-place.github.io/static/images/main.png" alt="AnyPlace" width="200" height="100" class="lightbox-image">
      <img src="https://any-place.github.io/static/images/arch.png" alt="AnyPlace" width="200" height="100" class="lightbox-image">
    </div>
    <div>
      <strong>AnyPlace: Learning Generalized Object Placement for Robot Manipulation</strong><br>
      <i style="font-size: 13px;">
        <a href="https://y556zhao.github.io/" target="_blank"><strong>Yuchi Zhao</strong></a>,
        <a href="https://miroslavbogdanovic.github.io/" target="_blank"><strong>Miroslav Bogdanovic</strong></a>,
        <a href="https://charles-cyluo.github.io/" target="_blank"><strong>Chengyuan Luo</strong></a>,
        <a href="https://steventohme.ca/" target="_blank"><strong>Steven Tohme</strong></a>,
        <a href="https://kouroshd.github.io/" target="_blank"><strong>Kourosh Darvish</strong></a>,
        <a href="https://www.matter.toronto.edu/basic-content-page/about-alan" target="_blank"><strong>Alán Aspuru-Guzik</strong></a>,
        <a href="https://www.cs.toronto.edu/~florian/" target="_blank"><strong>Florian Shkurti</strong></a>,
        <a href="https://animesh.garg.tech/" target="_blank"><strong>Animesh Garg</strong></a>
      </i>
      <br>
      AnyPlace is a synthetically trained two-stage method that uses a Vision-Language Model to predict feasible placement poses for real-world robotic tasks.
      <br>
      <b><i style="color:#7287fd;">CoRL 2025 &nbsp;</i></b>
      <a href="https://arxiv.org/abs/2502.04531"><em>[arXiv]</em></a>
      <a href="https://github.com/ac-rad/anyplace"><em>[code]</em></a>
      <a href="https://any-place.github.io/"><em>[website]</em></a>
    </div>
  </div>
</div>

<script src="assets/js/zoom-image.js"></script>


Awards
--------

**Scholarships**:
- <b>Outstanding Graduate</b>, Shanghai Jiao Tong University, 2025
- <b>Academic Scholarship (First Prize)</b> (1/46), SJTU-Paris Elite Institute of Technology, November 2024
- <b>Dean's Scohlarship</b> (1/73), SJTU-Paris Elite Institute of Technology, September 2023

**Awards**:
- <b>Meritorious Winner</b> in COMAP's Mathematical Contest in Modeling, May 2023
- <b>Gold Medal</b> (rank 15/641) in 46th International Collegiate Programming Contest (ICPC) Asia Regional Contest Nanjing Site, December 2021
- <b>Gold Medal</b> (rank 13/632) in 46th International Collegiate Programming Contest (ICPC) Asia Regional Contest Shanghai Site, November 2021
- <b>Gold Medal</b> (rank 18) in CCF National Olympiad in Informatics Winter Camp (NOI WC), August 2020


Projects
--------
This section is incomplete.
