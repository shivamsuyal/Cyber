
function setSep(c){
    // var c = course.selectedOptions[0].innerText 
    if(c == 'SCHOOL OF DESIGN'){
        spec.innerHTML = `<option value="B.Des UI/UX">B.Des UI/UX</option>
        <option value="B.Des Transportation and Mobility Design">B.Des Transportation and Mobility Design</option>
        <option value="B.Des Industrial &amp; Product Design">B.Des Industrial &amp; Product Design</option>
        <option value="B.Des Fashion Design">B.Des Fashion Design</option>
        <option value="B.Des Communication &amp; Media Design – Graphic Design">B.Des Communication &amp; Media Design– Graphic Design</option>
        <option value="B.Des Communication and Media Design – Animation &amp; VFX">B.Des Communication and MediaDesign – Animation &amp; VFX</option>
        <option value="B.Des Communication &amp; Media Design – Interaction Design">B.Des Communication &amp; MediaDesign – Interaction Design</option>
        <option value="B.Des Communication &amp; Media Design - Gaming">B.Des Communication &amp; Media Design -Gaming</option>
        <option value="B.Des Interior &amp; Retail space Design">B.Des Interior &amp; Retail space Design</option>
        <option value="B.Des Bachelor of Fine Arts">B.Des Bachelor of Fine Arts</option>
        <option value="M.Des Transportation Design">M.Des Transportation Design</option>
        <option value="M.Des Interaction Design">M.Des Interaction Design</option>
        <option value="M.Des Industrial Design">M.Des Industrial Design</option>
        <option value="M.Des Fashion Design">M.Des Fashion Design</option>`
    }else if(c == 'SCHOOL OF HEALTH SCIENCES'){
        spec.innerHTML = `<option value="B.Sc. Food, Nutrition &amp; Dietetics">B.Sc. Food, Nutrition &amp; Dietetics</option>
        <option value="BBA Hospital &amp; Healthcare Management">BBA Hospital &amp; Healthcare Management</option>
        <option value="Bachelor of Pharmacy (B.Pharma)">Bachelor of Pharmacy (B.Pharma)</option>
        <option value="Diploma in Pharmacy (D.Pharma)">Diploma in Pharmacy (D.Pharma)</option>`
    }else if(c == 'SCHOOL OF LAW'){
        spec.innerHTML = `<option value="B.Tech LLB (Hons) Computer Science &amp; Engineering with specialization in Cyber Law / IPR Law ">B.Tech LLB (Hons) Computer Science &amp; Engineering with specialization in Cyber Law / IPR Law </option>
        <option value="B.A. LL.B (Hons.) with specialization in Energy Law/ Criminal Law/ Labor Law/ Constitution Law">B.A.LL.B (Hons.) with specialization in Energy Law/ Criminal Law/ Labor Law/ Constitution Law </option>
        <option value="BBA LL.B (Hons.) with Specialization in Corporate Law/ International Trade &amp; Investment Law / Banking, Finance &amp; Insurance laws ">BBA LL.B (Hons.) with Specialization in Corporate Law/ International Trade &amp; Investment Law / Banking,Finance &amp; Insurance laws </option>
        <option value="B.Com. LL.B (Hons.) with specialization in Taxation Law/Media &amp; Entertainment Law/ Legal Compliance &amp; Secretarial Practices">B.Com. LL.B (Hons.) with specialization in Taxation Law/Media &amp; Entertainment Law/ Legal Compliance &amp; Secretarial Practices </option>
        <option value="B.Sc., LL. B (Hons) with specialization in Intellectual Property Rights/Food, Health &amp; Environment Law/ Medical and Forensic Law">B.Sc., LL. B (Hons) with specialization in Intellectual Property Rights/Food, Health &amp; Environment Law/Medical and Forensic Law</option>`
    }else if(c == 'SCHOOL OF COMPUTER SCIENCE'){
        spec.innerHTML = `<option value="B.Tech CSE">B.Tech CSE</option>
        <option value="B.Tech CSE-CCVT">B.Tech CSE-CCVT</option>
        <option value="B.Tech CSE-OSOS">B.Tech CSE-OSOS</option>
        <option value="B.Tech CSE-Big Data">B.Tech CSE-Big Data</option>
        <option value="B.Tech CSE-AI&amp;ML">B.Tech CSE-AI&amp;ML</option>
        <option value="B.Tech CSE-DevOps">B.Tech CSE-DevOps</option>
        <option value="B.Tech CSE-Mobile Application Development">B.Tech CSE-Mobile Application Development</option>
        <option value="B.Tech CSE-CSF">B.Tech CSE-CSF</option>
        <option value="B.Tech CSE-E-Com.">B.Tech CSE-E-Com.</option>
        <option value="B.Tech CSE-BAO">B.Tech CSE-BAO</option>
        <option value="B.Tech CSE-MFT">B.Tech CSE-MFT</option>
        <option value="B.Tech CSE-OGI">B.Tech CSE-OGI</option>
        <option value="B.Tech CSE-IT Infrastructure">B.Tech CSE-IT Infrastructure</option>
        <option value="B.Tech CSE-BFSI">B.Tech CSE-BFSI</option>
        <option value="B.Tech CSE-GG">B.Tech CSE-GG</option>
        <option value="B.Tech CSE-IOT and Smart Cities">B.Tech CSE-IOT and Smart Cities</option>
        <option value="B.Tech CSE-HI">B.Tech CSE-HI</option>
        <option value="B.Tech CSE-Manufacturing Systems">B.Tech CSE-Manufacturing Systems</option>
        <option value="B.Tech CSE-Telecom Informatics">B.Tech CSE-Telecom Informatics</option>
        <option value="B.Tech CSE-Mobile Computing">B.Tech CSE-Mobile Computing</option>
        <option value="BCA-BFSI">BCA-BFSI</option>
        <option value="BCA-IOT">BCA-IOT</option>
        <option value="BCA with integrated training to earn industry certification">BCA with integrated training to earn industry certification</option>
        <option value="B.Tech CSE-Blockchain Technology">B.Tech CSE-Blockchain Technology</option>
        <option value="B.Tech CSE-Computational Sustainability">B.Tech CSE-Computational Sustainability</option>
        <option value="M.Tech. Computer Science &amp; Engineering">M.Tech. Computer Science &amp; Engineering</option>
        <option value="M. Tech By Research">M. Tech By Research</option>
        <option value="Masters of computer application">Masters of computer application</option>`
    }else if(c == 'SCHOOL OF ENGINEERING'){
        spec.innerHTML = `<option value="B.Tech. Aerospace Engineering">B.Tech. Aerospace Engineering</option>
        <option value="B.Tech. Geo Informatics Engineering">B.Tech. Geo Informatics Engineering</option>
        <option value="B.Tech. Applied Petroleum Engineering with Specialization in Upstream">B.Tech. Applied Petroleum Engineering with Specialization in Upstream</option>
        <option value="B.Tech. Geo Science Engineering">B.Tech. Geo Science Engineering</option>
        <option value="B.Tech. Applied Petroleum Engineering with Specialization in Gas Stream">B.Tech. Applied Petroleum Engineering with Specialization in Gas Stream</option>
        <option value="B.Tech. Mechanical Engineering">B.Tech. Mechanical Engineering</option>
        <option value="B.Tech. Automotive Design Engineering">B.Tech. Automotive Design Engineering</option>
        <option value="B.Tech. Mechatronics Engineering">B.Tech. Mechatronics Engineering</option>
        <option value="B.Tech. Aerospace Engineering with specialization In Avionics">B.Tech. Aerospace Engineering with specialization In Avionics</option>
        <option value="B.Tech. Electronics &amp; Communication Engineering">B.Tech. Electronics &amp; Communication Engineering</option>
        <option value="B.Tech. Civil Engineering">B.Tech. Civil Engineering</option>
        <option value="B.Tech. Chemical Engineering with Specialization in Refining &amp; Petrochemicals">B.Tech. Chemical Engineering with Specialization in Refining &amp; Petrochemicals</option>
        <option value="B.Tech. Fire &amp; Safety Engineering">B.Tech. Fire &amp; Safety Engineering</option>
        <option value="B.Tech. Electrical Engineering">B.Tech. Electrical Engineering</option>
        <option value="B.Tech. Metallurgical &amp; Materials Engineering">B.Tech. Metallurgical &amp; Materials Engineering</option>
        <option value="B.Sc. (H) Chemistry">B.Sc. (H) Chemistry</option>
        <option value="B.Sc. (H) Mathematics">B.Sc. (H) Mathematics</option>
        <option value="B.Sc. (H) Physics">B.Sc. (H) Physics</option>
        <option value="B.Tech. Electronics">B.Tech. Electronics</option>
        <option value="B.Tech. Instrumentation &amp; Control">B.Tech. Instrumentation &amp; Control</option>
        <option value="B.Tech. Mining">B.Tech. Mining</option>
        <option value="B.Tech. Production &amp; Industrial Engg.">B.Tech. Production &amp; Industrial Engg.</option>
        <option value="B.Tech. Mechanical Engg. Spl in MSNANO.">B.Tech. Mechanical Engg. Spl in MSNANO. </option>
        <option value="B.Tech. Electronics BCT">B.Tech. Electronics BCT</option>
        <option value="B.Tech. Electronics IOT based Instrument">B.Tech. Electronics IOT based Instrument </option>
        <option value="B.Tech Material Science spl. in Nano">B.Tech Material Science spl. in Nano</option>
        <option value="BTech. Mechanical Engg. Machine Design">BTech. Mechanical Engg. Machine Design</option>
        <option value="B.Tech. Mechanical Engineering-Thermal">B.Tech. Mechanical Engineering-Thermal</option>
        <option value="B. Tech Power System">B. Tech Power System</option>
        <option value="Bachelor of Planning">Bachelor of Planning</option>
        <option value="M.Tech. Renewable Energy Engineering">M.Tech. Renewable Energy Engineering</option>
        <option value="M.Tech. Chemical Engineering with Specialization in Process Design Engineering">M.Tech. Chemical Engineering with Specialization in Process Design Engineering</option>
        <option value="M.Tech. Petroleum Engineering">M.Tech. Petroleum Engineering</option>
        <option value="M.Tech. Pipeline Engineering">M.Tech. Pipeline Engineering</option>
        <option value="M.Tech. Rotating Equipment">M.Tech. Rotating Equipment</option>
        <option value="M.Tech. Automation &amp; Robotics Engineering">M.Tech. Automation &amp; Robotics Engineering </option>
        <option value="M.Tech. Structural Engineering">M.Tech. Structural Engineering</option>
        <option value="M.Tech. Computational Fluid Dynamics">M.Tech. Computational Fluid Dynamics</option>
        <option value="M.Tech. Health Safety &amp; Environmental Engineering with Specialization in Disaster Management"> M.Tech. Health Safety &amp; Environmental Engineering with Specialization in Disaster Management </option>
        <option value="M.Tech. Health Safety &amp; Environmental Engineering">M.Tech. Health Safety &amp; Environmental Engineering</option>
        <option value="M.Tech. Energy Systems">M.Tech. Energy Systems</option>
        <option value="M.Sc. Chemistry">M.Sc. Chemistry</option>
        <option value="M.Sc. Mathematics">M.Sc. Mathematics</option>
        <option value="M.Sc. Physics">M.Sc. Physics</option>
        <option value="M.Tech. Nuclear Science &amp; Technology">M.Tech. Nuclear Science &amp; Technology</option>
        <option value="M.Tech. Aerospace Engg. - UAV">M.Tech. Aerospace Engg. - UAV</option>
        <option value="M.Plan Urban &amp; Regional Planning">M.Plan Urban &amp; Regional Planning</option>`
    }else if(c == 'SCHOOL OF BUSINESS'){
        spec.innerHTML = `<option value="BBA">BBA</option>
        <option value="B.Com (Bachelor of Commerce)">B.Com (Bachelor of Commerce)</option>`
    }else{
        spec.innerHTML = '<option value="" disabled selected>Specialisations</option>'
    }
}
setSep()



window.onload = ()=>{
    form.reset()
}
