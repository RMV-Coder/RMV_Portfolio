const Vl="air_bike",Wl="Bicycle crunch",$l="none",ql=[{point:"sacrum",support:"floor"}],Xl=[{time_s:0,stop:!1,label:"right elbow to left knee, right leg long",pose:{spine_flex:35,spine_twist:-28,neck_flex:14,protract:8,ankle_dorsi:-15,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,l_hip_flex:88,l_knee_flex:100,l_hip_abd:-4,r_hip_flex:10,r_knee_flex:4,r_hip_abd:3}},{time_s:.7,stop:!1,label:"passing through centre",pose:{spine_flex:35,spine_twist:0,neck_flex:14,protract:8,ankle_dorsi:-15,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,l_hip_flex:48,l_knee_flex:35,l_hip_abd:1,r_hip_flex:66,r_knee_flex:75,r_hip_abd:-2}},{time_s:1.4,stop:!1,label:"left elbow to right knee, left leg long",pose:{spine_flex:35,spine_twist:28,neck_flex:14,protract:8,ankle_dorsi:-15,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,r_hip_flex:88,r_knee_flex:100,r_hip_abd:-4,l_hip_flex:10,l_knee_flex:4,l_hip_abd:3}},{time_s:2.1,stop:!1,label:"passing through centre",pose:{spine_flex:35,spine_twist:0,neck_flex:14,protract:8,ankle_dorsi:-15,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,l_hip_flex:66,l_knee_flex:75,l_hip_abd:-2,r_hip_flex:48,r_knee_flex:35,r_hip_abd:1}},{time_s:2.8,stop:!1,label:"right elbow to left knee, right leg long",pose:{spine_flex:35,spine_twist:-28,neck_flex:14,protract:8,ankle_dorsi:-15,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,l_hip_flex:88,l_knee_flex:100,l_hip_abd:-4,r_hip_flex:10,r_knee_flex:4,r_hip_abd:3}}],Yl=[{from:0,to:1,type:"eccentric"},{from:1,to:2,type:"concentric"},{from:2,to:3,type:"eccentric"},{from:3,to:4,type:"concentric"}],Kl={abs:{role:"prime",concentric:.65,eccentric:.4,isometric:.5},obliques:{role:"prime",concentric:.7,eccentric:.45,isometric:.55},hip_flexors:{role:"synergist",concentric:.4,eccentric:.3,isometric:.35},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},neck:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},serratus:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},lower_back:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},rectus_femoris:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.25}},Zl=[{segment:0,text:"Low back pressed down, shoulders off the floor"},{segment:1,text:"Rotate the ribs, elbow to the opposite knee"},{segment:2,text:"Long leg low, slow pedal"},{segment:3,text:"Exhale as the elbow meets the knee, do not pull on the head"}],Jl="steady, exhale as each elbow meets the knee",Ql=45,jl="Sacrum is the only contact. Ribcage curled 35 deg, twisted 28 deg toward the knee that is in (hip 88 knee 100); the long leg is low (hip 10 knee 4, authored; the pelvis roll lifts it to about 25 to 30 deg off the floor). Centre passes are staggered: the leg going out is hip 48 knee 35, the one coming in hip 66 knee 75. Segments: eccentric away from each twist, concentric into it, so the chest empties as the elbow meets the knee. Checked in inspect-clip and strips from side, front and three-quarter, male and female.",ec={id:Vl,name:Wl,equipment:$l,contacts:ql,keys:Xl,segments:Yl,activation:Kl,cues:Zl,breathing:Jl,view_yaw:Ql,notes:jl},tc="bench_dip",ic="Bench dip",nc="bench",sc=[{point:"l_palm",support:"bench"},{point:"r_palm",support:"bench"},{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"}],rc=[{time_s:0,stop:!0,label:"top, elbows soft, shoulders down",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-5,neck_side:0,neck_twist:0,hip_flex:78,hip_abd:3,hip_rot:0,knee_flex:10,ankle_dorsi:-30,toe_ext:5,sh_flex:-29,sh_abd:22,sh_rot:-2,shrug:-6,protract:0,elbow_flex:19,forearm_pron:170,wrist_flex:-82,wrist_dev:20,grip:.25}},{time_s:.5,stop:!0,label:"top, blades set back and down before the descent",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-3,neck_side:0,neck_twist:0,hip_flex:78,hip_abd:3,hip_rot:0,knee_flex:10,ankle_dorsi:-30,toe_ext:5,sh_flex:-29,sh_abd:22,sh_rot:-2,shrug:-9,protract:-4,elbow_flex:19,forearm_pron:170,wrist_flex:-82,wrist_dev:20,grip:.25}},{time_s:1.4,stop:!1,label:"mid lowering, elbows track back, hips slide down by the bench",pose:{spine_flex:-1.5,spine_side:0,spine_twist:0,neck_flex:-5,neck_side:0,neck_twist:0,hip_flex:86,hip_abd:3,hip_rot:0,knee_flex:21,ankle_dorsi:-31,toe_ext:5,sh_flex:-42,sh_abd:25,sh_rot:-6,shrug:-7,protract:-8,elbow_flex:50,forearm_pron:170,wrist_flex:-76.5,wrist_dev:21,grip:.25}},{time_s:2.5,stop:!0,label:"bottom, elbows about 90 degrees, upper arms about 28 deg below level",pose:{spine_flex:-3,spine_side:0,spine_twist:0,neck_flex:-6,neck_side:0,neck_twist:0,hip_flex:100,hip_abd:3,hip_rot:0,knee_flex:32,ankle_dorsi:-32,toe_ext:5,sh_flex:-60,sh_abd:22,sh_rot:-19,shrug:-4,protract:-9,elbow_flex:90,forearm_pron:170,wrist_flex:-63,wrist_dev:17,grip:.25}},{time_s:2.8,stop:!0,label:"bottom pause",pose:{spine_flex:-3,spine_side:0,spine_twist:0,neck_flex:-6,neck_side:0,neck_twist:0,hip_flex:100,hip_abd:3,hip_rot:0,knee_flex:32,ankle_dorsi:-32,toe_ext:5,sh_flex:-60,sh_abd:22,sh_rot:-19,shrug:-4,protract:-9,elbow_flex:90,forearm_pron:170,wrist_flex:-63,wrist_dev:17,grip:.25}},{time_s:3.5,stop:!1,label:"mid press, chest and shoulders rise together",pose:{spine_flex:-1.5,spine_side:0,spine_twist:0,neck_flex:-5,neck_side:0,neck_twist:0,hip_flex:87.5,hip_abd:3,hip_rot:0,knee_flex:23,ankle_dorsi:-31,toe_ext:5,sh_flex:-44,sh_abd:24,sh_rot:-7,shrug:-6,protract:-7,elbow_flex:53,forearm_pron:170,wrist_flex:-75.5,wrist_dev:21,grip:.25}},{time_s:4.1,stop:!0,label:"top",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-5,neck_side:0,neck_twist:0,hip_flex:78,hip_abd:3,hip_rot:0,knee_flex:10,ankle_dorsi:-30,toe_ext:5,sh_flex:-29,sh_abd:22,sh_rot:-2,shrug:-6,protract:0,elbow_flex:19,forearm_pron:170,wrist_flex:-82,wrist_dev:20,grip:.25}}],oc=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],ac={triceps:{role:"prime",concentric:.85,eccentric:.65,isometric:.7},delts_front:{role:"synergist",concentric:.5,eccentric:.4,isometric:.4},chest:{role:"synergist",concentric:.45,eccentric:.45,isometric:.3},lats:{role:"stabilizer",concentric:.22,eccentric:.3,isometric:.25},traps:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},serratus:{role:"stabilizer",concentric:.28,eccentric:.25,isometric:.22},rhomboids:{role:"stabilizer",concentric:.22,eccentric:.28,isometric:.22},rotator_cuff:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.2},forearms:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.2},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},abs:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},lc=[{segment:0,text:"Shoulders down and away from your ears"},{segment:1,text:"Slide down close to the bench, elbows straight back, chest open, shoulders down"},{segment:2,text:"Pause with your elbows at about 90 degrees, no deeper, chest up"},{segment:3,text:"Press through your palms until your arms are almost straight"}],cc="inhale on the way down, exhale as you press up",hc=90,fc="Bench 0.42 m high behind the figure, hands on top, fingers forward, heels on the floor, legs nearly straight. Rep 4.1 s: 0.5 s set, 2.0 s lowering, 0.3 s bottom pause, 1.3 s press. Top elbow 19, sh_flex -29. Bottom elbow 90, sh_flex -60 (the sh_flex limit caps depth, so this is a partial-range dip). Known: at the bottom the glutes touch the bench face, and the solver turns forearm pronation and wrist deviation to keep the palms flat. Tuned arm angles to where the solver settled (sh_abd, sh_rot, forearm_pron 170, wrist_dev) so the palms sit flat with less correction.",dc={id:tc,name:ic,equipment:nc,contacts:sc,keys:rc,segments:oc,activation:ac,cues:lc,breathing:cc,view_yaw:hc,notes:fc},uc="bent_over_row",pc="Bent-over dumbbell row",_c="dumbbells",mc=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],gc=[{time_s:0,stop:!0,label:"bottom, arms hang",pose:{spine_flex:2,spine_side:0,spine_twist:0,neck_flex:-9,sh_flex:50,sh_abd:6,sh_rot:0,shrug:0,protract:6,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:.3,stop:!0,label:"bottom pause, set the shoulder blades",pose:{spine_flex:2,spine_side:0,spine_twist:0,neck_flex:-9,sh_flex:50,sh_abd:6,sh_rot:0,shrug:0,protract:6,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:.95,stop:!1,label:"mid pull, shoulder blade and elbow lead, hand arcs up and back",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-10.5,sh_flex:-4,sh_abd:10,sh_rot:-4,shrug:-2,protract:-8,elbow_flex:82,forearm_pron:88,wrist_flex:1,wrist_dev:0,grip:.92,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:35,ankle_dorsi:12,toe_ext:0}},{time_s:1.5,stop:!0,label:"top, elbow past the torso, blades squeezed",pose:{spine_flex:-2,spine_side:0,spine_twist:0,neck_flex:-12,sh_flex:-58,sh_abd:12,sh_rot:-8,shrug:-3,protract:-16,elbow_flex:108,forearm_pron:84,wrist_flex:2,wrist_dev:0,grip:.95,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:34,ankle_dorsi:12,toe_ext:0}},{time_s:1.9,stop:!0,label:"top pause, squeeze",pose:{spine_flex:-2,spine_side:0,spine_twist:0,neck_flex:-12,sh_flex:-58,sh_abd:12,sh_rot:-8,shrug:-3,protract:-16,elbow_flex:108,forearm_pron:84,wrist_flex:2,wrist_dev:0,grip:.95,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:34,ankle_dorsi:12,toe_ext:0}},{time_s:2.95,stop:!1,label:"mid lower, controlled, hand swings a little further forward, blades release last",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-10.5,sh_flex:2,sh_abd:10,sh_rot:-3,shrug:-2,protract:-6,elbow_flex:82,forearm_pron:88,wrist_flex:1,wrist_dev:0,grip:.92,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:35,ankle_dorsi:12,toe_ext:0}},{time_s:3.9,stop:!0,label:"bottom, arms hang",pose:{spine_flex:2,spine_side:0,spine_twist:0,neck_flex:-9,sh_flex:50,sh_abd:6,sh_rot:0,shrug:0,protract:6,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}}],xc=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],bc={lats:{role:"prime",concentric:.8,eccentric:.5,isometric:.6},rhomboids:{role:"prime",concentric:.7,eccentric:.45,isometric:.65},traps:{role:"prime",concentric:.65,eccentric:.4,isometric:.6},delts_rear:{role:"synergist",concentric:.5,eccentric:.35,isometric:.45},biceps:{role:"synergist",concentric:.5,eccentric:.3,isometric:.35},brachialis:{role:"synergist",concentric:.4,eccentric:.28,isometric:.3},brachioradialis:{role:"synergist",concentric:.35,eccentric:.25,isometric:.25},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.3},triceps:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},forearms:{role:"stabilizer",concentric:.35,eccentric:.33,isometric:.33},erector_spinae:{role:"stabilizer",concentric:.5,eccentric:.5,isometric:.55},glutes:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},hamstrings:{role:"stabilizer",concentric:.35,eccentric:.35,isometric:.35},abs:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},obliques:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2}},vc=[{segment:0,text:"Soft knees, hinge at the hips with a long neutral spine, chest proud, eyes on the floor ahead"},{segment:1,text:"Start by pulling the shoulder blades back, then drive the elbows back toward your hips"},{segment:2,text:"Elbows past the ribs, pinch the shoulder blades together"},{segment:3,text:"Lower for about two seconds and let the shoulder blades open at the bottom"}],wc="brace your trunk, exhale as you row up, inhale as you lower",Sc=90,yc="Both arms row together from a flat-foot hip hinge (hip_flex 71, knee 36, ankle_dorsi 12), arms hanging at the bottom, elbows driven back past the torso at the top with a hammer grip. Rep 3.9 s: 0.3 s bottom pause, 1.2 s pull, 0.4 s top squeeze, 2.0 s lowering. Changed after viewing renders: sh_abd reduced (top 20 to 12, pull via-point 14 to 10, lowering via-point 13 to 10) because the elbows flared away from the ribs in the front view; now they travel close to the trunk. Activation isometric values describe the top squeeze and overstate the bottom pause (schema has no per-segment override). Values are relative EMG-based estimates. Touch-up: at the top the elbow goes higher (sh_flex -58) with less bend (108), so the forearm hangs upright under it and the dumbbell stays level beside the lower ribs; with 125 of bend the forearm pointed forward and the dumbbell tipped nose-down.",Mc={id:uc,name:pc,equipment:_c,contacts:mc,keys:gc,segments:xc,activation:bc,cues:vc,breathing:wc,view_yaw:Sc,notes:yc},Ec="calf_raise",Tc="Standing calf raise",Ac="none",Rc=[{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"},{point:"l_toes",support:"floor"},{point:"r_toes",support:"floor"}],kc=[{time_s:0,stop:!0,label:"stand tall, heels down",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:1,sh_abd:6,sh_rot:-5,shrug:-1,protract:0,elbow_flex:8,forearm_pron:70,wrist_flex:2,wrist_dev:3,grip:.3}},{time_s:.4,stop:!1,label:"lean in from the ankles: weight over the balls of the feet before the heels lift",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:1,sh_abd:6,sh_rot:-5,shrug:-1,protract:0,elbow_flex:8,forearm_pron:70,wrist_flex:2,wrist_dev:3,grip:.3}},{time_s:.95,stop:!1,label:"heels leave the floor, toes bend",pose:{spine_flex:-.5,neck_flex:-1,hip_flex:.5,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-16,toe_ext:22,sh_flex:0,sh_abd:7,sh_rot:-5,shrug:-1,protract:0,elbow_flex:7,forearm_pron:71,wrist_flex:2,wrist_dev:3,grip:.35}},{time_s:1.4,stop:!1,label:"nearing the top, rise eases out",pose:{spine_flex:-.8,neck_flex:-1.6,hip_flex:2.5,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-34,toe_ext:40,sh_flex:-1.4,sh_abd:7.6,sh_rot:-5,shrug:-.5,protract:0,elbow_flex:6.3,forearm_pron:71.7,wrist_flex:2,wrist_dev:3,grip:.38}},{time_s:1.7,stop:!0,label:"top: as high as possible on the balls of the feet",pose:{spine_flex:-1,neck_flex:-2,hip_flex:3.4,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-42,toe_ext:48,sh_flex:-2,sh_abd:8,sh_rot:-5,shrug:0,protract:0,elbow_flex:6,forearm_pron:72,wrist_flex:2,wrist_dev:3,grip:.4}},{time_s:2.2,stop:!0,label:"pause at the top",pose:{spine_flex:-1,neck_flex:-2,hip_flex:3.4,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-42,toe_ext:48,sh_flex:-2,sh_abd:8,sh_rot:-5,shrug:0,protract:0,elbow_flex:6,forearm_pron:72,wrist_flex:2,wrist_dev:3,grip:.4}},{time_s:3.3,stop:!1,label:"controlled lowering, heels still high",pose:{spine_flex:-.5,neck_flex:-1,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-21,toe_ext:27,sh_flex:-1,sh_abd:7,sh_rot:-5,shrug:-1,protract:0,elbow_flex:7,forearm_pron:71,wrist_flex:2,wrist_dev:3,grip:.35}},{time_s:4,stop:!1,label:"heels touch down, weight still forward",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:1,sh_abd:6,sh_rot:-5,shrug:-1,protract:0,elbow_flex:8,forearm_pron:70,wrist_flex:2,wrist_dev:3,grip:.3}},{time_s:4.4,stop:!0,label:"heels back to the floor",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:1,sh_abd:6,sh_rot:-5,shrug:-1,protract:0,elbow_flex:8,forearm_pron:70,wrist_flex:2,wrist_dev:3,grip:.3}}],Cc=[{from:0,to:1,type:"rest"},{from:1,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:8,type:"eccentric"}],Pc={calves:{role:"prime",concentric:.85,eccentric:.7,isometric:.8},soleus:{role:"prime",concentric:.7,eccentric:.55,isometric:.7},quads:{role:"stabilizer",concentric:.18,eccentric:.18,isometric:.2},shins:{role:"stabilizer",concentric:.15,eccentric:.25,isometric:.2},glute_med:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.18},erector_spinae:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},abs:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},adductors:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.12}},Lc=[{segment:1,text:"Push the balls of your feet into the floor and rise straight up"},{segment:1,text:"Keep your knees straight, and push through the big toe"},{segment:1,text:"Keep your ankles from rolling out, weight over the big toe"},{segment:2,text:"Squeeze the calves at the very top, stand as tall as you can"},{segment:3,text:"Lower slowly, let the heels touch down softly"},{segment:3,text:"Lower all the way to the floor without bouncing"}],Dc="breathe out as you rise, in as you lower; keep breathing during the top pause",Ic=90,Nc="Straight-knee standing calf raise, 4.4 s rep: 0.4 s small forward sway (via-point), rise to 1.7 s, 0.5 s pause at the top, 2.2 s lowering to the floor. Heels lift with toe_ext up to 48 and ankle_dorsi -42 while the balls and toes stay planted; knees stay nearly straight, trunk upright, arms hang with small drift. Reviewed against side, front and three-quarter renders; no motion values were changed, only these notes were rewritten. Not modelled: foot arch, individual peroneals, asymmetry, external load. Touch-up: the lean before lift-off is now a real one (ankle_dorsi 8 at 0.4 s) and the same pose is passed on the way down (4.0 s), so the body moves over the forefoot before the heels leave the floor and back only after they land, instead of lurching as they do. Steadied 2026-11-12 after the owner saw the upper body wobble: the rep starts and ends already leaned in over the forefoot (no sway before the heels lift), and the hips take up the change in the legs' lean so the trunk stays within about 2 degrees of where it starts.",Uc={id:Ec,name:Tc,equipment:Ac,contacts:Rc,keys:kc,segments:Cc,activation:Pc,cues:Lc,breathing:Dc,view_yaw:Ic,notes:Nc},Fc="chin_up",Oc="Chin-up",zc="pullup_bar",Bc=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],Gc=[{time_s:0,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:4,sh_rot:14,shrug:-4,protract:0,elbow_flex:4,forearm_pron:2,wrist_flex:-6,hip_flex:0,knee_flex:8}},{time_s:.5,stop:!0,label:"hang pause, shoulders set",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:4,sh_rot:14,shrug:-4,protract:0,elbow_flex:4,forearm_pron:2,wrist_flex:-6,hip_flex:0,knee_flex:8}},{time_s:.8,stop:!1,label:"shoulders set, elbows barely bend",pose:{grip:1,wrist_dev:9,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-6,sh_flex:174,sh_abd:7,sh_rot:12,shrug:-9,protract:-3,elbow_flex:12,forearm_pron:3,wrist_flex:-4,hip_flex:0,knee_flex:10}},{time_s:1.05,stop:!1,label:"elbows drive forward and down",pose:{grip:1,wrist_dev:-2,toe_ext:-5,ankle_dorsi:-25,spine_flex:-4,neck_flex:-8,sh_flex:160,sh_abd:8,sh_rot:9,shrug:-9,protract:-6,elbow_flex:49,forearm_pron:5,wrist_flex:-13,hip_flex:-1,knee_flex:12}},{time_s:1.5,stop:!1,label:"mid pull, chest rises to the bar",pose:{grip:1,wrist_dev:2,toe_ext:-5,ankle_dorsi:-25,spine_flex:-7,neck_flex:-6,sh_flex:108,sh_abd:5,sh_rot:15,shrug:-8,protract:-11,elbow_flex:102,forearm_pron:18,wrist_flex:-7,hip_flex:-2,knee_flex:16}},{time_s:2,stop:!0,label:"top, chin over bar",pose:{grip:1,wrist_dev:4,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-8,sh_flex:25,sh_abd:5,sh_rot:3,shrug:-6,protract:-14,elbow_flex:150,forearm_pron:18,wrist_flex:-6,hip_flex:-3,knee_flex:22}},{time_s:2.5,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:4,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-8,sh_flex:25,sh_abd:5,sh_rot:3,shrug:-6,protract:-14,elbow_flex:150,forearm_pron:18,wrist_flex:-6,hip_flex:-3,knee_flex:22}},{time_s:3.5,stop:!1,label:"controlled lowering, shoulders stay down",pose:{grip:1,wrist_dev:0,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-6,sh_flex:128,sh_abd:4,sh_rot:10,shrug:-8,protract:-8,elbow_flex:81,forearm_pron:16,wrist_flex:-9,hip_flex:-1,knee_flex:16}},{time_s:4.5,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:4,sh_rot:14,shrug:-4,protract:0,elbow_flex:4,forearm_pron:2,wrist_flex:-6,hip_flex:0,knee_flex:8}}],Hc=[{from:0,to:1,type:"isometric"},{from:1,to:5,type:"concentric"},{from:5,to:6,type:"isometric"},{from:6,to:8,type:"eccentric"}],Vc={lats:{role:"prime",concentric:.8,eccentric:.5,isometric:.6},biceps:{role:"prime",concentric:.8,eccentric:.55,isometric:.6},brachialis:{role:"synergist",concentric:.6,eccentric:.35,isometric:.45},brachioradialis:{role:"synergist",concentric:.45,eccentric:.3,isometric:.4},forearms:{role:"stabilizer",concentric:.6,eccentric:.6,isometric:.6},traps:{role:"synergist",concentric:.6,eccentric:.4,isometric:.4},upper_back:{role:"synergist",concentric:.55,eccentric:.3,isometric:.3},rhomboids:{role:"synergist",concentric:.4,eccentric:.25,isometric:.25},rotator_cuff:{role:"stabilizer",concentric:.35,eccentric:.3,isometric:.3},delts_rear:{role:"synergist",concentric:.35,eccentric:.2,isometric:.2},chest:{role:"stabilizer",concentric:.3,eccentric:.2,isometric:.15},serratus:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.25},triceps:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.15},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},hip_flexors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},glutes:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.2},hamstrings:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2}},Wc=[{segment:0,text:"Hang with arms straight, palms facing you, shoulders down"},{segment:1,text:"Drive your elbows forward and down, chest up to the bar"},{segment:2,text:"Chin over the bar, no kicking or swinging"},{segment:3,text:"Lower slowly until the arms are straight again"}],$c="inhale in the hang, exhale on the way up, inhale on the way down",qc=25,Xc="Supinated grip about shoulder width pinned to the bar: forearm_pron 2 to 18, small sh_abd (4 to 8) so the hands sit closer than the pull-up and the elbows travel forward and down in front of the ribs. Poses were fitted to the solver's own grip posture so inspect-clip adjustments stay at about 7 deg max; the hang needs slightly more than full supination (solver adds about -5 pron). Checked in back strip, side, front and a female three-quarter/hang render.",Yc={id:Fc,name:Oc,equipment:zc,contacts:Bc,keys:Gc,segments:Hc,activation:Vc,cues:Wc,breathing:$c,view_yaw:qc,notes:Xc},Kc="close_grip_chin_up",Zc="Close-grip chin-up",Jc="pullup_bar",Qc=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],jc=[{time_s:0,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:-4,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:-3,sh_rot:14,shrug:-4,protract:0,elbow_flex:4,forearm_pron:2,wrist_flex:-6,hip_flex:0,knee_flex:8}},{time_s:.5,stop:!0,label:"hang pause, shoulders set",pose:{grip:1,wrist_dev:-4,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:-3,sh_rot:14,shrug:-4,protract:0,elbow_flex:4,forearm_pron:2,wrist_flex:-6,hip_flex:0,knee_flex:8}},{time_s:.8,stop:!1,label:"shoulders set, elbows barely bend",pose:{grip:1,wrist_dev:0,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-6,sh_flex:174,sh_abd:0,sh_rot:12,shrug:-9,protract:-3,elbow_flex:12,forearm_pron:3,wrist_flex:-4,hip_flex:0,knee_flex:10}},{time_s:1.05,stop:!1,label:"elbows drive forward and down",pose:{grip:1,wrist_dev:-8,toe_ext:-5,ankle_dorsi:-25,spine_flex:-4,neck_flex:-8,sh_flex:160,sh_abd:1,sh_rot:9,shrug:-9,protract:-6,elbow_flex:49,forearm_pron:5,wrist_flex:-13,hip_flex:-1,knee_flex:12}},{time_s:1.5,stop:!1,label:"mid pull, chest rises to the bar",pose:{grip:1,wrist_dev:-4,toe_ext:-5,ankle_dorsi:-25,spine_flex:-7,neck_flex:-6,sh_flex:108,sh_abd:-3,sh_rot:15,shrug:-8,protract:-11,elbow_flex:102,forearm_pron:33,wrist_flex:-7,hip_flex:-2,knee_flex:16}},{time_s:2,stop:!0,label:"top, chin over bar",pose:{grip:1,wrist_dev:-2,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-14,sh_flex:12,sh_abd:-7,sh_rot:18,shrug:-6,protract:-14,elbow_flex:150,forearm_pron:33,wrist_flex:-6,hip_flex:-3,knee_flex:22}},{time_s:2.5,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:-2,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-14,sh_flex:12,sh_abd:-7,sh_rot:18,shrug:-6,protract:-14,elbow_flex:150,forearm_pron:33,wrist_flex:-6,hip_flex:-3,knee_flex:22}},{time_s:3.5,stop:!1,label:"controlled lowering, shoulders stay down",pose:{grip:1,wrist_dev:-6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-6,sh_flex:128,sh_abd:-6,sh_rot:10,shrug:-8,protract:-8,elbow_flex:81,forearm_pron:23,wrist_flex:-9,hip_flex:-1,knee_flex:16}},{time_s:4.5,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:-4,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:-3,sh_rot:14,shrug:-4,protract:0,elbow_flex:4,forearm_pron:2,wrist_flex:-6,hip_flex:0,knee_flex:8}}],eh=[{from:0,to:1,type:"isometric"},{from:1,to:5,type:"concentric"},{from:5,to:6,type:"isometric"},{from:6,to:8,type:"eccentric"}],th={lats:{role:"prime",concentric:.8,eccentric:.5,isometric:.6},biceps:{role:"prime",concentric:.8,eccentric:.55,isometric:.6},brachialis:{role:"synergist",concentric:.6,eccentric:.35,isometric:.45},brachioradialis:{role:"synergist",concentric:.45,eccentric:.3,isometric:.4},forearms:{role:"stabilizer",concentric:.6,eccentric:.6,isometric:.6},traps:{role:"synergist",concentric:.6,eccentric:.4,isometric:.4},upper_back:{role:"synergist",concentric:.55,eccentric:.3,isometric:.3},rhomboids:{role:"synergist",concentric:.4,eccentric:.25,isometric:.25},rotator_cuff:{role:"stabilizer",concentric:.35,eccentric:.3,isometric:.3},delts_rear:{role:"synergist",concentric:.35,eccentric:.2,isometric:.2},chest:{role:"stabilizer",concentric:.3,eccentric:.2,isometric:.15},serratus:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.25},triceps:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.15},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},hip_flexors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},glutes:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.2},hamstrings:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2}},ih=[{segment:0,text:"Hang with arms straight, hands a hand-width apart, palms facing you"},{segment:1,text:"Drive your elbows down in front of your ribs, chest up to the bar"},{segment:2,text:"Chin over the bar, no kicking or swinging"},{segment:3,text:"Lower slowly until the arms are straight again"}],nh="inhale in the hang, exhale on the way up, inhale on the way down",sh=35,rh="Supinated grip with hands about 20 cm apart (centres), narrower than the chin-up: sh_abd about -3 in the hang and -7 at the top so the hands converge on the bar without overlapping, elbows track forward of the ribs. Derived from chin_up, wrist_dev and forearm_pron refitted to the solver's grip posture; inspect-clip max adjustment 8 deg. Top pull raised after review (elbow 150, sh_flex 12, neck -14, pelvis at the top 1.72 m vs 1.68) so the chin clears the bar; hand spacing checked at the top as well as the hang, hands stay separate. Checked in three-quarter strip, side and front at the top, female top, hang and mid-pull renders. Not run: balance and floor checks (hanging, no floor contact).",oh={id:Kc,name:Zc,equipment:Jc,contacts:Qc,keys:jc,segments:eh,activation:th,cues:ih,breathing:nh,view_yaw:sh,notes:rh},ah="crunch",lh="Crunch",ch="none",hh=[{point:"sacrum",support:"floor"},{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],fh=[{time_s:0,stop:!0,label:"rest on floor",pose:{spine_flex:0,neck_flex:4,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:4}},{time_s:.4,stop:!0,label:"settle, ribs down",pose:{spine_flex:0,neck_flex:4,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:4}},{time_s:1,stop:!1,label:"head and upper ribs curl first",pose:{spine_flex:14,neck_flex:12,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:7}},{time_s:1.7,stop:!0,label:"top, shoulder blades off floor",pose:{spine_flex:24,neck_flex:18,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:8}},{time_s:2.2,stop:!0,label:"squeeze",pose:{spine_flex:24,neck_flex:18,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:8}},{time_s:3.2,stop:!1,label:"controlled lowering, ribs unroll, head tucks last",pose:{spine_flex:9,neck_flex:13,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:5}},{time_s:4.2,stop:!0,label:"back on floor",pose:{spine_flex:0,neck_flex:4,hip_flex:59,hip_abd:4,hip_rot:-4,knee_flex:127,ankle_dorsi:-22,toe_ext:0,sh_flex:0,sh_abd:140,sh_rot:-80,elbow_flex:145,forearm_pron:60,wrist_flex:5,wrist_dev:5,grip:.15,protract:4}}],dh=[{from:0,to:1,type:"rest"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],uh={abs:{role:"prime",concentric:.58,eccentric:.38,isometric:.5},obliques:{role:"synergist",concentric:.35,eccentric:.25,isometric:.3},hip_flexors:{role:"stabilizer",concentric:.18,eccentric:.12,isometric:.15},neck:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.22},serratus:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.15},shoulders:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},upper_back:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},ph=[{segment:0,text:"Ribs down, lower back flat, then brace"},{segment:1,text:"Lead with the chest, curl ribs toward hips"},{segment:1,text:"Elbows wide, hands light, do not pull the head"},{segment:1,text:"Keep a fist of space between chin and chest, eyes on the ceiling"},{segment:2,text:"Shoulder blades clear the floor, lower back stays down"},{segment:3,text:"Lower slowly, keep tension in the abs"}],_h="exhale as you curl up, inhale as you lower",mh=90,gh="Hook-lying curl-up: heels and sacrum fixed on the floor, hips 59 and knees 127, hands behind the head with wide elbows (arm fields constant, they ride with the ribcage). Rib cage curls 24 deg over the pelvis, 0.4 s pause, 1.3 s lift, 0.5 s hold, 2.0 s lower. Changed: neck_flex now rises 4 to 18 at the top (was 9) with 12 at the 1.0 s via-point and 13 on the way down, so the chin tucks toward the chest instead of the head tipping back; every other value is unchanged.",xh={id:ah,name:lh,equipment:ch,contacts:hh,keys:fh,segments:dh,activation:uh,cues:ph,breathing:_h,view_yaw:mh,notes:gh},bh="dead_bug",vh="Dead bug",wh="none",Sh=[{point:"sacrum",support:"floor"},{point:"upper_back",support:"floor"},{point:"head_back",support:"floor"}],yh=[{time_s:0,stop:!0,label:"tabletop, back flat",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0}},{time_s:.4,stop:!0,label:"brace, ribs down",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0}},{time_s:1.1,stop:!1,label:"right arm and left leg start to lower",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,r_sh_flex:118,l_hip_flex:57.199999999999996,l_knee_flex:57.199999999999996,l_ankle_dorsi:-2}},{time_s:1.9,stop:!0,label:"right arm overhead, left leg long above the floor",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:4,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,r_sh_flex:160,r_sh_abd:8,l_hip_flex:8,l_knee_flex:8,l_ankle_dorsi:-5}},{time_s:2.2,stop:!0,label:"hold, low back stays flat",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:4,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,r_sh_flex:160,r_sh_abd:8,l_hip_flex:8,l_knee_flex:8,l_ankle_dorsi:-5}},{time_s:3,stop:!1,label:"coming back, together",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,r_sh_flex:125,l_hip_flex:49,l_knee_flex:49,l_ankle_dorsi:-2.5}},{time_s:3.7,stop:!0,label:"tabletop again",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0}},{time_s:4,stop:!0,label:"tabletop again",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0}},{time_s:4.7,stop:!1,label:"left arm and right leg start to lower",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,l_sh_flex:118,r_hip_flex:57.199999999999996,r_knee_flex:57.199999999999996,r_ankle_dorsi:-2}},{time_s:5.5,stop:!0,label:"left arm overhead, right leg long above the floor",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:4,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,l_sh_flex:160,l_sh_abd:8,r_hip_flex:8,r_knee_flex:8,r_ankle_dorsi:-5}},{time_s:5.8,stop:!0,label:"hold, low back stays flat",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:4,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,l_sh_flex:160,l_sh_abd:8,r_hip_flex:8,r_knee_flex:8,r_ankle_dorsi:-5}},{time_s:6.6,stop:!1,label:"coming back, together",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0,l_sh_flex:125,r_hip_flex:49,r_knee_flex:49,r_ankle_dorsi:-2.5}},{time_s:7.3,stop:!0,label:"tabletop, back flat",pose:{spine_flex:0,neck_flex:-17,hip_abd:3,hip_rot:-4,toe_ext:0,wrist_flex:0,wrist_dev:0,grip:.1,protract:6,sh_flex:90,sh_abd:5,sh_rot:0,elbow_flex:3,forearm_pron:90,hip_flex:90,knee_flex:90,ankle_dorsi:0}}],Mh=[{from:0,to:1,type:"rest"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"},{from:6,to:7,type:"rest"},{from:7,to:9,type:"eccentric"},{from:9,to:10,type:"isometric"},{from:10,to:12,type:"concentric"}],Eh={abs:{role:"prime",concentric:.5,eccentric:.55,isometric:.6},obliques:{role:"synergist",concentric:.35,eccentric:.4,isometric:.4},hip_flexors:{role:"synergist",concentric:.35,eccentric:.3,isometric:.3},quads:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.2},lower_back:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.12},serratus:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},lats:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.15},shoulders:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15}},Th=[{segment:0,text:"Arms to the ceiling, knees over hips, low back flat"},{segment:1,text:"Opposite arm and leg lower together, slowly"},{segment:2,text:"Ribs down, do not let the back arch"},{segment:3,text:"Bring them back, same pace"},{segment:5,text:"Other side, keep the belly braced"}],Ah="exhale as the arm and leg lower, inhale as they return",Rh=90,kh="Tabletop on the back: sacrum, upper back and head on the floor, hips 90 and knees 90, arms straight to the ceiling (sh_flex 90 in the ribcage frame). Right arm to 160 with the left leg to hip 8, knee 8, then back; then the mirror. Neck is -17 so the head rests on the floor without the solver bending it. Solver adjust 3.2 deg max. Checked side, front and three-quarter, male and female. Arm stops at 160 so the hand clears the floor. Rep is 7.3 s with both sides.",Ch={id:bh,name:vh,equipment:wh,contacts:Sh,keys:yh,segments:Mh,activation:Eh,cues:Th,breathing:Ah,view_yaw:Rh,notes:kh},Ph="decline_pushup",Lh="Decline push-up",Dh="bench",Ih=[{point:"l_palm",support:"floor"},{point:"r_palm",support:"floor"},{point:"l_toes",support:"bench"},{point:"r_toes",support:"bench"}],Nh=[{time_s:0,stop:!0,label:"top decline plank, shoulder blades spread",pose:{neck_flex:-12,sh_flex:80,sh_abd:25,sh_rot:-8,protract:18,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:26,toe_ext:63}},{time_s:.3,stop:!0,label:"top hold",pose:{neck_flex:-12,sh_flex:80,sh_abd:25,sh_rot:-8,protract:18,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:26,toe_ext:63}},{time_s:.9,stop:!1,label:"lowering begins, head drops a touch, elbows still close",pose:{neck_flex:-14,spine_flex:-1,sh_flex:59,sh_abd:21,sh_rot:-17,protract:15,elbow_flex:49,forearm_pron:170,wrist_flex:-61,wrist_dev:17,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:28,toe_ext:65.5}},{time_s:1.35,stop:!1,label:"lowering, elbows bending first at about 12 degrees, then opening toward 35",pose:{neck_flex:-16,sh_flex:42,sh_abd:24,sh_rot:-22,protract:8,elbow_flex:87,forearm_pron:160,wrist_flex:-44,wrist_dev:25,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:30,toe_ext:71}},{time_s:1.85,stop:!1,label:"lowering, slowing near the floor, elbows opening",pose:{neck_flex:-14,sh_flex:21,sh_abd:40,sh_rot:-26,protract:-2,elbow_flex:110,forearm_pron:143,wrist_flex:-44,wrist_dev:39,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:30,toe_ext:78,hip_rot:-5}},{time_s:2.3,stop:!0,label:"bottom, chest a fist above the floor",pose:{neck_flex:-14,sh_flex:15,sh_abd:43,sh_rot:-28,protract:-8,elbow_flex:112,forearm_pron:139,wrist_flex:-47,wrist_dev:40,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:30,toe_ext:80,hip_rot:-5}},{time_s:2.9,stop:!1,label:"pressing, hips lead a hair, elbows closer to the ribs",pose:{neck_flex:-16,spine_flex:2,sh_flex:43,sh_abd:26,sh_rot:-23,protract:4,elbow_flex:90,forearm_pron:155,wrist_flex:-41,wrist_dev:28,grip:0,hip_flex:2,hip_abd:3,knee_flex:0,ankle_dorsi:29,toe_ext:73}},{time_s:3.25,stop:!1,label:"pressing, shoulder blades starting to spread",pose:{neck_flex:-14,sh_flex:58,sh_abd:22,sh_rot:-17,protract:12,elbow_flex:59,forearm_pron:166,wrist_flex:-56,wrist_dev:19,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:29,toe_ext:66.5}},{time_s:3.6,stop:!0,label:"top decline plank, shoulder blades spread",pose:{neck_flex:-12,sh_flex:80,sh_abd:25,sh_rot:-8,protract:18,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:26,toe_ext:63}}],Uh=[{from:0,to:1,type:"isometric"},{from:1,to:5,type:"eccentric"},{from:5,to:8,type:"concentric"}],Fh={chest:{role:"prime",concentric:.7,eccentric:.55,isometric:.3},triceps:{role:"prime",concentric:.65,eccentric:.45,isometric:.3},delts_front:{role:"prime",concentric:.65,eccentric:.5,isometric:.25},serratus:{role:"synergist",concentric:.55,eccentric:.45,isometric:.4},abs:{role:"stabilizer",concentric:.35,eccentric:.35,isometric:.35},obliques:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},rotator_cuff:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.2},glutes:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},upper_back:{role:"stabilizer",concentric:.2,eccentric:.3,isometric:.2},lower_back:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},forearms:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},lats:{role:"stabilizer",concentric:.15,eccentric:.2,isometric:.15},calves:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.25},hip_flexors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},biceps:{role:"stabilizer",concentric:.1,eccentric:.15,isometric:.1}},Oh=[{segment:0,text:"Toes on the bench, hands a little wider than your shoulders; squeeze glutes and brace abs, one straight line"},{segment:1,text:"Elbows about 45 degrees from your ribs; lower until your face is just above the floor"},{segment:1,text:"Keep the hips in line, no sagging or piking"},{segment:2,text:"Push the floor away and keep your hips and chest rising together"},{segment:2,text:"Finish with your shoulder blades spread wide"}],zh="inhale on the way down, exhale on the way up",Bh=90,Gh="Decline push-up from the pushup file: toes on the 0.42 m bench, palms on the floor, 0.3 s top hold, 2.0 s lowering, 1.3 s press. With a bench this low the body is near level at the top and tilts head-down by the bottom (shoulders drop to about 0.2 m while the toes stay at 0.42 m); more shoulder flexion than the floor push-up, so the front delts work harder. Joint angles were matched to what the solver settled on, so adjustments stay small. Toes held on the bench by the solver without trouble.",Hh={id:Ph,name:Lh,equipment:Dh,contacts:Ih,keys:Nh,segments:Uh,activation:Fh,cues:Oh,breathing:zh,view_yaw:Bh,notes:Gh},Vh="dumbbell_calf_raise",Wh="Dumbbell standing calf raise",$h="dumbbells",qh=[{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"},{point:"l_toes",support:"floor"},{point:"r_toes",support:"floor"}],Xh=[{time_s:0,stop:!0,label:"stand tall, heels down",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:.5,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:.4,stop:!1,label:"lean in from the ankles: weight over the balls of the feet before the heels lift",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:.5,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:.95,stop:!1,label:"heels leave the floor, toes bend",pose:{spine_flex:-.5,neck_flex:-1,hip_flex:.5,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-16,toe_ext:22,sh_flex:0,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:1.4,stop:!1,label:"nearing the top, rise eases out",pose:{spine_flex:-.8,neck_flex:-1.6,hip_flex:2.5,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-34,toe_ext:40,sh_flex:-.7,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:1.7,stop:!0,label:"top: as high as possible on the balls of the feet",pose:{spine_flex:-1,neck_flex:-2,hip_flex:3.4,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-42,toe_ext:48,sh_flex:-1,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:2.2,stop:!0,label:"pause at the top",pose:{spine_flex:-1,neck_flex:-2,hip_flex:3.4,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-42,toe_ext:48,sh_flex:-1,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:3.3,stop:!1,label:"controlled lowering, heels still high",pose:{spine_flex:-.5,neck_flex:-1,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:6,ankle_dorsi:-21,toe_ext:27,sh_flex:-.5,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:4,stop:!1,label:"heels touch down, weight still forward",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:.5,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}},{time_s:4.4,stop:!0,label:"heels back to the floor",pose:{spine_flex:0,neck_flex:0,hip_flex:.3,hip_abd:1,hip_rot:-5,knee_flex:3,ankle_dorsi:10,toe_ext:0,sh_flex:.5,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85}}],Yh=[{from:0,to:1,type:"rest"},{from:1,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:8,type:"eccentric"}],Kh={calves:{role:"prime",concentric:.85,eccentric:.7,isometric:.8},soleus:{role:"prime",concentric:.7,eccentric:.55,isometric:.7},quads:{role:"stabilizer",concentric:.18,eccentric:.18,isometric:.2},shins:{role:"stabilizer",concentric:.15,eccentric:.25,isometric:.2},glute_med:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.18},erector_spinae:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},abs:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},adductors:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.12},forearms:{role:"stabilizer",concentric:.4,eccentric:.4,isometric:.45},traps:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.22}},Zh=[{segment:1,text:"Push the balls of your feet into the floor and rise straight up"},{segment:1,text:"Keep your knees straight, and push through the big toe"},{segment:1,text:"Keep your ankles from rolling out, weight over the big toe"},{segment:2,text:"Squeeze the calves at the very top, stand as tall as you can, dumbbells still"},{segment:3,text:"Lower slowly, let the heels touch down softly"},{segment:3,text:"Lower all the way to the floor without bouncing"},{segment:1,text:"Let the dumbbells hang at your sides, arms straight and quiet"}],Jh="breathe out as you rise, in as you lower; keep breathing during the top pause",Qh=90,jh="Dumbbell standing calf raise, 4.4 s rep, built on calf_raise.json with its steady trunk (starts and ends leaned in over the forefoot, hips absorb the leg lean). Arms hang straight (elbow 3, neutral grip, forearm_pron 90) with a dumbbell in each hand; arm drift halved from the bodyweight file so the weights hang still. Checked with inspect-clip, inspect-hold, inspect-balance and pictures.",ef={id:Vh,name:Wh,equipment:$h,contacts:qh,keys:Xh,segments:Yh,activation:Kh,cues:Zh,breathing:Jh,view_yaw:Qh,notes:jh},tf="dumbbell_curl",nf="Dumbbell biceps curl",sf="dumbbells",rf=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],of=[{time_s:0,stop:!0,label:"bottom",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:25,wrist_flex:0,wrist_dev:2,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.4,stop:!0,label:"bottom pause",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:25,wrist_flex:0,wrist_dev:2,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.9,stop:!1,label:"lift, supination leads",pose:{spine_flex:-.5,neck_flex:2,sh_flex:1,sh_abd:6,sh_rot:-1,shrug:-3,protract:-3,elbow_flex:62,forearm_pron:8,wrist_flex:3,wrist_dev:2,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:1.3,stop:!1,label:"lift, sticking region",pose:{spine_flex:-1,neck_flex:1,sh_flex:4,sh_abd:4,sh_rot:-3,shrug:-3,protract:-2.5,elbow_flex:120,forearm_pron:2,wrist_flex:6,wrist_dev:2,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:1.6,stop:!0,label:"top",pose:{spine_flex:-1.5,neck_flex:0,sh_flex:6,sh_abd:3,sh_rot:-5,shrug:-3,protract:-2,elbow_flex:140,forearm_pron:0,wrist_flex:8,wrist_dev:2,grip:.9,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:1.9,stop:!0,label:"top squeeze",pose:{spine_flex:-1.5,neck_flex:0,sh_flex:6,sh_abd:3,sh_rot:-5,shrug:-3,protract:-2,elbow_flex:140,forearm_pron:0,wrist_flex:8,wrist_dev:2,grip:.9,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:2.35,stop:!1,label:"lower, first third",pose:{spine_flex:-1.3,neck_flex:1,sh_flex:5,sh_abd:4,sh_rot:-4,shrug:-3,protract:-2.5,elbow_flex:120,forearm_pron:3,wrist_flex:7,wrist_dev:2,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:2.85,stop:!1,label:"lower, controlled mid",pose:{spine_flex:-.8,neck_flex:2,sh_flex:3,sh_abd:5,sh_rot:-2,shrug:-3,protract:-3,elbow_flex:78,forearm_pron:9,wrist_flex:4,wrist_dev:2,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:3.35,stop:!1,label:"lower, slowing into the bottom",pose:{spine_flex:-.3,neck_flex:2.5,sh_flex:0,sh_abd:7,sh_rot:-1,shrug:-3,protract:-3,elbow_flex:30,forearm_pron:18,wrist_flex:2,wrist_dev:2,grip:.88,hip_flex:0,knee_flex:3.5,ankle_dorsi:3.5,toe_ext:0}},{time_s:3.9,stop:!0,label:"bottom",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:25,wrist_flex:0,wrist_dev:2,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}}],af=[{from:0,to:1,type:"isometric"},{from:1,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:9,type:"eccentric"}],lf={biceps:{role:"prime",concentric:.8,eccentric:.55,isometric:.25},brachialis:{role:"prime",concentric:.65,eccentric:.48,isometric:.2},brachioradialis:{role:"synergist",concentric:.4,eccentric:.3,isometric:.12},forearms:{role:"stabilizer",concentric:.3,eccentric:.28,isometric:.28},delts_front:{role:"synergist",concentric:.25,eccentric:.2,isometric:.15},traps:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.1},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.15},abs:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.12},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},quads:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},cf=[{segment:1,text:"Elbows stay pinned at your ribs; only the forearms move"},{segment:1,text:"Turn your palms up as the weight rises"},{segment:2,text:"Squeeze the biceps at the top, no swinging from the hips"},{segment:3,text:"Lower for about two seconds, stopping just short of locking the elbows"}],hf="exhale as you curl up, inhale as you lower",ff=35,df="Rep 3.9 s: 0.4 s bottom pause, 1.2 s lift, 0.3 s top pause, 2.0 s lower, so lowering is slower than lifting. Standing, feet flat (knee_flex ~ ankle_dorsi), trunk fixed within 1.5 deg, only the elbow does the work (3 to 140 deg) with the forearm turning from 25 to 0 pronation (palm up) on the way up and lagging on the way down. Reviewed against renders: the only change is a smaller sh_abd at the top (8 at the bottom down to 3, was 9 to 5) so the elbows and forearms stay nearer the ribs instead of flaring outward; bottom pose and first/last key still identical. Activation and cues unchanged.",uf={id:tf,name:nf,equipment:sf,contacts:rf,keys:of,segments:af,activation:lf,cues:cf,breathing:hf,view_yaw:ff,notes:df},pf="dumbbell_deadlift",_f="Dumbbell deadlift",mf="dumbbells",gf=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],xf=[{time_s:0,stop:!0,label:"stand tall, dumbbells at sides",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:5,ankle_dorsi:3,sh_flex:6,sh_abd:6,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:.3,stop:!0,label:"set: brace, lats on, chest proud",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:5,ankle_dorsi:3,sh_flex:6,sh_abd:6,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:.9,stop:!1,label:"hips back, knees start to bend",pose:{spine_flex:2,neck_flex:-6,hip_flex:44,hip_abd:2,hip_rot:-6,knee_flex:30,ankle_dorsi:10,sh_flex:24,sh_abd:7,sh_rot:-5,shrug:-3,protract:-7,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:1.5,stop:!1,label:"dumbbells pass the knees",pose:{spine_flex:3,neck_flex:-12,hip_flex:84,hip_abd:6,hip_rot:-6,knee_flex:50,ankle_dorsi:16,sh_flex:42,sh_abd:8,sh_rot:-5,shrug:-3,protract:-8,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:2.3,stop:!0,label:"bottom, dumbbells at mid shin",pose:{spine_flex:3,neck_flex:-22,hip_flex:122,hip_abd:8,hip_rot:-6,knee_flex:68,ankle_dorsi:21,sh_flex:64,sh_abd:9,sh_rot:0,shrug:-3,protract:-8,elbow_flex:3,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:2.6,stop:!0,label:"short pause, back flat",pose:{spine_flex:3,neck_flex:-22,hip_flex:122,hip_abd:8,hip_rot:-6,knee_flex:68,ankle_dorsi:21,sh_flex:64,sh_abd:9,sh_rot:0,shrug:-3,protract:-8,elbow_flex:3,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:3.2,stop:!1,label:"push the floor away",pose:{spine_flex:3,neck_flex:-11,hip_flex:82,hip_abd:6,hip_rot:-6,knee_flex:48,ankle_dorsi:15,sh_flex:40,sh_abd:8,sh_rot:-5,shrug:-3,protract:-8,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:3.7,stop:!1,label:"hips and shoulders rise together",pose:{spine_flex:1,neck_flex:-3,hip_flex:32,hip_abd:2,hip_rot:-6,knee_flex:20,ankle_dorsi:7,sh_flex:14,sh_abd:6,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:4.1,stop:!0,label:"stand tall, glutes squeezed",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:5,ankle_dorsi:3,sh_flex:6,sh_abd:6,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:4.4,stop:!0,label:"lockout, hold the squeeze",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:5,ankle_dorsi:3,sh_flex:6,sh_abd:6,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}}],bf=[{from:0,to:1,type:"rest"},{from:1,to:4,type:"eccentric"},{from:4,to:5,type:"isometric"},{from:5,to:8,type:"concentric"},{from:8,to:9,type:"rest"}],vf={hamstrings:{role:"synergist",concentric:.65,eccentric:.55,isometric:.4},glutes:{role:"prime",concentric:.75,eccentric:.5,isometric:.4},erector_spinae:{role:"synergist",concentric:.65,eccentric:.65,isometric:.7},adductors:{role:"synergist",concentric:.35,eccentric:.3,isometric:.25},forearms:{role:"stabilizer",concentric:.4,eccentric:.4,isometric:.4},lats:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},traps:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},rhomboids:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},abs:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},quads:{role:"prime",concentric:.6,eccentric:.4,isometric:.4},calves:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},obliques:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},shoulders:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},wf=[{segment:0,text:"Chest proud, lats tight, dumbbells at your sides"},{segment:1,text:"Hips back and knees bend, dumbbells slide down your legs"},{segment:2,text:"Back flat, arms straight, dumbbells at mid shin"},{segment:3,text:"Push the floor away, hips and shoulders rise together"}],Sf="inhale and brace before lowering, exhale as you stand",yf=90,Mf="Conventional dumbbell deadlift: knees to 68 deg, ankle 21, hips 122, trunk lean about 76 deg with the spine near neutral (3 deg) and the neck following it, arms straight and angled back toward the legs (sh_flex 64 against the lean) so the dumbbells hang beside the shin below the knee (grip 27 cm off the floor, 16 cm below the knee, 8 cm ahead of it), outside the legs in the front view. Timing: 0.3 s set, 2.0 s down, 0.3 s pause, 1.5 s up, 0.3 s lockout. Hips and shoulders rise together through the via-points. Checked: solver adjust 3.9 deg max, side and front views on both bodies. Not run: balance, symmetry and floor scripts timed out on the loaded machine.",Ef={id:pf,name:_f,equipment:mf,contacts:gf,keys:xf,segments:bf,activation:vf,cues:wf,breathing:Sf,view_yaw:yf,notes:Mf},Tf="dumbbell_shrug",Af="Dumbbell shrug",Rf="dumbbells",kf=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Cf=[{time_s:0,stop:!0,label:"bottom, arms hanging",pose:{spine_flex:0,neck_flex:0,sh_flex:0,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.3,stop:!0,label:"bottom pause",pose:{spine_flex:0,neck_flex:0,sh_flex:0,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:1.5,stop:!0,label:"top, shoulders at the ears",pose:{spine_flex:0,neck_flex:0,sh_flex:0,sh_abd:4,sh_rot:0,shrug:22,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:2,stop:!0,label:"top hold",pose:{spine_flex:0,neck_flex:0,sh_flex:0,sh_abd:4,sh_rot:0,shrug:22,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:4,stop:!0,label:"bottom, arms hanging",pose:{spine_flex:0,neck_flex:0,sh_flex:0,sh_abd:6,sh_rot:0,shrug:0,protract:0,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}}],Pf=[{from:0,to:1,type:"isometric"},{from:1,to:2,type:"concentric"},{from:2,to:3,type:"isometric"},{from:3,to:4,type:"eccentric"}],Lf={traps:{role:"prime",concentric:.9,eccentric:.6,isometric:.7},rhomboids:{role:"synergist",concentric:.35,eccentric:.25,isometric:.3},neck:{role:"synergist",concentric:.2,eccentric:.15,isometric:.18},forearms:{role:"stabilizer",concentric:.55,eccentric:.55,isometric:.55},delts_side:{role:"stabilizer",concentric:.1,eccentric:.08,isometric:.08},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},abs:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},quads:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},Df=[{segment:1,text:"Shoulders straight up toward your ears, no rolling"},{segment:2,text:"Hold the top for a beat, arms stay straight"},{segment:3,text:"Lower slowly for two seconds, all the way down"}],If="exhale as you shrug up, inhale as you lower",Nf=0,Uf="Rep 4.0 s: 0.3 s bottom pause, 1.2 s up, 0.5 s hold, 2.0 s down. Only the shoulder girdle moves (shrug 0 to 22, near the 25 limit); arms stay straight (elbow 3), neutral grip (forearm_pron 90), sh_abd 6 to 4 so the dumbbells clear the thighs. Trunk, neck and legs fixed, so balance is unchanged from standing. Checked: inspect-clip adjust 1.3 deg, no pelvis movement; front, side and female three-quarter renders show the shoulders rising toward the ears with the traps glowing; hand at the hip, handle 5 deg off level, no contact with the thigh. inspect-balance: centre of mass 0.37 to 0.38 of the base, balanced; inspect-symmetry: left and right agree within half a degree.",Ff={id:Tf,name:Af,equipment:Rf,contacts:kf,keys:Cf,segments:Pf,activation:Lf,cues:Df,breathing:If,view_yaw:Nf,notes:Uf},Of="dumbbell_squat",zf="Dumbbell squat",Bf="dumbbells",Gf=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Hf=[{time_s:0,stop:!0,label:"top, dumbbells at the sides",pose:{spine_flex:0,neck_flex:0,hip_flex:1,hip_abd:7,hip_rot:-8,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:2,sh_abd:9,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}},{time_s:.4,stop:!0,label:"top, set",pose:{spine_flex:0,neck_flex:0,hip_flex:1,hip_abd:7,hip_rot:-8,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:2,sh_abd:9,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}},{time_s:1.4,stop:!1,label:"descent, hips back and down",pose:{spine_flex:1,neck_flex:-6,hip_flex:68,hip_abd:10,hip_rot:-2,knee_flex:62,ankle_dorsi:18,toe_ext:0,sh_flex:24,sh_abd:14,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}},{time_s:2.4,stop:!0,label:"bottom, thighs just below parallel",pose:{spine_flex:3,neck_flex:-12,hip_flex:120,hip_abd:9,hip_rot:8,knee_flex:118,ankle_dorsi:33,toe_ext:0,sh_flex:38,sh_abd:17,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}},{time_s:2.55,stop:!0,label:"bottom, brief settle",pose:{spine_flex:4,neck_flex:-13,hip_flex:120,hip_abd:9,hip_rot:8,knee_flex:118,ankle_dorsi:33,toe_ext:0,sh_flex:38,sh_abd:17,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}},{time_s:3.1,stop:!1,label:"ascent, chest and hips rise together",pose:{spine_flex:2,neck_flex:-8,hip_flex:80,hip_abd:10,hip_rot:-1,knee_flex:70,ankle_dorsi:19,toe_ext:0,sh_flex:26,sh_abd:14,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}},{time_s:3.85,stop:!0,label:"top",pose:{spine_flex:0,neck_flex:0,hip_flex:1,hip_abd:7,hip_rot:-8,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:2,sh_abd:9,sh_rot:0,shrug:-2,protract:-3,elbow_flex:4,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:1}}],Vf=[{from:0,to:1,type:"rest"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],Wf={quads:{role:"prime",concentric:.7,eccentric:.5,isometric:.4},glutes:{role:"prime",concentric:.5,eccentric:.35,isometric:.3},adductors:{role:"synergist",concentric:.35,eccentric:.25,isometric:.2},hamstrings:{role:"synergist",concentric:.25,eccentric:.2,isometric:.15},soleus:{role:"stabilizer",concentric:.28,eccentric:.3,isometric:.25},calves:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.1},glute_med:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.2},erector_spinae:{role:"stabilizer",concentric:.28,eccentric:.25,isometric:.25},abs:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.15},obliques:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.15},shins:{role:"stabilizer",concentric:.1,eccentric:.08,isometric:.08},forearms:{role:"stabilizer",concentric:.4,eccentric:.4,isometric:.4},traps:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25}},$f=[{segment:0,text:"Dumbbells at your sides, feet shoulder width, toes slightly out, chest tall"},{segment:1,text:"Hips back and down, arms hang straight, weights outside the knees"},{segment:2,text:"Thighs just past parallel, chest up, heels heavy"},{segment:3,text:"Push the floor away, chest and hips rise together"}],qf="inhale through the nose on the way down, exhale steadily as you stand up",Xf=75,Yf="Dumbbell squat, 3.85 s rep (0.4 s set, 2.0 s lowering, 0.15 s settle, 1.3 s lifting), built from squat.json. Arms hang at the sides (neutral grip, forearm_pron 90, grip 1) and are never swung: sh_flex follows the trunk lean (2 at the top, 38 at the bottom) so they hang near vertical, sh_abd 9 rising to 17 so the dumbbells pass outside the knees and thighs. Checked: inspect-clip max adjust 12.1 deg, miss 0.04 mm; inspect-balance centre of mass 0.35 to 0.63 of the base, balanced; inspect-hold at the bottom: handle 3 deg off level, hand about level with the knee. Seen from side, front and three-quarter on both bodies. Re-checked in a later pass: side strip, and front, three-quarter and side views on both bodies show the dumbbells outside the knees with no clipping. Not checked: inspect-symmetry printed nothing for this id and inspect-guards did not finish on the busy machine. The adjustment of 12 deg is under the 15 deg limit; the joint was not identified.",Kf={id:Of,name:zf,equipment:Bf,contacts:Gf,keys:Hf,segments:Vf,activation:Wf,cues:$f,breathing:qf,view_yaw:Xf,notes:Yf},Zf="floor_dip",Jf="Triceps dip on the floor",Qf="none",jf=[{point:"l_palm",support:"floor"},{point:"r_palm",support:"floor"},{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],ed=[{time_s:0,stop:!0,label:"top, arms nearly straight, hips lifted a few cm",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:95,hip_abd:3,hip_rot:0,knee_flex:118,ankle_dorsi:-20,toe_ext:0,sh_flex:-38,sh_abd:19,sh_rot:-2,shrug:-6,protract:0,elbow_flex:12,forearm_pron:170,wrist_flex:-71,wrist_dev:20,grip:.2}},{time_s:.5,stop:!0,label:"top, blades set back and down",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:95,hip_abd:3,hip_rot:0,knee_flex:118,ankle_dorsi:-20,toe_ext:0,sh_flex:-38,sh_abd:19,sh_rot:-2,shrug:-9,protract:-4,elbow_flex:12,forearm_pron:170,wrist_flex:-71,wrist_dev:20,grip:.2}},{time_s:1.4,stop:!1,label:"mid lowering, elbows track straight back",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:98,hip_abd:3,hip_rot:0,knee_flex:120,ankle_dorsi:-20,toe_ext:0,sh_flex:-50,sh_abd:16,sh_rot:-8,shrug:-7,protract:-8,elbow_flex:45,forearm_pron:170,wrist_flex:-48,wrist_dev:20,grip:.2}},{time_s:2.5,stop:!0,label:"bottom, elbows about 90 to 100 degrees, hips close to the floor",pose:{spine_flex:-2,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:100,hip_abd:3,hip_rot:0,knee_flex:122,ankle_dorsi:-20,toe_ext:0,sh_flex:-60,sh_abd:16,sh_rot:-19,shrug:-4,protract:-9,elbow_flex:88,forearm_pron:170,wrist_flex:-20,wrist_dev:20,grip:.2}},{time_s:2.8,stop:!0,label:"bottom pause",pose:{spine_flex:-2,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:100,hip_abd:3,hip_rot:0,knee_flex:122,ankle_dorsi:-20,toe_ext:0,sh_flex:-60,sh_abd:16,sh_rot:-19,shrug:-4,protract:-9,elbow_flex:88,forearm_pron:170,wrist_flex:-20,wrist_dev:20,grip:.2}},{time_s:3.5,stop:!1,label:"mid press",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:98,hip_abd:3,hip_rot:0,knee_flex:120,ankle_dorsi:-20,toe_ext:0,sh_flex:-51,sh_abd:16,sh_rot:-8,shrug:-6,protract:-7,elbow_flex:48,forearm_pron:170,wrist_flex:-48,wrist_dev:20,grip:.2}},{time_s:4.1,stop:!0,label:"top",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:48,neck_side:0,neck_twist:0,hip_flex:95,hip_abd:3,hip_rot:0,knee_flex:118,ankle_dorsi:-20,toe_ext:0,sh_flex:-38,sh_abd:19,sh_rot:-2,shrug:-6,protract:0,elbow_flex:12,forearm_pron:170,wrist_flex:-71,wrist_dev:20,grip:.2}}],td=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],id={triceps:{role:"prime",concentric:.85,eccentric:.65,isometric:.7},delts_front:{role:"synergist",concentric:.5,eccentric:.4,isometric:.4},chest:{role:"synergist",concentric:.4,eccentric:.4,isometric:.28},lats:{role:"stabilizer",concentric:.2,eccentric:.28,isometric:.22},traps:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},serratus:{role:"stabilizer",concentric:.26,eccentric:.24,isometric:.22},rhomboids:{role:"stabilizer",concentric:.22,eccentric:.28,isometric:.22},rotator_cuff:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.2},forearms:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.2},glutes:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.3},hamstrings:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.22},abs:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15}},nd=[{segment:0,text:"Hips just off the floor, shoulders down away from your ears"},{segment:1,text:"Bend your elbows straight back, hips close to the floor, chest up"},{segment:2,text:"Pause with elbows near a right angle, no deeper"},{segment:3,text:"Press through your palms until your arms are almost straight"}],sd="inhale on the way down, exhale as you press up",rd=90,od="Sitting, knees bent about 118 degrees, heels and balls of the feet flat on the floor, hands on the floor behind the hips with the fingers pointing toward the feet. Rep 4.1 s: 0.5 s set, 2.0 s lowering, 0.3 s pause, 1.3 s press. Top: elbows 12, sh_flex -38; bottom: authored elbow 88, sh_flex -60 (range limit), solver adds about 9 elbow and 10 shoulder so the real elbow angle is near 90 to 100 degrees, hips about 8 cm lower than the top. Trunk leans back about 40 degrees because the hands sit behind the hips; neck_flex 48 so the gaze is level or down. sh_abd and wrist_dev were lowered for parallel elbows but the solver puts back about 5 and 7 degrees (the palms need it to lie flat), so they are not lowered further. Solver adjustment at most about 10 degrees. inspect-guards and inspect-symmetry were not completed on this machine.",ad={id:Zf,name:Jf,equipment:Qf,contacts:jf,keys:ed,segments:td,activation:id,cues:nd,breathing:sd,view_yaw:rd,notes:od},ld="front_raise",cd="Dumbbell front raise",hd="dumbbells",fd=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],dd=[{time_s:0,stop:!0,label:"bottom, dumbbells in front of thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,sh_abd:4,sh_flex:10,sh_rot:5,shrug:-2,protract:0,elbow_flex:12,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:.55,stop:!1,label:"lift, arms swing forward (about 40 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-.5,neck_flex:0,sh_abd:4,sh_flex:42,sh_rot:8,shrug:-1,protract:0,elbow_flex:13,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:1,stop:!1,label:"lift, slowing into the top (about 78 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1,neck_flex:0,sh_abd:4,sh_flex:72,sh_rot:13,shrug:0,protract:1,elbow_flex:13,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:1.3,stop:!0,label:"top, shoulder height, arms straight forward",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,sh_abd:4,sh_flex:82,sh_rot:15,shrug:0,protract:2,elbow_flex:13,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:1.55,stop:!0,label:"top pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,sh_abd:4,sh_flex:82,sh_rot:15,shrug:0,protract:2,elbow_flex:13,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:2.6,stop:!1,label:"lowering, controlled (about 55 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1,neck_flex:0,sh_abd:4,sh_flex:58,sh_rot:18,shrug:-1,protract:1,elbow_flex:13,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:3.4,stop:!1,label:"lowering, hands pass chest height... nearly down (about 22 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-.5,neck_flex:0,sh_abd:4,sh_flex:24,sh_rot:7,shrug:-1,protract:0,elbow_flex:12,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:3.8,stop:!0,label:"bottom, dumbbells in front of thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,sh_abd:4,sh_flex:10,sh_rot:5,shrug:-2,protract:0,elbow_flex:12,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}},{time_s:4.2,stop:!0,label:"bottom pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,sh_abd:4,sh_flex:10,sh_rot:5,shrug:-2,protract:0,elbow_flex:12,forearm_pron:168,wrist_flex:0,wrist_dev:0,grip:.8}}],ud=[{from:0,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:7,type:"eccentric"},{from:7,to:8,type:"rest"}],pd={delts_front:{role:"prime",concentric:.85,eccentric:.65,isometric:.8},delts_side:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},chest:{role:"synergist",concentric:.25,eccentric:.18,isometric:.22},serratus:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},traps:{role:"synergist",concentric:.35,eccentric:.28,isometric:.32},biceps:{role:"stabilizer",concentric:.2,eccentric:.18,isometric:.2},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.3},upper_back:{role:"stabilizer",concentric:.2,eccentric:.18,isometric:.2},forearms:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},erector_spinae:{role:"stabilizer",concentric:.18,eccentric:.15,isometric:.18},abs:{role:"stabilizer",concentric:.2,eccentric:.18,isometric:.2},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},_d=[{segment:0,text:"Raise both dumbbells straight forward, palms down, shoulders away from the ears"},{segment:1,text:"Stop at shoulder height, no higher, and do not lean back"},{segment:2,text:"Lower slowly, about twice as slow as the lift, with no swing"}],md="exhale as you raise, inhale as you lower",gd=40,xd="Based on lateral_raise. Arms stay in the sagittal plane (sh_abd 4), flex 10 to 82, so the hands finish level with the shoulders (inspect-hold: grip 0 cm above shoulder, 60 cm ahead). Palms face the thighs at the bottom and turn to face down at the top through a small sh_rot (5 to 15) with forearm_pron 168; handle is within about 11 deg of level at the top and 18 deg at the bottom, where the hanging dumbbell levels itself. Lift 1.3 s, top pause 0.25 s, lower 2.25 s, bottom pause 0.4 s, rep 4.2 s. Trunk stays upright (spine within 1.5 deg), no lean back. Solver adjust 2.1 deg max; balanced (CoM 0.35 to 0.68 of the base). Checked from the side, front and three-quarter on both bodies; arms and dumbbells clear of the trunk. EMG levels are approximate, not measured on this model.",bd={id:ld,name:cd,equipment:hd,contacts:fd,keys:dd,segments:ud,activation:pd,cues:_d,breathing:md,view_yaw:gd,notes:xd},vd="front_raise_overhead",wd="Dumbbell front raise to overhead",Sd="dumbbells",yd=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Md=[{time_s:0,stop:!0,label:"bottom, dumbbells in front of thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:0,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:0,spine_flex:0,sh_abd:4,sh_flex:10,sh_rot:5,shrug:-2,elbow_flex:12}},{time_s:.5,stop:!1,label:"lift, arms swing forward (about 40 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:0,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:0,spine_flex:-.5,sh_abd:4,sh_flex:45,sh_rot:8,shrug:-1,elbow_flex:13}},{time_s:1,stop:!1,label:"lift, through shoulder height",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:-1,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:2,spine_flex:-1,sh_abd:5,sh_flex:95,sh_rot:8,shrug:3,elbow_flex:12}},{time_s:1.5,stop:!1,label:"lift, past the face, slowing",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:-2,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:145,protract:4,spine_flex:-1.5,sh_abd:8,sh_flex:140,sh_rot:0,shrug:8,elbow_flex:10}},{time_s:1.9,stop:!0,label:"top, arms overhead beside the ears",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:-3,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:120,protract:6,spine_flex:-2,sh_abd:10,sh_flex:170,sh_rot:0,shrug:12,elbow_flex:8}},{time_s:2.2,stop:!0,label:"top pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:-3,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:120,protract:6,spine_flex:-2,sh_abd:10,sh_flex:170,sh_rot:0,shrug:12,elbow_flex:8}},{time_s:3.2,stop:!1,label:"lowering, back past the face",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:-2,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:145,protract:4,spine_flex:-1.5,sh_abd:8,sh_flex:140,sh_rot:0,shrug:8,elbow_flex:10}},{time_s:4,stop:!1,label:"lowering, through shoulder height",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:-1,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:2,spine_flex:-1,sh_abd:5,sh_flex:95,sh_rot:8,shrug:3,elbow_flex:12}},{time_s:4.6,stop:!1,label:"lowering, nearly down",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:0,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:0,spine_flex:-.5,sh_abd:4,sh_flex:30,sh_rot:7,shrug:-1,elbow_flex:12}},{time_s:5,stop:!0,label:"bottom, dumbbells in front of thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:0,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:0,spine_flex:0,sh_abd:4,sh_flex:10,sh_rot:5,shrug:-2,elbow_flex:12}},{time_s:5.4,stop:!0,label:"bottom pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,neck_flex:0,wrist_flex:0,wrist_dev:0,grip:.8,forearm_pron:168,protract:0,spine_flex:0,sh_abd:4,sh_flex:10,sh_rot:5,shrug:-2,elbow_flex:12}}],Ed=[{from:0,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:9,type:"eccentric"},{from:9,to:10,type:"rest"}],Td={delts_front:{role:"prime",concentric:.85,eccentric:.65,isometric:.7},delts_side:{role:"synergist",concentric:.5,eccentric:.4,isometric:.5},traps:{role:"synergist",concentric:.55,eccentric:.4,isometric:.5},serratus:{role:"synergist",concentric:.6,eccentric:.45,isometric:.55},chest:{role:"synergist",concentric:.25,eccentric:.18,isometric:.2},triceps:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.15},rotator_cuff:{role:"stabilizer",concentric:.35,eccentric:.28,isometric:.35},upper_back:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.25},forearms:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.17,isometric:.2},abs:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.3},glutes:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.12},calves:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},Ad=[{segment:0,text:"Palms down, arms straight, keep going past shoulder height"},{segment:1,text:"Ribs down, ears clear, do not arch the low back"},{segment:2,text:"Lower the same way, about twice as slow as the lift"}],Rd="exhale as you raise, inhale as you lower",kd=50,Cd="Based on front_raise, continued to overhead: sh_flex 10 to 170, sh_abd 4 to 10 so the arms finish just apart beside the ears. Shrug rises to 12 and protract to 6 at the top (scapular upward rotation); spine_flex stays within -2 so the ribs stay down and the low back does not arch; neck -3. Palms face down at the start (forearm_pron 168) and turn to face each other overhead (forearm_pron 120, sh_rot 0): with pron 168 and sh_rot -5 the left and right palms disagreed at the top (0.86 vs 0.51 facing forward), so that was changed. inspect-hold at 1.9 s: grip 208 cm off the floor, handles level within 3 deg, symmetric. Solver adjust 2.1 deg max. Lift 1.9 s (a little long: arc is twice the front raise), top pause 0.3 s, lower 2.8 s, bottom pause 0.4 s, rep 5.4 s. Checked from the side, front and three-quarter, male and female at the top. Balance and symmetry tools were too slow on the shared machine to read in time: not verified. EMG levels approximate.",Pd={id:vd,name:wd,equipment:Sd,contacts:yd,keys:Md,segments:Ed,activation:Td,cues:Ad,breathing:Rd,view_yaw:kd,notes:Cd},Ld="glute_bridge",Dd="Glute bridge",Id="none",Nd=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"},{point:"upper_back",support:"floor"},{point:"head_back",support:"floor"}],Ud=[{time_s:0,stop:!0,label:"bottom, rest",pose:{spine_flex:-4,neck_flex:-10,hip_flex:67,hip_abd:2,hip_rot:-4,knee_flex:133,ankle_dorsi:-20,toe_ext:0,sh_flex:-7,sh_abd:15,sh_rot:10,shrug:-3,protract:-2,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:.4,stop:!0,label:"bottom, ready",pose:{spine_flex:-4,neck_flex:-10,hip_flex:67,hip_abd:2,hip_rot:-4,knee_flex:133,ankle_dorsi:-20,toe_ext:0,sh_flex:-7,sh_abd:15,sh_rot:10,shrug:-3,protract:-2,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:.65,stop:!1,label:"pelvis tilts back first, lumbar flattens",pose:{spine_flex:5,neck_flex:-14,hip_flex:50,hip_abd:2,hip_rot:-4,knee_flex:132,ankle_dorsi:-16,toe_ext:0,sh_flex:-10,sh_abd:15,sh_rot:10,shrug:-3,protract:-2,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:.95,stop:!1,label:"feet drive, hips rise, spine peels up",pose:{spine_flex:2,neck_flex:8,hip_flex:28,hip_abd:2,hip_rot:-4,knee_flex:125,ankle_dorsi:-8,toe_ext:0,sh_flex:-20,sh_abd:15,sh_rot:10,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:1.6,stop:!0,label:"top, squeeze",pose:{spine_flex:-2,neck_flex:42,hip_flex:-2,hip_abd:2,hip_rot:-4,knee_flex:107,ankle_dorsi:-7,toe_ext:0,sh_flex:-34,sh_abd:15,sh_rot:10,shrug:-3,protract:-4,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:2.6,stop:!0,label:"top, hold",pose:{spine_flex:-2,neck_flex:42,hip_flex:-2,hip_abd:2,hip_rot:-4,knee_flex:107,ankle_dorsi:-7,toe_ext:0,sh_flex:-34,sh_abd:15,sh_rot:10,shrug:-3,protract:-4,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:3.4,stop:!1,label:"lowering, upper back first, lumbar still flexed",pose:{spine_flex:3,neck_flex:20,hip_flex:12,hip_abd:2,hip_rot:-4,knee_flex:118,ankle_dorsi:-6,toe_ext:0,sh_flex:-26,sh_abd:15,sh_rot:10,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:3.7,stop:!1,label:"lowering, hips roll down",pose:{spine_flex:1,neck_flex:4,hip_flex:34,hip_abd:2,hip_rot:-4,knee_flex:127,ankle_dorsi:-9,toe_ext:0,sh_flex:-18,sh_abd:15,sh_rot:10,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}},{time_s:4.6,stop:!0,label:"bottom, rest",pose:{spine_flex:-4,neck_flex:-10,hip_flex:67,hip_abd:2,hip_rot:-4,knee_flex:133,ankle_dorsi:-20,toe_ext:0,sh_flex:-7,sh_abd:15,sh_rot:10,shrug:-3,protract:-2,elbow_flex:3,forearm_pron:170,wrist_flex:-4,wrist_dev:0,grip:.1}}],Fd=[{from:0,to:1,type:"rest"},{from:1,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:8,type:"eccentric"}],Od={glutes:{role:"prime",concentric:.8,eccentric:.45,isometric:.75},hamstrings:{role:"synergist",concentric:.4,eccentric:.25,isometric:.35},adductors:{role:"synergist",concentric:.3,eccentric:.2,isometric:.25},quads:{role:"synergist",concentric:.3,eccentric:.22,isometric:.25},glute_med:{role:"stabilizer",concentric:.3,eccentric:.2,isometric:.3},erector_spinae:{role:"stabilizer",concentric:.3,eccentric:.2,isometric:.3},abs:{role:"stabilizer",concentric:.3,eccentric:.2,isometric:.3},obliques:{role:"stabilizer",concentric:.15,eccentric:.1,isometric:.15},calves:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.12}},zd=[{segment:0,text:"Feet hip-width, heels close to the glutes, ribs down"},{segment:1,text:"Tilt the pelvis, then push the floor away through your heels"},{segment:2,text:"Squeeze the glutes until knees, hips and shoulders line up; do not arch the low back. Keep head and shoulder blades on the floor, chin slightly tucked"},{segment:3,text:"Lower slowly, hips coming down smoothly"}],Bd="inhale at the bottom, exhale as you lift, breathe steadily through the squeeze, inhale as you lower",Gd=90,Hd="Retuned neck_flex to the values the solver was already imposing to keep the back of the head on the floor (-10 bottom, -14 at 0.65 s, 8 at 0.95 s, 42 top, 20 at 3.4 s, 4 at 3.7 s; it had been up to 21 degrees off), and forearm_pron to 170 (the limit) so the palms lie flat without the solver spinning the forearm during the lowering. Sagittal solution with the reference body (thigh 0.43, shank 0.43, ankle height 0.08, trunk hip-to-shoulder 0.52, neck+head 0.27, arm 0.30+0.26). Pivot: the upper_back contact is on the floor directly under the shoulder joint, 0.52 m from the hip along the trunk; the trunk axis is 0.10 m above the floor at rest, so the shoulder joint stays at 0.10*cos(theta) (0.100 m at the bottom, 0.088 m at the top, a 1.2 cm soft-tissue squash). Ribcage tilt theta: 0 bottom, 3 at 0.65 s, 13 at 0.95 s, 28 at the top, 19 at 3.4 s, 11 at 3.7 s. Pelvis tilt phi = theta + spine_flex. Hip joint = 0.52 m along the trunk plus 0.10 m normal, rotated by theta. Feet pinned at ankle x = 0.86 m from the pivot, height 0.08 m, so the hip is 0.34 m from the ankle at the bottom. Hip, knee and ankle values come from 2-link IK of hip to ankle with the knee up: hip_flex = thigh world angle - phi; ankle_dorsi is negative because the shin leans back toward the head with the foot flat (shank-to-foot angle 110 deg at the bottom, 97 deg at the top). Bottom: hip_flex 67, knee 133, ankle -20, hip at 0.10 m. Top: hip at (0.41, 0.33) m, knee at (0.81, 0.51) m, thigh 24 deg and trunk 28 deg from horizontal (shoulder-hip-knee line within about 4 deg), hip_flex -2, knee 107, shin about 7 deg from vertical. Arms: world arm elevation = sh_flex + theta is held at about -6 deg so the wrist centre stays about 0.03 m above the floor (hand resting on it, no penetration; arm length 0.56 times cos(sh_abd 15)); sh_flex therefore runs -7 to -34 (about -(theta + 6) with a small correction for the shoulder height). Head: neck_flex = theta + about 8 keeps the head centre at 0.124 m (0.27 m neck+head); it reaches 42 at the top, a gentle chin tuck. Motion: 0.4 s pause, 1.2 s lift (pelvis tilts back first with spine_flex +5 at 0.65 s, then the lumbar spine peels up to -2 while the hips rise), 1.0 s hold, 2.0 s lower (upper back lands first, lumbar stays flexed +3 at 3.4 s, hips settle and spine returns to -4 at the bottom, so the descent is not the lift reversed). toe_ext is 0 throughout because the ball of the foot is a floor contact. hip_abd 2 keeps the feet near hip width. Segments: 0 rest (keys 0-1), 1 concentric (1-4), 2 isometric (4-5), 3 eccentric (5-8); cues use those indices. EMG levels (relative to MVIC) from Contreras et al. 2015, Ekstrom 2007, Lehman 2005 and Neto 2020 are approximate. Assumes a 1.75 m adult; heel distance from the buttocks scales with leg length.",Vd={id:Ld,name:Dd,equipment:Id,contacts:Nd,keys:Ud,segments:Fd,activation:Od,cues:zd,breathing:Bd,view_yaw:Gd,notes:Hd},Wd="hammer_curl",$d="Dumbbell hammer curl",qd="dumbbells",Xd=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Yd=[{time_s:0,stop:!0,label:"bottom",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.4,stop:!0,label:"bottom pause",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.9,stop:!1,label:"lift, thumbs up",pose:{spine_flex:-.5,neck_flex:2,sh_flex:1,sh_abd:6,sh_rot:0,shrug:-3,protract:-3,elbow_flex:62,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:1.3,stop:!1,label:"lift, sticking region",pose:{spine_flex:-1,neck_flex:1,sh_flex:6,sh_abd:6,sh_rot:0,shrug:-3,protract:-2.5,elbow_flex:120,forearm_pron:90,wrist_flex:3,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:1.6,stop:!0,label:"top",pose:{spine_flex:-1.5,neck_flex:0,sh_flex:10,sh_abd:10,sh_rot:0,shrug:-3,protract:-2,elbow_flex:132,forearm_pron:90,wrist_flex:5,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:1.9,stop:!0,label:"top squeeze",pose:{spine_flex:-1.5,neck_flex:0,sh_flex:10,sh_abd:10,sh_rot:0,shrug:-3,protract:-2,elbow_flex:132,forearm_pron:90,wrist_flex:5,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:2.35,stop:!1,label:"lower, first third",pose:{spine_flex:-1.3,neck_flex:1,sh_flex:7,sh_abd:6,sh_rot:0,shrug:-3,protract:-2.5,elbow_flex:120,forearm_pron:90,wrist_flex:4,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:2.85,stop:!1,label:"lower, controlled mid",pose:{spine_flex:-.8,neck_flex:2,sh_flex:3,sh_abd:5,sh_rot:0,shrug:-3,protract:-3,elbow_flex:78,forearm_pron:90,wrist_flex:1,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:3.35,stop:!1,label:"lower, slowing into the bottom",pose:{spine_flex:-.3,neck_flex:2.5,sh_flex:0,sh_abd:7,sh_rot:0,shrug:-3,protract:-3,elbow_flex:30,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.88,hip_flex:0,knee_flex:3.5,ankle_dorsi:3.5,toe_ext:0}},{time_s:3.9,stop:!0,label:"bottom",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}}],Kd=[{from:0,to:1,type:"isometric"},{from:1,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:9,type:"eccentric"}],Zd={biceps:{role:"prime",concentric:.6,eccentric:.42,isometric:.2},brachialis:{role:"prime",concentric:.75,eccentric:.55,isometric:.22},brachioradialis:{role:"prime",concentric:.7,eccentric:.5,isometric:.2},forearms:{role:"synergist",concentric:.4,eccentric:.33,isometric:.3},delts_front:{role:"synergist",concentric:.25,eccentric:.2,isometric:.15},traps:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.1},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.15},abs:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.12},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},quads:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},Jd=[{segment:1,text:"Elbows pinned at your ribs; only the forearms move"},{segment:1,text:"Thumbs stay up the whole way, no turning the wrists"},{segment:2,text:"Squeeze at the top, no swinging from the hips"},{segment:3,text:"Lower for about two seconds, stopping just short of locking out"}],Qd="exhale as you curl up, inhale as you lower",jd=40,eu="Rep 3.9 s like dumbbell_curl (0.4 s bottom pause, 1.2 s lift, 0.3 s top pause, 2.0 s lower). Neutral grip held: forearm_pron 90 on every key, sh_rot 0, wrist_dev 0, so the thumbs stay up. Standing curl pose of dumbbell_curl, trunk within 1.5 deg, but the curl stops at elbow 132 and the upper arm opens a little at the top (sh_flex 10, sh_abd 10) so the bells sit about 23 cm ahead of the shoulder and clear the breasts on the female body (first draft: 19 cm, discs over the chest). Checked: inspect-clip adjust 1.3 deg, miss 0; hold at 1.75 s; female front, three-quarter and side and male front at the top. Authored symmetric (no l_/r_ keys); balance, symmetry and guards were not re-run after the change (the feet are the only contacts and the legs and trunk are unchanged).",tu={id:Wd,name:$d,equipment:qd,contacts:Xd,keys:Yd,segments:Kd,activation:Zd,cues:Jd,breathing:Qd,view_yaw:jd,notes:eu},iu="hanging_knee_raise",nu="Hanging knee raise",su="pullup_bar",ru=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],ou=[{time_s:0,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:-5,ankle_dorsi:-25,spine_flex:-3,hip_flex:0,knee_flex:8}},{time_s:.5,stop:!0,label:"hang pause, shoulders set",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:-5,ankle_dorsi:-25,spine_flex:-3,hip_flex:0,knee_flex:8}},{time_s:1.25,stop:!1,label:"knees start to bend, hips begin to lift",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:-4,ankle_dorsi:-25,spine_flex:0,hip_flex:60,knee_flex:80}},{time_s:1.75,stop:!0,label:"top, knees to chest, pelvis curled",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:3,ankle_dorsi:-25,spine_flex:19,hip_flex:120,knee_flex:120}},{time_s:2.25,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:3,ankle_dorsi:-25,spine_flex:19,hip_flex:120,knee_flex:120}},{time_s:3.25,stop:!1,label:"controlled lowering, no swing",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:-4,ankle_dorsi:-25,spine_flex:-1,hip_flex:45,knee_flex:65}},{time_s:4.25,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,neck_flex:-5,ankle_dorsi:-25,spine_flex:-3,hip_flex:0,knee_flex:8}}],au=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],lu={abs:{role:"prime",concentric:.8,eccentric:.55,isometric:.65},hip_flexors:{role:"prime",concentric:.75,eccentric:.5,isometric:.55},rectus_femoris:{role:"synergist",concentric:.45,eccentric:.3,isometric:.35},obliques:{role:"synergist",concentric:.4,eccentric:.3,isometric:.35},forearms:{role:"stabilizer",concentric:.6,eccentric:.6,isometric:.6},lats:{role:"stabilizer",concentric:.35,eccentric:.35,isometric:.35},traps:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},rotator_cuff:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},serratus:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},biceps:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},triceps:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},quads:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.2},adductors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},erector_spinae:{role:"stabilizer",concentric:.15,eccentric:.2,isometric:.15}},cu=[{segment:0,text:"Hang with straight arms, shoulders pulled down, body still"},{segment:1,text:"Knees up toward your chest, curl the pelvis, no swinging"},{segment:2,text:"Squeeze the abs at the top"},{segment:3,text:"Lower slowly to a dead hang, don't let the legs swing"}],hu="exhale as the knees come up, inhale as you lower",fu=90,du="Hang of pull_up.json (grip pinned to the bar, arms and shoulders constant and straight). 0.5 s hang pause, 1.25 s knees to chest (hip 120, knee 120, spine_flex 19 for the pelvic curl, neck 3), 0.5 s top pause, 2.0 s lowering to a still hang. Pelvis drifts back about 10 cm at the top, as a real hang does. Checked with inspect-clip, side strip, front and female views, inspect-symmetry.",uu={id:iu,name:nu,equipment:su,contacts:ru,keys:ou,segments:au,activation:lu,cues:cu,breathing:hu,view_yaw:fu,notes:du},pu="hanging_straight_leg_raise",_u="Hanging straight-leg raise",mu="pullup_bar",gu=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],xu=[{time_s:0,stop:!0,label:"dead hang, shoulders set",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-20,spine_flex:-2,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:0}},{time_s:.4,stop:!0,label:"hang pause",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-20,spine_flex:-2,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:0}},{time_s:1,stop:!1,label:"legs lift together, knees locked",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-20,spine_flex:3,neck_flex:-3,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-6,protract:-2,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:45,knee_flex:0}},{time_s:1.7,stop:!0,label:"top, legs level with hips",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-10,spine_flex:7,neck_flex:0,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-6,protract:-3,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:90,knee_flex:0}},{time_s:2.2,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-10,spine_flex:7,neck_flex:0,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-6,protract:-3,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:90,knee_flex:0}},{time_s:3.2,stop:!1,label:"lower slowly, no swing",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-15,spine_flex:3,neck_flex:-3,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-6,protract:-2,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:45,knee_flex:0}},{time_s:4.2,stop:!0,label:"dead hang, shoulders set",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-20,spine_flex:-2,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:3,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:0}}],bu=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],vu={hip_flexors:{role:"prime",concentric:.85,eccentric:.55,isometric:.7},abs:{role:"prime",concentric:.8,eccentric:.6,isometric:.65},rectus_femoris:{role:"synergist",concentric:.55,eccentric:.4,isometric:.45},obliques:{role:"synergist",concentric:.45,eccentric:.35,isometric:.35},forearms:{role:"stabilizer",concentric:.65,eccentric:.65,isometric:.65},lats:{role:"stabilizer",concentric:.4,eccentric:.4,isometric:.4},traps:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},serratus:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},quads:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.3},adductors:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.25},erector_spinae:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},hamstrings:{role:"stabilizer",concentric:.15,eccentric:.2,isometric:.15}},wu=[{segment:0,text:"Hang with arms straight, shoulders pulled down, legs together"},{segment:1,text:"Lift both legs together, knees locked, no kick"},{segment:2,text:"Legs level with your hips, curl the pelvis up and pause"},{segment:3,text:"Lower slowly with no swing, shoulders stay set"}],Su="exhale as the legs rise, inhale as they lower",yu=90,Mu="Pull-up hang structure and grip, legs only move: hip_flex 0 to 90, knees locked, slight pelvic curl (spine_flex 7) at the top. 0.4 s hang, 1.3 s up, 0.5 s pause, 2.0 s down. inspect-clip adjust 0.7 deg. Checked side strip, front, three-quarter, female side and three-quarter.",Eu={id:pu,name:_u,equipment:mu,contacts:gu,keys:xu,segments:bu,activation:vu,cues:wu,breathing:Su,view_yaw:yu,notes:Mu},Tu="lateral_raise",Au="Dumbbell lateral raise",Ru="dumbbells",ku=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Cu=[{time_s:0,stop:!0,label:"bottom, dumbbells beside thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,sh_abd:7,sh_flex:4,sh_rot:0,shrug:-2,protract:0,elbow_flex:12,forearm_pron:90,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:.55,stop:!1,label:"lift, elbows lead (about 35 deg from vertical)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-.5,neck_flex:0,sh_abd:33.6,sh_flex:10.3,sh_rot:6,shrug:-1,protract:0,elbow_flex:12,forearm_pron:100,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:1,stop:!1,label:"lift, slowing into the top (about 78 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,sh_abd:78,sh_flex:32,sh_rot:22,shrug:0,protract:1,elbow_flex:9,forearm_pron:115,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:1.35,stop:!0,label:"top, shoulder height, arms straight out to the sides",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-2,neck_flex:0,sh_abd:90,sh_flex:45,sh_rot:25,shrug:-1,protract:2,elbow_flex:8,forearm_pron:125,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:1.6,stop:!0,label:"top pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-2,neck_flex:0,sh_abd:90,sh_flex:45,sh_rot:25,shrug:-1,protract:2,elbow_flex:8,forearm_pron:125,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:2.6,stop:!1,label:"lowering, controlled (about 60 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,sh_abd:62,sh_flex:20,sh_rot:20,shrug:0,protract:1,elbow_flex:9,forearm_pron:95,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:3.4,stop:!1,label:"lowering, hands pass hip height (about 22 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-.5,neck_flex:0,sh_abd:21.2,sh_flex:6,sh_rot:5,shrug:-1,protract:0,elbow_flex:12,forearm_pron:92,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:3.9,stop:!0,label:"bottom, dumbbells beside thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,sh_abd:7,sh_flex:4,sh_rot:0,shrug:-2,protract:0,elbow_flex:12,forearm_pron:90,wrist_flex:0,wrist_dev:3,grip:.8}},{time_s:4.3,stop:!0,label:"bottom pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,sh_abd:7,sh_flex:4,sh_rot:0,shrug:-2,protract:0,elbow_flex:12,forearm_pron:90,wrist_flex:0,wrist_dev:3,grip:.8}}],Pu=[{from:0,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:7,type:"eccentric"},{from:7,to:8,type:"rest"}],Lu={delts_side:{role:"prime",concentric:.85,eccentric:.68,isometric:.8},rotator_cuff:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},traps:{role:"synergist",concentric:.4,eccentric:.3,isometric:.35},serratus:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},delts_front:{role:"synergist",concentric:.35,eccentric:.2,isometric:.3},upper_back:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.25},delts_rear:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.2},forearms:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},erector_spinae:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.15},abs:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.12},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},Du=[{segment:0,text:"Lead with the elbows, not the hands, and keep shoulders down away from the ears"},{segment:1,text:"Stop at shoulder height with the thumbs level, arms straight out to the sides"},{segment:2,text:"Lower slowly, about twice as slow as the lift, and do not swing the trunk"}],Iu="exhale as you raise, inhale as you lower",Nu=30,Uu="Assumptions: symmetric arms, moderate dumbbells (about 6 to 10 kg each), strict form. On the way up the arms run a few degrees ahead of straight sideways (6 at 1.0 s) and finish straight out to the sides (a front-raise look was corrected after review); Top: abd 90, flex 45, sh_rot 25, elbow_flex 8: with a large abd a big sh_flex only rolls the arm (palm forward, dumbbell nose-down), so flex is kept modest and sh_rot is raised with it; palms face down, handles level, hands at shoulder height. The via-points on the way up and down carry the same flex/rot ratio so the hand turns smoothly. The 1.0 s via-point (e about 80) sits at the minimum-jerk position. Lift 1.35 s, top pause 0.25 s, lower 2.3 s, bottom pause 0.4 s, rep 4.3 s. Feet flat, trunk near upright (knee 3, ankle 2). Shrug stays at or below 0 to match the cue. EMG levels are approximate relative values from the shoulder literature, not measured on this model.",Fu={id:Tu,name:Au,equipment:Ru,contacts:ku,keys:Cu,segments:Pu,activation:Lu,cues:Du,breathing:Iu,view_yaw:Nu,notes:Uu},Ou="lateral_to_front_raise",zu="Dumbbell lateral to front raise",Bu="dumbbells",Gu=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Hu=[{time_s:0,stop:!0,label:"bottom, dumbbells in front of the thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:6,sh_flex:8,sh_rot:3,shrug:-2,protract:0,elbow_flex:12,forearm_pron:110,wrist_dev:3}},{time_s:.5,stop:!1,label:"lift out to the side, elbows lead (about 35 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-.5,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:34,sh_flex:12,sh_rot:6,shrug:-1,protract:0,elbow_flex:12,forearm_pron:105,wrist_dev:3}},{time_s:.95,stop:!1,label:"lift, slowing toward shoulder height",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:78,sh_flex:32,sh_rot:22,shrug:0,protract:1,elbow_flex:9,forearm_pron:115,wrist_dev:3}},{time_s:1.3,stop:!1,label:"side top, arms out to the sides at shoulder height",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-2,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:90,sh_flex:45,sh_rot:25,shrug:-1,protract:2,elbow_flex:8,forearm_pron:125,wrist_dev:3}},{time_s:1.75,stop:!1,label:"sweep forward at shoulder height (about 30 deg forward)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-2,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:60,sh_flex:88,sh_rot:20,shrug:0,protract:2,elbow_flex:9,forearm_pron:145,wrist_dev:3}},{time_s:2.2,stop:!1,label:"sweep, arms 60 deg forward of the side",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-2,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:25,sh_flex:88,sh_rot:16,shrug:0,protract:2,elbow_flex:10,forearm_pron:160,wrist_dev:3}},{time_s:2.55,stop:!0,label:"front top, arms in front of the shoulders",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:4,sh_flex:82,sh_rot:15,shrug:0,protract:2,elbow_flex:13,forearm_pron:168,wrist_dev:3}},{time_s:2.8,stop:!0,label:"top pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1.5,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:4,sh_flex:82,sh_rot:15,shrug:0,protract:2,elbow_flex:13,forearm_pron:168,wrist_dev:3}},{time_s:3.8,stop:!1,label:"lowering in front, controlled (about 50 deg)",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-1,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:4,sh_flex:52,sh_rot:12,shrug:-1,protract:1,elbow_flex:13,forearm_pron:150,wrist_dev:3}},{time_s:4.6,stop:!1,label:"lowering, hands pass the belt",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:-.5,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:5,sh_flex:22,sh_rot:6,shrug:-1,protract:0,elbow_flex:12,forearm_pron:125,wrist_dev:3}},{time_s:5,stop:!0,label:"bottom, dumbbells in front of the thighs",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:6,sh_flex:8,sh_rot:3,shrug:-2,protract:0,elbow_flex:12,forearm_pron:110,wrist_dev:3}},{time_s:5.4,stop:!0,label:"bottom pause",pose:{knee_flex:3,ankle_dorsi:2,hip_flex:0,spine_flex:0,neck_flex:0,wrist_flex:0,grip:.8,sh_abd:6,sh_flex:8,sh_rot:3,shrug:-2,protract:0,elbow_flex:12,forearm_pron:110,wrist_dev:3}}],Vu=[{from:0,to:6,type:"concentric"},{from:6,to:7,type:"isometric"},{from:7,to:10,type:"eccentric"},{from:10,to:11,type:"rest"}],Wu={delts_side:{role:"prime",concentric:.8,eccentric:.6,isometric:.5},delts_front:{role:"prime",concentric:.75,eccentric:.6,isometric:.8},traps:{role:"synergist",concentric:.4,eccentric:.3,isometric:.35},serratus:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},rotator_cuff:{role:"synergist",concentric:.4,eccentric:.3,isometric:.35},chest:{role:"synergist",concentric:.2,eccentric:.15,isometric:.2},upper_back:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.22},delts_rear:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.15},biceps:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},forearms:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},erector_spinae:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.15},abs:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.15},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},$u=[{segment:0,text:"Lead with the elbows out to the sides, then sweep the arms forward at shoulder height"},{segment:1,text:"Hold in front of the shoulders, no higher, and do not lean back"},{segment:2,text:"Lower slowly in front to the thighs, with no swing"}],qu="exhale as you raise, inhale as you lower",Xu=40,Yu="Based on lateral_raise and front_raise. Out to the sides to shoulder height (abd 90, flex 45, sh_rot 25 as in lateral_raise; hand 60 cm out, level with the shoulder, handle 2 deg off level), then a horizontal sweep forward (flex about 88 with abd falling 90 to 4, so the hands stay at shoulder height) to the front_raise top (abd 4, flex 82: hand 60 cm ahead, 1 cm below shoulder, palm down, handle 11 deg off level). Lowered in front to the thighs; the next rep goes out to the side again. Mid-sweep (about 1.95 s) the handle is 24 deg off level while the palm turns, which is acceptable in motion. Lift out 1.3 s, sweep 1.25 s, top pause 0.25 s, lower 2.2 s, bottom pause 0.4 s, rep 5.4 s. Solver adjust 2.1 deg max; balanced (CoM 0.32 to 0.68 of the base). Checked 3/4 strip on the male body, plus female front/3/4 and male side/front at the tops; arms clear of the trunk. At the front top the two dumbbell ends sit close together in front of the shoulders. Not checked: inspect-symmetry and inspect-guards (not run). EMG levels are approximate, not measured on this model.",Ku={id:Ou,name:zu,equipment:Bu,contacts:Gu,keys:Hu,segments:Vu,activation:Wu,cues:$u,breathing:qu,view_yaw:Xu,notes:Yu},Zu="overhead_press",Ju="Dumbbell overhead press",Qu="dumbbells",ju=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],ep=[{time_s:0,stop:!0,label:"rack",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}},{time_s:.6,stop:!0,label:"rack settled",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}},{time_s:1.2,stop:!1,label:"past the face",pose:{spine_flex:-1,neck_flex:-4,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:100,sh_abd:35,sh_rot:4,shrug:9,protract:6,elbow_flex:78,forearm_pron:60,wrist_flex:-5,wrist_dev:0,grip:.9}},{time_s:1.8,stop:!0,label:"lockout",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:178,sh_abd:8,sh_rot:-8,shrug:12,protract:8,elbow_flex:4,forearm_pron:70,wrist_flex:0,wrist_dev:0,grip:.9}},{time_s:2.3,stop:!0,label:"lockout hold",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:178,sh_abd:8,sh_rot:-8,shrug:12,protract:8,elbow_flex:4,forearm_pron:70,wrist_flex:0,wrist_dev:0,grip:.9}},{time_s:3.3,stop:!1,label:"lowering, elbows leading forward and slightly out",pose:{spine_flex:0,neck_flex:-2,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:90,sh_abd:26,sh_rot:0,shrug:7,protract:4,elbow_flex:95,forearm_pron:58,wrist_flex:-8,wrist_dev:0,grip:.9}},{time_s:4.2,stop:!0,label:"rack",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}}],tp=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],ip={delts_front:{role:"prime",concentric:.8,eccentric:.5,isometric:.4},delts_side:{role:"prime",concentric:.65,eccentric:.4,isometric:.35},triceps:{role:"prime",concentric:.65,eccentric:.4,isometric:.3},traps:{role:"synergist",concentric:.5,eccentric:.3,isometric:.45},serratus:{role:"synergist",concentric:.5,eccentric:.3,isometric:.4},chest:{role:"synergist",concentric:.3,eccentric:.2,isometric:.1},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.25},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.22},erector_spinae:{role:"stabilizer",concentric:.3,eccentric:.28,isometric:.28},glutes:{role:"stabilizer",concentric:.2,eccentric:.18,isometric:.2},forearms:{role:"stabilizer",concentric:.28,eccentric:.28,isometric:.28},biceps:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.12},quads:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},calves:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},upper_back:{role:"stabilizer",concentric:.25,eccentric:.22,isometric:.25},lats:{role:"stabilizer",concentric:.1,eccentric:.15,isometric:.12}},np=[{segment:1,text:"Press up and slightly back so the weights finish over your shoulders"},{segment:1,text:"Ribs down, squeeze glutes, do not lean back"},{segment:2,text:"Biceps by your ears, shrug up into the weights, stand tall"},{segment:3,text:"Lower under control until your forearms are vertical"}],sp="breathe in and brace at the rack, hold the brace through the press and breathe out at lockout, breathe in again on the way down",rp=50,op="Symmetric standing two-dumbbell press, feet flat hip width. Rack: sh_flex 25, abd 55, rot -40, elbow 120, pronation 85, so the hands sit about 16 cm ahead of and 19 cm outside the shoulder joints with forearms vertical; the weights no longer overlap the cheek in the side view. Lockout sh_flex 178, abd 8, shrug 12 (scapula meshes still flare overhead). Press 1.2 s, 0.5 s hold, 1.9 s lowering, 0.5 s rack settle.",ap={id:Zu,name:Ju,equipment:Qu,contacts:ju,keys:ep,segments:tp,activation:ip,cues:np,breathing:sp,view_yaw:rp,notes:op},lp="palms_in_press",cp="Dumbbell neutral-grip overhead press",hp="dumbbells",fp=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],dp=[{time_s:0,stop:!0,label:"rack",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:35,sh_abd:28,sh_rot:0,shrug:4,protract:0,elbow_flex:140,wrist_flex:-8}},{time_s:.6,stop:!0,label:"rack settled",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:35,sh_abd:28,sh_rot:0,shrug:4,protract:0,elbow_flex:140,wrist_flex:-8}},{time_s:1.2,stop:!1,label:"past the face",pose:{spine_flex:-1,neck_flex:-4,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:115,sh_abd:14,sh_rot:0,shrug:9,protract:6,elbow_flex:70,wrist_flex:-5}},{time_s:1.8,stop:!0,label:"lockout",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:176,sh_abd:7,sh_rot:0,shrug:12,protract:8,elbow_flex:4,wrist_flex:0}},{time_s:2.3,stop:!0,label:"lockout hold",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:176,sh_abd:7,sh_rot:0,shrug:12,protract:8,elbow_flex:4,wrist_flex:0}},{time_s:3.3,stop:!1,label:"lowering, elbows leading forward",pose:{spine_flex:0,neck_flex:-2,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:100,sh_abd:15,sh_rot:0,shrug:7,protract:4,elbow_flex:90,wrist_flex:-6}},{time_s:4.2,stop:!0,label:"rack",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:0,grip:.9,forearm_pron:90,sh_flex:35,sh_abd:28,sh_rot:0,shrug:4,protract:0,elbow_flex:140,wrist_flex:-8}}],up=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],pp={delts_front:{role:"prime",concentric:.8,eccentric:.5,isometric:.4},delts_side:{role:"prime",concentric:.65,eccentric:.4,isometric:.35},triceps:{role:"prime",concentric:.65,eccentric:.4,isometric:.3},traps:{role:"synergist",concentric:.5,eccentric:.3,isometric:.45},serratus:{role:"synergist",concentric:.5,eccentric:.3,isometric:.4},chest:{role:"synergist",concentric:.3,eccentric:.2,isometric:.1},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.25},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.22},erector_spinae:{role:"stabilizer",concentric:.3,eccentric:.28,isometric:.28},glutes:{role:"stabilizer",concentric:.2,eccentric:.18,isometric:.2},forearms:{role:"stabilizer",concentric:.28,eccentric:.28,isometric:.28},biceps:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.12},quads:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},calves:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},upper_back:{role:"stabilizer",concentric:.25,eccentric:.22,isometric:.25},lats:{role:"stabilizer",concentric:.1,eccentric:.15,isometric:.12}},_p=[{segment:1,text:"Palms face each other, press straight up with the elbows in front"},{segment:1,text:"Ribs down, squeeze glutes, do not lean back"},{segment:2,text:"Biceps by your ears, shrug up into the weights"},{segment:3,text:"Lower under control until your forearms are vertical"}],mp="breathe in and brace at the rack, hold the brace through the press and breathe out at lockout, breathe in again on the way down",gp=40,xp="Neutral-grip standing press, overhead_press base. Palms face each other throughout (forearm_pron 90). Rack: sh_flex 35, abd 28, elbow 140, grip about 149 cm, 6 cm below the first version, forearms vertical, elbows in front of the body. inspect-clip adjust 1.3 deg (recheck after the rack change). Balance, symmetry and guards not run (symmetric by construction).",bp={id:lp,name:cp,equipment:hp,contacts:fp,keys:dp,segments:up,activation:pp,cues:_p,breathing:mp,view_yaw:gp,notes:xp},vp="plank",wp="Forearm plank",Sp="none",yp=[{point:"l_forearm",support:"floor"},{point:"r_forearm",support:"floor"},{point:"l_toes",support:"floor"},{point:"r_toes",support:"floor"}],Mp=[{time_s:0,stop:!0,label:"end exhale",pose:{spine_flex:0,neck_flex:-5.5,hip_flex:0,knee_flex:0,ankle_dorsi:14,toe_ext:68,sh_flex:83,sh_abd:3,sh_rot:0,elbow_flex:90,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.55,shrug:-4.5,protract:11}},{time_s:2,stop:!1,label:"inhale",pose:{spine_flex:-3,neck_flex:-6.5,hip_flex:1.5,knee_flex:0,ankle_dorsi:15,toe_ext:67,sh_flex:83,sh_abd:3,sh_rot:0,elbow_flex:90,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.55,shrug:-3,protract:9}},{time_s:4,stop:!0,label:"end exhale",pose:{spine_flex:0,neck_flex:-5.5,hip_flex:0,knee_flex:0,ankle_dorsi:14,toe_ext:68,sh_flex:83,sh_abd:3,sh_rot:0,elbow_flex:90,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.55,shrug:-4.5,protract:11}}],Ep=[{from:0,to:2,type:"isometric"}],Tp={obliques:{role:"prime",isometric:.55},abs:{role:"prime",isometric:.4},serratus:{role:"synergist",isometric:.45},glutes:{role:"synergist",isometric:.35},rectus_femoris:{role:"synergist",isometric:.3},delts_front:{role:"synergist",isometric:.3},chest:{role:"synergist",isometric:.25},quads:{role:"stabilizer",isometric:.25},lats:{role:"stabilizer",isometric:.25},erector_spinae:{role:"stabilizer",isometric:.25},upper_back:{role:"stabilizer",isometric:.22},rotator_cuff:{role:"stabilizer",isometric:.2},hamstrings:{role:"stabilizer",isometric:.18},hip_flexors:{role:"stabilizer",isometric:.18},calves:{role:"stabilizer",isometric:.15},triceps:{role:"stabilizer",isometric:.08}},Ap=[{segment:0,text:"Elbows under shoulders, push the floor away"},{segment:0,text:"Ribs down, tuck the tailbone a little"},{segment:0,text:"Squeeze glutes and thighs: one line from head to heels"},{segment:0,text:"Do not let the hips sag or pike up"},{segment:0,text:"Look at the floor between your hands and breathe slowly"}],Rp="slow breaths: inhale about 2 s, exhale and brace about 2 s, never hold your breath",kp=90,Cp="Forearm plank, 4 s loop: stop at end exhale (t 0 and 4), one non-stop via at full inhale (t 2). Forearms and toes are the contacts; hips and knees at 0, upper arm near vertical (sh_flex 83), forearm flat (elbow_flex 90), toes flat (ankle_dorsi + toe_ext about 82), neutral hands with a loose fist, gaze on the floor ahead. Breath is a small motion: spine_flex 0 to -3, neck_flex -5.5 to -6.5, shrug and protract shifts, hip_flex 0 to 1.5. Changed: spine_flex was 2.5 to -0.5; in renders that left a slight lumbar hump with the pelvis a little above the shoulder-ankle line, now 0 to -3 which reads straighter. Activation values are judgement from plank EMG studies, approximate.",Pp={id:vp,name:wp,equipment:Sp,contacts:yp,keys:Mp,segments:Ep,activation:Tp,cues:Ap,breathing:Rp,view_yaw:kp,notes:Cp},Lp="pull_up",Dp="Pull-up",Ip="pullup_bar",Np=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],Up=[{time_s:0,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8}},{time_s:.5,stop:!0,label:"hang pause, shoulders set",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8}},{time_s:.8,stop:!1,label:"scapulae depress first, elbows barely bend",pose:{grip:1,wrist_dev:9,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-6,sh_flex:174,sh_abd:11,sh_rot:44,shrug:-9,protract:-3,elbow_flex:12,forearm_pron:151,wrist_flex:-4,hip_flex:0,knee_flex:10}},{time_s:1.05,stop:!1,label:"elbow-led pull begins",pose:{grip:1,wrist_dev:21,toe_ext:-5,ankle_dorsi:-25,spine_flex:-4,neck_flex:-8,sh_flex:160,sh_abd:23,sh_rot:41,shrug:-9,protract:-6,elbow_flex:49,forearm_pron:151,wrist_flex:4,hip_flex:-1,knee_flex:12}},{time_s:1.5,stop:!1,label:"mid pull, chest rises to the bar",pose:{grip:1,wrist_dev:28,toe_ext:-5,ankle_dorsi:-25,spine_flex:-7,neck_flex:-6,sh_flex:108,sh_abd:27,sh_rot:19,shrug:-8,protract:-11,elbow_flex:102,forearm_pron:169,wrist_flex:13,hip_flex:-2,knee_flex:16}},{time_s:2,stop:!0,label:"top, chin over bar",pose:{grip:1,wrist_dev:23,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-8,sh_flex:30,sh_abd:26,sh_rot:-4,shrug:-6,protract:-14,elbow_flex:150,forearm_pron:170,wrist_flex:9,hip_flex:-3,knee_flex:22}},{time_s:2.5,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:23,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-8,sh_flex:30,sh_abd:26,sh_rot:-4,shrug:-6,protract:-14,elbow_flex:150,forearm_pron:170,wrist_flex:11,hip_flex:-3,knee_flex:22}},{time_s:3.5,stop:!1,label:"controlled lowering, shoulders stay down",pose:{grip:1,wrist_dev:25,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-6,sh_flex:128,sh_abd:25,sh_rot:24,shrug:-8,protract:-8,elbow_flex:81,forearm_pron:166,wrist_flex:9,hip_flex:-1,knee_flex:16}},{time_s:4.5,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8}}],Fp=[{from:0,to:1,type:"isometric"},{from:1,to:5,type:"concentric"},{from:5,to:6,type:"isometric"},{from:6,to:8,type:"eccentric"}],Op={lats:{role:"prime",concentric:.85,eccentric:.5,isometric:.6},biceps:{role:"synergist",concentric:.6,eccentric:.4,isometric:.5},brachialis:{role:"synergist",concentric:.5,eccentric:.35,isometric:.45},brachioradialis:{role:"synergist",concentric:.45,eccentric:.3,isometric:.4},forearms:{role:"stabilizer",concentric:.6,eccentric:.6,isometric:.6},traps:{role:"synergist",concentric:.6,eccentric:.4,isometric:.4},upper_back:{role:"synergist",concentric:.55,eccentric:.3,isometric:.3},rhomboids:{role:"synergist",concentric:.4,eccentric:.25,isometric:.25},rotator_cuff:{role:"stabilizer",concentric:.35,eccentric:.3,isometric:.3},delts_rear:{role:"synergist",concentric:.35,eccentric:.2,isometric:.2},chest:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.15},serratus:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.25},triceps:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.15},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},hip_flexors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},glutes:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.2},hamstrings:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2}},zp=[{segment:0,text:"Hang with arms straight and shoulders pulled down away from your ears"},{segment:1,text:"Pull your elbows down toward your ribs, chest up to the bar"},{segment:2,text:"Chin over the bar by lifting the chest, keep the neck long and don't crane; no kicking or swinging"},{segment:3,text:"Lower slowly until the arms are straight again, shoulders stay set"}],Bp="inhale in the hang, exhale on the way up, inhale on the way down",Gp=150,Hp="Wide pronated grip pinned to the bar. 0.5 s hang pause, scapulae depress, elbow-led pull over 1.5 s to chin at the bar, 0.5 s top pause, 2.0 s lowering back to a straight-arm hang. Checked in side, front and three-quarter renders. Top neck extension reduced to -8 (via-points -6) and top spine extension to -6, so the head ends roughly level and the chest arches less; chin still reaches the bar.",Vp={id:Lp,name:Dp,equipment:Ip,contacts:Np,keys:Up,segments:Fp,activation:Op,cues:zp,breathing:Bp,view_yaw:Gp,notes:Hp},Wp="push_press",$p="Dumbbell push press",qp="dumbbells",Xp=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],Yp=[{time_s:0,stop:!0,label:"rack",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}},{time_s:.5,stop:!0,label:"rack settled",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}},{time_s:.95,stop:!0,label:"dip",pose:{spine_flex:0,neck_flex:0,hip_flex:20,knee_flex:30,ankle_dorsi:12,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}},{time_s:1.3,stop:!1,label:"drive, bar passes the face",pose:{spine_flex:-1,neck_flex:-4,hip_flex:4,knee_flex:4,ankle_dorsi:2,sh_flex:95,sh_abd:36,sh_rot:4,shrug:9,protract:6,elbow_flex:85,forearm_pron:60,wrist_flex:-5,wrist_dev:0,grip:.9}},{time_s:1.75,stop:!0,label:"lockout",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:178,sh_abd:8,sh_rot:-8,shrug:12,protract:8,elbow_flex:4,forearm_pron:70,wrist_flex:0,wrist_dev:0,grip:.9}},{time_s:2.25,stop:!0,label:"lockout hold",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:178,sh_abd:8,sh_rot:-8,shrug:12,protract:8,elbow_flex:4,forearm_pron:70,wrist_flex:0,wrist_dev:0,grip:.9}},{time_s:3.4,stop:!1,label:"lowering",pose:{spine_flex:0,neck_flex:-2,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:90,sh_abd:26,sh_rot:0,shrug:7,protract:4,elbow_flex:95,forearm_pron:58,wrist_flex:-8,wrist_dev:0,grip:.9}},{time_s:4.3,stop:!0,label:"rack",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,sh_flex:25,sh_abd:55,sh_rot:-40,shrug:4,protract:0,elbow_flex:120,forearm_pron:85,wrist_flex:-10,wrist_dev:0,grip:.9}}],Kp=[{from:0,to:1,type:"isometric"},{from:1,to:2,type:"eccentric"},{from:2,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:7,type:"eccentric"}],Zp={delts_front:{role:"prime",concentric:.65,eccentric:.5,isometric:.4},delts_side:{role:"prime",concentric:.65,eccentric:.4,isometric:.35},triceps:{role:"prime",concentric:.6,eccentric:.4,isometric:.3},traps:{role:"synergist",concentric:.5,eccentric:.3,isometric:.45},serratus:{role:"synergist",concentric:.5,eccentric:.3,isometric:.4},chest:{role:"synergist",concentric:.3,eccentric:.2,isometric:.1},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.25},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.22},erector_spinae:{role:"stabilizer",concentric:.3,eccentric:.28,isometric:.28},glutes:{role:"synergist",concentric:.55,eccentric:.35,isometric:.2},forearms:{role:"stabilizer",concentric:.28,eccentric:.28,isometric:.28},biceps:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.12},quads:{role:"prime",concentric:.7,eccentric:.45,isometric:.15},calves:{role:"synergist",concentric:.4,eccentric:.25,isometric:.12},upper_back:{role:"stabilizer",concentric:.25,eccentric:.22,isometric:.25},lats:{role:"stabilizer",concentric:.1,eccentric:.15,isometric:.12}},Jp=[{segment:1,text:"Quick shallow dip, chest tall, heels down"},{segment:2,text:"Drive through the floor and punch the weights up"},{segment:3,text:"Lock out over your ears, stand tall"},{segment:4,text:"Lower to your shoulders and soften the knees"}],Qp="breathe in and brace at the rack, hold through the dip and drive, breathe out at lockout, breathe in on the way down",jp=60,e_="Based on overhead_press. Dip 20 deg hip, 30 knee, 12 ankle so the trunk stays upright; legs extend as the press starts, lockout as in the strict press. Checked: solver adjust 1.3 deg, balance 0.34 to 0.63 of base, side/front/three-quarter views on both bodies. Dip is a brief stop key for readability; a real push press has no pause there.",t_={id:Wp,name:$p,equipment:qp,contacts:Xp,keys:Yp,segments:Kp,activation:Zp,cues:Jp,breathing:Qp,view_yaw:jp,notes:e_},i_="pushup",n_="Push-up",s_="none",r_=[{point:"l_palm",support:"floor"},{point:"r_palm",support:"floor"},{point:"l_toes",support:"floor"},{point:"r_toes",support:"floor"}],o_=[{time_s:0,stop:!0,label:"top plank, shoulder blades spread",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:18,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:.3,stop:!0,label:"top hold",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:18,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:.9,stop:!1,label:"lowering begins, head drops a touch, elbows still close",pose:{neck_flex:-14,spine_flex:-1,sh_flex:43,sh_abd:21,sh_rot:-17,protract:15,elbow_flex:49,forearm_pron:170,wrist_flex:-61,wrist_dev:17,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:14,toe_ext:59.5}},{time_s:1.35,stop:!1,label:"lowering, elbows bending first at about 12 degrees, then opening toward 35",pose:{neck_flex:-16,sh_flex:21,sh_abd:24,sh_rot:-22,protract:8,elbow_flex:85,forearm_pron:160,wrist_flex:-48,wrist_dev:21,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:17,toe_ext:62}},{time_s:1.85,stop:!1,label:"lowering, slowing near the floor, elbows opening",pose:{neck_flex:-14,sh_flex:-4,sh_abd:35,sh_rot:-26,protract:-2,elbow_flex:104,forearm_pron:143,wrist_flex:-55,wrist_dev:32,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:21,toe_ext:65}},{time_s:2.3,stop:!0,label:"bottom, chest a fist above the floor",pose:{neck_flex:-14,sh_flex:-11,sh_abd:39,sh_rot:-28,protract:-8,elbow_flex:105,forearm_pron:139,wrist_flex:-60,wrist_dev:34,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:21,toe_ext:66}},{time_s:2.9,stop:!1,label:"pressing, hips lead a hair, elbows closer to the ribs",pose:{neck_flex:-16,spine_flex:2,sh_flex:20,sh_abd:26,sh_rot:-23,protract:4,elbow_flex:90,forearm_pron:155,wrist_flex:-46,wrist_dev:22,grip:0,hip_flex:2,hip_abd:3,knee_flex:0,ankle_dorsi:17,toe_ext:62}},{time_s:3.25,stop:!1,label:"pressing, shoulder blades starting to spread",pose:{neck_flex:-14,sh_flex:39,sh_abd:22,sh_rot:-17,protract:12,elbow_flex:59,forearm_pron:166,wrist_flex:-56,wrist_dev:19,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:15,toe_ext:59.5}},{time_s:3.6,stop:!0,label:"top plank, shoulder blades spread",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:18,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}}],a_=[{from:0,to:1,type:"isometric"},{from:1,to:5,type:"eccentric"},{from:5,to:8,type:"concentric"}],l_={chest:{role:"prime",concentric:.65,eccentric:.55,isometric:.3},triceps:{role:"prime",concentric:.65,eccentric:.45,isometric:.3},delts_front:{role:"synergist",concentric:.55,eccentric:.4,isometric:.25},serratus:{role:"synergist",concentric:.55,eccentric:.45,isometric:.4},abs:{role:"stabilizer",concentric:.35,eccentric:.35,isometric:.35},obliques:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},rotator_cuff:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.2},glutes:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},upper_back:{role:"stabilizer",concentric:.2,eccentric:.3,isometric:.2},lower_back:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},forearms:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},lats:{role:"stabilizer",concentric:.15,eccentric:.2,isometric:.15},calves:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.25},hip_flexors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},biceps:{role:"stabilizer",concentric:.1,eccentric:.15,isometric:.1}},c_=[{segment:0,text:"Hands a little wider than your shoulders; squeeze glutes and brace abs so your body is one straight line from head to heels, neck neutral"},{segment:1,text:"Bend the elbows, angled about 35 to 45 degrees from your ribs, and lower your chest to a fist above the floor"},{segment:1,text:"Keep the ribs down and the hips level, no sagging"},{segment:2,text:"Push the floor away and keep your hips and chest rising together"},{segment:2,text:"Finish by spreading your shoulder blades wide, without sagging"}],h_="inhale on the way down, exhale on the way up",f_=90,d_="Standard push-up from a straight plank: 0.3 s top hold, 2.0 s lowering, single turnaround at the bottom, 1.3 s press. Elbows stay near the ribs in the upper half of the descent and open to about 35 degrees below; shoulder blades spread at the top and retract at the bottom. Hips, knees and spine stay in line. Checked in side, front and three-quarter renders: body line, hand and toe contacts and range looked correct. Arm angles were then matched to what the contact solver settled on (hands about 25 out from the shoulder at the top, 39 at the bottom with the shoulder turned out 28, wrist and forearm angles to suit the planted, forward-pointing palms), so the solver now changes under 6 degrees and the look is unchanged.",u_={id:i_,name:n_,equipment:s_,contacts:r_,keys:o_,segments:a_,activation:l_,cues:c_,breathing:h_,view_yaw:f_,notes:d_},p_="rear_delt_fly",__="Bent-over dumbbell reverse fly",m_="dumbbells",g_=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],x_=[{time_s:0,stop:!0,label:"bottom, arms hang under the shoulders",pose:{spine_flex:2,spine_side:0,spine_twist:0,neck_flex:-9,sh_flex:50,sh_abd:6,sh_rot:0,shrug:0,protract:4,elbow_flex:14,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:.3,stop:!0,label:"bottom pause, shoulder blades set",pose:{spine_flex:2,spine_side:0,spine_twist:0,neck_flex:-9,sh_flex:50,sh_abd:6,sh_rot:0,shrug:0,protract:4,elbow_flex:14,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:.75,stop:!1,label:"opening, elbows lead the arc",pose:{spine_flex:1,spine_side:0,spine_twist:0,neck_flex:-10,sh_flex:42,sh_abd:36,sh_rot:-3,shrug:0,protract:-2,elbow_flex:15,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:1.5,stop:!0,label:"top, upper arms level with the back, blades squeezed",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-11,sh_flex:18,sh_abd:84,sh_rot:-10,shrug:-2,protract:-14,elbow_flex:16,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:1.9,stop:!0,label:"top pause, squeeze",pose:{spine_flex:0,spine_side:0,spine_twist:0,neck_flex:-11,sh_flex:18,sh_abd:84,sh_rot:-10,shrug:-2,protract:-14,elbow_flex:16,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:3,stop:!1,label:"lowering, controlled",pose:{spine_flex:1,spine_side:0,spine_twist:0,neck_flex:-10,sh_flex:40,sh_abd:40,sh_rot:-3,shrug:0,protract:-1,elbow_flex:15,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}},{time_s:3.9,stop:!0,label:"bottom, arms hang under the shoulders",pose:{spine_flex:2,spine_side:0,spine_twist:0,neck_flex:-9,sh_flex:50,sh_abd:6,sh_rot:0,shrug:0,protract:4,elbow_flex:14,forearm_pron:90,wrist_flex:0,wrist_dev:0,grip:.9,hip_flex:71,hip_abd:5,hip_rot:-4,knee_flex:36,ankle_dorsi:12,toe_ext:0}}],b_=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],v_={delts_rear:{role:"prime",concentric:.85,eccentric:.6,isometric:.8},rhomboids:{role:"prime",concentric:.65,eccentric:.45,isometric:.65},traps:{role:"synergist",concentric:.55,eccentric:.4,isometric:.55},delts_side:{role:"synergist",concentric:.35,eccentric:.25,isometric:.3},rotator_cuff:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},upper_back:{role:"synergist",concentric:.4,eccentric:.3,isometric:.4},triceps:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.2},forearms:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},erector_spinae:{role:"stabilizer",concentric:.5,eccentric:.5,isometric:.5},glutes:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},hamstrings:{role:"stabilizer",concentric:.35,eccentric:.35,isometric:.35},abs:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2}},w_=[{segment:0,text:"Hinge with a flat back, soft elbows, arms hanging under the shoulders"},{segment:1,text:"Open the arms out in a wide arc, leading with the elbows"},{segment:2,text:"Upper arms level with your back, pinch the shoulder blades"},{segment:3,text:"Lower slowly over two seconds, no swinging"}],S_="exhale as you open the arms, inhale as you lower",y_=45,M_="Both arms open together from the bent_over_row hinge (hip 71, knee 36, ankle_dorsi 12, trunk about 49 deg forward). Arms hang under the shoulders with a soft elbow (14-16), open in an arc to upper arms level with the back (sh_abd 84, sh_flex 18), blades squeezed (protract -14). Large sh_abd rolls the arm, so sh_rot is brought to -10 with pron 90 at the top: inspect-hold shows palm down, handle 4 deg off level. Rep 3.9 s: 0.3 s bottom pause, 1.2 s open, 0.4 s squeeze, 2.0 s lower. Checked: solver adjust 6 deg (ankle, balance leaning over the dumbbells), balanced (COM 0.67-0.68 of base), seen from side, front, three-quarter, male and female. Activation isometric values describe the top squeeze. EMG levels are approximate.",E_={id:p_,name:__,equipment:m_,contacts:g_,keys:x_,segments:b_,activation:v_,cues:w_,breathing:S_,view_yaw:y_,notes:M_},T_="reverse_curl",A_="Dumbbell reverse curl",R_="dumbbells",k_=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],C_=[{time_s:0,stop:!0,label:"bottom",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.4,stop:!0,label:"bottom pause",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:.9,stop:!1,label:"lift, thumbs up",pose:{spine_flex:-.5,neck_flex:2,sh_flex:1,sh_abd:6,sh_rot:0,shrug:-3,protract:-3,elbow_flex:62,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:1.3,stop:!1,label:"lift, sticking region",pose:{spine_flex:-1,neck_flex:1,sh_flex:4,sh_abd:4,sh_rot:0,shrug:-3,protract:-2.5,elbow_flex:120,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:1.6,stop:!0,label:"top",pose:{spine_flex:-1.5,neck_flex:0,sh_flex:6,sh_abd:3,sh_rot:0,shrug:-3,protract:-2,elbow_flex:140,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:1.9,stop:!0,label:"top squeeze",pose:{spine_flex:-1.5,neck_flex:0,sh_flex:6,sh_abd:3,sh_rot:0,shrug:-3,protract:-2,elbow_flex:140,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}},{time_s:2.35,stop:!1,label:"lower, first third",pose:{spine_flex:-1.3,neck_flex:1,sh_flex:5,sh_abd:4,sh_rot:0,shrug:-3,protract:-2.5,elbow_flex:120,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:2.85,stop:!1,label:"lower, controlled mid",pose:{spine_flex:-.8,neck_flex:2,sh_flex:3,sh_abd:5,sh_rot:0,shrug:-3,protract:-3,elbow_flex:78,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.9,hip_flex:0,knee_flex:4,ankle_dorsi:4,toe_ext:0}},{time_s:3.35,stop:!1,label:"lower, slowing into the bottom",pose:{spine_flex:-.3,neck_flex:2.5,sh_flex:0,sh_abd:7,sh_rot:0,shrug:-3,protract:-3,elbow_flex:30,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.88,hip_flex:0,knee_flex:3.5,ankle_dorsi:3.5,toe_ext:0}},{time_s:3.9,stop:!0,label:"bottom",pose:{spine_flex:0,neck_flex:3,sh_flex:-3,sh_abd:8,sh_rot:0,shrug:-3,protract:-3,elbow_flex:3,forearm_pron:165,wrist_flex:-2,wrist_dev:0,grip:.85,hip_flex:0,knee_flex:3,ankle_dorsi:3,toe_ext:0}}],P_=[{from:0,to:1,type:"isometric"},{from:1,to:4,type:"concentric"},{from:4,to:5,type:"isometric"},{from:5,to:9,type:"eccentric"}],L_={brachioradialis:{role:"prime",concentric:.8,eccentric:.58,isometric:.25},brachialis:{role:"prime",concentric:.75,eccentric:.55,isometric:.22},biceps:{role:"synergist",concentric:.4,eccentric:.3,isometric:.14},forearms:{role:"prime",concentric:.6,eccentric:.45,isometric:.35},delts_front:{role:"synergist",concentric:.2,eccentric:.16,isometric:.12},traps:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.1},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.15},abs:{role:"stabilizer",concentric:.15,eccentric:.12,isometric:.12},glutes:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},quads:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},D_=[{segment:1,text:"Palms face down the whole way; elbows pinned at your ribs"},{segment:1,text:"Keep your wrists straight, knuckles leading up"},{segment:2,text:"Squeeze the forearms at the top, no swinging from the hips"},{segment:3,text:"Lower for about two seconds, stopping just short of locking out"}],I_="exhale as you curl up, inhale as you lower",N_=35,U_="Rep 3.9 s like dumbbell_curl. Overhand grip held on every key: forearm_pron 165, wrist_dev 0, wrist_flex -2 (straight). Trunk within 1.5 deg, elbow 3 to 140, upper arms still.",F_={id:T_,name:A_,equipment:R_,contacts:k_,keys:C_,segments:P_,activation:L_,cues:D_,breathing:I_,view_yaw:N_,notes:U_},O_="romanian_deadlift",z_="Dumbbell Romanian deadlift",B_="dumbbells",G_=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],H_=[{time_s:0,stop:!0,label:"stand tall, dumbbells at thighs",pose:{spine_flex:0,neck_flex:0,hip_flex:5,hip_abd:2,hip_rot:-6,knee_flex:8,ankle_dorsi:3,sh_flex:8,sh_abd:4,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:.3,stop:!0,label:"set: brace, lats on, ribs down",pose:{spine_flex:0,neck_flex:0,hip_flex:5,hip_abd:2,hip_rot:-6,knee_flex:8,ankle_dorsi:3,sh_flex:8,sh_abd:4,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:.95,stop:!1,label:"knees unlock, hips start back",pose:{spine_flex:0,neck_flex:-2,hip_flex:22,hip_abd:2,hip_rot:-6,knee_flex:13,ankle_dorsi:3,sh_flex:14,sh_abd:4,sh_rot:-4,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:1.4,stop:!1,label:"hips lead, knees lag, arms trail",pose:{spine_flex:1,neck_flex:-4,hip_flex:52,hip_abd:2,hip_rot:-6,knee_flex:15,ankle_dorsi:2,sh_flex:21,sh_abd:4,sh_rot:-3,shrug:-3,protract:-7,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:2.3,stop:!0,label:"bottom, dumbbells at lower shin",pose:{spine_flex:3,neck_flex:-6,hip_flex:108,hip_abd:2,hip_rot:-6,knee_flex:27,ankle_dorsi:2,sh_flex:58,sh_abd:4,sh_rot:0,shrug:-3,protract:-8,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:2.7,stop:!0,label:"short pause in the stretch",pose:{spine_flex:3,neck_flex:-6,hip_flex:108,hip_abd:2,hip_rot:-6,knee_flex:27,ankle_dorsi:2,sh_flex:58,sh_abd:4,sh_rot:0,shrug:-3,protract:-8,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:3.5,stop:!1,label:"hips drive forward, knees finish late",pose:{spine_flex:2,neck_flex:-4,hip_flex:48,hip_abd:2,hip_rot:-6,knee_flex:21,ankle_dorsi:2,sh_flex:26,sh_abd:4,sh_rot:-3,shrug:-3,protract:-7,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:4.2,stop:!0,label:"stand tall, glutes squeezed",pose:{spine_flex:0,neck_flex:0,hip_flex:5,hip_abd:2,hip_rot:-6,knee_flex:8,ankle_dorsi:3,sh_flex:8,sh_abd:4,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}}],V_=[{from:0,to:1,type:"rest"},{from:1,to:4,type:"eccentric"},{from:4,to:5,type:"isometric"},{from:5,to:7,type:"concentric"}],W_={hamstrings:{role:"prime",concentric:.65,eccentric:.7,isometric:.5},glutes:{role:"prime",concentric:.6,eccentric:.45,isometric:.35},erector_spinae:{role:"synergist",concentric:.65,eccentric:.65,isometric:.7},adductors:{role:"synergist",concentric:.35,eccentric:.3,isometric:.25},forearms:{role:"stabilizer",concentric:.4,eccentric:.4,isometric:.4},lats:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},traps:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},rhomboids:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},abs:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},quads:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.15},calves:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},obliques:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},shoulders:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},$_=[{segment:0,text:"Shoulders down and back, brace your core, then lower"},{segment:1,text:"Push your hips straight back, knees stay softly bent"},{segment:1,text:"Slide the dumbbells down your thighs and shins, keep them close"},{segment:2,text:"Back flat, feel the stretch in the back of your thighs"},{segment:3,text:"Drive your hips forward and squeeze your glutes at the top, stand tall without leaning back"}],q_="inhale and brace before lowering, exhale as you drive the hips forward",X_=90,Y_="Dumbbell Romanian deadlift: hips hinge back with knees softly bent (8 to 27 deg), spine near neutral, dumbbells slide down the thighs to the lower shin, 0.4 s pause, hips drive forward to a tall lockout equal to the start pose. Timing: 0.3 s set, 2.0 s lowering, 0.4 s pause, 1.5 s lifting. Arms angle back toward the legs (sh_flex 8 at the top, 58 at the bottom, about 30 degrees less than the trunk lean at the bottom (58 against 86), so the arms trail back toward the legs) so the dumbbells travel close to the thighs and hang about 11 cm ahead of the knee at the bottom instead of 19. Hammer grip, feet flat and hip-width.",K_={id:O_,name:z_,equipment:B_,contacts:G_,keys:H_,segments:V_,activation:W_,cues:$_,breathing:q_,view_yaw:X_,notes:Y_},Z_="russian_twist",J_="Russian twist",Q_="none",j_=[{point:"seat",support:"floor"},{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"}],em=[{time_s:0,stop:!0,label:"centre, leaning back",pose:{spine_flex:2,spine_twist:0,neck_flex:20,neck_twist:0,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:.4,stop:!0,label:"centre, settle",pose:{spine_flex:2,spine_twist:0,neck_flex:20,neck_twist:0,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:1.5,stop:!0,label:"twist right, ribcage turned",pose:{spine_flex:2,spine_twist:35,neck_flex:20,neck_twist:-10.5,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:1.7,stop:!0,label:"right, brief pause",pose:{spine_flex:2,spine_twist:35,neck_flex:20,neck_twist:-10.5,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:2.9,stop:!1,label:"through the middle",pose:{spine_flex:2,spine_twist:0,neck_flex:20,neck_twist:0,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:4.1,stop:!0,label:"twist left, ribcage turned",pose:{spine_flex:2,spine_twist:-35,neck_flex:20,neck_twist:10.5,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:4.3,stop:!0,label:"left, brief pause",pose:{spine_flex:2,spine_twist:-35,neck_flex:20,neck_twist:10.5,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}},{time_s:5.4,stop:!0,label:"back to centre",pose:{spine_flex:2,spine_twist:0,neck_flex:20,neck_twist:0,hip_flex:90,hip_abd:6,hip_rot:-4,knee_flex:98,ankle_dorsi:-12,toe_ext:0,sh_flex:18,sh_abd:8,sh_rot:40,shrug:-2,protract:8,elbow_flex:105,forearm_pron:80,wrist_flex:0,wrist_dev:0,grip:.6}}],tm=[{from:0,to:1,type:"rest"},{from:1,to:2,type:"concentric"},{from:2,to:3,type:"isometric"},{from:3,to:5,type:"concentric"},{from:5,to:6,type:"isometric"},{from:6,to:7,type:"eccentric"}],im={obliques:{role:"prime",concentric:.75,eccentric:.45,isometric:.55},abs:{role:"synergist",concentric:.45,eccentric:.35,isometric:.5},hip_flexors:{role:"stabilizer",concentric:.35,eccentric:.3,isometric:.35},rectus_femoris:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},erector_spinae:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},serratus:{role:"stabilizer",concentric:.2,eccentric:.15,isometric:.2},shoulders:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},nm=[{segment:0,text:"Lean back to 45 degrees, spine long, heels down"},{segment:1,text:"Turn the ribs, not just the arms"},{segment:2,text:"Hips stay square, look past your hands"},{segment:3,text:"Sweep through the middle, stay tall"},{segment:5,text:"Control it home, do not flop back"}],sm="exhale as you turn to each side, inhale as you pass through the middle",rm=30,om="Seated V-position: seat and both heels fixed on the floor, hip 90, knee 98, ankle -12; the solver settles the trunk at roughly 45-50 deg back from vertical, solver adjustment 0 deg. Hands clasped in front of the chest (sh_flex 18, abd 8, rot 40, elbow 105, grip 0.6; about 19 cm toward the midline, 30 cm ahead of the shoulder per inspect-hold), they ride with the ribcage. spine_twist +/-35 with the neck counter-turning 30% so the gaze stays forward; spine_flex 2 so the spine stays long. Rep 5.4 s: 0.4 s settle, 1.1 s to the right, 0.2 s pause, 1.2 s through the middle (via-point, no stop), 1.2 s to the left, 0.2 s pause, 1.1 s home. Checked from side, front and three-quarter, male and a female render. Not checked: symmetry and floor-guard tools, hand-to-knee clearance only by eye (hands pass just above the knees at the turnarounds). Bodyweight only, no weight.",am={id:Z_,name:J_,equipment:Q_,contacts:j_,keys:em,segments:tm,activation:im,cues:nm,breathing:sm,view_yaw:rm,notes:om},lm="scapula_pushup",cm="Scapula push-up",hm="none",fm=[{point:"l_palm",support:"floor"},{point:"r_palm",support:"floor"},{point:"l_toes",support:"floor"},{point:"r_toes",support:"floor"}],dm=[{time_s:0,stop:!0,label:"top plank, shoulder blades spread, upper back high",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:22,shrug:0,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:.3,stop:!0,label:"top hold",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:22,shrug:0,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:1.3,stop:!1,label:"blades drawing together, chest sinking",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:4,shrug:-2,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:2.3,stop:!0,label:"blades squeezed together, chest between the shoulders",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:-15,shrug:-4,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:2.6,stop:!0,label:"bottom hold",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:-15,shrug:-4,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:3.4,stop:!1,label:"pushing the floor away, blades spreading",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:4,shrug:-2,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}},{time_s:3.9,stop:!0,label:"top plank, shoulder blades spread, upper back high",pose:{neck_flex:-12,sh_flex:66,sh_abd:25,sh_rot:-8,protract:22,shrug:0,elbow_flex:2,forearm_pron:168,wrist_flex:-85,wrist_dev:13,grip:0,hip_flex:0,hip_abd:3,knee_flex:0,ankle_dorsi:13,toe_ext:58}}],um=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],pm={serratus:{role:"prime",concentric:.7,eccentric:.4,isometric:.4},rhomboids:{role:"synergist",concentric:.15,eccentric:.5,isometric:.45},traps:{role:"synergist",concentric:.2,eccentric:.45,isometric:.4},chest:{role:"stabilizer",concentric:.3,eccentric:.2,isometric:.2},triceps:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},delts_front:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.2},rotator_cuff:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},abs:{role:"stabilizer",concentric:.35,eccentric:.35,isometric:.35},obliques:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},glutes:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},quads:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},forearms:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},lower_back:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},calves:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15}},_m=[{segment:0,text:"Arms locked straight, body one line from head to heels"},{segment:1,text:"Keep the elbows straight and let your chest sink as the shoulder blades pinch together"},{segment:2,text:"Squeeze the blades, hold a moment"},{segment:3,text:"Push the floor away and round the upper back high, blades wide"}],mm="inhale as the chest sinks, exhale as you push the floor away",gm=135,xm="Pushup top plank with arms fixed (elbow 2, shoulder angles constant); only protract (+22 spread to -15 squeezed) and shrug (0 to -4) change, so the chest sinks about 6 cm and rises again. Timing: 0.3 s top hold, 2.0 s sink, 0.3 s bottom hold, 1.3 s push. Solver adjusts at most 5 degrees (wrist_dev, forearm_pron at the bottom). Checked from side, back three-quarter and front, male and female. The motion is small by nature; the clearest read is the head and upper back height in the side view.",bm={id:lm,name:cm,equipment:hm,contacts:fm,keys:dm,segments:um,activation:pm,cues:_m,breathing:mm,view_yaw:gm,notes:xm},vm="scapular_pull_up",wm="Scapular pull-up",Sm="pullup_bar",ym=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],Mm=[{time_s:0,stop:!0,label:"dead hang, shoulders up by the ears",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-1,neck_flex:0,sh_flex:180,sh_abd:9,sh_rot:46,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8,shrug:20,protract:6}},{time_s:.5,stop:!0,label:"hang pause",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-1,neck_flex:0,sh_flex:180,sh_abd:9,sh_rot:46,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8,shrug:20,protract:6}},{time_s:1,stop:!1,label:"blades start to slide down",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-2,neck_flex:-3,sh_flex:180,sh_abd:9,sh_rot:46,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8,shrug:6,protract:-3}},{time_s:1.7,stop:!0,label:"top, blades down and together, arms straight",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8,shrug:-8,protract:-12}},{time_s:2.2,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:9,sh_rot:46,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8,shrug:-8,protract:-12}},{time_s:4.2,stop:!0,label:"dead hang",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-1,neck_flex:0,sh_flex:180,sh_abd:9,sh_rot:46,elbow_flex:4,forearm_pron:150,wrist_flex:-6,hip_flex:0,knee_flex:8,shrug:20,protract:6}}],Em=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:5,type:"eccentric"}],Tm={lats:{role:"synergist",concentric:.45,eccentric:.3,isometric:.4},traps:{role:"prime",concentric:.7,eccentric:.5,isometric:.55},rhomboids:{role:"synergist",concentric:.4,eccentric:.3,isometric:.3},serratus:{role:"synergist",concentric:.35,eccentric:.3,isometric:.3},forearms:{role:"stabilizer",concentric:.6,eccentric:.6,isometric:.6},biceps:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.25},abs:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},glutes:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},chest:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},Am=[{segment:0,text:"Hang loose, shoulders up by your ears"},{segment:1,text:"Pull the blades down and together, arms stay straight"},{segment:2,text:"Pause, chest proud"},{segment:3,text:"Let the shoulders rise slowly back to the hang"}],Rm="exhale as you pull the shoulders down, inhale as you relax back to the hang",km=180,Cm="Only shrug (+20 to -8) and protract (+6 to -12) change; arms stay straight (elbow 4). Grips pinned to the bar; body rises about 5.7 cm (pelvis 1.072 to 1.129 m) from the girdle alone. 0.5 s hang, 1.2 s up, 0.5 s pause, 2.0 s down. inspect-clip max adjust 1.7 deg. Checked in back, side and front strips and a female sheet. The rise is subtle from the front; back view reads best.",Pm={id:vm,name:wm,equipment:Sm,contacts:ym,keys:Mm,segments:Em,activation:Tm,cues:Am,breathing:Rm,view_yaw:km,notes:Cm},Lm="sissy_squat",Dm="Sissy squat",Im="none",Nm=[{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"},{point:"l_toes",support:"floor"},{point:"r_toes",support:"floor"}],Um=[{time_s:0,stop:!0,label:"top, tall on the balls of the feet",pose:{spine_flex:0,neck_flex:-3,hip_flex:2,hip_abd:5,hip_rot:-5,knee_flex:4,ankle_dorsi:-38,toe_ext:44,sh_flex:88,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:.4,stop:!0,label:"top, set",pose:{spine_flex:0,neck_flex:-3,hip_flex:2,hip_abd:5,hip_rot:-5,knee_flex:4,ankle_dorsi:-38,toe_ext:44,sh_flex:88,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:1.5,stop:!1,label:"knees travel forward, trunk and thighs lean back as one line",pose:{spine_flex:0,neck_flex:-6,hip_flex:-2,hip_abd:6,hip_rot:-1,knee_flex:48,ankle_dorsi:-12,toe_ext:44,sh_flex:65,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:2.4,stop:!0,label:"bottom, knees well bent, body a straight line from knees to shoulders",pose:{spine_flex:0,neck_flex:14,hip_flex:-10,hip_abd:7,hip_rot:3,knee_flex:91,ankle_dorsi:5,toe_ext:44,sh_flex:42,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:2.7,stop:!0,label:"bottom, brief pause",pose:{spine_flex:0,neck_flex:14,hip_flex:-10,hip_abd:7,hip_rot:3,knee_flex:91,ankle_dorsi:5,toe_ext:44,sh_flex:42,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:3.4,stop:!1,label:"quads drive the body back up, hips stay open",pose:{spine_flex:0,neck_flex:-6,hip_flex:-2,hip_abd:6,hip_rot:-1,knee_flex:52,ankle_dorsi:-12,toe_ext:44,sh_flex:66,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:4,stop:!0,label:"top, tall on the balls of the feet",pose:{spine_flex:0,neck_flex:-3,hip_flex:2,hip_abd:5,hip_rot:-5,knee_flex:4,ankle_dorsi:-38,toe_ext:44,sh_flex:88,sh_abd:5,sh_rot:0,protract:4,elbow_flex:8,forearm_pron:90,wrist_flex:0,grip:.1}}],Fm=[{from:0,to:1,type:"rest"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],Om={quads:{role:"prime",concentric:.9,eccentric:.75,isometric:.8},rectus_femoris:{role:"prime",concentric:.85,eccentric:.7,isometric:.75},calves:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},soleus:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.35},glutes:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.3},hip_flexors:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},hamstrings:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},delts_front:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.18},shins:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1}},zm=[{segment:0,text:"Rise onto the balls of your feet, arms out in front"},{segment:1,text:"Knees travel forward, lean back as one straight line"},{segment:2,text:"Hips open, knees well bent, hold it"},{segment:3,text:"Quads pull you back up, heels stay high"}],Bm="inhale on the way down, exhale as you rise",Gm=90,Hm="Sissy squat, 4.0 s rep: 0.4 s set, 1.1 s down to mid, 0.9 s to bottom, 0.3 s pause, 1.3 s up. On the balls of the feet throughout (heels raised, toe_ext 44). Bottom: knee 91, hip_flex -10 so thigh and trunk read as one line leaning back about 50 deg, arms reach level forward (sh_flex 42 in the leaned trunk frame), neck tucked to look forward. Ankle values at the bottom match what the solver settled on (max adjust about 7 deg, ankle roll). Checked in side, front and three-quarter pictures on both bodies. Trunk lean is steep; balance relies on the solver bringing the pelvis forward.",Vm={id:Lm,name:Dm,equipment:Im,contacts:Nm,keys:Um,segments:Fm,activation:Om,cues:zm,breathing:Bm,view_yaw:Gm,notes:Hm},Wm="split_squat",$m="Split squat",qm="none",Xm=[{point:"l_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"},{point:"r_toes",support:"floor"}],Ym=[{time_s:0,stop:!0,label:"top",pose:{l_hip_flex:48,l_hip_abd:2,l_knee_flex:37,l_ankle_dorsi:0,l_toe_ext:0,r_hip_flex:-11,r_knee_flex:23,r_ankle_dorsi:-23,r_toe_ext:68,spine_flex:-1,neck_flex:-8,sh_flex:0,sh_abd:8,elbow_flex:15,forearm_pron:90,wrist_flex:0,grip:.2}},{time_s:.4,stop:!0,label:"top, set",pose:{l_hip_flex:48,l_hip_abd:2,l_knee_flex:37,l_ankle_dorsi:0,l_toe_ext:0,r_hip_flex:-11,r_knee_flex:23,r_ankle_dorsi:-23,r_toe_ext:68,spine_flex:-1,neck_flex:-8,sh_flex:0,sh_abd:8,elbow_flex:15,forearm_pron:90,wrist_flex:0,grip:.2}},{time_s:1.4,stop:!1,label:"lowering, hips and front knee break together",pose:{l_hip_flex:74,l_hip_abd:2,l_knee_flex:77,l_ankle_dorsi:14,l_toe_ext:0,r_hip_flex:7,r_knee_flex:71,r_ankle_dorsi:7,r_toe_ext:68,spine_flex:-3,neck_flex:-9,sh_flex:0,sh_abd:14,elbow_flex:17,forearm_pron:90,wrist_flex:0,grip:.2}},{time_s:2.4,stop:!0,label:"bottom, rear knee just above floor",pose:{l_hip_flex:96,l_hip_abd:2,l_knee_flex:105,l_ankle_dorsi:20,l_toe_ext:0,r_hip_flex:9,r_knee_flex:96,r_ankle_dorsi:30,r_toe_ext:68,spine_flex:-6,neck_flex:-9,sh_flex:-4,sh_abd:22,elbow_flex:20,forearm_pron:90,wrist_flex:0,grip:.2}},{time_s:2.8,stop:!0,label:"bottom, pause",pose:{l_hip_flex:96,l_hip_abd:2,l_knee_flex:105,l_ankle_dorsi:20,l_toe_ext:0,r_hip_flex:9,r_knee_flex:96,r_ankle_dorsi:30,r_toe_ext:68,spine_flex:-6,neck_flex:-9,sh_flex:-4,sh_abd:22,elbow_flex:20,forearm_pron:90,wrist_flex:0,grip:.2}},{time_s:3.53,stop:!1,label:"driving up, hips and chest rise together",pose:{l_hip_flex:61,l_hip_abd:2,l_knee_flex:58,l_ankle_dorsi:8,l_toe_ext:0,r_hip_flex:0,r_knee_flex:50,r_ankle_dorsi:-7,r_toe_ext:68,spine_flex:-3,neck_flex:-8,sh_flex:-2,sh_abd:14,elbow_flex:16,forearm_pron:90,wrist_flex:0,grip:.2}},{time_s:3.9,stop:!0,label:"top",pose:{l_hip_flex:48,l_hip_abd:2,l_knee_flex:37,l_ankle_dorsi:0,l_toe_ext:0,r_hip_flex:-11,r_knee_flex:23,r_ankle_dorsi:-23,r_toe_ext:68,spine_flex:-1,neck_flex:-8,sh_flex:0,sh_abd:8,elbow_flex:15,forearm_pron:90,wrist_flex:0,grip:.2}}],Km=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],Zm={quads:{role:"prime",concentric:.75,eccentric:.55,isometric:.5},glutes:{role:"prime",concentric:.65,eccentric:.45,isometric:.45},adductors:{role:"synergist",concentric:.4,eccentric:.3,isometric:.35},hamstrings:{role:"synergist",concentric:.3,eccentric:.25,isometric:.25},calves:{role:"synergist",concentric:.3,eccentric:.35,isometric:.35},glute_med:{role:"stabilizer",concentric:.35,eccentric:.4,isometric:.4},hip_flexors:{role:"stabilizer",concentric:.1,eccentric:.25,isometric:.25},rectus_femoris:{role:"stabilizer",concentric:.2,eccentric:.3,isometric:.3},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},abs:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},obliques:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},shins:{role:"stabilizer",concentric:.15,eccentric:.2,isometric:.15}},Jm=[{segment:0,text:"Front foot flat, back heel up, ribs down, stand tall"},{segment:1,text:"Sink straight down, front knee tracks over the middle toes"},{segment:1,text:"Chest tall, rear knee lowers to just above the floor"},{segment:2,text:"Front heel stays glued to the floor, weight mostly on the front foot"},{segment:3,text:"Drive up through the front heel, keep the chest tall and the hips under you"}],Qm="inhale on the way down, exhale on the way up",jm=90,e0="Front foot flat (l_heel, l_ball), rear foot on its toes (r_ball, r_toes), stance about 0.75 m, rear knee ends just above the floor. Lowering 2.0 s, 0.4 s pause at the bottom, rising 1.1 s. Reviewed against renders: the trunk leaned forward too much at the bottom and the hands rested on the front thigh. Changed: spine_flex goes to -6 at the bottom (-3 at the via keys) so the chest stays tall, and the arms hang slightly out (sh_abd 14 to 22, sh_flex 0 to -4) so the hands clear the thigh. Legs, timing, contacts, segments and activation unchanged.",t0={id:Wm,name:$m,equipment:qm,contacts:Xm,keys:Ym,segments:Km,activation:Zm,cues:Jm,breathing:Qm,view_yaw:jm,notes:e0},i0="squat",n0="Bodyweight squat",s0="none",r0=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],o0=[{time_s:0,stop:!0,label:"top",pose:{hip_flex:1,hip_abd:7,hip_rot:-8,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:4,sh_abd:6,sh_rot:0,elbow_flex:8,forearm_pron:65,wrist_flex:0,grip:.15}},{time_s:.4,stop:!0,label:"top, set",pose:{hip_flex:1,hip_abd:7,hip_rot:-8,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:4,sh_abd:6,sh_rot:0,elbow_flex:8,forearm_pron:65,wrist_flex:0,grip:.15}},{time_s:1.4,stop:!1,label:"descent, hips lead and arms rising",pose:{spine_flex:1,neck_flex:-8,hip_flex:73,hip_abd:10,hip_rot:-2,knee_flex:64,ankle_dorsi:18,toe_ext:0,sh_flex:85,sh_abd:4,sh_rot:0,protract:5,elbow_flex:8,forearm_pron:115,wrist_flex:-3,grip:.12}},{time_s:2.4,stop:!0,label:"bottom, thighs just below parallel",pose:{spine_flex:3,neck_flex:-15,hip_flex:122,hip_abd:9,hip_rot:11,knee_flex:120,ankle_dorsi:35,toe_ext:0,sh_flex:118,sh_abd:3,sh_rot:0,protract:8,elbow_flex:6,forearm_pron:160,wrist_flex:-5,grip:.1}},{time_s:2.55,stop:!0,label:"bottom, brief settle",pose:{spine_flex:4,neck_flex:-16,hip_flex:122,hip_abd:9,hip_rot:11,knee_flex:120,ankle_dorsi:35,toe_ext:0,sh_flex:118,sh_abd:3,sh_rot:0,protract:8,elbow_flex:6,forearm_pron:160,wrist_flex:-5,grip:.1}},{time_s:3.1,stop:!1,label:"ascent, chest and hips rise together",pose:{spine_flex:2,neck_flex:-10,hip_flex:83,hip_abd:10,hip_rot:-1,knee_flex:72,ankle_dorsi:20,toe_ext:0,sh_flex:80,sh_abd:4,sh_rot:0,protract:5,elbow_flex:7,forearm_pron:110,wrist_flex:-3,grip:.12}},{time_s:3.85,stop:!0,label:"top",pose:{hip_flex:1,hip_abd:7,hip_rot:-8,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:4,sh_abd:6,sh_rot:0,elbow_flex:8,forearm_pron:65,wrist_flex:0,grip:.15}}],a0=[{from:0,to:1,type:"rest"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],l0={quads:{role:"prime",concentric:.7,eccentric:.5,isometric:.4},glutes:{role:"prime",concentric:.5,eccentric:.35,isometric:.3},adductors:{role:"synergist",concentric:.35,eccentric:.25,isometric:.2},hamstrings:{role:"synergist",concentric:.25,eccentric:.2,isometric:.15},soleus:{role:"stabilizer",concentric:.28,eccentric:.3,isometric:.25},calves:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.1},glute_med:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.2},erector_spinae:{role:"stabilizer",concentric:.28,eccentric:.25,isometric:.25},abs:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.15},obliques:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.15},shins:{role:"stabilizer",concentric:.1,eccentric:.08,isometric:.08},delts_front:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.18},serratus:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},upper_back:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},c0=[{segment:0,text:"Feet shoulder width, toes slightly out, chest tall"},{segment:1,text:"Hips back and down, arms reach forward, knees follow the toes, heels stay heavy"},{segment:2,text:"Thighs just past parallel, spine long and braced"},{segment:3,text:"Push the floor away, chest and hips rise together"}],h0="inhale through the nose on the way down, exhale steadily as you stand up",f0=75,d0="Bodyweight squat, 3.85 s rep: 0.4 s set, 2.0 s lowering, 0.15 s settle, 1.3 s lifting. Feet flat on the floor (heels and balls), thighs just below parallel at the bottom (hip 122, knee 120, ankle 35), trunk leaning forward with the spine neutral. Arms reach forward as a counterweight. Changed in review: shoulder flexion was 40/58/37 (mid descent, bottom, ascent) and rendered arms hanging with the hands at the knees; now 85/118/80, which renders the arms about horizontal at the bottom. Later, the solver kept moving the legs at the bottom, so the authored bottom now matches what it settled on: hip_abd 18.5 to 9, hip_rot 7 to 11, knee 125 to 120, ankle 30 to 35 (the solver was adding 5 of dorsiflexion, not removing it), with the descent and ascent via-points eased to match. Remaining values are the original author's and were judged from renders only.",u0={id:i0,name:n0,equipment:s0,contacts:r0,keys:o0,segments:a0,activation:l0,cues:c0,breathing:h0,view_yaw:f0,notes:d0},p0="squat_overhead_reach",_0="Squat to overhead reach",m0="none",g0=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],x0=[{time_s:0,stop:!0,label:"top, arms overhead",pose:{spine_flex:-3,neck_flex:-6,hip_flex:1,hip_abd:7,hip_rot:-16,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:175,sh_abd:8,sh_rot:0,shrug:10,protract:4,elbow_flex:4,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:.5,stop:!0,label:"top, reached tall",pose:{spine_flex:-3,neck_flex:-6,hip_flex:1,hip_abd:7,hip_rot:-16,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:175,sh_abd:8,sh_rot:0,shrug:10,protract:4,elbow_flex:4,forearm_pron:90,wrist_flex:0,grip:.1}},{time_s:1.4,stop:!1,label:"descent, hips lead and arms lowering in front",pose:{spine_flex:1,neck_flex:-8,hip_flex:73,hip_abd:11,hip_rot:-6,knee_flex:64,ankle_dorsi:18,toe_ext:0,sh_flex:100,sh_abd:6,sh_rot:0,protract:5,elbow_flex:5,forearm_pron:95,wrist_flex:-3,grip:.12,shrug:2}},{time_s:2.4,stop:!0,label:"bottom, thighs just below parallel, arms forward",pose:{spine_flex:3,neck_flex:-15,hip_flex:122,hip_abd:15,hip_rot:4,knee_flex:120,ankle_dorsi:30,toe_ext:0,sh_flex:118,sh_abd:5,sh_rot:0,protract:8,elbow_flex:4,forearm_pron:100,wrist_flex:-5,grip:.1,shrug:0}},{time_s:2.55,stop:!0,label:"bottom, brief settle",pose:{spine_flex:4,neck_flex:-16,hip_flex:122,hip_abd:15,hip_rot:4,knee_flex:120,ankle_dorsi:30,toe_ext:0,sh_flex:118,sh_abd:5,sh_rot:0,protract:8,elbow_flex:4,forearm_pron:100,wrist_flex:-5,grip:.1,shrug:0}},{time_s:3.1,stop:!1,label:"ascent, arms sweeping up as the legs drive",pose:{spine_flex:2,neck_flex:-10,hip_flex:83,hip_abd:11,hip_rot:-6,knee_flex:72,ankle_dorsi:20,toe_ext:0,sh_flex:135,sh_abd:7,sh_rot:0,protract:5,elbow_flex:4,forearm_pron:95,wrist_flex:-3,grip:.12,shrug:5}},{time_s:3.85,stop:!0,label:"top, arms overhead",pose:{spine_flex:-3,neck_flex:-6,hip_flex:1,hip_abd:7,hip_rot:-16,knee_flex:3,ankle_dorsi:2,toe_ext:0,sh_flex:175,sh_abd:8,sh_rot:0,shrug:10,protract:4,elbow_flex:4,forearm_pron:90,wrist_flex:0,grip:.1}}],b0=[{from:0,to:1,type:"rest"},{from:1,to:3,type:"eccentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"concentric"}],v0={quads:{role:"prime",concentric:.7,eccentric:.5,isometric:.4},glutes:{role:"prime",concentric:.5,eccentric:.35,isometric:.3},adductors:{role:"synergist",concentric:.35,eccentric:.25,isometric:.2},hamstrings:{role:"synergist",concentric:.25,eccentric:.2,isometric:.15},soleus:{role:"stabilizer",concentric:.28,eccentric:.3,isometric:.25},calves:{role:"stabilizer",concentric:.12,eccentric:.1,isometric:.1},glute_med:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.2},erector_spinae:{role:"stabilizer",concentric:.28,eccentric:.25,isometric:.25},abs:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.15},obliques:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.15},shins:{role:"stabilizer",concentric:.1,eccentric:.08,isometric:.08},delts_front:{role:"synergist",concentric:.4,eccentric:.3,isometric:.3},serratus:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},upper_back:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},traps:{role:"synergist",concentric:.3,eccentric:.2,isometric:.25}},w0=[{segment:0,text:"Stand tall, arms reaching overhead"},{segment:1,text:"Sit hips back, arms float down in front"},{segment:2,text:"Thighs just past parallel, chest up"},{segment:3,text:"Drive up and sweep the arms overhead, reach tall"}],S0="inhale as you squat down, exhale as you stand and reach",y0=45,M0="Squat to overhead reach, 3.85 s rep, legs follow squat.json but with a wider toe-out stance (top hip_abd 7, hip_rot -16; bottom hip_abd 15, hip_rot +4, which the solver needs to keep the planted feet pointing out) so the knees track over the toes in the front view. Bottom is just below parallel, ankle_dorsi 30. Top hold 0.5 s. Arms start overhead (sh_flex 175, palms neutral facing in), float down to 100 mid-descent and 118 at the bottom, then sweep up through 135 to 175 as the legs drive. Checked: inspect-clip adjust 7.6 deg max; front, side and three-quarter strips and female sheet; inspect-hold at 0 s for palm direction and parallel arms; knee track in the front view.",E0={id:p0,name:_0,equipment:m0,contacts:g0,keys:x0,segments:b0,activation:v0,cues:w0,breathing:S0,view_yaw:y0,notes:M0},T0="stiff_leg_deadlift",A0="Dumbbell stiff-leg deadlift",R0="dumbbells",k0=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],C0=[{time_s:0,stop:!0,label:"stand tall, dumbbells at thighs",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:4,ankle_dorsi:2,sh_flex:8,sh_abd:4,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:.3,stop:!0,label:"set: brace, lats on, ribs down",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:4,ankle_dorsi:2,sh_flex:8,sh_abd:4,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:.95,stop:!1,label:"hips start back, knees stay locked",pose:{spine_flex:0,neck_flex:-2,hip_flex:22,hip_abd:2,hip_rot:-6,knee_flex:4,ankle_dorsi:2,sh_flex:14,sh_abd:4,sh_rot:-4,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:1.5,stop:!1,label:"dumbbells slide past the knees",pose:{spine_flex:1,neck_flex:-4,hip_flex:52,hip_abd:2,hip_rot:-6,knee_flex:5,ankle_dorsi:0,sh_flex:22,sh_abd:4,sh_rot:-3,shrug:-3,protract:-7,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:2.3,stop:!0,label:"bottom, dumbbells just below the knee",pose:{spine_flex:2,neck_flex:-6,hip_flex:88,hip_abd:2,hip_rot:-6,knee_flex:6,ankle_dorsi:-4,sh_flex:50,sh_abd:4,sh_rot:0,shrug:-3,protract:-8,elbow_flex:5,forearm_pron:90,wrist_flex:-12,wrist_dev:0,grip:1}},{time_s:2.7,stop:!0,label:"short pause in the hamstring stretch",pose:{spine_flex:2,neck_flex:-6,hip_flex:88,hip_abd:2,hip_rot:-6,knee_flex:6,ankle_dorsi:-4,sh_flex:50,sh_abd:4,sh_rot:0,shrug:-3,protract:-8,elbow_flex:5,forearm_pron:90,wrist_flex:-12,wrist_dev:0,grip:1}},{time_s:3.5,stop:!1,label:"hips drive forward, knees stay straight",pose:{spine_flex:2,neck_flex:-4,hip_flex:45,hip_abd:2,hip_rot:-6,knee_flex:5,ankle_dorsi:0,sh_flex:22,sh_abd:4,sh_rot:-3,shrug:-3,protract:-7,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}},{time_s:4.2,stop:!0,label:"stand tall, glutes squeezed",pose:{spine_flex:0,neck_flex:0,hip_flex:4,hip_abd:2,hip_rot:-6,knee_flex:4,ankle_dorsi:2,sh_flex:8,sh_abd:4,sh_rot:-5,shrug:-3,protract:-6,elbow_flex:5,forearm_pron:90,wrist_flex:-4,wrist_dev:0,grip:1}}],P0=[{from:0,to:1,type:"rest"},{from:1,to:4,type:"eccentric"},{from:4,to:5,type:"isometric"},{from:5,to:7,type:"concentric"}],L0={hamstrings:{role:"prime",concentric:.75,eccentric:.75,isometric:.6},glutes:{role:"prime",concentric:.55,eccentric:.45,isometric:.35},erector_spinae:{role:"synergist",concentric:.65,eccentric:.65,isometric:.7},adductors:{role:"synergist",concentric:.35,eccentric:.3,isometric:.25},forearms:{role:"stabilizer",concentric:.4,eccentric:.4,isometric:.4},lats:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},traps:{role:"stabilizer",concentric:.25,eccentric:.25,isometric:.25},rhomboids:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},abs:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},quads:{role:"stabilizer",concentric:.1,eccentric:.1,isometric:.1},calves:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},obliques:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},shoulders:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12}},D0=[{segment:0,text:"Shoulders down and back, brace your core, then lower"},{segment:1,text:"Knees almost locked, push your hips straight back"},{segment:1,text:"Slide the dumbbells down your legs, keep them close"},{segment:2,text:"Back flat, feel the stretch in your hamstrings"},{segment:3,text:"Drive your hips forward and squeeze your glutes, stand tall"}],I0="inhale and brace before lowering, exhale as you drive the hips forward",N0=90,U0="Stiff-leg deadlift: the Romanian hinge with knees held at 4 to 6 deg (the spec asked 3 to 8) throughout, hip_flex 88 (trunk about 80 deg forward of upright), spine near neutral, dumbbells slide down the thighs to just below the knee (about 15 cm ahead of it), 0.4 s pause, hips drive forward to a tall lockout equal to the start pose. Timing: 0.3 s set, 2.0 s lowering, 0.4 s pause, 1.5 s lifting.",F0={id:T0,name:A0,equipment:R0,contacts:k0,keys:C0,segments:P0,activation:L0,cues:D0,breathing:I0,view_yaw:N0,notes:U0},O0="w_press",z0="Dumbbell W-press",B0="dumbbells",G0=[{point:"l_heel",support:"floor"},{point:"r_heel",support:"floor"},{point:"l_ball",support:"floor"},{point:"r_ball",support:"floor"}],H0=[{time_s:0,stop:!0,label:"W, elbows low beside the ribs",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:0,sh_abd:28,sh_rot:-60,shrug:-2,protract:-12,elbow_flex:125,forearm_pron:50,wrist_flex:-5}},{time_s:.5,stop:!0,label:"W settled",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:0,sh_abd:28,sh_rot:-60,shrug:-2,protract:-12,elbow_flex:125,forearm_pron:50,wrist_flex:-5}},{time_s:1.2,stop:!1,label:"pressing up and out",pose:{spine_flex:-1,neck_flex:-3,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:20,sh_abd:75,sh_rot:-30,shrug:6,protract:-2,elbow_flex:85,forearm_pron:65,wrist_flex:-5}},{time_s:1.9,stop:!0,label:"wide Y lockout",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:20,sh_abd:148,sh_rot:-10,shrug:12,protract:2,elbow_flex:6,forearm_pron:80,wrist_flex:0}},{time_s:2.4,stop:!0,label:"Y hold",pose:{spine_flex:-1,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:20,sh_abd:148,sh_rot:-10,shrug:12,protract:2,elbow_flex:6,forearm_pron:80,wrist_flex:0}},{time_s:3.4,stop:!1,label:"lowering, elbows down and in",pose:{spine_flex:-1,neck_flex:-2,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:8,sh_abd:55,sh_rot:-55,shrug:0,protract:-9,elbow_flex:110,forearm_pron:60,wrist_flex:-5}},{time_s:4.4,stop:!0,label:"W, elbows low beside the ribs",pose:{spine_flex:0,neck_flex:0,hip_flex:2,knee_flex:2,ankle_dorsi:1,wrist_dev:-20,grip:.9,sh_flex:0,sh_abd:28,sh_rot:-60,shrug:-2,protract:-12,elbow_flex:125,forearm_pron:50,wrist_flex:-5}}],V0=[{from:0,to:1,type:"isometric"},{from:1,to:3,type:"concentric"},{from:3,to:4,type:"isometric"},{from:4,to:6,type:"eccentric"}],W0={delts_front:{role:"prime",concentric:.8,eccentric:.5,isometric:.4},delts_side:{role:"prime",concentric:.65,eccentric:.4,isometric:.35},triceps:{role:"prime",concentric:.65,eccentric:.4,isometric:.3},traps:{role:"synergist",concentric:.5,eccentric:.3,isometric:.45},serratus:{role:"synergist",concentric:.5,eccentric:.3,isometric:.4},chest:{role:"synergist",concentric:.3,eccentric:.2,isometric:.1},rotator_cuff:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.25},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.22,eccentric:.22,isometric:.22},erector_spinae:{role:"stabilizer",concentric:.3,eccentric:.28,isometric:.28},glutes:{role:"stabilizer",concentric:.2,eccentric:.18,isometric:.2},forearms:{role:"stabilizer",concentric:.28,eccentric:.28,isometric:.28},biceps:{role:"stabilizer",concentric:.15,eccentric:.25,isometric:.12},quads:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},calves:{role:"stabilizer",concentric:.12,eccentric:.12,isometric:.12},upper_back:{role:"synergist",concentric:.35,eccentric:.4,isometric:.3},lats:{role:"synergist",concentric:.15,eccentric:.4,isometric:.15},rhomboids:{role:"synergist",concentric:.3,eccentric:.45,isometric:.4},delts_rear:{role:"synergist",concentric:.3,eccentric:.4,isometric:.3}},$0=[{segment:0,text:"Elbows low by your ribs, weights beside your shoulders"},{segment:1,text:"Press up and slightly out into a wide Y"},{segment:2,text:"Reach tall, ribs down, do not lean back"},{segment:3,text:"Pull elbows down and in, squeeze your shoulder blades"}],q0="breathe in and brace in the W, breathe out as you press, breathe in on the way down",X0=0,Y0="Symmetric standing two-dumbbell W-press, feet flat hip width, adapted from overhead_press. W: sh_flex 0, abd 28, rot -60, elbow 125, protract -12 (blades squeezed), hands about 22 cm out, level with the shoulder joints, 14 cm ahead. Y lockout: abd 148, flex 20, elbow 6; measured about 36 deg off vertical (a generous wide Y). Press 1.4 s, 0.5 s hold, 2.5 s lowering: a distinct pull-back via-point at 3.4 s with elbows lower and tucked, blades squeezing (protract -9, shrug 0). wrist_dev -20 keeps the dumbbell handle near level in the W and at lockout (inspect-hold: about 6 and 9 deg). Solver adjust checked with inspect-clip.",K0={id:O0,name:z0,equipment:B0,contacts:G0,keys:H0,segments:V0,activation:W0,cues:$0,breathing:q0,view_yaw:X0,notes:Y0},Z0="wide_grip_pull_up",J0="Wide-grip pull-up",Q0="pullup_bar",j0=[{point:"l_grip",support:"bar"},{point:"r_grip",support:"bar"}],eg=[{time_s:0,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:-7,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:27,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-14,hip_flex:0,knee_flex:8}},{time_s:.5,stop:!0,label:"hang pause, shoulders set",pose:{grip:1,wrist_dev:-7,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:27,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-14,hip_flex:0,knee_flex:8}},{time_s:.8,stop:!1,label:"scapulae depress first, elbows barely bend",pose:{grip:1,wrist_dev:-5,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-6,sh_flex:174,sh_abd:28,sh_rot:44,shrug:-9,protract:-3,elbow_flex:12,forearm_pron:151,wrist_flex:-11,hip_flex:0,knee_flex:10}},{time_s:1.05,stop:!1,label:"elbow-led pull begins",pose:{grip:1,wrist_dev:5,toe_ext:-5,ankle_dorsi:-25,spine_flex:-4,neck_flex:-8,sh_flex:160,sh_abd:39,sh_rot:41,shrug:-9,protract:-6,elbow_flex:49,forearm_pron:146,wrist_flex:-2,hip_flex:-1,knee_flex:12}},{time_s:1.5,stop:!1,label:"mid pull, chest rises to the bar",pose:{grip:1,wrist_dev:13,toe_ext:-5,ankle_dorsi:-25,spine_flex:-7,neck_flex:-6,sh_flex:108,sh_abd:46,sh_rot:7,shrug:-8,protract:-11,elbow_flex:90,forearm_pron:152,wrist_flex:6,hip_flex:-2,knee_flex:16}},{time_s:2,stop:!0,label:"top, chin to the bar",pose:{grip:1,wrist_dev:6,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-8,sh_flex:20,sh_abd:42,sh_rot:-27,shrug:-6,protract:-14,elbow_flex:124,forearm_pron:149,wrist_flex:-4,hip_flex:-3,knee_flex:22}},{time_s:2.5,stop:!0,label:"top pause",pose:{grip:1,wrist_dev:5,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-8,sh_flex:20,sh_abd:42,sh_rot:-27,shrug:-6,protract:-14,elbow_flex:124,forearm_pron:148,wrist_flex:-3,hip_flex:-3,knee_flex:22}},{time_s:3.5,stop:!1,label:"controlled lowering, shoulders stay down",pose:{grip:1,wrist_dev:9,toe_ext:-5,ankle_dorsi:-25,spine_flex:-6,neck_flex:-6,sh_flex:128,sh_abd:45,sh_rot:18,shrug:-8,protract:-8,elbow_flex:76,forearm_pron:151,wrist_flex:3,hip_flex:-1,knee_flex:16}},{time_s:4.5,stop:!0,label:"active hang",pose:{grip:1,wrist_dev:-7,toe_ext:-5,ankle_dorsi:-25,spine_flex:-3,neck_flex:-5,sh_flex:180,sh_abd:27,sh_rot:46,shrug:-4,protract:0,elbow_flex:4,forearm_pron:150,wrist_flex:-14,hip_flex:0,knee_flex:8}}],tg=[{from:0,to:1,type:"isometric"},{from:1,to:5,type:"concentric"},{from:5,to:6,type:"isometric"},{from:6,to:8,type:"eccentric"}],ig={lats:{role:"prime",concentric:.85,eccentric:.5,isometric:.6},biceps:{role:"synergist",concentric:.6,eccentric:.4,isometric:.5},brachialis:{role:"synergist",concentric:.5,eccentric:.35,isometric:.45},brachioradialis:{role:"synergist",concentric:.45,eccentric:.3,isometric:.4},forearms:{role:"stabilizer",concentric:.6,eccentric:.6,isometric:.6},traps:{role:"synergist",concentric:.6,eccentric:.4,isometric:.4},upper_back:{role:"synergist",concentric:.55,eccentric:.3,isometric:.3},rhomboids:{role:"synergist",concentric:.4,eccentric:.25,isometric:.25},rotator_cuff:{role:"stabilizer",concentric:.35,eccentric:.3,isometric:.3},delts_rear:{role:"synergist",concentric:.35,eccentric:.2,isometric:.2},chest:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.15},serratus:{role:"stabilizer",concentric:.3,eccentric:.25,isometric:.25},triceps:{role:"stabilizer",concentric:.25,eccentric:.2,isometric:.15},abs:{role:"stabilizer",concentric:.3,eccentric:.3,isometric:.3},obliques:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2},hip_flexors:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},glutes:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.2},hamstrings:{role:"stabilizer",concentric:.15,eccentric:.15,isometric:.15},erector_spinae:{role:"stabilizer",concentric:.2,eccentric:.2,isometric:.2}},ng=[{segment:0,text:"Take a wide overhand grip, arms straight, shoulders pulled down away from your ears"},{segment:1,text:"Drive your elbows down and out to the sides, chin up to the bar"},{segment:2,text:"Chin to the bar, chest high, neck long, no kicking or swinging"},{segment:3,text:"Lower slowly until the arms are straight again, shoulders stay set"}],sg="inhale in the hang, exhale on the way up, inhale on the way down",rg=160,og="Pull-up of pull_up.json with the hands about 1.5 shoulder widths apart (sh_abd 27 in the hang, 42 at the top as the elbows go down and out). Wrist angles authored to the solver's own result, so adjustment stays under 5 deg. 0.5 s hang pause, 1.5 s pull, 0.5 s top pause, 2.0 s lowering. Top raised (sh_flex 20, elbow_flex 124) so the chin reaches the bar; solver adjust under 8 deg. Checked from front, side, back and three-quarter views, and the female body in the hang, mid pull and top; no balance check (hang).",ag={id:Z0,name:J0,equipment:Q0,contacts:j0,keys:eg,segments:tg,activation:ig,cues:ng,breathing:sg,view_yaw:rg,notes:og},lg=[ec,dc,Mc,Uc,Yc,oh,xh,Ch,Hh,ef,uf,Ef,Ff,Kf,ad,bd,Pd,Vd,tu,uu,Eu,Fu,Ku,ap,bp,Pp,Vp,t_,u_,E_,F_,K_,am,bm,Pm,Vm,t0,u0,E0,F0,K0,ag],Hn=[1,0,0],vn=[0,1,0],yr=[0,0,1],di=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Et=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],pi=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],Mi=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Sn=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],yn=n=>Math.hypot(n[0],n[1],n[2]),Ha=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function Ei(n){const e=yn(n);return e>1e-12?[n[0]/e,n[1]/e,n[2]/e]:[0,1,0]}const Ot=(n,e,t)=>n<e?e:n>t?t:n,Ii=n=>n*Math.PI/180,zo=n=>n*180/Math.PI;function tt(n,e){const t=e*Math.PI/360,i=Math.sin(t);return[n[0]*i,n[1]*i,n[2]*i,Math.cos(t)]}function lt(n,e){return[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]-n[0]*e[2]+n[1]*e[3]+n[2]*e[0],n[3]*e[2]+n[0]*e[1]-n[1]*e[0]+n[2]*e[3],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]]}const Mr=n=>[-n[0],-n[1],-n[2],n[3]];function ii(n){const e=Math.hypot(n[0],n[1],n[2],n[3])||1;return[n[0]/e,n[1]/e,n[2]/e,n[3]/e]}function _i(n,e){const t=n[0],i=n[1],s=n[2],r=n[3],o=2*(i*e[2]-s*e[1]),a=2*(s*e[0]-t*e[2]),l=2*(t*e[1]-i*e[0]);return[e[0]+r*o+(i*l-s*a),e[1]+r*a+(s*o-t*l),e[2]+r*l+(t*a-i*o)]}function Va(n,e,t){let i=n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3],s=e[0],r=e[1],o=e[2],a=e[3];if(i<0&&(i=-i,s=-s,r=-r,o=-o,a=-a),i>.9995)return ii([n[0]+(s-n[0])*t,n[1]+(r-n[1])*t,n[2]+(o-n[2])*t,n[3]+(a-n[3])*t]);const l=Math.acos(i),c=Math.sin(l),h=Math.sin((1-t)*l)/c,_=Math.sin(t*l)/c;return[n[0]*h+s*_,n[1]*h+r*_,n[2]*h+o*_,n[3]*h+a*_]}function Vs(n,e,t){const i=lt(Mr(n),e),s=Math.acos(Ot(i[3],-1,1)),r=Math.sin(s);if(r<1e-6)return n;const o=Math.sin(t*s)/r;return ii(lt(n,[i[0]*o,i[1]*o,i[2]*o,Math.cos(t*s)]))}function Er(n,e){const t=Mi(n,e);if(t<-.999999){const s=Math.abs(n[0])<.9?Sn(n,Hn):Sn(n,vn),r=Ei(s);return[r[0],r[1],r[2],0]}const i=Sn(n,e);return ii([i[0],i[1],i[2],1+t])}function cg(n){const e=yn(n);if(e<1e-12)return[0,0,0,1];const t=Math.sin(e/2)/e;return[n[0]*t,n[1]*t,n[2]*t,Math.cos(e/2)]}const Wn=n=>[-n[0],n[1],n[2]],hg=n=>[n[0],-n[1],-n[2],n[3]],Bo=n=>({q:hg(n.q),t:Wn(n.t)}),Lt=(n,e)=>di(_i(n.q,e),n.t),fi=(n,e,t)=>({q:n,t:Et(t,_i(n,e))});function Nt(n,e,t){const i=ii(lt(n.q,e));return fi(i,t,Lt(n,t))}function Go(n,e,t){return lt(tt(Hn,-e),lt(tt(yr,n),tt(vn,-t)))}const qi=["spine_flex","spine_side","spine_twist","neck_flex","neck_side","neck_twist"],Ai=["sh_abd","sh_flex","sh_rot","shrug","protract","elbow_flex","forearm_pron","wrist_flex","wrist_dev","grip","hip_abd","hip_flex","hip_rot","knee_flex","ankle_dorsi","toe_ext","ankle_roll"],Dt=qi.length+Ai.length*2;function fg(n){const e=qi.indexOf(n);if(e>=0)return e;const t=n.startsWith("l_")?0:n.startsWith("r_")?1:-1;if(t<0)return-1;const i=Ai.indexOf(n.slice(2));return i<0?-1:qi.length+t*Ai.length+i}function dg(n,e=new Float64Array(Dt)){e.fill(0);for(const t of Object.keys(n)){const i=n[t];if(typeof i!="number"||!Number.isFinite(i))continue;const s=fg(t);if(s>=0){e[s]=i;continue}const r=Ai.indexOf(t);if(!(r<0))for(let o=0;o<2;o++){const a=qi.length+o*Ai.length+r;(o===0?"l_":"r_")+t in n||(e[a]=i)}}return e}const ug={flex:[.197,.186,.174,.163,.14,.14],side:[.082,.162,.216,.162,.162,.216],twist:[.09,.182,.182,.182,.182,.182]},Ho={flex:[12,9,6,6,6,5,4,4,4,4,4],side:[9,7,6,6,6,6,6,6,5,6,5],twist:[2,2,4,6,7,7,8,8,8,8,9]},pg={flex:.25,side:.4,twist:.7},Ws={flex:[.066,.125,.147,.147,.11,.074,.147,.184],side:[.066,.115,.131,.18,.18,.164,.082,.082],twist:[.026,.078,.091,.091,.091,.039,.519,.065]};function $s(n){const e=pg[n],t=Ho[n].reduce((o,a)=>o+a,0),i=[...ug[n].map(o=>o*(1-e)),...Ho[n].map(o=>o/t*e)],s=o=>i.slice(0,o).reduce((a,l)=>a+l,0),r=(s(16)+s(11))/2;return i.map(o=>o/r)}const qs={flex:$s("flex"),side:$s("side"),twist:$s("twist")},_g=.5,Vo=4e-4,mg=["index","middle","ring","little"];class gg{json;count;xf;thorax={q:[0,0,0,1],t:[0,0,0]};index=new Map;spine;neck;qHipBind;qShoulderBind;clavicleDir;clavicleLift;patellaDir;bladeRest;constructor(e){this.json=e,this.count=e.bones.length,this.xf=e.bones.map(()=>({q:[0,0,0,1],t:[0,0,0]})),e.bones.forEach((t,i)=>this.index.set(t.name,i)),this.spine=["L5","L4","L3","L2","L1",...Array.from({length:12},(t,i)=>`T${12-i}`)].map(t=>this.bone(t)),this.neck=[...Array.from({length:7},(t,i)=>`C${7-i}`),"skull"].map(t=>this.bone(t)),this.qHipBind=Mr(e.joints.hip.qbind),this.qShoulderBind=Mr(e.joints.shoulder.qbind),this.clavicleDir=Ei(Et(this.pivot("scapula_l"),this.pivot("clavicle_l"))),this.clavicleLift=Ei(Sn(this.clavicleDir,vn)),this.patellaDir=Ei(e.joints.patella.arm),this.bladeRest=[this.offRibcage(e.joints.scapula.inferior_angle),this.offRibcage(e.joints.scapula.medial_root)]}offRibcage(e){const{centre:t,radii:i}=this.json.joints.thorax,s=Math.min((e[1]-t[1])/i[1],_g);return Math.hypot((e[0]-t[0])/i[0],s,(e[2]-t[2])/i[2])-1}bone(e){const t=this.index.get(e);if(t===void 0)throw new Error(`avatar: no bone called ${e}`);return t}pivot(e){return this.json.bones[this.bone(e)].pivot}solve(e,t,i=0){const s=this.json.joints,r=this.xf,o=this.bone("pelvis");r[o]={q:ii(t.q),t:t.t};let a=o;this.spine.forEach((g,v)=>{const p=lt(tt(yr,e[1]*qs.side[v]),lt(tt(Hn,e[0]*qs.flex[v]),tt(vn,-e[2]*qs.twist[v])));r[g]=Nt(r[a],p,this.json.bones[g].pivot),a=g}),this.neck.forEach((g,v)=>{const p=lt(tt(yr,e[4]*Ws.side[v]),lt(tt(Hn,e[3]*Ws.flex[v]),tt(vn,-e[5]*Ws.twist[v])));r[g]=Nt(r[a],p,this.json.bones[g].pivot),a=g});const l=r[this.bone("T2")],c=r[this.bone("T7")],h=this.pivot("sternum"),_=Va(l.q,c.q,.5);this.thorax=fi(_,h,Ha(Lt(l,h),Lt(c,h),.5));const f=i*s.breath.max_deg,u=r[this.bone("T1")];r[this.bone("sternum")]=fi(ii(lt(_,tt(Hn,-f))),s.breath.pivot,Lt(u,s.breath.pivot));for(let g=0;g<2;g++){const v=g===0?"_l":"_r",p=g===1,d=(y,A)=>{r[this.bone(y+v)]=p?Bo(A):A},S=y=>p?Bo(y):y,T=qi.length+g*Ai.length;for(const y of s.ribs){const A=S(r[this.bone(`T${y.rib}`)]);d(`rib${y.rib}`,Nt(A,tt(y.axis,f*y.share),this.pivot(`rib${y.rib}_l`)))}this.arm(S(this.thorax),e,T,i,d),this.leg(S(r[o]),e,T,d)}}arm(e,t,i,s,r){const o=this.json.joints,a=t[i],l=t[i+1],c=t[i+2],h=t[i+3]+s*1.5,_=t[i+4],f=Ot(t[i+9],0,1),u=[Math.sin(Ii(a)),-Math.cos(Ii(a))*Math.cos(Ii(l)),Math.cos(Ii(a))*Math.sin(Ii(l))],g=Math.max(u[2],0),v=Math.hypot(u[0],g),p=zo(Math.atan2(v,-u[1])),d=u[2]<0?zo(Math.asin(Ot(-u[2],0,1))):0,S=v>1e-6?g/v:0,T=Math.max(0,p-20),y=T<=100?.44*T:44+.2*(T-100),A=1-1.3*S*Math.sin(Ii(Math.min(p,180))),E=.09*Math.min(p,120)+.14*Math.max(0,p-120),m=.125*Math.min(p,140)*A,w=p<=90?.06*p:5.4+.45*Math.min(p-90,75),I=this.pivot("clavicle_l"),C=this.pivot("scapula_l"),N=this.pivot("humerus_l"),U=lt(tt(vn,-(_-m)),lt(tt(this.clavicleLift,h+E),tt(this.clavicleDir,-w))),$=Nt(e,U,I);r("clavicle",$);const k=di(I,_i(U,Et(C,I))),G=tt(o.scapula.normal,y+.25*h),V=Et(o.scapula.inferior_angle,C),D=Et(o.scapula.medial_root,C),ee=(Je,Be)=>lt(cg(di(pi(o.scapula.lateral,Ii(Je)),pi(o.scapula.up,Ii(Be)))),G),z=(Je,Be)=>{const ot=ee(Je,Be);return[this.offRibcage(di(k,_i(ot,V)))-this.bladeRest[0],this.offRibcage(di(k,_i(ot,D)))-this.bladeRest[1]]},K=.3*d,Q=Vo*Vo,pe=(Je,Be,ot)=>Je[0]*Je[0]+Je[1]*Je[1]+Q*((Be-K)*(Be-K)+ot*ot);let Ee=K,q=0,ne=z(Ee,q),_e=pe(ne,Ee,q),be=1e-6;for(let Je=0;Je<14&&!(Math.abs(ne[0])+Math.abs(ne[1])<2e-4);Je++){const Be=z(Ee+.5,q),ot=z(Ee,q+.5),ht=(Be[0]-ne[0])/.5,nt=(ot[0]-ne[0])/.5,L=(Be[1]-ne[1])/.5,xt=(ot[1]-ne[1])/.5,Qe=ht*ht+L*L+Q+be,je=ht*nt+L*xt,fe=nt*nt+xt*xt+Q+be,ut=ht*ne[0]+L*ne[1]+Q*(Ee-K),Re=nt*ne[0]+xt*ne[1]+Q*q,Pe=Qe*fe-je*je;if(!(Math.abs(Pe)>1e-18))break;const M=Ee-Ot((fe*ut-je*Re)/Pe,-15,15),x=q-Ot((Qe*Re-je*ut)/Pe,-15,15),F=z(M,x),ie=pe(F,M,x);if(ie<_e){const j=_e-ie;if(Ee=M,q=x,ne=F,_e=ie,be=Math.max(be*.3,1e-8),j<1e-12)break}else if(be*=10,be>1)break}const te=fi(ii(lt(e.q,ee(Ee,q))),C,Lt($,C));r("scapula",te);const Me=fi(ii(lt(e.q,lt(Go(a,l,c),this.qShoulderBind))),N,Lt(te,N));r("humerus",Me);const Xe=this.pivot("armpit_l");r("armpit",fi(Vs(e.q,Me.q,o.helpers.armpit),Xe,Lt(Me,Xe)));for(const Je of["front","side","back"]){const Be=o.deltoid[Je],ot=Be.from==="clavicle"?$:te,ht=Lt(ot,Be.origin),nt=Lt(Me,Be.insertion),L=Vs(ot.q,Me.q,.5),xt=Ei(Et(Be.insertion,Be.origin)),Qe=ii(lt(Er(_i(L,xt),Ei(Et(nt,ht))),L));r(`delt${Je}`,fi(Qe,pi(di(Be.origin,Be.insertion),.5),pi(di(ht,nt),.5)))}const Te=Nt(Me,tt(o.elbow.axis,-(t[i+5]-o.elbow.bind)),this.pivot("ulna_l"));r("ulna",Te);const Oe=Nt(Te,tt(o.forearm.axis,t[i+6]-o.forearm.bind),this.pivot("radius_l"));r("radius",Oe);const ze=lt(tt(o.wrist.flex_axis,-t[i+7]/2),tt(o.wrist.dev_axis,-t[i+8]/2)),Ce=Nt(Oe,ze,this.pivot("carpus_l"));r("carpus",Ce);const ct=Nt(Ce,ze,this.pivot("hand_l"));r("hand",ct);const pt=[4+74*f,6+88*f,4+50*f];for(const Je of mg){const Be=o.hand.finger_axes[Je],ot=o.hand.finger_bind[Je];let ht=ct;for(let nt=0;nt<3;nt++)ht=Nt(ht,tt(Be,pt[nt]-ot[nt]),this.pivot(`${Je}${nt+1}_l`)),r(`${Je}${nt+1}`,ht)}const Tt=Nt(ct,lt(tt(o.hand.thumb_oppose_axis,30*f),tt(o.hand.thumb_flex_axis,15*f)),this.pivot("thumb1_l"));r("thumb1",Tt);const rt=Nt(Tt,tt(o.hand.thumb_flex_axis,30*f),this.pivot("thumb2_l"));r("thumb2",rt),r("thumb3",Nt(rt,tt(o.hand.thumb_flex_axis,40*f),this.pivot("thumb3_l")))}leg(e,t,i,s){const r=this.json.joints,o=this.pivot("femur_l"),a=this.pivot("tibia_l"),l=fi(ii(lt(e.q,lt(Go(t[i+10],t[i+11],t[i+12]),this.qHipBind))),o,Lt(e,o));s("femur",l);const c=this.pivot("buttock_l");s("buttock",fi(Vs(e.q,l.q,r.helpers.buttock),c,Lt(l,c)));const h=t[i+13]-r.knee.bind,_=Nt(l,tt(r.knee.axis,h),a);s("tibia",_);const f=ii(lt(l.q,tt(r.patella.axis,h*r.patella.share))),u=r.patella.sink,g=Ot(Math.max(t[i+13],0)/r.patella.step_deg,0,u.length-1),v=Math.floor(g),p=u[v]+(u[Math.min(v+1,u.length-1)]-u[v])*(g-v);s("patella",fi(f,a,di(Lt(l,a),_i(f,pi(this.patellaDir,p)))));const d=Nt(_,lt(tt(r.ankle.axis,-(t[i+14]-r.ankle.bind)),tt(r.ankle.roll_axis,t[i+16])),this.pivot("foot_l"));s("foot",d),s("toes",Nt(d,tt(r.toes.axis,-t[i+15]),this.pivot("toes_l")))}contactPoints(e){const t=e.startsWith("l_")||e.startsWith("r_"),i=this.json.contacts[t?e.slice(2):e];if(!i||i.sided!==t)throw new Error(`avatar: no contact point called ${e}`);const s=e.startsWith("r_");return i.points.map(r=>({bone:this.bone(i.sided?`${r.bone}_${s?"r":"l"}`:r.bone),rest:s?Wn(r.at):r.at,r:r.r}))}carried(e,t){return Lt(this.xf[this.bone(e)],t)}writeDualQuats(e){for(let t=0;t<this.count;t++){const{q:i,t:s}=this.xf[t],r=lt([s[0],s[1],s[2],0],i);e.set(i,t*8),e[t*8+4]=r[0]*.5,e[t*8+5]=r[1]*.5,e[t*8+6]=r[2]*.5,e[t*8+7]=r[3]*.5}}}const xg=.42,bg=qi.indexOf("neck_flex"),vg=qi.indexOf("neck_twist");class wg{times;duration;p;v;a;constructor(e){if(e.length<2)throw new Error("An exercise needs at least two keys.");this.times=e.map(i=>i.time_s),this.duration=this.times[this.times.length-1],this.p=e.map(i=>dg(i.pose));const t=e.length;this.v=e.map(()=>new Float64Array(Dt)),this.a=e.map(()=>new Float64Array(Dt));for(let i=1;i<t-1;i++){if(e[i].stop)continue;const s=this.times[i]-this.times[i-1],r=this.times[i+1]-this.times[i];if(!(s<=1e-6||r<=1e-6))for(let o=0;o<Dt;o++){const a=(this.p[i][o]-this.p[i-1][o])/s,l=(this.p[i+1][o]-this.p[i][o])/r;if(a*l<=0)continue;const c=2*r+s,h=r+2*s;this.v[i][o]=(c+h)/(c/a+h/l),this.a[i][o]=(l-a)/(s+r)}}}sample(e,t=new Float64Array(Dt)){const i=this.times,s=i.length-1,r=Ot(e,0,this.duration);let o=0;for(;o<s-1&&r>=i[o+1];)o++;const a=i[o+1]-i[o];if(a<=1e-9)return t.set(this.p[o+1]),t;const l=(r-i[o])/a,c=l*l,h=c*l,_=h*l,f=_*l,u=this.p[o],g=this.p[o+1],v=this.v[o],p=this.v[o+1],d=this.a[o],S=this.a[o+1];for(let T=0;T<Dt;T++){const y=g[T]-u[T]-v[T]*a-.5*d[T]*a*a,A=(p[T]-v[T])*a-d[T]*a*a,E=(S[T]-d[T])*a*a;t[T]=u[T]+v[T]*a*l+.5*d[T]*a*a*c+(10*y-4*A+.5*E)*h+(-15*y+7*A-E)*_+(6*y-3*A+.5*E)*f}return t}}class Sg{constructor(e,t,i,s,r,o,a,l){this.exercise=e,this.track=t,this.frames=i,this.barHeight=s,this.contactError=r,this.adjustment=o,this.anchors=a,this.detail=l}get duration(){return this.track.duration}pose(e,t){const i=this.frames.length-1,r=(e%this.duration+this.duration)%this.duration/this.duration*i,o=Math.min(Math.floor(r),i-1),a=r-o,l=this.frames[o],c=this.frames[o+1];for(let h=0;h<Dt;h++)t[h]=l.dofs[h]+(c.dofs[h]-l.dofs[h])*a;return{q:Va(l.root.q,c.root.q,a),t:di(l.root.t,pi(Et(c.root.t,l.root.t),a))}}segment(e){const t=(e%this.duration+this.duration)%this.duration,i=this.track.times,s=this.exercise.segments;for(let r=0;r<s.length;r++){const o=i[s[r].from],a=i[s[r].to];if(t>=o&&(t<a||r===s.length-1))return{index:r,type:s[r].type,progress:a>o?Ot((t-o)/(a-o),0,1):1}}return{index:0,type:s[0]?.type??"rest",progress:0}}}function yg(n){const e=n.exercise.equipment;let t=null;const i=n.anchors.filter(s=>s.support==="bench");if(i.length){const s=n.anchors.filter(l=>l.support==="floor"),r=(l,c)=>l.reduce((h,_)=>h+_.at[c],0)/Math.max(l.length,1),o=r(i,2),a=s.length&&r(s,2)<o?1:-1;t={x:r(i,0),z:o-a*.05,back:a,height:xg}}return{dumbbells:e==="dumbbells",bar:n.barHeight,bench:t}}function Mg(n,e){const t=[];for(const[i,s]of Object.entries(n.activation)){const r=e(i);if(!r)continue;const o=s.concentric??s.isometric??0;t.push({slots:r.slots,specific:r.specific,concentric:o,eccentric:s.eccentric??o*.7,isometric:s.isometric??o*.5})}return t.sort((i,s)=>Number(i.specific)-Number(s.specific))}class Eg{constructor(e,t,i){this.clip=e,this.targets=t,this.levels=new Float32Array(i),this.smoothed=new Float32Array(t.length);const s=e.exercise;this.steady=s.segments.every(c=>c.type==="isometric"||c.type==="rest"),this.headFree=!s.contacts.some(c=>c.point==="head_back")&&!s.keys.some(c=>(c.pose.sh_abd??0)>120&&(c.pose.elbow_flex??0)>120);const r=c=>s.contacts.some(h=>/palm|grip|forearm/.test(h.point)===c),o=s.equipment!=="barbell";Ai.forEach((c,h)=>{const _=h<Ai.indexOf("hip_abd");o&&c!=="grip"&&c!=="ankle_roll"&&!r(_)&&this.trailing.push(qi.length+Ai.length+h)});const a=s.keys.length,l=new Array(a).fill(NaN);for(const c of s.segments)c.type==="concentric"?(l[c.from]=.95,l[c.to]=.2):c.type==="eccentric"&&(l[c.to]=.95,Number.isNaN(l[c.from])&&(l[c.from]=.25));Number.isNaN(l[0])&&(l[0]=Number.isNaN(l[a-1])?.3:l[a-1]),l[a-1]=l[0];for(let c=1;c<a;c++)Number.isNaN(l[c])&&(l[c]=l[c-1]);this.breathAt=l,this.update(0)}time=0;rep=0;speed=1;dofs=new Float64Array(Dt);root={q:[0,0,0,1],t:[0,0,0]};breath=.3;levels;flow=0;segment={index:0,type:"rest",progress:0};smoothed;breathAt;steady;elapsed=0;headFree;trailing=[];late=new Float64Array(Dt);advance(e){const t=1+.035*Math.sin(this.rep*2.399+.6);this.time+=e*this.speed*t,this.elapsed+=e*this.speed,this.time>=this.clip.duration&&(this.time-=this.clip.duration,this.rep+=1),this.update(e)}seek(e){this.time=(e%this.clip.duration+this.clip.duration)%this.clip.duration,this.update(0)}update(e){const t=this.clip;if(this.root=t.pose(this.time,this.dofs),this.trailing.length){const r=.012+.03*Math.sin(this.rep*1.7+.4);t.pose(this.time-r,this.late);for(const o of this.trailing)this.dofs[o]=this.late[o]}if(this.segment=t.segment(this.time),this.headFree){const r=this.elapsed;this.dofs[bg]+=.7*Math.sin(.53*r+.4)+.3*Math.sin(1.31*r),this.dofs[vg]+=1.1*Math.sin(.37*r+1.3)+.4*Math.sin(.89*r+.2)}const i=this.segment.type;if(this.flow=i==="concentric"?1:i==="eccentric"?-1:0,this.steady)this.breath=.2+.45*(.5-.5*Math.cos(this.time/t.duration*Math.PI*2));else{const r=t.track.times;let o=0;for(;o<r.length-2&&this.time>=r[o+1];)o++;const a=r[o+1]-r[o],l=a>1e-6?Ot((this.time-r[o])/a,0,1):1,c=.5-.5*Math.cos(l*Math.PI);this.breath=.55*(this.breathAt[o]+(this.breathAt[o+1]-this.breathAt[o])*c)}const s=e<=0?1:1-Math.exp(-e/.16);this.levels.fill(0),this.targets.forEach((r,o)=>{const a=i==="concentric"?r.concentric:i==="eccentric"?r.eccentric:i==="isometric"?r.isometric:Math.min(.1,r.isometric*.3);this.smoothed[o]+=(a-this.smoothed[o])*s;for(const l of r.slots)this.levels[l]=r.specific?this.smoothed[o]:Math.max(this.levels[l],this.smoothed[o])})}get cue(){const e=this.clip.exercise.cues.filter(t=>t.segment===this.segment.index);return e.length?e.map((t,i)=>i<e.length-1&&!/[.!?;:]$/.test(t.text.trim())?`${t.text.trim()}.`:t.text.trim()).join(" "):null}}const Wa=Dt+7,$a=new Map(lg.map(n=>[n.id,n]));let Dn=null;function Tg(n="avatar/",e=""){if(!Dn){const t=e?`?v=${encodeURIComponent(e)}`:"";Dn=(async()=>{const[i,s]=await Promise.all([fetch(`${n}clips.json${t}`),fetch(`${n}clips.bin${t}`)]);if(!i.ok||!s.ok)throw new Error("The exercise movements could not be loaded.");const r=await i.json();if(r.frameFloats!==Wa)throw new Error("The exercise movements were built for a different version of the app.");return{index:r,data:new Float32Array(await s.arrayBuffer())}})(),Dn.catch(()=>{Dn=null})}return Dn}function Ag(n,e,t){const i=$a.get(e),s=n.index.variants[t]?.[e];if(!i||!s)return null;const r=[];for(let o=0;o<s.frames;o++){const a=s.offset+o*Wa,l=Float64Array.from(n.data.subarray(a,a+Dt)),c=n.data.subarray(a+Dt,a+Dt+4),h=n.data.subarray(a+Dt+4,a+Dt+7);r.push({dofs:l,root:{q:[c[0],c[1],c[2],c[3]],t:[h[0],h[1],h[2]]}})}return new Sg(i,new wg(i.keys),r,s.bar,0,0,s.anchors,{joints:{},contacts:{}})}function Ji(n,e,t,i,s){const r=e.sections[t];if(!r)throw new Error(`avatar model: section ${t} is missing`);return i(n,r.offset,r.bytes/s)}function Rg(n,e){const t=e&&n.variants.includes(e)?e:n.variants[0],i=n.rigs?.[t];return i?{variant:t,json:{...n,bones:n.bones.map((s,r)=>({...s,pivot:i.pivots[r]})),parts:i.ends?n.parts.map((s,r)=>i.ends[r]?{...s,ends:i.ends[r]}:s):n.parts,joints:i.joints,contacts:i.contacts,floor:i.floor,landmarks:i.landmarks}}:{json:n,variant:t}}function kg(n,e){return!n.only||n.only.includes(e)}function Cg(n,e,t){const{json:i,variant:s}=Rg(n,t),r=i.vertices,o=Ji(e,i,`position_${s}`,(D,ee,z)=>new Uint16Array(D,ee,z),2),a=Ji(e,i,`occlusion_${s}`,(D,ee,z)=>new Uint8Array(D,ee,z),1),l=Ji(e,i,"bones",(D,ee,z)=>new Uint8Array(D,ee,z),1),c=Ji(e,i,"weights",(D,ee,z)=>new Uint8Array(D,ee,z),1),h=Ji(e,i,"shade",(D,ee,z)=>new Uint8Array(D,ee,z),1),_=Ji(e,i,"fibre",(D,ee,z)=>new Int8Array(D,ee,z),1),f=Ji(e,i,"index",(D,ee,z)=>new Uint16Array(D,ee,z),2),{min:u,scale:g}=i.quant,v=i.bones.map(D=>D.mirror),p=D=>kg(D,s);let d=0;for(const D of i.parts)p(D)&&(d+=D.v[1]*(D.side==="r"?2:1));const S=new Float32Array(d*3),T=new Int8Array(d*3),y=new Uint8Array(d*4),A=new Uint8Array(d*4),E=new Uint8Array(d*4),m=new Int8Array(d*4),w=new Uint16Array(d),I=[],C=[0,0,0,0];for(const D of i.parts)p(D)&&(C[D.layer]+=D.t[1]*3*(D.side==="r"?2:1));const N=C.map(D=>new Uint32Array(D)),U=[0,0,0,0];for(const D of i.parts)p(D)&&!D.open&&(U[D.layer]+=D.t[1]*3*(D.side==="r"?2:1));const $=[0,0,0,0],k=[...U],G=new Float32Array(r*3);for(const D of i.parts){const ee=D.v[0];for(let z=D.t[0];z<D.t[0]+D.t[1];z++){const K=ee+f[z*3],Q=ee+f[z*3+1],pe=ee+f[z*3+2],Ee=o[K*3],q=o[K*3+1],ne=o[K*3+2],_e=o[Q*3]-Ee,be=o[Q*3+1]-q,te=o[Q*3+2]-ne,Me=o[pe*3]-Ee,Xe=o[pe*3+1]-q,Te=o[pe*3+2]-ne,Oe=be*Te-te*Xe,ze=te*Me-_e*Te,Ce=_e*Xe-be*Me;G[K*3]+=Oe,G[K*3+1]+=ze,G[K*3+2]+=Ce,G[Q*3]+=Oe,G[Q*3+1]+=ze,G[Q*3+2]+=Ce,G[pe*3]+=Oe,G[pe*3+1]+=ze,G[pe*3+2]+=Ce}}let V=0;return i.parts.forEach((D,ee)=>{if(!p(D))return;const z=D.side==="r"?["r","l"]:["m"];for(const K of z){const Q=K==="l",pe=V,Ee=I.length;I.push({part:ee,side:K,vertexStart:pe,vertexCount:D.v[1]});for(let be=0;be<D.v[1];be++){const te=D.v[0]+be,Me=u[0]+o[te*3]*g;S[V*3]=Q?-Me:Me,S[V*3+1]=u[1]+o[te*3+1]*g,S[V*3+2]=u[2]+o[te*3+2]*g;const Xe=G[te*3],Te=G[te*3+1],Oe=G[te*3+2],ze=Math.hypot(Xe,Te,Oe)||1;T[V*3]=Math.round((Q?-Xe:Xe)/ze*127),T[V*3+1]=Math.round(Te/ze*127),T[V*3+2]=Math.round(Oe/ze*127);for(let Ce=0;Ce<4;Ce++){const ct=l[te*4+Ce];y[V*4+Ce]=Q?v[ct]:ct,A[V*4+Ce]=c[te*4+Ce]}E[V*4]=h[te*3],E[V*4+1]=h[te*3+1],E[V*4+2]=h[te*3+2],E[V*4+3]=a[te],m[V*4]=Q?-_[te*3]:_[te*3],m[V*4+1]=_[te*3+1],m[V*4+2]=_[te*3+2],w[V]=Ee,V++}const q=N[D.layer],ne=D.open?k:$;let _e=ne[D.layer];for(let be=D.t[0];be<D.t[0]+D.t[1];be++){const te=pe+f[be*3],Me=pe+f[be*3+1],Xe=pe+f[be*3+2];q[_e++]=te,q[_e++]=Q?Xe:Me,q[_e++]=Q?Me:Xe}ne[D.layer]=_e}}),{json:i,variant:s,vertexCount:d,position:S,normal:T,skinIndex:y,skinWeight:A,shade:E,fibre:m,slot:w,slots:I,index:N,closed:U}}let In=null;function Pg(n="avatar/",e=""){if(!In){const t=e?`?v=${encodeURIComponent(e)}`:"";In=(async()=>{const[i,s]=await Promise.all([fetch(`${n}body.json${t}`),fetch(`${n}body.bin${t}`)]);if(!i.ok||!s.ok)throw new Error("The avatar model could not be loaded.");return{json:await i.json(),bin:await s.arrayBuffer()}})(),In.catch(()=>{In=null})}return In}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="187",Lg=0,Wo=1,Dg=2,ys=1,Ig=2,Bn=3,Ci=0,Gt=1,si=2,Mn=0,Vn=1,$o=2,qo=3,Xo=4,Ng=5,bn=100,Ug=101,Fg=102,Og=103,zg=104,Bg=200,Gg=201,Hg=202,Vg=203,qa=204,Xa=205,Wg=206,$g=207,qg=208,Xg=209,Yg=210,Kg=211,Zg=212,Jg=213,Qg=214,Tr=0,Ar=1,Rr=2,$n=3,kr=4,Cr=5,Pr=6,Lr=7,Ya=0,jg=1,ex=2,Ri=0,Ka=1,Za=2,Ja=3,Qa=4,ja=5,el=6,tl=7,il=300,Tn=301,qn=302,Xs=303,Ys=304,Dr=1e3,Ti=1001,Ir=1002,bt=1003,tx=1004,ts=1005,Bt=1006,Ks=1007,Vi=1008,Yt=1009,nl=1010,sl=1011,Xn=1012,go=1013,mi=1014,Kt=1015,gi=1016,xo=1017,bo=1018,An=1020,rl=35902,ol=35899,al=1021,ll=1022,Zt=1023,Xi=1026,Wi=1027,cl=1028,vo=1029,sn=1030,wo=1031,So=1033,Ms=33776,Es=33777,Ts=33778,As=33779,Nr=35840,Ur=35841,Fr=35842,Or=35843,zr=36196,Br=37492,Gr=37496,Hr=37488,Vr=37489,Cs=37490,Wr=37491,$r=37808,qr=37809,Xr=37810,Yr=37811,Kr=37812,Zr=37813,Jr=37814,Qr=37815,jr=37816,eo=37817,to=37818,io=37819,no=37820,so=37821,ro=36492,oo=36494,ao=36495,lo=36283,co=36284,Ps=36285,ho=36286,ix=3200,Yo=0,nx=1,Hi="",Xt="srgb",Yn="srgb-linear",Ls="linear",it="srgb",Zs=7680,sx=7681,rx=517,ox=519,ax=512,lx=513,cx=514,hl=515,hx=516,fx=517,fl=518,dl=519,dx=35044,Bi="300 es",oi=2e3,Ds=2001;function ux(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function px(){const n=Is("canvas");return n.style.display="block",n}const Ko={};function Zo(...n){const e="THREE."+n.shift();console.log(e,...n)}function ul(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=ul(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=ul(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rs(...n){const e=n.join(" ");e in Ko||(Ko[e]=!0,Le(...n))}function _x(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const mx={[Tr]:Tr,[Rr]:Pr,[kr]:kr,[$n]:Cr,[Ar]:Ar,[Pr]:Rr,[Lr]:Lr,[Cr]:$n};class on{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,fo=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function gx(n,e){return(n%e+e)%e}function Qs(n,e,t){return(1-t)*n+t*e}function xx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bx(n,e){if(e.constructor===Float32Array)return n;const t=yo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function vx(n,e){if(e.constructor===Float32Array)return n;const t=yo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class qe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],_=i[s+3],f=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(_!==v||l!==f||c!==u||h!==g){let p=l*f+c*u+h*g+_*v;p<0&&(f=-f,u=-u,g=-g,v=-v,p=-p);let d=1-a;if(p<.9995){const S=Math.acos(p),T=Math.sin(S);d=Math.sin(d*S)/T,a=Math.sin(a*S)/T,l=l*d+f*a,c=c*d+u*a,h=h*d+g*a,_=_*d+v*a}else{l=l*d+f*a,c=c*d+u*a,h=h*d+g*a,_=_*d+v*a;const S=1/Math.sqrt(l*l+c*c+h*h+_*_);l*=S,c*=S,h*=S,_*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],_=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*_+l*u-c*f,e[t+1]=l*g+h*f+c*_-a*u,e[t+2]=c*g+h*u+a*f-l*_,e[t+3]=h*g-a*_-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),_=a(r/2),f=l(i/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*_+c*u*g,this._y=c*u*_-f*h*g,this._z=c*h*g+f*u*_,this._w=c*h*_-f*u*g;break;case"YXZ":this._x=f*h*_+c*u*g,this._y=c*u*_-f*h*g,this._z=c*h*g-f*u*_,this._w=c*h*_+f*u*g;break;case"ZXY":this._x=f*h*_-c*u*g,this._y=c*u*_+f*h*g,this._z=c*h*g+f*u*_,this._w=c*h*_-f*u*g;break;case"ZYX":this._x=f*h*_-c*u*g,this._y=c*u*_+f*h*g,this._z=c*h*g-f*u*_,this._w=c*h*_+f*u*g;break;case"YZX":this._x=f*h*_+c*u*g,this._y=c*u*_+f*h*g,this._z=c*h*g-f*u*_,this._w=c*h*_-f*u*g;break;case"XZY":this._x=f*h*_-c*u*g,this._y=c*u*_-f*h*g,this._z=c*h*g+f*u*_,this._w=c*h*_+f*u*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],_=t[10],f=i+a+_;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>_){const u=2*Math.sqrt(1+i-a-_);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>_){const u=2*Math.sqrt(1+a-i-_);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+_-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),_=2*(r*i-o*t);return this.x=t+l*c+o*_-a*h,this.y=i+l*h+a*c-r*_,this.z=s+l*_+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new H,Jo=new Cn;class Ie{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],_=i[7],f=i[2],u=i[5],g=i[8],v=s[0],p=s[3],d=s[6],S=s[1],T=s[4],y=s[7],A=s[2],E=s[5],m=s[8];return r[0]=o*v+a*S+l*A,r[3]=o*p+a*T+l*E,r[6]=o*d+a*y+l*m,r[1]=c*v+h*S+_*A,r[4]=c*p+h*T+_*E,r[7]=c*d+h*y+_*m,r[2]=f*v+u*S+g*A,r[5]=f*p+u*T+g*E,r[8]=f*d+u*y+g*m,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],_=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=t*_+i*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=_*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=u*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(er.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(er.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const er=new Ie,Qo=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wx(){const n={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yn]:{primaries:e,whitePoint:i,transfer:Ls,toXYZ:Qo,fromXYZ:jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Qo,fromXYZ:jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const Ve=wx();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function En(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let an;class Sx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{an===void 0&&(an=Is("canvas")),an.width=e.width,an.height=e.height;const s=an.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=an}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class Mo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tr(s[o].image)):r.push(tr(s[o]))}else r=tr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function tr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Mx=0;const ir=new H;class zt extends on{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Ti,s=Ti,r=Bt,o=Vi,a=Zt,l=Yt,c=zt.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Kn(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=il;zt.DEFAULT_ANISOTROPY=1;class dt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],_=l[8],f=l[1],u=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(_-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(_+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(u+1)/2,A=(d+1)/2,E=(h+f)/4,m=(_+v)/4,w=(g+p)/4;return T>y&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=m/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=w/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=m/r,s=w/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(_-v)*(_-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(_-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends on{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new zt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Ex{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pl extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tx extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class _t{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,_,f,u,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,_,f,u,g,v,p)}set(e,t,i,s,r,o,a,l,c,h,_,f,u,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=_,d[14]=f,d[3]=u,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ln.setFromMatrixColumn(e,0).length(),r=1/ln.setFromMatrixColumn(e,1).length(),o=1/ln.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),_=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*_,g=a*h,v=a*_;t[0]=l*h,t[4]=-l*_,t[8]=c,t[1]=u+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,u=l*_,g=c*h,v=c*_;t[0]=f+v*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*_,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,u=l*_,g=c*h,v=c*_;t[0]=f-v*a,t[4]=-o*_,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,u=o*_,g=a*h,v=a*_;t[0]=l*h,t[4]=g*c-u,t[8]=f*c+v,t[1]=l*_,t[5]=v*c+f,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,u=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*_,t[8]=g*_+u,t[1]=_,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*_+g,t[10]=f-v*_}else if(e.order==="XZY"){const f=o*l,u=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-_,t[8]=c*h,t[1]=f*_+v,t[5]=o*h,t[9]=u*_-g,t[2]=g*_-u,t[6]=a*h,t[10]=v*_+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Rx)}lookAt(e,t,i){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Ni.crossVectors(i,Ht),Ni.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Ni.crossVectors(i,Ht)),Ni.normalize(),is.crossVectors(Ht,Ni),s[0]=Ni.x,s[4]=is.x,s[8]=Ht.x,s[1]=Ni.y,s[5]=is.y,s[9]=Ht.y,s[2]=Ni.z,s[6]=is.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],_=i[5],f=i[9],u=i[13],g=i[2],v=i[6],p=i[10],d=i[14],S=i[3],T=i[7],y=i[11],A=i[15],E=s[0],m=s[4],w=s[8],I=s[12],C=s[1],N=s[5],U=s[9],$=s[13],k=s[2],G=s[6],V=s[10],D=s[14],ee=s[3],z=s[7],K=s[11],Q=s[15];return r[0]=o*E+a*C+l*k+c*ee,r[4]=o*m+a*N+l*G+c*z,r[8]=o*w+a*U+l*V+c*K,r[12]=o*I+a*$+l*D+c*Q,r[1]=h*E+_*C+f*k+u*ee,r[5]=h*m+_*N+f*G+u*z,r[9]=h*w+_*U+f*V+u*K,r[13]=h*I+_*$+f*D+u*Q,r[2]=g*E+v*C+p*k+d*ee,r[6]=g*m+v*N+p*G+d*z,r[10]=g*w+v*U+p*V+d*K,r[14]=g*I+v*$+p*D+d*Q,r[3]=S*E+T*C+y*k+A*ee,r[7]=S*m+T*N+y*G+A*z,r[11]=S*w+T*U+y*V+A*K,r[15]=S*I+T*$+y*D+A*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],_=e[6],f=e[10],u=e[14],g=e[3],v=e[7],p=e[11],d=e[15],S=l*u-c*f,T=a*u-c*_,y=a*f-l*_,A=o*u-c*h,E=o*f-l*h,m=o*_-a*h;return t*(v*S-p*T+d*y)-i*(g*S-p*A+d*E)+s*(g*T-v*A+d*m)-r*(g*y-v*E+p*m)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],_=e[9],f=e[10],u=e[11],g=e[12],v=e[13],p=e[14],d=e[15],S=t*a-i*o,T=t*l-s*o,y=t*c-r*o,A=i*l-s*a,E=i*c-r*a,m=s*c-r*l,w=h*v-_*g,I=h*p-f*g,C=h*d-u*g,N=_*p-f*v,U=_*d-u*v,$=f*d-u*p,k=S*$-T*U+y*N+A*C-E*I+m*w;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/k;return e[0]=(a*$-l*U+c*N)*G,e[1]=(s*U-i*$-r*N)*G,e[2]=(v*m-p*E+d*A)*G,e[3]=(f*E-_*m-u*A)*G,e[4]=(l*C-o*$-c*I)*G,e[5]=(t*$-s*C+r*I)*G,e[6]=(p*y-g*m-d*T)*G,e[7]=(h*m-f*y+u*T)*G,e[8]=(o*U-a*C+c*w)*G,e[9]=(i*C-t*U-r*w)*G,e[10]=(g*E-v*y+d*S)*G,e[11]=(_*y-h*E-u*S)*G,e[12]=(a*I-o*N-l*w)*G,e[13]=(t*N-i*I+s*w)*G,e[14]=(v*T-g*A-p*S)*G,e[15]=(h*A-_*T+f*S)*G,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,_=a+a,f=r*c,u=r*h,g=r*_,v=o*h,p=o*_,d=a*_,S=l*c,T=l*h,y=l*_,A=i.x,E=i.y,m=i.z;return s[0]=(1-(v+d))*A,s[1]=(u+y)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(u-y)*E,s[5]=(1-(f+d))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(g+T)*m,s[9]=(p-S)*m,s[10]=(1-(f+v))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ln.set(s[0],s[1],s[2]).length();const a=ln.set(s[4],s[5],s[6]).length(),l=ln.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jt.copy(this);const c=1/o,h=1/a,_=1/l;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=_,jt.elements[9]*=_,jt.elements[10]*=_,t.setFromRotationMatrix(jt),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=oi,l=!1){const c=this.elements,h=2*r/(t-e),_=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===oi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ds)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=_,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,l=!1){const c=this.elements,h=2/(t-e),_=2/(i-s),f=-(t+e)/(t-e),u=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===oi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ds)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=_,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ln=new H,jt=new _t,Ax=new H(0,0,0),Rx=new H(1,1,1),Ni=new H,is=new H,Ht=new H,ea=new _t,ta=new Cn;class rn{constructor(e=0,t=0,i=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],_=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-_,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ea,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ta.setFromEuler(this),this.setFromQuaternion(ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kx=0;const ia=new H,cn=new Cn,bi=new _t,ns=new H,Nn=new H,Cx=new H,Px=new Cn,na=new H(1,0,0),sa=new H(0,1,0),ra=new H(0,0,1),oa={type:"added"},Lx={type:"removed"},hn={type:"childadded",child:null},nr={type:"childremoved",child:null};class $t extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new H,t=new rn,i=new Cn,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ie}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cn.setFromAxisAngle(e,t),this.quaternion.multiply(cn),this}rotateOnWorldAxis(e,t){return cn.setFromAxisAngle(e,t),this.quaternion.premultiply(cn),this}rotateX(e){return this.rotateOnAxis(na,e)}rotateY(e){return this.rotateOnAxis(sa,e)}rotateZ(e){return this.rotateOnAxis(ra,e)}translateOnAxis(e,t){return ia.copy(e).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(na,e)}translateY(e){return this.translateOnAxis(sa,e)}translateZ(e){return this.translateOnAxis(ra,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ns.copy(e):ns.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Nn,ns,this.up):bi.lookAt(ns,Nn,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),cn.setFromRotationMatrix(bi),this.quaternion.premultiply(cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oa),hn.child=e,this.dispatchEvent(hn),hn.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lx),nr.child=e,this.dispatchEvent(nr),nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oa),hn.child=e,this.dispatchEvent(hn),hn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const _=l[c];r(e.shapes,_)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),_=o(e.shapes),f=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),_.length>0&&(i.shapes=_),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.DEFAULT_UP=new H(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dx={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],_=c.joints["thumb-tip"],f=h.position.distanceTo(_.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ss={h:0,s:0,l:0};function rr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ve.workingColorSpace){if(e=gx(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=rr(o,r,e+1/3),this.g=rr(o,r,e),this.b=rr(o,r,e-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=ml[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ve.workingToColorSpace(Pt.copy(this),e),Math.round(We(Pt.r*255,0,255))*65536+Math.round(We(Pt.g*255,0,255))*256+Math.round(We(Pt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const _=o-a;switch(c=h<=.5?_/(o+a):_/(2-o-a),o){case i:l=(s-r)/_+(s<r?6:0);break;case s:l=(r-i)/_+2;break;case r:l=(i-s)/_+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Xt){Ve.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(ss);const i=Qs(Ui.h,ss.h,t),s=Qs(Ui.s,ss.s,t),r=Qs(Ui.l,ss.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new $e;$e.NAMES=ml;class Ix extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ei=new H,vi=new H,or=new H,wi=new H,fn=new H,dn=new H,aa=new H,ar=new H,lr=new H,cr=new H,hr=new dt,fr=new dt,dr=new dt;class ri{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ei.subVectors(e,t),s.cross(ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ei.subVectors(s,t),vi.subVectors(i,t),or.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(vi),l=ei.dot(or),c=vi.dot(vi),h=vi.dot(or),_=o*c-a*a;if(_===0)return r.set(0,0,0),null;const f=1/_,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return hr.setScalar(0),fr.setScalar(0),dr.setScalar(0),hr.fromBufferAttribute(e,t),fr.fromBufferAttribute(e,i),dr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hr,r.x),o.addScaledVector(fr,r.y),o.addScaledVector(dr,r.z),o}static isFrontFacing(e,t,i,s){return ei.subVectors(i,t),vi.subVectors(e,t),ei.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),ei.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fn.subVectors(s,i),dn.subVectors(r,i),ar.subVectors(e,i);const l=fn.dot(ar),c=dn.dot(ar);if(l<=0&&c<=0)return t.copy(i);lr.subVectors(e,s);const h=fn.dot(lr),_=dn.dot(lr);if(h>=0&&_<=h)return t.copy(s);const f=l*_-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(fn,o);cr.subVectors(e,r);const u=fn.dot(cr),g=dn.dot(cr);if(g>=0&&u<=g)return t.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(dn,a);const p=h*g-u*_;if(p<=0&&_-h>=0&&u-g>=0)return aa.subVectors(r,s),a=(_-h)/(_-h+(u-g)),t.copy(s).addScaledVector(aa,a);const d=1/(p+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(fn,o).addScaledVector(dn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Un),os.subVectors(this.max,Un),un.subVectors(e.a,Un),pn.subVectors(e.b,Un),_n.subVectors(e.c,Un),Fi.subVectors(pn,un),Oi.subVectors(_n,pn),Qi.subVectors(un,_n);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-Qi.z,Qi.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,Qi.z,0,-Qi.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-Qi.y,Qi.x,0];return!ur(t,un,pn,_n,os)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,un,pn,_n,os))?!1:(as.crossVectors(Fi,Oi),t=[as.x,as.y,as.z],ur(t,un,pn,_n,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new H,new H,new H,new H,new H,new H,new H,new H],ti=new H,rs=new Zn,un=new H,pn=new H,_n=new H,Fi=new H,Oi=new H,Qi=new H,Un=new H,os=new H,as=new H,ji=new H;function ur(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gt=new H,ls=new qe;let Nx=0;class Ft extends on{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dx,this.updateRanges=[],this.gpuType=Kt,this.version=0,this._normalizationScale=e!==void 0?yo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bx(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vx(e,this.array)}}class gl extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xl extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jt extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ux=new Zn,Fn=new H,pr=new H;class Fs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ux.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fn.subVectors(e,this.center);const t=Fn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fn.copy(e.center).add(pr)),this.expandByPoint(Fn.copy(e.center).sub(pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fx=0;const qt=new _t,_r=new $t,mn=new H,Vt=new Zn,On=new Zn,Mt=new H;class Pi extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ux(e)?xl:gl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];On.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Vt.min,On.min),Vt.expandByPoint(Mt),Mt.addVectors(Vt.max,On.max),Vt.expandByPoint(Mt)):(Vt.expandByPoint(On.min),Vt.expandByPoint(On.max))}Vt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mt.fromBufferAttribute(a,c),l&&(mn.fromBufferAttribute(e,c),Mt.add(mn)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)a[I]=new H,l[I]=new H;const h=new H,_=new H,f=new H,u=new qe,g=new qe,v=new qe,p=new H,d=new H;function S(I,C,N){c[I]=c[C]=c[N]=1,h.fromBufferAttribute(i,I),_.fromBufferAttribute(i,C),f.fromBufferAttribute(i,N),u.fromBufferAttribute(r,I),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,N),_.sub(h),f.sub(h),g.sub(u),v.sub(u);const U=1/(g.x*v.y-v.x*g.y);isFinite(U)&&(p.copy(_).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(U),d.copy(f).multiplyScalar(g.x).addScaledVector(_,-v.x).multiplyScalar(U),a[I].add(p),a[C].add(p),a[N].add(p),l[I].add(d),l[C].add(d),l[N].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,C=T.length;I<C;++I){const N=T[I],U=N.start,$=N.count;for(let k=U,G=U+$;k<G;k+=3)S(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new H,A=new H,E=new H,m=new H;function w(I){E.fromBufferAttribute(s,I),m.copy(E);const C=a[I];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(m,C);const U=A.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,C=i.count;I<C;++I)c[I]&&w(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,_=new H;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),_.subVectors(s,r),h.cross(_),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),_.subVectors(s,r),h.cross(_),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,_=a.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[u++]}return new Ft(f,h,_)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,_=c.length;h<_;h++){const f=c[h],u=e(f,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let _=0,f=c.length;_<f;_++){const u=c[_];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],_=r[c];for(let f=0,u=_.length;f<u;f++)h.push(_[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const _=o[c];this.addGroup(_.start,_.count,_.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mr=new H,Ox=new H,zx=new Ie;class Gi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=mr.subVectors(i,t).cross(Ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(mr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),s=this.coplanarPoint(mr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Bx=0;class Os extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Vn,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Xa,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=$n,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ox,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new H,gr=new H,cs=new H,hs=new H;class Gx{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gr.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(gr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cs),a=hs.dot(this.direction),l=-hs.dot(cs),c=hs.lengthSq(),h=Math.abs(1-o*o);let _,f,u,g;if(h>0)if(_=o*l-a,f=o*a-l,g=r*h,_>=0)if(f>=-g)if(f<=g){const v=1/h;_*=v,f*=v,u=_*(_+o*f+2*a)+f*(o*_+f+2*l)+c}else f=r,_=Math.max(0,-(o*f+a)),u=-_*_+f*(f+2*l)+c;else f=-r,_=Math.max(0,-(o*f+a)),u=-_*_+f*(f+2*l)+c;else f<=-g?(_=Math.max(0,-(-o*r+a)),f=_>0?-r:Math.min(Math.max(-r,-l),r),u=-_*_+f*(f+2*l)+c):f<=g?(_=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(_=Math.max(0,-(o*r+a)),f=_>0?r:Math.min(Math.max(-r,-l),r),u=-_*_+f*(f+2*l)+c);else f=o>0?-r:r,_=Math.max(0,-(o*f+a)),u=-_*_+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(gr).addScaledVector(cs,f),u}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,_=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),_>=0?(a=(e.min.z-f.z)*_,l=(e.max.z-f.z)*_):(a=(e.max.z-f.z)*_,l=(e.min.z-f.z)*_),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,_=e.x-o.x,f=e.y-o.y,u=e.z-o.z,g=t.x-o.x,v=t.y-o.y,p=t.z-o.z,d=i.x-o.x,S=i.y-o.y,T=i.z-o.z,y=Math.abs(l),A=Math.abs(c),E=Math.abs(h);let m,w,I,C,N,U,$,k,G,V,D,ee;if(y>=A&&y>=E?(I=l,U=_,G=g,ee=d,l>=0?(m=c,w=h,C=f,N=u,$=v,k=p,V=S,D=T):(m=h,w=c,C=u,N=f,$=p,k=v,V=T,D=S)):A>=E?(I=c,U=f,G=v,ee=S,c>=0?(m=h,w=l,C=u,N=_,$=p,k=g,V=T,D=d):(m=l,w=h,C=_,N=u,$=g,k=p,V=d,D=T)):(I=h,U=u,G=p,ee=T,h>=0?(m=l,w=c,C=_,N=f,$=g,k=v,V=d,D=S):(m=c,w=l,C=f,N=_,$=v,k=g,V=S,D=d)),I===0)return null;const z=m/I,K=w/I,Q=1/I,pe=C-z*U,Ee=N-K*U,q=$-z*G,ne=k-K*G,_e=V-z*ee,be=D-K*ee,te=_e*ne-be*q,Me=pe*be-Ee*_e,Xe=q*Ee-ne*pe;if(s){if(te<0||Me<0||Xe<0)return null}else if((te<0||Me<0||Xe<0)&&(te>0||Me>0||Xe>0))return null;const Te=te+Me+Xe;if(Te===0)return null;const Oe=Q*(te*U+Me*G+Xe*ee);return(Te>0?Oe<0:Oe>0)?null:this.at(Oe/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hx extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const la=new _t,en=new Gx,fs=new Fs,ca=new H,ds=new H,us=new H,ps=new H,xr=new H,_s=new H,ha=new H,ms=new H;class ai extends $t{constructor(e=new Pi,t=new Hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){_s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],_=r[l];h!==0&&(xr.fromBufferAttribute(_,e),o?_s.addScaledVector(xr,h):_s.addScaledVector(xr.sub(t),h))}t.add(_s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(r),en.copy(e.ray).recast(e.near),!(fs.containsPoint(en.origin)===!1&&(en.intersectSphere(fs,ca)===null||en.origin.distanceToSquared(ca)>(e.far-e.near)**2))&&(la.copy(r).invert(),en.copy(e.ray).applyMatrix4(la),!(i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,en)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,_=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],S=Math.max(p.start,u.start),T=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,A=T;y<A;y+=3){const E=a.getX(y),m=a.getX(y+1),w=a.getX(y+2);s=gs(this,d,e,i,c,h,_,E,m,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let p=g,d=v;p<d;p+=3){const S=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);s=gs(this,o,e,i,c,h,_,S,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],S=Math.max(p.start,u.start),T=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,A=T;y<A;y+=3){const E=y,m=y+1,w=y+2;s=gs(this,d,e,i,c,h,_,E,m,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let p=g,d=v;p<d;p+=3){const S=p,T=p+1,y=p+2;s=gs(this,o,e,i,c,h,_,S,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Vx(n,e,t,i,s,r,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;ms.copy(a),ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:n}}function gs(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ds),n.getVertexPosition(l,us),n.getVertexPosition(c,ps);const h=Vx(n,e,t,i,ds,us,ps,ha);if(h){const _=new H;ri.getBarycoord(ha,ds,us,ps,_),s&&(h.uv=ri.getInterpolatedAttribute(s,a,l,c,_,new qe)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,l,c,_,new qe)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,l,c,_,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};ri.getNormal(ds,us,ps,f.normal),h.face=f,h.barycoord=_}return h}class uo extends zt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=bt,h=bt,_,f){super(null,o,a,l,c,h,s,r,_,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tn=new Fs,Wx=new qe(.5,.5),xs=new H;class Ns{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],_=r[5],f=r[6],u=r[7],g=r[8],v=r[9],p=r[10],d=r[11],S=r[12],T=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,u-h,d-g,A-S).normalize(),s[1].setComponents(c+o,u+h,d+g,A+S).normalize(),s[2].setComponents(c+a,u+_,d+v,A+T).normalize(),s[3].setComponents(c-a,u-_,d-v,A-T).normalize(),i)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,u-f,d-p,A-y).normalize();else if(s[4].setComponents(c-l,u-f,d-p,A-y).normalize(),t===oi)s[5].setComponents(c+l,u+f,d+p,A+y).normalize();else if(t===Ds)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(e){tn.center.set(0,0,0);const t=Wx.distanceTo(e.center);return tn.radius=.7071067811865476+t,tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xs.x=s.normal.x>0?e.max.x:e.min.x,xs.y=s.normal.y>0?e.max.y:e.min.y,xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fa=new _t;class Eo{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];fa.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ns),i[s].setFromProjectionMatrix(fa,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ns),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Eo().copy(this)}}class bl extends zt{constructor(e=[],t=Tn,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rn extends zt{constructor(e,t,i=mi,s,r,o,a=bt,l=bt,c,h=Xi,_=1){if(h!==Xi&&h!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:_};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class vl extends Rn{constructor(e,t=mi,i=Tn,s,r,o=bt,a=bt,l,c=Xi){const h={width:e,height:e,depth:1},_=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wl extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $i extends Pi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],_=[];let f=0,u=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(_,2));function g(v,p,d,S,T,y,A,E,m,w,I){const C=y/m,N=A/w,U=y/2,$=A/2,k=E/2,G=m+1,V=w+1;let D=0,ee=0;const z=new H;for(let K=0;K<V;K++){const Q=K*N-$;for(let pe=0;pe<G;pe++){const Ee=pe*C-U;z[v]=Ee*S,z[p]=Q*T,z[d]=k,c.push(z.x,z.y,z.z),z[v]=0,z[p]=0,z[d]=E>0?1:-1,h.push(z.x,z.y,z.z),_.push(pe/m),_.push(1-K/w),D+=1}}for(let K=0;K<w;K++)for(let Q=0;Q<m;Q++){const pe=f+Q+G*K,Ee=f+Q+G*(K+1),q=f+(Q+1)+G*(K+1),ne=f+(Q+1)+G*K;l.push(pe,Ee,ne),l.push(Ee,q,ne),ee+=6}a.addGroup(u,ee,I),u+=ee,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wn extends Pi{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],_=[],f=[],u=[];let g=0;const v=[],p=i/2;let d=0;S(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(u,2));function S(){const y=new H,A=new H;let E=0;const m=(t-e)/i;for(let w=0;w<=r;w++){const I=[],C=w/r,N=C*(t-e)+e;for(let U=0;U<=s;U++){const $=U/s,k=$*l+a,G=Math.sin(k),V=Math.cos(k);A.x=N*G,A.y=-C*i+p,A.z=N*V,_.push(A.x,A.y,A.z),y.set(G,m,V).normalize(),f.push(y.x,y.y,y.z),u.push($,1-C),I.push(g++)}v.push(I)}for(let w=0;w<s;w++)for(let I=0;I<r;I++){const C=v[I][w],N=v[I+1][w],U=v[I+1][w+1],$=v[I][w+1];(e>0||I!==0)&&(h.push(C,N,$),E+=3),(t>0||I!==r-1)&&(h.push(N,U,$),E+=3)}c.addGroup(d,E,0),d+=E}function T(y){const A=g,E=new qe,m=new H;let w=0;const I=y===!0?e:t,C=y===!0?1:-1;for(let U=1;U<=s;U++)_.push(0,p*C,0),f.push(0,C,0),u.push(.5,.5),g++;const N=g;for(let U=0;U<=s;U++){const k=U/s*l+a,G=Math.cos(k),V=Math.sin(k);m.x=I*V,m.y=p*C,m.z=I*G,_.push(m.x,m.y,m.z),f.push(0,C,0),E.x=G*.5+.5,E.y=V*.5*C+.5,u.push(E.x,E.y),g++}for(let U=0;U<s;U++){const $=A+U,k=N+U;y===!0?h.push(k,k+1,$):h.push(k+1,k,$),w+=3}c.addGroup(d,w,y===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends Pi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,_=e/a,f=t/l,u=[],g=[],v=[],p=[];for(let d=0;d<h;d++){const S=d*f-o;for(let T=0;T<c;T++){const y=T*_-r;g.push(y,-S,0),v.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const T=S+c*d,y=S+c*(d+1),A=S+1+c*(d+1),E=S+1+c*d;u.push(T,y,E),u.push(y,A,E)}this.setIndex(u),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.widthSegments,e.heightSegments)}}function kn(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(da(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(da(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=kn(n[t]);for(const s in i)e[s]=i[s]}return e}function da(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $x(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const qx={clone:kn,merge:Ut};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kn(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kx extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zx extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jx extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bs=new H,vs=new Cn,ci=new H;class yl extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bs,vs,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,vs,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bs,vs,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,vs,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new H,ua=new qe,pa=new qe;class ni extends yl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,ua,pa),t.subVectors(pa,ua)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qx extends yl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gn=-90,xn=1;class po extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ni(gn,xn,e,t);s.layers=this.layers,this.add(s);const r=new ni(gn,xn,e,t);r.layers=this.layers,this.add(r);const o=new ni(gn,xn,e,t);o.layers=this.layers,this.add(o);const a=new ni(gn,xn,e,t);a.layers=this.layers,this.add(a);const l=new ni(gn,xn,e,t);l.layers=this.layers,this.add(l);const c=new ni(gn,xn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,_=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(_,f,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jx extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function _a(n,e,t,i){const s=eb(i);switch(t){case al:return n*e;case cl:return n*e/s.components*s.byteLength;case vo:return n*e/s.components*s.byteLength;case sn:return n*e*2/s.components*s.byteLength;case wo:return n*e*2/s.components*s.byteLength;case ll:return n*e*3/s.components*s.byteLength;case Zt:return n*e*4/s.components*s.byteLength;case So:return n*e*4/s.components*s.byteLength;case Ms:case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ts:case As:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ur:case Or:return Math.max(n,16)*Math.max(e,8)/4;case Nr:case Fr:return Math.max(n,8)*Math.max(e,8)/2;case zr:case Br:case Hr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Cs:case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ro:case oo:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ps:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eb(n){switch(n){case Yt:case nl:return{byteLength:1,components:1};case Xn:case sl:case gi:return{byteLength:2,components:1};case xo:case bo:return{byteLength:2,components:4};case mi:case go:case Kt:return{byteLength:4,components:1};case rl:case ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ml(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function tb(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,_=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:_}}function i(a,l,c){const h=l.array,_=l.updateRanges;if(n.bindBuffer(c,a),_.length===0)n.bufferSubData(c,0,h);else{_.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<_.length;u++){const g=_[f],v=_[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,_[f]=v)}_.length=f+1;for(let u=0,g=_.length;u<g;u++){const v=_[u];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_b=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ev=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_w=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:ib,alphahash_pars_fragment:nb,alphamap_fragment:sb,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:ab,aomap_fragment:lb,aomap_pars_fragment:cb,batching_pars_vertex:hb,batching_vertex:fb,begin_vertex:db,beginnormal_vertex:ub,bsdfs:pb,iridescence_fragment:_b,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:vb,color_fragment:wb,color_pars_fragment:Sb,color_pars_vertex:yb,color_vertex:Mb,common:Eb,defaultnormal_vertex:Tb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Rb,emissivemap_fragment:kb,emissivemap_pars_fragment:Cb,colorspace_fragment:Pb,colorspace_pars_fragment:Lb,envmap_fragment:Db,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Nb,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:Xb,envmap_vertex:Fb,fog_vertex:Ob,fog_pars_vertex:zb,fog_fragment:Bb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Vb,lights_lambert_fragment:Wb,lights_lambert_pars_fragment:$b,lights_pars_begin:qb,lights_toon_fragment:Yb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Jb,lights_physical_fragment:Qb,lights_physical_pars_fragment:jb,lights_fragment_begin:ev,lights_fragment_maps:tv,lights_fragment_end:iv,lightprobes_pars_fragment:nv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:rv,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:av,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:hv,map_particle_pars_fragment:fv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:uv,morphinstance_vertex:pv,morphcolor_vertex:_v,morphnormal_vertex:mv,morphtarget_pars_vertex:gv,morphtarget_vertex:xv,normal_fragment_begin:bv,normal_fragment_maps:vv,normal_pars_fragment:wv,normal_pars_vertex:Sv,normal_vertex:yv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:Ev,clearcoat_normal_fragment_maps:Tv,clearcoat_pars_fragment:Av,iridescence_pars_fragment:Rv,opaque_fragment:kv,packing:Cv,premultiplied_alpha_fragment:Pv,project_vertex:Lv,dithering_fragment:Dv,dithering_pars_fragment:Iv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Ov,shadowmap_vertex:zv,shadowmask_pars_fragment:Bv,skinbase_vertex:Gv,skinning_pars_vertex:Hv,skinning_vertex:Vv,skinnormal_vertex:Wv,specularmap_fragment:$v,specularmap_pars_fragment:qv,tonemapping_fragment:Xv,tonemapping_pars_fragment:Yv,transmission_fragment:Kv,transmission_pars_fragment:Zv,uv_pars_fragment:Jv,uv_pars_vertex:Qv,uv_vertex:jv,worldpos_vertex:ew,background_vert:tw,background_frag:iw,backgroundCube_vert:nw,backgroundCube_frag:sw,cube_vert:rw,cube_frag:ow,depth_vert:aw,depth_frag:lw,distance_vert:cw,distance_frag:hw,equirect_vert:fw,equirect_frag:dw,linedashed_vert:uw,linedashed_frag:pw,meshbasic_vert:_w,meshbasic_frag:mw,meshlambert_vert:gw,meshlambert_frag:xw,meshmatcap_vert:bw,meshmatcap_frag:vw,meshnormal_vert:ww,meshnormal_frag:Sw,meshphong_vert:yw,meshphong_frag:Mw,meshphysical_vert:Ew,meshphysical_frag:Tw,meshtoon_vert:Aw,meshtoon_frag:Rw,points_vert:kw,points_frag:Cw,shadow_vert:Pw,shadow_frag:Lw,sprite_vert:Dw,sprite_frag:Iw},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ui={basic:{uniforms:Ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ut([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ut([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ut([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ut([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ut([ge.points,ge.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ut([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ut([ge.common,ge.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ut([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ut([ge.sprite,ge.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Ut([ge.common,ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Ut([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ui.physical={uniforms:Ut([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ws={r:0,b:0,g:0},Nw=new _t,El=new Ie;El.set(-1,0,0,0,1,0,0,0,1);function Uw(n,e,t,i,s,r){const o=new $e(0);let a=s===!0?0:1,l,c,h=null,_=0,f=null;function u(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(S){let T=!1;const y=u(S);y===null?p(o,a):y&&y.isColor&&(p(y,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,T){const y=u(T);y&&y.isCubeTexture?(c===void 0&&(c=new ai(new $i(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:kn(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(El),c.material.toneMapped=Ve.getTransfer(y.colorSpace)!==it,(h!==y||_!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,_=y.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ai(new Jn(2,2),new Wt({name:"BackgroundMaterial",uniforms:kn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||_!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,_=y.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(ws,Sl(n)),t.buffers.color.setClear(ws.r,ws.g,ws.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:g,addToRenderList:v,dispose:d}}function Fw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(N,U,$,k,G){let V=!1;const D=_(N,k,$,U);r!==D&&(r=D,c(r.object)),V=u(N,k,$,G),V&&g(N,k,$,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(N,U,$,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function _(N,U,$,k){const G=k.wireframe===!0;let V=i[U.id];V===void 0&&(V={},i[U.id]=V);const D=N.isInstancedMesh===!0?N.id:0;let ee=V[D];ee===void 0&&(ee={},V[D]=ee);let z=ee[$.id];z===void 0&&(z={},ee[$.id]=z);let K=z[G];return K===void 0&&(K=f(l()),z[G]=K),K}function f(N){const U=[],$=[],k=[];for(let G=0;G<t;G++)U[G]=0,$[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:k,object:N,attributes:{},index:null}}function u(N,U,$,k){const G=r.attributes,V=U.attributes;let D=0;const ee=$.getAttributes();for(const z in ee)if(ee[z].location>=0){const Q=G[z];let pe=V[z];if(pe===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor)),Q===void 0||Q.attribute!==pe||pe&&Q.data!==pe.data)return!0;D++}return r.attributesNum!==D||r.index!==k}function g(N,U,$,k){const G={},V=U.attributes;let D=0;const ee=$.getAttributes();for(const z in ee)if(ee[z].location>=0){let Q=V[z];Q===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));const pe={};pe.attribute=Q,Q&&Q.data&&(pe.data=Q.data),G[z]=pe,D++}r.attributes=G,r.attributesNum=D,r.index=k}function v(){const N=r.newAttributes;for(let U=0,$=N.length;U<$;U++)N[U]=0}function p(N){d(N,0)}function d(N,U){const $=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;$[N]=1,k[N]===0&&(n.enableVertexAttribArray(N),k[N]=1),G[N]!==U&&(n.vertexAttribDivisor(N,U),G[N]=U)}function S(){const N=r.newAttributes,U=r.enabledAttributes;for(let $=0,k=U.length;$<k;$++)U[$]!==N[$]&&(n.disableVertexAttribArray($),U[$]=0)}function T(N,U,$,k,G,V,D){D===!0?n.vertexAttribIPointer(N,U,$,G,V):n.vertexAttribPointer(N,U,$,k,G,V)}function y(N,U,$,k){v();const G=k.attributes,V=$.getAttributes(),D=U.defaultAttributeValues;for(const ee in V){const z=V[ee];if(z.location>=0){let K=G[ee];if(K===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const Q=K.normalized,pe=K.itemSize,Ee=e.get(K);if(Ee===void 0)continue;const q=Ee.buffer,ne=Ee.type,_e=Ee.bytesPerElement,be=ne===n.INT||ne===n.UNSIGNED_INT||K.gpuType===go;if(K.isInterleavedBufferAttribute){const te=K.data,Me=te.isInterleavedBuffer===!0?te.stride:te.itemSize,Xe=K.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let Te=0;Te<z.locationSize;Te++)d(z.location+Te,te.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Te=0;Te<z.locationSize;Te++)p(z.location+Te);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Te=0;Te<z.locationSize;Te++)T(z.location+Te,pe/z.locationSize,ne,Q,Me*_e,(Xe+pe/z.locationSize*Te)*_e,be)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)d(z.location+te,K.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<z.locationSize;te++)p(z.location+te);n.bindBuffer(n.ARRAY_BUFFER,q);for(let te=0;te<z.locationSize;te++)T(z.location+te,pe/z.locationSize,ne,Q,pe*_e,pe/z.locationSize*te*_e,be)}}else if(D!==void 0){const Q=D[ee];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(z.location,Q);break;case 3:n.vertexAttrib3fv(z.location,Q);break;case 4:n.vertexAttrib4fv(z.location,Q);break;default:n.vertexAttrib1fv(z.location,Q)}}}}S()}function A(){I();for(const N in i){const U=i[N];for(const $ in U){const k=U[$];for(const G in k){const V=k[G];for(const D in V)h(V[D].object),delete V[D];delete k[G]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;const U=i[N.id];for(const $ in U){const k=U[$];for(const G in k){const V=k[G];for(const D in V)h(V[D].object),delete V[D];delete k[G]}}delete i[N.id]}function m(N){for(const U in i){const $=i[U];for(const k in $){const G=$[k];if(G[N.id]===void 0)continue;const V=G[N.id];for(const D in V)h(V[D].object),delete V[D];delete G[N.id]}}}function w(N){for(const U in i){const $=i[U],k=N.isInstancedMesh===!0?N.id:0,G=$[k];if(G!==void 0){for(const V in G){const D=G[V];for(const ee in D)h(D[ee].object),delete D[ee];delete G[V]}delete $[k],Object.keys($).length===0&&delete i[U]}}}function I(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:m,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Ow(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zw(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(m){return!(m!==Zt&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(m){const w=m===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==Yt&&m!==Kt&&!w&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:_,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:E}}function Bw(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Gi,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(_,f){const u=_.length!==0||f||i!==0||s;return s=f,i=_.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,f){t=h(_,f,0)},this.setState=function(_,f,u){const g=_.clippingPlanes,v=_.clipIntersection,p=_.clipShadows,d=n.get(_);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:i,T=S*4;let y=d.clippingState||null;l.value=y,y=h(g,f,T,u);for(let A=0;A!==T;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(_,f,u,g){const v=_!==null?_.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=u+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,y=u;T!==v;++T,y+=4)o.copy(_[T]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class To extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Mn});r.uniforms.tEquirect.value=t;const o=new ai(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Bt),new po(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ma=256,Gw=3,Hw=20,Tl=256,Al=16,Vw=3,Ww=new H,$w=new $e;class Us{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new po(1,10,null),this._boxMesh=new ai(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Ww}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const _=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor($w));const p=new po(i,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=_,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ma,xx(e))}_fromTexture(e,t){e.mapping===Tn||e.mapping===qn?this._setSize(e.image.length===0?ma:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=ga(e,!1,!1),i=Math.log2(e)-Gw;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ga(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Tn||e.mapping===qn?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xa()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qw(),this._integrationMaterial=Xw());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Al);for(let o=0;o<=i;o++){const a=Us.lodToRoughness(o,i);if(o>i-Vw)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(Tl*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Yw());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function ga(n,e,t){return new To(n,{minFilter:Vi,generateMipmaps:e,type:gi,colorSpace:Yn,depthBuffer:t})}function Qn(n,e,t){return new Wt({name:n,uniforms:e,vertexShader:Fe.cube_vert,fragmentShader:t,side:Gt,blending:Mn,depthTest:!1,depthWrite:!1})}function qw(){return Qn("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xw(){return Qn("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Al}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yw(){return Qn("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hw}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xa(){return Qn("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ba(){return Qn("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kw(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Xs||u===Ys)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new To(g.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,g=u===Xs||u===Ys,v=u===Tn||u===qn;if(g||v){let p=t.get(f);const d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Us(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Us(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===Xs?f.mapping=Tn:u===Ys&&(f.mapping=qn),f}function l(f){let u=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&u++;return u===g}function c(f){const u=f.target;u.removeEventListener("dispose",c);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:_}}function Zw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function Jw(n,e,t,i){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const v=r.get(g);v&&(e.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)e.update(v[p],n.ARRAY_BUFFER)}function _(g){const v=g.index,p=g.attributes.position;let d=0;if(p===void 0)return;const S=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?xl:gl,y=new T(Math.ceil(S/3)*6,1),A=y.array;if(v!==null){const m=v.array;d=v.version;for(let w=0,I=0;w<S;w+=3){const C=m[w+0],N=m[w+1],U=m[w+2];A[I++]=C,A[I++]=N,A[I++]=N,A[I++]=U,A[I++]=U,A[I++]=C}}else{d=p.version;for(let m=0,w=0;m<S;m+=3){const I=m+0,C=m+1,N=m+2;A[w++]=I,A[w++]=C,A[w++]=C,A[w++]=N,A[w++]=N,A[w++]=I}}y.version=d;const E=r.get(g);E&&e.remove(E),r.set(g,y)}function f(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&_(g)}else _(g);return r.get(g)}function u(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Qw(n,e,t){let i;function s(_){i=_}let r,o;function a(_){r=_.type,o=_.bytesPerElement}function l(_,f){n.drawElements(i,f,r,_*o),t.update(f,i,1)}function c(_,f,u){u!==0&&(n.drawElementsInstanced(i,f,r,_*o,u),t.update(f,i,u))}function h(_,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,_,0,u);let v=0;for(let p=0;p<u;p++)v+=f[p];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function jw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function e1(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,_=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==_){let I=function(){m.dispose(),i.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let T=0;u===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let y=a.attributes.position.count*T,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*A*4*_),m=new pl(E,y,A,_);m.type=Kt,m.needsUpdate=!0;const w=T*4;for(let C=0;C<_;C++){const N=p[C],U=d[C],$=S[C],k=y*A*4*C;for(let G=0;G<N.count;G++){const V=G*w;u===!0&&(s.fromBufferAttribute(N,G),E[k+V+0]=s.x,E[k+V+1]=s.y,E[k+V+2]=s.z,E[k+V+3]=0),g===!0&&(s.fromBufferAttribute(U,G),E[k+V+4]=s.x,E[k+V+5]=s.y,E[k+V+6]=s.z,E[k+V+7]=0),v===!0&&(s.fromBufferAttribute($,G),E[k+V+8]=s.x,E[k+V+9]=s.y,E[k+V+10]=s.z,E[k+V+11]=$.itemSize===4?s.w:1)}}f={count:_,texture:m,size:new qe(y,A)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function t1(n,e,t,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,_=c.geometry,f=e.get(c,_);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const i1={[Ka]:"LINEAR_TONE_MAPPING",[Za]:"REINHARD_TONE_MAPPING",[Ja]:"CINEON_TONE_MAPPING",[Qa]:"ACES_FILMIC_TONE_MAPPING",[el]:"AGX_TONE_MAPPING",[tl]:"NEUTRAL_TONE_MAPPING",[ja]:"CUSTOM_TONE_MAPPING"};function n1(n,e,t,i,s,r){const o=new li(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Pi;h.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const _=new Kx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ai(h,_),u=new Qx(-1,1,1,-1,0,1);let g=null,v=null,p=!1,d,S=null,T=[],y=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let m=0;m<T.length;m++){const w=T[m];w.setSize&&w.setSize(A,E)}},this.setEffects=function(A){T=A,y=T.length>0&&T[0].isRenderPass===!0;const E=o.width,m=o.height;T.length>0&&a===null&&(a=new li(E,m,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new li(E,m,{type:gi,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&T.some(I=>I.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Rn(E,m),r===!0&&(c.format=Wi,c.type=An)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let I=0;I<T.length;I++){const C=T[I];C.setSize&&C.setSize(E,m),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(p||A.toneMapping===Ri&&T.length===0)return!1;if(S=E,E!==null){const m=E.width,w=E.height;(o.width!==m||o.height!==w)&&this.setSize(m,w)}return y===!1&&A.setRenderTarget(o),d=A.toneMapping,A.toneMapping=Ri,!0},this.hasRenderPass=function(){return y},this.end=function(A,E){A.toneMapping=d,p=!0;let m=o,w=a;for(let I=0;I<T.length;I++){const C=T[I];C.enabled!==!1&&(C.render(A,w,m,E),C.needsSwap!==!1&&(m=w,w=w===a?l:a))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,_.defines={},Ve.getTransfer(g)===it&&(_.defines.SRGB_TRANSFER="");const I=i1[v];I&&(_.defines[I]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=m.texture,A.setRenderTarget(S),A.render(f,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),_.dispose()}}const Rl=new zt,kl=new Rn(1,1),Cl=new vl(1),Pl=new pl,Ll=new Tx,Dl=new bl,va=[],wa=[],Sa=new Float32Array(16),ya=new Float32Array(9),Ma=new Float32Array(4);function Pn(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=va[s];if(r===void 0&&(r=new Float32Array(s),va[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zs(n,e){let t=wa[e];t===void 0&&(t=new Int32Array(e),wa[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function s1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function l1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(vt(t,i))return;Ma.set(i),n.uniformMatrix2fv(this.addr,!1,Ma),wt(t,i)}}function c1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(vt(t,i))return;ya.set(i),n.uniformMatrix3fv(this.addr,!1,ya),wt(t,i)}}function h1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(vt(t,i))return;Sa.set(i),n.uniformMatrix4fv(this.addr,!1,Sa),wt(t,i)}}function f1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function _1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Bs(n){return n.version===0&&(n.compareFunction=dl,n.needsUpdate=!0),n}function b1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Bs(kl):r=Rl,t.setTexture2D(e||r,s)}function v1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ll,s)}function w1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Bs(Cl):r=Dl,t.setTextureCube(e||r,s)}function S1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pl,s)}function y1(n){switch(n){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return h1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return u1;case 35669:case 35673:return p1;case 5125:return _1;case 36294:return m1;case 36295:return g1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return S1}}function M1(n,e){n.uniform1fv(this.addr,e)}function E1(n,e){const t=Pn(e,this.size,2);n.uniform2fv(this.addr,t)}function T1(n,e){const t=Pn(e,this.size,3);n.uniform3fv(this.addr,t)}function A1(n,e){const t=Pn(e,this.size,4);n.uniform4fv(this.addr,t)}function R1(n,e){const t=Pn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k1(n,e){const t=Pn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function C1(n,e){const t=Pn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P1(n,e){n.uniform1iv(this.addr,e)}function L1(n,e){n.uniform2iv(this.addr,e)}function D1(n,e){n.uniform3iv(this.addr,e)}function I1(n,e){n.uniform4iv(this.addr,e)}function N1(n,e){n.uniform1uiv(this.addr,e)}function U1(n,e){n.uniform2uiv(this.addr,e)}function F1(n,e){n.uniform3uiv(this.addr,e)}function O1(n,e){n.uniform4uiv(this.addr,e)}function z1(n,e,t){const i=this.cache,s=e.length,r=zs(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Bs(kl):o=Rl;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function B1(n,e,t){const i=this.cache,s=e.length,r=zs(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ll,r[o])}function G1(n,e,t){const i=this.cache,s=e.length,r=zs(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Bs(Cl):o=Dl;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function H1(n,e,t){const i=this.cache,s=e.length,r=zs(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pl,r[o])}function V1(n){switch(n){case 5126:return M1;case 35664:return E1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return k1;case 35676:return C1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return I1;case 5125:return N1;case 36294:return U1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return H1}}class W1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y1(t.type)}}class $1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V1(t.type)}}class q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const br=/(\w+)(\])?(\[|\.)?/g;function Ea(n,e){n.seq.push(e),n.map[e.id]=e}function X1(n,e,t){const i=n.name,s=i.length;for(br.lastIndex=0;;){const r=br.exec(i),o=br.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ea(t,c===void 0?new W1(a,n,e):new $1(a,n,e));break}else{let _=t.map[a];_===void 0&&(_=new q1(a),Ea(t,_)),t=_}}}class ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);X1(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ta(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Y1=37297;let K1=0;function Z1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Aa=new Ie;function J1(n){Ve._getMatrix(Aa,Ve.workingColorSpace,n);const e=`mat3( ${Aa.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(n)){case Ls:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ra(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Z1(n.getShaderSource(e),a)}else return r}function Q1(n,e){const t=J1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const j1={[Ka]:"Linear",[Za]:"Reinhard",[Ja]:"Cineon",[Qa]:"ACESFilmic",[el]:"AgX",[tl]:"Neutral",[ja]:"Custom"};function eS(n,e){const t=j1[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new H;function tS(){Ve.getLuminanceCoefficients(Ss);const n=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gn).join(`
`)}function nS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gn(n){return n!==""}function ka(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ca(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(n){return n.replace(rS,oS)}function oS(n,e){const t=Fe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _o(t)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(n){return n.replace(aS,lS)}function lS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function La(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cS={[ys]:"SHADOWMAP_TYPE_PCF",[Bn]:"SHADOWMAP_TYPE_VSM"};function hS(n){return cS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fS={[qn]:"ENVMAP_MODE_REFRACTION"};function dS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uS={[Ya]:"ENVMAP_BLENDING_MULTIPLY",[jg]:"ENVMAP_BLENDING_MIX",[ex]:"ENVMAP_BLENDING_ADD"};function pS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uS[n.combine]||"ENVMAP_BLENDING_NONE"}function _S(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dS(t),_=pS(t),f=iS(t),u=nS(r),g=s.createProgram();let v,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Gn).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Gn).join(`
`),p.length>0&&(p+=`
`)):(v=[La(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gn).join(`
`),p=[La(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Ri?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Q1("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gn).join(`
`)),o=_o(o),o=ka(o,t),o=Ca(o,t),a=_o(a),a=ka(a,t),a=Ca(a,t),o=Pa(o),a=Pa(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Bi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=d+v+o,T=d+p+a,y=Ta(s,s.VERTEX_SHADER,S),A=Ta(s,s.FRAGMENT_SHADER,T);s.attachShader(g,y),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(y)||"",$=s.getShaderInfoLog(A)||"",k=N.trim(),G=U.trim(),V=$.trim();let D=!0,ee=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,A);else{const z=Ra(s,y,"vertex"),K=Ra(s,A,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+z+`
`+K)}else k!==""?Le("WebGLProgram: Program Info Log:",k):(G===""||V==="")&&(ee=!1);ee&&(C.diagnostics={runnable:D,programLog:k,vertexShader:{log:G,prefix:v},fragmentShader:{log:V,prefix:p}})}s.deleteShader(y),s.deleteShader(A),m=new ks(s,g),w=sS(s,g)}let m;this.getUniforms=function(){return m===void 0&&E(this),m};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,Y1)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let mS=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xS(e),t.set(e,i)),i}}class xS{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}}function bS(n){return n===sn||n===Cs||n===Ps}function vS(n,e,t,i,s,r){const o=new _l,a=new gS,l=new Set,c=[],h=new Map,_=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(m){return l.add(m),m===0?"uv":`uv${m}`}function g(m,w,I,C,N,U){const $=C.fog,k=N.geometry,G=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,D=e.get(m.envMap||G,V),ee=f[m.type];let z=i.precision;m.precision!==null&&(z=i.getMaxPrecision(m.precision),z!==m.precision&&Le("WebGLProgram.getParameters:",m.precision,"not supported, using",z,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=K!==void 0?K.length:0;let pe=0;k.morphAttributes.position!==void 0&&(pe=1),k.morphAttributes.normal!==void 0&&(pe=2),k.morphAttributes.color!==void 0&&(pe=3);let Ee,q,ne,_e;if(ee){const me=ui[ee];Ee=me.vertexShader,q=me.fragmentShader}else{Ee=m.vertexShader,q=m.fragmentShader;const me=a.getVertexShaderStage(m),et=a.getFragmentShaderStage(m);a.update(m,me,et),ne=me.id,_e=et.id}const be=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Me=N.isInstancedMesh===!0,Xe=N.isBatchedMesh===!0,Te=!!m.map,Oe=!!m.matcap,ze=!!D,Ce=ze&&D.isPMREMTexture===!0,ct=!!m.aoMap,pt=!!m.lightMap,Tt=!!m.bumpMap&&m.wireframe===!1,rt=!!m.normalMap,Je=!!m.displacementMap,Be=!!m.emissiveMap,ot=!!m.metalnessMap,ht=!!m.roughnessMap,nt=m.anisotropy>0,L=m.clearcoat>0,xt=m.diffuseRoughness>0,Qe=m.dispersion>0,je=m.retroreflectivity>0,fe=m.iridescence>0,ut=m.sheen>0,Re=m.transmission>0,Pe=nt&&!!m.anisotropyMap,M=L&&!!m.clearcoatMap,x=L&&!!m.clearcoatNormalMap,F=L&&!!m.clearcoatRoughnessMap,ie=xt&&!!m.diffuseRoughnessMap,j=fe&&!!m.iridescenceMap,oe=fe&&!!m.iridescenceThicknessMap,de=ut&&!!m.sheenColorMap,Y=ut&&!!m.sheenRoughnessMap,Z=!!m.specularMap,le=!!m.specularColorMap,R=!!m.specularIntensityMap,J=Re&&!!m.transmissionMap,X=Re&&!!m.thicknessMap,ce=!!m.gradientMap,re=!!m.alphaMap,ae=m.alphaTest>0,Ae=!!m.alphaHash,Ue=!!m.extensions;let se=Ri;m.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(se=n.toneMapping);const ke=Ce?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,Ne={shaderID:ee,shaderType:m.type,shaderName:m.name,vertexShader:Ee,fragmentShader:q,defines:m.defines,customVertexShaderID:ne,customFragmentShaderID:_e,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:z,batching:Xe,batchingColor:Xe&&N._colorsTexture!==null,instancing:Me,instancingColor:Me&&N.instanceColor!==null,instancingMorph:Me&&N.morphTexture!==null,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Te,matcap:Oe,envMap:ze,envMapMode:ze&&D.mapping,envMapPMREM:Ce,envMapMaxLod:Ce?ke.length-1:null,envMapSize:Ce?ke[0].width:null,aoMap:ct,lightMap:pt,bumpMap:Tt,normalMap:rt,displacementMap:Je,emissiveMap:Be,normalMapObjectSpace:rt&&m.normalMapType===nx,normalMapTangentSpace:rt&&m.normalMapType===Yo,packedNormalMap:rt&&m.normalMapType===Yo&&bS(m.normalMap.format),metalnessMap:ot,roughnessMap:ht,anisotropy:nt,anisotropyMap:Pe,clearcoat:L,clearcoatMap:M,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:xt,diffuseRoughnessMap:ie,dispersion:Qe,retroreflection:je,iridescence:fe,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:ut,sheenColorMap:de,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:le,specularIntensityMap:R,transmission:Re,transmissionMap:J,thicknessMap:X,gradientMap:ce,opaque:m.transparent===!1&&m.blending===Vn&&m.alphaToCoverage===!1,alphaMap:re,alphaTest:ae,alphaHash:Ae,combine:m.combine,mapUv:Te&&u(m.map.channel),aoMapUv:ct&&u(m.aoMap.channel),lightMapUv:pt&&u(m.lightMap.channel),bumpMapUv:Tt&&u(m.bumpMap.channel),normalMapUv:rt&&u(m.normalMap.channel),displacementMapUv:Je&&u(m.displacementMap.channel),emissiveMapUv:Be&&u(m.emissiveMap.channel),metalnessMapUv:ot&&u(m.metalnessMap.channel),roughnessMapUv:ht&&u(m.roughnessMap.channel),anisotropyMapUv:Pe&&u(m.anisotropyMap.channel),clearcoatMapUv:M&&u(m.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&u(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&u(m.diffuseRoughnessMap.channel),iridescenceMapUv:j&&u(m.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&u(m.iridescenceThicknessMap.channel),sheenColorMapUv:de&&u(m.sheenColorMap.channel),sheenRoughnessMapUv:Y&&u(m.sheenRoughnessMap.channel),specularMapUv:Z&&u(m.specularMap.channel),specularColorMapUv:le&&u(m.specularColorMap.channel),specularIntensityMapUv:R&&u(m.specularIntensityMap.channel),transmissionMapUv:J&&u(m.transmissionMap.channel),thicknessMapUv:X&&u(m.thicknessMap.channel),alphaMapUv:re&&u(m.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(rt||nt),vertexNormals:!!k.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Te||re),fog:!!$,useFog:m.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||k.attributes.normal===void 0&&rt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:te,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:Te&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===it,decodeVideoTextureEmissive:Be&&m.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(m.emissiveMap.colorSpace)===it,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===si,flipSided:m.side===Gt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ue&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&m.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function v(m){const w=[];if(m.shaderID?w.push(m.shaderID):(w.push(m.customVertexShaderID),w.push(m.customFragmentShaderID)),m.defines!==void 0)for(const I in m.defines)w.push(I),w.push(m.defines[I]);return m.isRawShaderMaterial===!1&&(p(w,m),d(w,m),w.push(n.outputColorSpace)),w.push(m.customProgramCacheKey),w.join()}function p(m,w){m.push(w.precision),m.push(w.outputColorSpace),m.push(w.envMapMode),m.push(w.envMapPMREM),m.push(w.envMapMaxLod),m.push(w.envMapSize),m.push(w.mapUv),m.push(w.alphaMapUv),m.push(w.lightMapUv),m.push(w.aoMapUv),m.push(w.bumpMapUv),m.push(w.normalMapUv),m.push(w.displacementMapUv),m.push(w.emissiveMapUv),m.push(w.metalnessMapUv),m.push(w.roughnessMapUv),m.push(w.anisotropyMapUv),m.push(w.clearcoatMapUv),m.push(w.clearcoatNormalMapUv),m.push(w.clearcoatRoughnessMapUv),m.push(w.diffuseRoughnessMapUv),m.push(w.iridescenceMapUv),m.push(w.iridescenceThicknessMapUv),m.push(w.sheenColorMapUv),m.push(w.sheenRoughnessMapUv),m.push(w.specularMapUv),m.push(w.specularColorMapUv),m.push(w.specularIntensityMapUv),m.push(w.transmissionMapUv),m.push(w.thicknessMapUv),m.push(w.combine),m.push(w.fogExp2),m.push(w.sizeAttenuation),m.push(w.morphTargetsCount),m.push(w.numSunLights),m.push(w.numDirLights),m.push(w.numPointLights),m.push(w.numSpotLights),m.push(w.numSpotLightMaps),m.push(w.numHemiLights),m.push(w.numRectAreaLights),m.push(w.numSunLightShadows),m.push(w.numDirLightShadows),m.push(w.numPointLightShadows),m.push(w.numSpotLightShadows),m.push(w.numSpotLightShadowsWithMaps),m.push(w.numLightProbes),m.push(w.numLightProbeGrids),m.push(w.shadowMapType),m.push(w.toneMapping),m.push(w.numClippingPlanes),m.push(w.numClipIntersection),m.push(w.depthPacking)}function d(m,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function S(m){const w=f[m.type];let I;if(w){const C=ui[w];I=qx.clone(C.uniforms)}else I=m.uniforms;return I}function T(m,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new _S(n,w,m,s),c.push(I),h.set(w,I)),I}function y(m){if(--m.usedTimes===0){const w=c.indexOf(m);c[w]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function A(m){a.remove(m)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:S,acquireProgram:T,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:E}}function wS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Da(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ia(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,v,p,d){let S=n[e];return S===void 0?(S={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:d},n[e]=S):(S.id=f.id,S.object=f,S.geometry=u,S.material=g,S.materialVariant=o(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=p,S.group=d),e++,S}function l(f,u,g,v,p,d,S){S.reversedDepth===!0&&(p=-p);const T=a(f,u,g,v,p,d);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(f,u,g,v,p,d){const S=a(f,u,g,v,p,d);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(f,u){t.length>1&&t.sort(f||SS),i.length>1&&i.sort(u||Da),s.length>1&&s.sort(u||Da)}function _(){for(let f=e,u=n.length;f<u;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:_,sort:h}}function yS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ia,n.set(i,[o])):s>=r.length?(o=new Ia,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function MS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function ES(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TS=0;function AS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RS(n){const e=new MS,t=ES(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new _t,o=new _t;function a(c){let h=0,_=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let u=0,g=0,v=0,p=0,d=0,S=0,T=0,y=0,A=0,E=0,m=0,w=0,I=0,C=0;c.sort(AS);for(let U=0,$=c.length;U<$;U++){const k=c[U],G=k.color,V=k.intensity,D=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===sn?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=G.r*V,_+=G.g*V,f+=G.b*V;else if(k.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(k.sh.coefficients[z],V);C++}else if(k.isSunLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,Q=t.get(k);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=ee;const pe=K.getViewportCount();for(let Ee=0;Ee<pe;Ee++)i.sunShadowMatrix[v+Ee]=K.getMatrix(Ee),i.sunShadowCascade[v+Ee]=K._cascadeData[Ee];v+=pe,g++}i.sun[u]=z,u++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,Q=t.get(k);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=k.shadow.matrix,A++}i.directional[p]=z,p++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(G).multiplyScalar(V),z.distance=D,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,i.spot[S]=z;const K=k.shadow;if(k.map&&(i.spotLightMap[w]=k.map,w++,K.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[S]=K.matrix,k.castShadow){const Q=t.get(k);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[S]=Q,i.spotShadowMap[S]=ee,m++}S++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(G).multiplyScalar(V),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),i.rectArea[T]=z,T++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const K=k.shadow,Q=t.get(k);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[d]=Q,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=k.shadow.matrix,E++}i.point[d]=z,d++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(V),z.groundColor.copy(k.groundColor).multiplyScalar(V),i.hemi[y]=z,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=_,i.ambient[2]=f;const N=i.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==S||N.rectAreaLength!==T||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==m||N.numSpotMaps!==w||N.numLightProbes!==C)&&(i.sun.length=u,i.directional.length=p,i.spot.length=S,i.rectArea.length=T,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,N.sunLength=u,N.directionalLength=p,N.pointLength=d,N.spotLength=S,N.rectAreaLength=T,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=m,N.numSpotMaps=w,N.numLightProbes=C,i.version=TS++)}function l(c,h){let _=0,f=0,u=0,g=0,v=0,p=0;const d=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const y=c[S];if(y.isSunLight){const A=i.sun[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(d),_++}else if(y.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),f++}else if(y.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const A=i.point[u];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),u++}else if(y.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:i}}function Na(n){const e=new RS(n),t=[],i=[],s=[];function r(_){h.camera=_,t.length=0,i.length=0,s.length=0}function o(_){_.isLightProbeGrid?s.push(_):t.push(_)}function a(_){i.push(_)}function l(){e.setup(t),s.sort((_,f)=>_.priority-f.priority||_.id-f.id)}function c(_){e.setupView(t,_)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Na(n),e.set(s,[a])):r>=o.length?(a=new Na(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const CS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],DS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ua=new _t,zn=new H,vr=new H;function IS(n,e,t){let i=new Ns;const s=new qe,r=new qe,o=new dt,a=new Zx,l=new Jx,c={},h=t.maxTextureSize,_={[Ci]:Gt,[Gt]:Ci,[si]:si},f=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:CS,fragmentShader:PS}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new Pi;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ai(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let d=this.type;this.render=function(E,m,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ig&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);const I=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Mn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=d!==this.type;$&&m.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=E.length;k<G;k++){const V=E[k],D=V.shadow;if(D===void 0){Le("WebGLShadowMap:",V,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const ee=D.getFrameExtents();s.multiply(ee),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,D.mapSize.y=r.y));const z=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=z,D.map===null||$===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===Bn){if(V.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new li(s.x,s.y,{format:sn,type:gi,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),D.map.texture.name=V.name+".shadowMap",D.map.depthTexture=new Rn(s.x,s.y,Kt),D.map.depthTexture.name=V.name+".shadowMapDepth",D.map.depthTexture.format=Xi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=bt,D.map.depthTexture.magFilter=bt}else V.isPointLight?(D.map=new To(s.x),D.map.depthTexture=new vl(s.x,mi)):(D.map=new li(s.x,s.y),D.map.depthTexture=new Rn(s.x,s.y,mi)),D.map.depthTexture.name=V.name+".shadowMap",D.map.depthTexture.format=Xi,this.type===ys?(D.map.depthTexture.compareFunction=z?fl:hl,D.map.depthTexture.minFilter=Bt,D.map.depthTexture.magFilter=Bt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=bt,D.map.depthTexture.magFilter=bt);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);const K=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();V.isPointLight!==!0&&D.updateMatrices(V,w);const Q=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:w.layers;for(let pe=0;pe<K;pe++){const Ee=D.getCamera(pe);if(V.isPointLight){const q=D.camera,ne=D.matrix,_e=V.distance||q.far;_e!==q.far&&(q.far=_e,q.updateProjectionMatrix()),zn.setFromMatrixPosition(V.matrixWorld),q.position.copy(zn),vr.copy(q.position),vr.add(LS[pe]),q.up.copy(DS[pe]),q.lookAt(vr),q.updateMatrixWorld(),ne.makeTranslation(-zn.x,-zn.y,-zn.z),Ua.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Ua,q.coordinateSystem,q.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(D.map),n.clear());const q=D.getViewport(pe);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),U.viewport(o)}i=D.getFrustum(pe),y(m,w,Ee,V,Q,this.type)}D.isPointLightShadow!==!0&&this.type===Bn&&S(D,w),D.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(I,C,N)};function S(E,m){const w=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new li(s.x,s.y,{format:sn,type:gi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(m,null,w,f,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(m,null,w,u,v,null)}function T(E,m,w,I){let C=null;const N=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=w.isPointLight===!0?l:a,n.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){const U=C.uuid,$=m.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let G=k[$];G===void 0&&(G=C.clone(),k[$]=G,m.addEventListener("dispose",A)),C=G}if(C.visible=m.visible,C.wireframe=m.wireframe,I===Bn?C.side=m.shadowSide!==null?m.shadowSide:m.side:C.side=m.shadowSide!==null?m.shadowSide:_[m.side],C.alphaMap=m.alphaMap,C.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,C.map=m.map,C.clipShadows=m.clipShadows,C.clippingPlanes=m.clippingPlanes,C.clipIntersection=m.clipIntersection,C.displacementMap=m.displacementMap,C.displacementScale=m.displacementScale,C.displacementBias=m.displacementBias,C.wireframeLinewidth=m.wireframeLinewidth,C.linewidth=m.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=w}return C}function y(E,m,w,I,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Bn)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const k=e.update(E),G=E.material;if(Array.isArray(G)){const V=k.groups;for(let D=0,ee=V.length;D<ee;D++){const z=V[D],K=G[z.materialIndex];if(K&&K.visible){const Q=T(E,K,I,N);E.onBeforeShadow(n,E,m,w,k,Q,z),n.renderBufferDirect(w,null,k,Q,E,z),E.onAfterShadow(n,E,m,w,k,Q,z)}}}else if(G.visible){const V=T(E,G,I,N);E.onBeforeShadow(n,E,m,w,k,V,null),n.renderBufferDirect(w,null,k,V,E,null),E.onAfterShadow(n,E,m,w,k,V,null)}}const $=E.children;for(let k=0,G=$.length;k<G;k++)y($[k],m,w,I,C,N)}function A(E){E.target.removeEventListener("dispose",A);for(const w in c){const I=c[w],C=E.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function NS(n,e){function t(){let R=!1;const J=new dt;let X=null;const ce=new dt(0,0,0,0);return{setMask:function(re){X!==re&&!R&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){R=re},setClear:function(re,ae,Ae,Ue,se){se===!0&&(re*=Ue,ae*=Ue,Ae*=Ue),J.set(re,ae,Ae,Ue),ce.equals(J)===!1&&(n.clearColor(re,ae,Ae,Ue),ce.copy(J))},reset:function(){R=!1,X=null,ce.set(-1,0,0,0)}}}function i(){let R=!1,J=!1,X=null,ce=null,re=null;return{setReversed:function(ae){if(J!==ae){const Ae=e.get("EXT_clip_control");ae?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),J=ae;const Ue=re;re=null,this.setClear(Ue)}},getReversed:function(){return J},setTest:function(ae){ae?te(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ae){X!==ae&&!R&&(n.depthMask(ae),X=ae)},setFunc:function(ae){if(J&&(ae=mx[ae]),ce!==ae){switch(ae){case Tr:n.depthFunc(n.NEVER);break;case Ar:n.depthFunc(n.ALWAYS);break;case Rr:n.depthFunc(n.LESS);break;case $n:n.depthFunc(n.LEQUAL);break;case kr:n.depthFunc(n.EQUAL);break;case Cr:n.depthFunc(n.GEQUAL);break;case Pr:n.depthFunc(n.GREATER);break;case Lr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=ae}},setLocked:function(ae){R=ae},setClear:function(ae){re!==ae&&(re=ae,J&&(ae=1-ae),n.clearDepth(ae))},reset:function(){R=!1,X=null,ce=null,re=null,J=!1}}}function s(){let R=!1,J=null,X=null,ce=null,re=null,ae=null,Ae=null,Ue=null,se=null;return{setTest:function(ke){R||(ke?te(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(ke){J!==ke&&!R&&(n.stencilMask(ke),J=ke)},setFunc:function(ke,Ne,me){(X!==ke||ce!==Ne||re!==me)&&(n.stencilFunc(ke,Ne,me),X=ke,ce=Ne,re=me)},setOp:function(ke,Ne,me){(ae!==ke||Ae!==Ne||Ue!==me)&&(n.stencilOp(ke,Ne,me),ae=ke,Ae=Ne,Ue=me)},setLocked:function(ke){R=ke},setClear:function(ke){se!==ke&&(n.clearStencil(ke),se=ke)},reset:function(){R=!1,J=null,X=null,ce=null,re=null,ae=null,Ae=null,Ue=null,se=null}}}const r=new t,o=new i,a=new s;let l={};const c=new WeakMap;let h={},_={},f={},u=new WeakMap,g=[],v=null,p=!1,d=null,S=null,T=null,y=null,A=null,E=null,m=null,w=new $e(0,0,0),I=0,C=!1,N=null,U=null,$=null,k=null,G=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,ee=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=ee>=2);let K=null,Q={};const pe=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),q=new dt().fromArray(pe),ne=new dt().fromArray(Ee);function _e(R,J,X,ce){const re=new Uint8Array(4),ae=n.createTexture();n.bindTexture(R,ae),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<X;Ae++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(J+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ae}const be={};be[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc($n),Tt(!1),rt(Wo),te(n.CULL_FACE),ct(Mn);function te(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Me(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Xe(R,J){return f[R]!==J?(n.bindFramebuffer(R,J),f[R]=J,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=J),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Te(R,J){let X=g,ce=!1;if(R){X=u.get(J),X===void 0&&(X=[],u.set(J,X));const re=R.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ae=re.length;ae<Ae;ae++)X[ae]=n.COLOR_ATTACHMENT0+ae;X.length=re.length,ce=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ce=!0);ce&&n.drawBuffers(X)}function Oe(R){return v!==R?(n.useProgram(R),v=R,!0):!1}const ze={[bn]:n.FUNC_ADD,[Ug]:n.FUNC_SUBTRACT,[Fg]:n.FUNC_REVERSE_SUBTRACT};ze[Og]=n.MIN,ze[zg]=n.MAX;const Ce={[Bg]:n.ZERO,[Gg]:n.ONE,[Hg]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[Yg]:n.SRC_ALPHA_SATURATE,[qg]:n.DST_COLOR,[Wg]:n.DST_ALPHA,[Vg]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[Xg]:n.ONE_MINUS_DST_COLOR,[$g]:n.ONE_MINUS_DST_ALPHA,[Kg]:n.CONSTANT_COLOR,[Zg]:n.ONE_MINUS_CONSTANT_COLOR,[Jg]:n.CONSTANT_ALPHA,[Qg]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(R,J,X,ce,re,ae,Ae,Ue,se,ke){if(R===Mn){p===!0&&(Me(n.BLEND),p=!1);return}if(p===!1&&(te(n.BLEND),p=!0),R!==Ng){if(R!==d||ke!==C){if((S!==bn||A!==bn)&&(n.blendEquation(n.FUNC_ADD),S=bn,A=bn),ke)switch(R){case Vn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.ONE,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",R);break}else switch(R){case Vn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qo:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",R);break}T=null,y=null,E=null,m=null,w.set(0,0,0),I=0,d=R,C=ke}return}re=re||J,ae=ae||X,Ae=Ae||ce,(J!==S||re!==A)&&(n.blendEquationSeparate(ze[J],ze[re]),S=J,A=re),(X!==T||ce!==y||ae!==E||Ae!==m)&&(n.blendFuncSeparate(Ce[X],Ce[ce],Ce[ae],Ce[Ae]),T=X,y=ce,E=ae,m=Ae),(Ue.equals(w)===!1||se!==I)&&(n.blendColor(Ue.r,Ue.g,Ue.b,se),w.copy(Ue),I=se),d=R,C=!1}function pt(R,J){R.side===si?Me(n.CULL_FACE):te(n.CULL_FACE);let X=R.side===Gt;J&&(X=!X),Tt(X),R.blending===Vn&&R.transparent===!1?ct(Mn):ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const ce=R.stencilWrite;a.setTest(ce),ce&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Be(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(R){N!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),N=R)}function rt(R){R!==Lg?(te(n.CULL_FACE),R!==U&&(R===Wo?n.cullFace(n.BACK):R===Dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),U=R}function Je(R){R!==$&&(D&&n.lineWidth(R),$=R)}function Be(R,J,X){R?(te(n.POLYGON_OFFSET_FILL),(k!==J||G!==X)&&(k=J,G=X,o.getReversed()&&(J=-J,X=-X),n.polygonOffset(J,X))):Me(n.POLYGON_OFFSET_FILL)}function ot(R){R?te(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function ht(R){R===void 0&&(R=n.TEXTURE0+V-1),K!==R&&(n.activeTexture(R),K=R)}function nt(R,J,X){X===void 0&&(K===null?X=n.TEXTURE0+V-1:X=K);let ce=Q[X];ce===void 0&&(ce={type:void 0,texture:void 0},Q[X]=ce),(ce.type!==R||ce.texture!==J)&&(K!==X&&(n.activeTexture(X),K=X),n.bindTexture(R,J||be[R]),ce.type=R,ce.texture=J)}function L(){const R=Q[K];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function xt(){try{n.compressedTexImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function Qe(){try{n.compressedTexImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function je(){try{n.texSubImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function fe(){try{n.texSubImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function ut(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function Pe(){try{n.texStorage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function M(){try{n.texStorage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function x(){try{n.texImage2D(...arguments)}catch(R){Ze("WebGLState:",R)}}function F(){try{n.texImage3D(...arguments)}catch(R){Ze("WebGLState:",R)}}function ie(R){return _[R]!==void 0?_[R]:n.getParameter(R)}function j(R,J){_[R]!==J&&(n.pixelStorei(R,J),_[R]=J)}function oe(R){q.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),q.copy(R))}function de(R){ne.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ne.copy(R))}function Y(R,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ce=X.get(R);ce===void 0&&(ce=n.getUniformBlockIndex(J,R.name),n.uniformBlockBinding(J,ce,ce),X.set(R,ce))}function Z(R,J,X){const re=c.get(J).get(R);l[re]!==X&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,X),l[re]=X)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},_={},K=null,Q={},f={},l={},u=new WeakMap,g=[],v=null,p=!1,d=null,S=null,T=null,y=null,A=null,E=null,m=null,w=new $e(0,0,0),I=0,C=!1,N=null,U=null,$=null,k=null,G=null,q.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Me,bindFramebuffer:Xe,drawBuffers:Te,useProgram:Oe,setBlending:ct,setMaterial:pt,setFlipSided:Tt,setCullFace:rt,setLineWidth:Je,setPolygonOffset:Be,setScissorTest:ot,activeTexture:ht,bindTexture:nt,unbindTexture:L,compressedTexImage2D:xt,compressedTexImage3D:Qe,texImage2D:x,texImage3D:F,pixelStorei:j,getParameter:ie,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Pe,texStorage3D:M,texSubImage2D:je,texSubImage3D:fe,compressedTexSubImage2D:ut,compressedTexSubImage3D:Re,scissor:oe,viewport:de,reset:le}}function US(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap,_=new Set;let f;const u=new WeakMap,g=new Set,v=new FinalizationRegistry(M=>g.delete(M));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(M,x){return p?new OffscreenCanvas(M,x):Is("canvas")}function S(M,x,F){let ie=1;const j=Pe(M);if((j.width>F||j.height>F)&&(ie=F/Math.max(j.width,j.height)),ie<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const oe=Math.floor(ie*j.width),de=Math.floor(ie*j.height);f===void 0&&(f=d(oe,de));const Y=x?d(oe,de):f;return Y.width=oe,Y.height=de,Y.getContext("2d").drawImage(M,0,0,oe,de),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+de+")."),Y}else return"data"in M&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function T(M){return M.generateMipmaps}function y(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,x,F,ie,j,oe=!1){if(M!==null){if(n[M]!==void 0)return n[M];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let de;ie&&(de=e.get("EXT_texture_norm16"),de||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8),F===n.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),F===n.SHORT&&de&&(Y=de.R16_SNORM_EXT)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8),F===n.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),F===n.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),F===n.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Z=oe?Ls:Ve.getTransfer(j);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Z===it?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),F===n.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function m(M,x){let F;return M?x===null||x===mi||x===An?F=n.DEPTH24_STENCIL8:x===Kt?F=n.DEPTH32F_STENCIL8:x===Xn&&(F=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mi||x===An?F=n.DEPTH_COMPONENT24:x===Kt?F=n.DEPTH_COMPONENT32F:x===Xn&&(F=n.DEPTH_COMPONENT16),F}function w(M,x){return T(M)===!0||M.isFramebufferTexture&&M.minFilter!==bt&&M.minFilter!==Bt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function I(M){const x=new WeakRef(M);i.get(M).__ref=x,g.add(x),v.register(M,x,x)}function C(M){const x=i.get(M).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function N(M){$(M.target)}function U(M){k(M.target)}function $(M){M.removeEventListener("dispose",N),C(M),V(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&_.delete(M)}function k(M){M.removeEventListener("dispose",U),C(M),ee(M)}function G(){for(const M of g){const x=M.deref();x!==void 0&&(x.isRenderTarget===!0?k(x):$(x))}g.clear(),_.clear()}function V(M){const x=i.get(M);if(x.__webglInit===void 0)return;const F=M.source,ie=u.get(F);if(ie){const j=ie[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(M),Object.keys(ie).length===0&&u.delete(F)}i.remove(M)}function D(M){const x=i.get(M);n.deleteTexture(x.__webglTexture);const F=M.source,ie=u.get(F);delete ie[x.__cacheKey],o.memory.textures--}function ee(M){const x=i.get(M);x.__depthDisposeCallback&&x.__depthDisposeCallback();const F=M.depthTexture;if(F&&F.renderTarget===M&&$(F),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let oe=0;oe<x.__webglFramebuffer[j].length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[j][oe]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const ie=M.textures;for(let j=0,oe=ie.length;j<oe;j++){const de=i.get(ie[j]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(ie[j])}i.remove(M)}let z=0;function K(){z=0}function Q(){return z}function pe(M){z=M}function Ee(){const M=z;return M>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,M}function q(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.mipmapsAutoUpdate),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function ne(M,x){const F=i.get(M);if(M.isVideoTexture&&ut(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const ie=M.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(F,M,x);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function _e(M,x){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){pt(F,M,x);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function be(M,x){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){pt(F,M,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function te(M,x){const F=i.get(M);if(M.version>0&&F.__version!==M.version){Tt(F,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const Me={[Dr]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[Ir]:n.MIRRORED_REPEAT},Xe={[bt]:n.NEAREST,[tx]:n.NEAREST_MIPMAP_NEAREST,[ts]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[Ks]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Te={[ax]:n.NEVER,[dl]:n.ALWAYS,[lx]:n.LESS,[hl]:n.LEQUAL,[cx]:n.EQUAL,[fl]:n.GEQUAL,[hx]:n.GREATER,[fx]:n.NOTEQUAL};function Oe(M,x){if(x.type===Kt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Bt||x.magFilter===Ks||x.magFilter===ts||x.magFilter===Vi||x.minFilter===Bt||x.minFilter===Ks||x.minFilter===ts||x.minFilter===Vi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Me[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Me[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Me[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Xe[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Xe[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bt||x.minFilter!==ts&&x.minFilter!==Vi||x.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ze(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",N),I(x));const ie=x.source;let j=u.get(ie);j===void 0&&(j={},u.set(ie,j));const oe=q(x);if(oe!==M.__cacheKey){j[oe]===void 0&&(j[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[oe].usedTimes++;const de=j[M.__cacheKey];de!==void 0&&(j[M.__cacheKey].usedTimes--,de.usedTimes===0&&D(x)),M.__cacheKey=oe,M.__webglTexture=j[oe].texture}return F}function Ce(M,x,F){return Math.floor(Math.floor(M/F)/x)}function ct(M,x,F,ie){const oe=M.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,ie,x.data);else{oe.sort((R,J)=>R.start-J.start);let de=0;for(let R=1;R<oe.length;R++){const J=oe[de],X=oe[R],ce=J.start+J.count,re=Ce(X.start,x.width,4),ae=Ce(J.start,x.width,4);X.start<=ce+1&&re===ae&&Ce(X.start+X.count-1,x.width,4)===re?J.count=Math.max(J.count,X.start+X.count-J.start):(++de,oe[de]=X)}oe.length=de+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=oe.length;R<J;R++){const X=oe[R],ce=Math.floor(X.start/4),re=Math.ceil(X.count/4),ae=ce%x.width,Ae=Math.floor(ce/x.width),Ue=re,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(n.TEXTURE_2D,0,ae,Ae,Ue,se,F,ie,x.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function pt(M,x,F){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);const j=ze(M,x),oe=x.source;t.bindTexture(ie,M.__webglTexture,n.TEXTURE0+F);const de=i.get(oe);if(oe.version!==de.__version||j===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const se=Ve.getPrimaries(Ve.workingColorSpace),ke=x.colorSpace===Hi?null:Ve.getPrimaries(x.colorSpace),Ne=x.colorSpace===Hi||se===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=S(x.image,!1,s.maxTextureSize);Z=Re(x,Z);const le=r.convert(x.format,x.colorSpace),R=r.convert(x.type);let J=E(x.internalFormat,le,R,x.normalized,x.colorSpace,x.isVideoTexture);Oe(ie,x);let X;const ce=x.mipmaps,re=x.isVideoTexture!==!0,ae=de.__version===void 0||j===!0,Ae=oe.dataReady,Ue=w(x,Z);if(x.isDepthTexture)J=m(x.format===Wi,x.type),ae&&(re?t.texStorage2D(n.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,le,R,null));else if(x.isDataTexture)if(ce.length>0){re&&ae&&t.texStorage2D(n.TEXTURE_2D,Ue,J,ce[0].width,ce[0].height);for(let se=0,ke=ce.length;se<ke;se++)X=ce[se],re?Ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,X.width,X.height,le,R,X.data):t.texImage2D(n.TEXTURE_2D,se,J,X.width,X.height,0,le,R,X.data);x.generateMipmaps=!1}else re?(ae&&t.texStorage2D(n.TEXTURE_2D,Ue,J,Z.width,Z.height),Ae&&ct(x,Z,le,R)):t.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,le,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,J,ce[0].width,ce[0].height,Z.depth);for(let se=0,ke=ce.length;se<ke;se++)if(X=ce[se],x.format!==Zt)if(le!==null)if(re){if(Ae)if(x.layerUpdates.size>0){const Ne=_a(X.width,X.height,x.format,x.type);for(const me of x.layerUpdates){const et=X.data.subarray(me*Ne/X.data.BYTES_PER_ELEMENT,(me+1)*Ne/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,me,X.width,X.height,1,le,et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,Z.depth,le,X.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,J,X.width,X.height,Z.depth,0,X.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,X.width,X.height,Z.depth,le,R,X.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,J,X.width,X.height,Z.depth,0,le,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&ae&&t.texStorage2D(n.TEXTURE_2D,Ue,J,ce[0].width,ce[0].height);for(let se=0,ke=ce.length;se<ke;se++)X=ce[se],x.format!==Zt?le!==null?re?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,X.width,X.height,le,X.data):t.compressedTexImage2D(n.TEXTURE_2D,se,J,X.width,X.height,0,X.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,X.width,X.height,le,R,X.data):t.texImage2D(n.TEXTURE_2D,se,J,X.width,X.height,0,le,R,X.data)}else if(x.isDataArrayTexture)if(re){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,J,Z.width,Z.height,Z.depth),Ae)if(x.layerUpdates.size>0){const se=_a(Z.width,Z.height,x.format,x.type);for(const ke of x.layerUpdates){const Ne=Z.data.subarray(ke*se/Z.data.BYTES_PER_ELEMENT,(ke+1)*se/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,Z.width,Z.height,1,le,R,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,R,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,le,R,Z.data);else if(x.isData3DTexture)re?(ae&&t.texStorage3D(n.TEXTURE_3D,Ue,J,Z.width,Z.height,Z.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,R,Z.data)):t.texImage3D(n.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,le,R,Z.data);else if(x.isFramebufferTexture){if(ae)if(re)t.texStorage2D(n.TEXTURE_2D,Ue,J,Z.width,Z.height);else{let se=Z.width,ke=Z.height;for(let Ne=0;Ne<Ue;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,J,se,ke,0,le,R,null),se>>=1,ke>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),_.add(x),se.onpaint=ke=>{const Ne=ke.changedElements;for(const me of _)Ne.includes(me.image)&&(me.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const Ne=n.RGBA,me=n.RGBA,et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,me,et,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&ae){const se=Pe(ce[0]);t.texStorage2D(n.TEXTURE_2D,Ue,J,se.width,se.height)}for(let se=0,ke=ce.length;se<ke;se++)X=ce[se],re?Ae&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,le,R,X):t.texImage2D(n.TEXTURE_2D,se,J,le,R,X);x.generateMipmaps=!1}else if(re){if(ae){const se=Pe(Z);t.texStorage2D(n.TEXTURE_2D,Ue,J,se.width,se.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,R,Z)}else t.texImage2D(n.TEXTURE_2D,0,J,le,R,Z);T(x)&&x.mipmapsAutoUpdate===!0&&y(ie),de.__version=oe.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Tt(M,x,F){if(x.image.length!==6)return;const ie=ze(M,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);const oe=i.get(j);if(j.version!==oe.__version||ie===!0){t.activeTexture(n.TEXTURE0+F);const de=Ve.getPrimaries(Ve.workingColorSpace),Y=x.colorSpace===Hi?null:Ve.getPrimaries(x.colorSpace),Z=x.colorSpace===Hi||de===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let me=0;me<6;me++)!le&&!R?J[me]=S(x.image[me],!0,s.maxCubemapSize):J[me]=R?x.image[me].image:x.image[me],J[me]=Re(x,J[me]);const X=J[0],ce=r.convert(x.format,x.colorSpace),re=r.convert(x.type);let ae=E(x.internalFormat,ce,re,x.normalized,x.colorSpace);const Ae=x.isVideoTexture!==!0,Ue=oe.__version===void 0||ie===!0,se=j.dataReady;let ke=w(x,X);Oe(n.TEXTURE_CUBE_MAP,x);let Ne;if(x.isDepthTexture){if(ae=m(x.format===Wi,x.type),Ue)if(Ae)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let me=0;me<6;me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,X.width,X.height,0,ce,re,null)}else if(le){Ae&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ae,X.width,X.height);for(let me=0;me<6;me++){Ne=J[me].mipmaps;for(let et=0;et<Ne.length;et++){const St=Ne[et];x.format!==Zt?ce!==null?Ae?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et,0,0,St.width,St.height,ce,St.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et,ae,St.width,St.height,0,St.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et,0,0,St.width,St.height,ce,re,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et,ae,St.width,St.height,0,ce,re,St.data)}}}else{if(Ne=x.mipmaps,Ae&&Ue){Ne.length>0&&ke++;const me=Pe(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ae,me.width,me.height)}for(let me=0;me<6;me++)if(R){Ae?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,J[me].width,J[me].height,ce,re,J[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,J[me].width,J[me].height,0,ce,re,J[me].data);for(let et=0;et<Ne.length;et++){const Li=Ne[et].image[me].image;Ae?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et+1,0,0,Li.width,Li.height,ce,re,Li.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et+1,ae,Li.width,Li.height,0,ce,re,Li.data)}}else{Ae?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ce,re,J[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,ce,re,J[me]);for(let et=0;et<Ne.length;et++){const St=Ne[et];Ae?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et+1,0,0,ce,re,St.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,et+1,ae,ce,re,St.image[me])}}}T(x)&&x.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),oe.__version=j.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function rt(M,x,F,ie,j,oe){const de=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),Z=E(F.internalFormat,de,Y,F.normalized,F.colorSpace),le=i.get(x),R=i.get(F);if(R.__renderTarget=x,!le.__hasExternalTextures){const J=Math.max(1,x.width>>oe),X=Math.max(1,x.height>>oe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,Z,J,X,x.depth,0,de,Y,null):t.texImage2D(j,oe,Z,J,X,0,de,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,j,R.__webglTexture,0,je(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,j,R.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(M,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){const ie=x.depthTexture,j=ie&&ie.isDepthTexture?ie.type:null,oe=m(x.stencilBuffer,j),de=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je(x),oe,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,je(x),oe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,oe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,M)}else{const ie=x.textures;for(let j=0;j<ie.length;j++){const oe=ie[j],de=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),Z=E(oe.internalFormat,de,Y,oe.normalized,oe.colorSpace);fe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je(x),Z,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,je(x),Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(M,x,F){const ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(x.depthTexture);j.__renderTarget=x;const oe=ie?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||oe.width!==x.width||oe.height!==x.height)&&(oe.width=x.width,oe.height=x.height,x.depthTexture.needsUpdate=!0),ie?te(x.depthTexture,0):ne(x.depthTexture,0);const de=j.__webglTexture,Y=je(x),Z=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,le=x.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xi)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Z,de,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,le,Z,de,0);else if(x.depthTexture.format===Wi)fe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,Z,de,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,le,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(M){const x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const ie=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",j)};ie.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ie}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)Be(x.__webglFramebuffer[ie],M,ie);else M.texture.mipmaps.length>0?Be(x.__webglFramebuffer[0],M,0):Be(x.__webglFramebuffer,M,0);else if(F){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=n.createRenderbuffer(),Je(x.__webglDepthbuffer[ie],M,!1);else{const j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}else if(M.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Je(x.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(M,x,F){const ie=i.get(M);x!==void 0&&rt(ie.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ot(M)}function nt(M){const x=M.texture,F=i.get(M),ie=i.get(x);M.addEventListener("dispose",U),I(M);const j=M.textures,oe=M.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,o.memory.textures++),oe){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let Z=0;Z<x.mipmaps.length;Z++)F.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(de)for(let Y=0,Z=j.length;Y<Z;Y++){const le=i.get(j[Y]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&fe(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){const Z=j[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const le=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),J=E(Z.internalFormat,le,R,Z.normalized,Z.colorSpace,M.isXRRenderTarget===!0),X=je(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)rt(F.__webglFramebuffer[Y][Z],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else rt(F.__webglFramebuffer[Y],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(x)?y(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Y=0,Z=j.length;Y<Z;Y++){const le=j[Y],R=i.get(le);let J=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(J=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),Oe(J,le),rt(F.__webglFramebuffer,M,le,n.COLOR_ATTACHMENT0+Y,J,0),T(le)&&y(J)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,ie.__webglTexture),Oe(Y,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)rt(F.__webglFramebuffer[Z],M,x,n.COLOR_ATTACHMENT0,Y,Z);else rt(F.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,Y,0);T(x)?y(Y):x.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}M.depthBuffer&&ot(M)}function L(M){const x=M.textures;for(let F=0,ie=x.length;F<ie;F++){const j=x[F];if(T(j)&&j.mipmapsAutoUpdate===!0){const oe=A(M),de=i.get(j).__webglTexture;t.bindTexture(oe,de),y(oe),t.unbindTexture()}}}const xt=[];function Qe(M){if(M.samples>0){if(fe(M)===!1){const x=M.textures,F=M.width,ie=M.height;let j=n.COLOR_BUFFER_BIT;const oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(M),Y=x.length>1;if(Y)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let le=0;le<x.length;le++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[le]);const R=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,F,ie,0,0,F,ie,j,n.NEAREST),l===!0&&(xt.length=0,xt.push(n.COLOR_ATTACHMENT0+le),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&xt.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,de.__webglColorRenderbuffer[le]);const R=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){const x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function je(M){return Math.min(s.maxSamples,M.samples)}function fe(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ut(M){const x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Re(M,x){const F=M.colorSpace,ie=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==Yn&&F!==Hi&&(Ve.getTransfer(F)===it?(ie!==Zt||j!==Yt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",F)),x}function Pe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Ee,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=pe,this.setTexture2D=ne,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=te,this.rebindTextures=ht,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=fe,this.dispose=G}function FS(n,e){function t(i,s=Hi){let r;const o=Ve.getTransfer(s);if(i===Yt)return n.UNSIGNED_BYTE;if(i===xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ol)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nl)return n.BYTE;if(i===sl)return n.SHORT;if(i===Xn)return n.UNSIGNED_SHORT;if(i===go)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===Kt)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===al)return n.ALPHA;if(i===ll)return n.RGB;if(i===Zt)return n.RGBA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===cl)return n.RED;if(i===vo)return n.RED_INTEGER;if(i===sn)return n.RG;if(i===wo)return n.RG_INTEGER;if(i===So)return n.RGBA_INTEGER;if(i===Ms||i===Es||i===Ts||i===As)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nr||i===Ur||i===Fr||i===Or)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ur)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zr||i===Br||i===Gr||i===Hr||i===Vr||i===Cs||i===Wr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zr||i===Br)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hr)return r.COMPRESSED_R11_EAC;if(i===Vr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Cs)return r.COMPRESSED_RG11_EAC;if(i===Wr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$r||i===qr||i===Xr||i===Yr||i===Kr||i===Zr||i===Jr||i===Qr||i===jr||i===eo||i===to||i===io||i===no||i===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$r)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jr)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===to)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===no)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===oo||i===ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===co||i===Ps||i===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ps)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===An?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const OS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wt({vertexShader:OS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GS extends on{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,_=null,f=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",p=new BS,d={},S=t.getContextAttributes();let T=null,y=null;const A=[],E=[],m=new qe;let w=null,I=null;const C=new ni;C.viewport=new dt;const N=new ni;N.viewport=new dt;const U=[C,N],$=new jx;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=A[q];return ne===void 0&&(ne=new sr,A[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=A[q];return ne===void 0&&(ne=new sr,A[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=A[q];return ne===void 0&&(ne=new sr,A[q]=ne),ne.getHandSpace()};function V(q){const ne=E.indexOf(q.inputSource);if(ne===-1)return;const _e=A[ne];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",ee);for(let q=0;q<A.length;q++){const ne=E[q];ne!==null&&(E[q]=null,A[q].disconnect(ne))}k=null,G=null,p.reset();for(const q in d)delete d[q];if(e.setRenderTarget(T),u=null,f=null,_=null,s=null,y=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(m.width,m.height,!1),I!==null){const q=I.camera;q.fov=I.fov,q.zoom=I.zoom,q.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return _===null&&v&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",D),s.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(m),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,be=null,te=null;S.depth&&(te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?Wi:Xi,be=S.stencil?An:mi);const Me={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};_=this.getBinding(),f=_.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new li(f.textureWidth,f.textureHeight,{format:Zt,type:Yt,depthTexture:new Rn(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new li(u.framebufferWidth,u.framebufferHeight,{format:Zt,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(q){for(let ne=0;ne<q.removed.length;ne++){const _e=q.removed[ne],be=E.indexOf(_e);be>=0&&(E[be]=null,A[be].disconnect(_e))}for(let ne=0;ne<q.added.length;ne++){const _e=q.added[ne];let be=E.indexOf(_e);if(be===-1){for(let Me=0;Me<A.length;Me++)if(Me>=E.length){E.push(_e),be=Me;break}else if(E[Me]===null){E[Me]=_e,be=Me;break}if(be===-1)break}const te=A[be];te&&te.connect(_e)}}function z(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,_e=q.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),$.near=N.near=C.near=ne,$.far=N.far=C.far=_e,(k!==$.near||G!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),k=$.near,G=$.far),$.layers.mask=q.layers.mask|6,C.layers.mask=$.layers.mask&-5,N.layers.mask=$.layers.mask&-3;const be=q.parent,te=$.cameras;z($,be);for(let Me=0;Me<te.length;Me++)z(te[Me],be);$.projectionMatrix.copy(C.projectionMatrix),$.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&q.isPerspectiveCamera&&(I={camera:q,fov:q.fov,zoom:q.zoom}),K(q,$,be)};function K(q,ne,_e){_e===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(q){return d[q]};let Q=null;function pe(q,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const _e=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let be=!1;_e.length!==$.cameras.length&&($.cameras.length=0,be=!0);for(let Te=0;Te<_e.length;Te++){const Oe=_e[Te];let ze=null;if(u!==null)ze=u.getViewport(Oe);else{const ct=_.getViewSubImage(f,Oe);ze=ct.viewport,Te===0&&(e.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(y))}let Ce=U[Te];Ce===void 0&&(Ce=new ni,Ce.layers.enable(Te),Ce.viewport=new dt,U[Te]=Ce),Ce.matrix.fromArray(Oe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Oe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(ze.x,ze.y,ze.width,ze.height),Te===0&&($.matrix.copy(Ce.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),be===!0&&$.cameras.push(Ce)}const te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){_=i.getBinding();const Te=_.getDepthInformation(_e[0]);Te&&Te.isValid&&Te.texture&&p.init(Te,s.renderState)}if(te&&te.includes("camera-access")&&v){e.state.unbindTexture(),_=i.getBinding();for(let Te=0;Te<_e.length;Te++){const Oe=_e[Te].camera;if(Oe){let ze=d[Oe];ze||(ze=new wl,d[Oe]=ze);const Ce=_.getCameraImage(Oe);ze.sourceTexture=Ce}}}}for(let _e=0;_e<A.length;_e++){const be=E[_e],te=A[_e];be!==null&&te!==void 0&&te.update(be,ne,c||o)}Q&&Q(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ee=new Ml;Ee.setAnimationLoop(pe),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}}const HS=new _t,Il=new Ie;Il.set(-1,0,0,0,1,0,0,0,1);function VS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Sl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,T,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),_(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&u(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,S,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=e.get(d),T=S.envMap,y=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(HS.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Il),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function _(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,S){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WS(n,e,t,i){let s={},r={};function o(S,T){const y=T.program;i.uniformBlockBinding(S,y,s[S.id])}function a(S,T){let y=s[S.id];y===void 0&&(g(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",p));const A=T.program;i.updateUBOMapping(S,A);const E=e.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function l(S){const T=n.createBuffer(),y=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,y,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(S){const T=s[S.id],y=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,m=y.length;E<m;E++){const w=y[E];if(Array.isArray(w))for(let I=0,C=w.length;I<C;I++)h(w[I],E,I,A);else h(w,E,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,T,y,A){if(f(S,T,y,A)===!0){const E=S.__offset,m=S.value;if(Array.isArray(m)){let w=0;for(let I=0;I<m.length;I++){const C=m[I],N=v(C,!0);_(C,S.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else _(m,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,S.__data)}}function _(S,T,y){typeof S=="number"||typeof S=="boolean"?T[y]=S:S.isMatrix3?(T[y]=S.elements[0],T[y+1]=S.elements[1],T[y+2]=S.elements[2],T[y+3]=0,T[y+4]=S.elements[3],T[y+5]=S.elements[4],T[y+6]=S.elements[5],T[y+7]=0,T[y+8]=S.elements[6],T[y+9]=S.elements[7],T[y+10]=S.elements[8],T[y+11]=0):ArrayBuffer.isView(S)?T.set(S.subarray(0,T.length-y),y):S.toArray(T,y)}function f(S,T,y,A){const E=S.value,m=T+"_"+y;if(Array.isArray(E)){A[m]===void 0&&(A[m]=[]);const w=A[m];let I=!1;for(let C=0;C<E.length;C++)u(E[C],w,C)===!0&&(I=!0);return I}return u(E,A,m)}function u(S,T,y){if(T[y]===void 0)return typeof S=="number"||typeof S=="boolean"?T[y]=S:ArrayBuffer.isView(S)?T[y]=S.slice():T[y]=S.clone(),!0;{const A=T[y];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){const T=S.uniforms;let y=0;const A=16;for(let m=0,w=T.length;m<w;m++){const I=Array.isArray(T[m])?T[m]:[T[m]];for(let C=0,N=I.length;C<N;C++){const U=I[C],$=Array.isArray(U.value)?U.value:[U.value],k=Array.isArray(T[m])||Array.isArray(U.value);let G=y;for(let D=0,ee=$.length;D<ee;D++){const z=$[D],K=v(z,k),Q=y%A,pe=Q%K.boundary,Ee=Q+pe;y+=pe,Ee!==0&&A-Ee<K.storage&&(y+=A-Ee),D===0&&(G=y),y+=K.storage}const V=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new V((y-G)/Float32Array.BYTES_PER_ELEMENT),U.__offset=G}}const E=y%A;return E>0&&(y+=A-E),S.__size=y,S.__cache={},this}function v(S,T){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){const T=S.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:d}}const $S=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function qS(){return hi===null&&(hi=new uo($S,16,16,sn,gi),hi.name="DFG_LUT",hi.minFilter=Bt,hi.magFilter=Bt,hi.wrapS=Ti,hi.wrapT=Ti,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class XS{constructor(e={}){const{canvas:t=px(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Yt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=u,p=new Set([So,wo,vo]),d=new Set([Yt,mi,Xn,An,xo,bo]),S=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,E=null;const m=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,U=null,$=null,k=null,G=null;this._outputColorSpace=Xt;let V=0,D=0,ee=null,z=-1,K=null;const Q=new dt,pe=new dt;let Ee=null;const q=new $e(0);let ne=0,_e=t.width,be=t.height,te=1,Me=null,Xe=null;const Te=new dt(0,0,_e,be),Oe=new dt(0,0,_e,be);let ze=!1;const Ce=new Ns,ct=new Eo;let pt=!1,Tt=!1;const rt=new _t,Je=new H,Be=new dt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function nt(){return ee===null?te:1}let L=i;function xt(b,P){return t.getContext(b,P)}let Qe,je,fe,ut,Re,Pe,M,x,F,ie,j,oe,de,Y,Z,le,R,J,X,ce,re,ae,Ae;try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const P="webgl2";if(L=xt(P,b),L===null)throw xt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(b){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ze("WebGLRenderer: "+b.message),b}function Ue(){Qe=new Zw(L),Qe.init(),re=new FS(L,Qe),je=new zw(L,Qe,e,re),fe=new NS(L,Qe),je.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),$=L.createFramebuffer(),k=L.createFramebuffer(),G=L.createFramebuffer(),ut=new jw(L),Re=new wS,Pe=new US(L,Qe,fe,Re,je,re,ut),M=new Kw(C),x=new tb(L),ae=new Fw(L,x),F=new Jw(L,x,ut,ae),ie=new t1(L,F,x,ae,ut),J=new e1(L,je,Pe),Z=new Bw(Re),j=new vS(C,M,Qe,je,ae,Z),oe=new VS(C,Re),de=new yS,Y=new kS(Qe),R=new Uw(C,M,fe,ie,g,l),le=new IS(C,ie,je),Ae=new WS(L,ut,je,fe),X=new Ow(L,Qe,ut),ce=new Qw(L,Qe,ut),ut.programs=j.programs,C.capabilities=je,C.extensions=Qe,C.properties=Re,C.renderLists=de,C.shadowMap=le,C.state=fe,C.info=ut}v!==Yt&&(I=new n1(v,t.width,t.height,a,s,r));const se=new GS(C,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(_e,be,!1))},this.getSize=function(b){return b.set(_e,be)},this.setSize=function(b,P,W=!0){if(se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=b,be=P,t.width=Math.floor(b*te),t.height=Math.floor(P*te),W===!0&&(t.style.width=b+"px",t.style.height=P+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(_e*te,be*te).floor()},this.setDrawingBufferSize=function(b,P,W){_e=b,be=P,te=W,t.width=Math.floor(b*W),t.height=Math.floor(P*W),this.setViewport(0,0,b,P)},this.setEffects=function(b){if(v===Yt){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let P=0;P<b.length;P++)if(b[P].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Te)},this.setViewport=function(b,P,W,O){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,P,W,O),fe.viewport(Q.copy(Te).multiplyScalar(nt()).round())},this.getScissor=function(b){return b.copy(Oe)},this.setScissor=function(b,P,W,O){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,P,W,O),fe.scissor(pe.copy(Oe).multiplyScalar(nt()).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){fe.setScissorTest(ze=b)},this.setOpaqueSort=function(b){Me=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(b=!0,P=!0,W=!0){let O=0;if(b){let B=!1;if(ee!==null){const ue=ee.texture.format;B=p.has(ue)}if(B){const ue=ee.texture.type,ve=d.has(ue),he=R.getClearColor(),xe=R.getClearAlpha(),ye=he.r,De=he.g,Ge=he.b;ve?(S[0]=ye,S[1]=De,S[2]=Ge,S[3]=xe,L.clearBufferuiv(L.COLOR,0,S)):(T[0]=ye,T[1]=De,T[2]=Ge,T[3]=xe,L.clearBufferiv(L.COLOR,0,T))}else O|=L.COLOR_BUFFER_BIT}P&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",me,!1),R.dispose(),de.dispose(),Y.dispose(),Pe.dispose(),Re.dispose(),M.dispose(),ie.dispose(),F.dispose(),ae.dispose(),Ae.dispose(),j.dispose(),se.dispose(),se.removeEventListener("sessionstart",ko),se.removeEventListener("sessionend",Co),Yi.stop()};function ke(b){b.preventDefault(),Zo("WebGLRenderer: Context Lost."),N=!0}function Ne(){Zo("WebGLRenderer: Context Restored."),N=!1;const b=ut.autoReset,P=le.enabled,W=le.autoUpdate,O=le.needsUpdate,B=le.type;Ue(),ut.autoReset=b,le.enabled=P,le.autoUpdate=W,le.needsUpdate=O,le.type=B}function me(b){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function et(b){const P=b.target;P.removeEventListener("dispose",et),St(P)}function St(b){Li(b),Re.remove(b)}function Li(b){const P=Re.get(b).programs;P!==void 0&&(P.forEach(function(W){j.releaseProgram(W)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,W,O,B,ue){P===null&&(P=ot);const ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,he=Bl(b,P,W,O,B);fe.setMaterial(O,ve);let xe=W.index,ye=1;if(O.wireframe===!0){if(xe=F.getWireframeAttribute(W),xe===void 0)return;ye=2}const De=W.drawRange,Ge=W.attributes.position;let we=De.start*ye,He=(De.start+De.count)*ye;ue!==null&&(we=Math.max(we,ue.start*ye),He=Math.min(He,(ue.start+ue.count)*ye)),xe!==null?(we=Math.max(we,0),He=Math.min(He,xe.count)):Ge!=null&&(we=Math.max(we,0),He=Math.min(He,Ge.count));const mt=He-we;if(mt<0||mt===1/0)return;ae.setup(B,O,he,W,xe);let at,st=X;if(xe!==null&&(at=x.get(xe),st=ce,st.setIndex(at)),B.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*nt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(B.isLine){let Rt=O.linewidth;Rt===void 0&&(Rt=1),fe.setLineWidth(Rt*nt()),B.isLineSegments?st.setMode(L.LINES):B.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else B.isPoints?st.setMode(L.POINTS):B.isSprite&&st.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Rt=B._multiDrawStarts,Se=B._multiDrawCounts,It=B._multiDrawCount,Ke=xe?x.get(xe).bytesPerElement:1,Ki=Re.get(O).currentProgram.getUniforms();for(let kt=0;kt<It;kt++)Ki.setValue(L,"_gl_DrawID",kt),st.render(Rt[kt]/Ke,Se[kt])}else if(B.isInstancedMesh)st.renderInstances(we,mt,B.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Rt);st.renderInstances(we,mt,Se)}else st.render(we,mt)};function Ro(b,P,W,O){U!==null&&b.isNodeMaterial&&U.setObject(O,b),pt===!0&&Z.setState(b,W,!1),b.transparent===!0&&b.side===si&&b.forceSinglePass===!1?(b.side=Gt,b.needsUpdate=!0,Ln(b,P,O),b.side=Ci,b.needsUpdate=!0,Ln(b,P,O),b.side=si):Ln(b,P,O)}this.compile=function(b,P,W=null){W===null&&(W=b),U!==null&&U.renderStart(b,P,W),E=Y.get(W),E.init(P),w.push(E),W.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Tt=this.localClippingEnabled,pt=Z.init(this.clippingPlanes,Tt),pt===!0&&Z.setGlobalState(this.clippingPlanes,P),U!==null&&le.render(E.state.shadowsArray,W,P);const O=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const he=ue[ve];Ro(he,W,P,B),O.add(he)}else Ro(ue,W,P,B),O.add(ue)}),E=w.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(b,P,W=null){const O=this.compile(b,P,W);return new Promise(B=>{function ue(){if(O.forEach(function(ve){const xe=Re.get(ve).currentProgram;(xe===void 0||xe.isReady())&&O.delete(ve)}),O.size===0){B(b);return}setTimeout(ue,10)}Qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Gs=null;function Ol(b){Gs&&Gs(b)}function ko(){Yi.stop()}function Co(){Yi.start()}const Yi=new Ml;Yi.setAnimationLoop(Ol),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(b){Gs=b,se.setAnimationLoop(b),b===null?Yi.stop():Yi.start()},se.addEventListener("sessionstart",ko),se.addEventListener("sessionend",Co),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(b,P);const W=se.enabled===!0&&se.isPresenting===!0,O=I!==null&&(ee===null||W)&&I.begin(C,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(P),P=se.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,P,ee),E=Y.get(b,w.length),E.init(P),E.state.textureUnits=Pe.getTextureUnits(),w.push(E),rt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ct.setFromArrayCamera(P):Ce.setFromProjectionMatrix(rt,oi,P.reversedDepth),Tt=this.localClippingEnabled,pt=Z.init(this.clippingPlanes,Tt),A=de.get(b,m.length),A.init(),m.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&Hs(ve,P,-1/0,C.sortObjects)}Hs(b,P,0,C.sortObjects),A.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(Me,Xe),ht=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ht&&R.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),pt===!0&&Z.beginShadows();const B=E.state.shadowsArray;if(le.render(B,b,P),pt===!0&&Z.endShadows(),(O&&I.hasRenderPass())===!1){const ve=A.opaque,he=A.transmissive;if(E.setupLights(),P.isArrayCamera){const xe=P.cameras;if(he.length>0)for(let ye=0,De=xe.length;ye<De;ye++){const Ge=xe[ye];Lo(ve,he,b,Ge)}ht&&R.render(b);for(let ye=0,De=xe.length;ye<De;ye++){const Ge=xe[ye];Po(A,b,Ge,Ge.viewport)}}else he.length>0&&Lo(ve,he,b,P),ht&&R.render(b),Po(A,b,P)}ee!==null&&D===0&&(Pe.updateMultisampleRenderTarget(ee),Pe.updateRenderTargetMipmap(ee)),O&&I.end(C),b.isScene===!0&&b.onAfterRender(C,b,P),ae.resetDefaultState(),z=-1,K=null,w.pop(),w.length>0?(E=w[w.length-1],Pe.setTextureUnits(E.state.textureUnits),pt===!0&&Z.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?A=m[m.length-1]:A=null,U!==null&&U.renderEnd()};function Hs(b,P,W,O){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){const ve=P.isArrayCamera?ct:Ce;if(!b.frustumCulled||b.intersectsFrustum(ve)){O&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(rt);const he=ie.update(b),xe=b.material;xe.visible&&A.push(b,he,xe,W,Be.z,null,P)}}else if(b.isMesh||b.isLine||b.isPoints){const ve=P.isArrayCamera?ct:Ce;if(!b.frustumCulled||b.intersectsFrustum(ve)){const he=ie.update(b),xe=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Be.copy(he.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(rt)),Array.isArray(xe)){const ye=he.groups;for(let De=0,Ge=ye.length;De<Ge;De++){const we=ye[De],He=xe[we.materialIndex];He&&He.visible&&A.push(b,he,He,W,Be.z,we,P)}}else xe.visible&&A.push(b,he,xe,W,Be.z,null,P)}}}const ue=b.children;for(let ve=0,he=ue.length;ve<he;ve++)Hs(ue[ve],P,W,O)}function Po(b,P,W,O){const{opaque:B,transmissive:ue,transparent:ve}=b;E.setupLightsView(W),pt===!0&&Z.setGlobalState(C.clippingPlanes,W),O&&fe.viewport(Q.copy(O)),B.length>0&&jn(B,P,W),ue.length>0&&jn(ue,P,W),ve.length>0&&jn(ve,P,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Lo(b,P,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const we=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new li(1,1,{generateMipmaps:!0,type:we?gi:Yt,minFilter:Vi,samples:Math.max(4,je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const ue=E.state.transmissionRenderTarget[O.id],ve=O.viewport||Q;ue.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const he=C.getRenderTarget(),xe=C.getActiveCubeFace(),ye=C.getActiveMipmapLevel();C.setRenderTarget(ue),C.getClearColor(q),ne=C.getClearAlpha(),ne<1&&C.setClearColor(16777215,.5),C.clear(),ht&&R.render(W);const De=C.toneMapping;C.toneMapping=Ri;const Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),pt===!0&&Z.setGlobalState(C.clippingPlanes,O),jn(b,W,O),Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let He=0,mt=P.length;He<mt;He++){const at=P[He],{object:st,geometry:Rt,material:Se,group:It}=at;if(Se.side===si&&st.layers.test(O.layers)){const Ke=Se.side;Se.side=Gt,Se.needsUpdate=!0,Do(st,W,O,Rt,Se,It),Se.side=Ke,Se.needsUpdate=!0,we=!0}}we===!0&&(Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue))}C.setRenderTarget(he,xe,ye),C.setClearColor(q,ne),Ge!==void 0&&(O.viewport=Ge),C.toneMapping=De}function jn(b,P,W){const O=P.isScene===!0?P.overrideMaterial:null;for(let B=0,ue=b.length;B<ue;B++){const ve=b[B],{object:he,geometry:xe,group:ye}=ve;let De=ve.material;De.allowOverride===!0&&O!==null&&(De=O),he.layers.test(W.layers)&&Do(he,P,W,xe,De,ye)}}function Do(b,P,W,O,B,ue){U!==null&&B.isNodeMaterial&&U.setObject(b,B),b.onBeforeRender(C,P,W,O,B,ue),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(C,P,W,O,b,ue),B.transparent===!0&&B.side===si&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,C.renderBufferDirect(W,P,O,B,b,ue),B.side=Ci,B.needsUpdate=!0,C.renderBufferDirect(W,P,O,B,b,ue),B.side=si):C.renderBufferDirect(W,P,O,B,b,ue),b.onAfterRender(C,P,W,O,B,ue)}function Io(b){let P=0;for(const W of b)W.texture!==null&&P++;return P}function Ln(b,P,W){P.isScene!==!0&&(P=ot);const O=Re.get(b),B=E.state.lights,ue=E.state.shadowsArray,ve=B.state.version,he=j.getParameters(b,B.state,ue,P,W,E.state.lightProbeGridArray),xe=j.getProgramCacheKey(he);let ye=O.programs;O.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;const De=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;O.envMap=M.get(b.envMap||O.environment,De),O.envMapRotation=O.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,ye===void 0&&(b.addEventListener("dispose",et),ye=new Map,O.programs=ye,O.programVariants=new Map);let Ge=ye.get(xe);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===ve)return Uo(b,he),Ge}else he.uniforms=j.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,W,he),b.onBeforeCompile(he,C),Ge=j.acquireProgram(he,xe),ye.set(xe,Ge),O.uniforms=he.uniforms;const we=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=Z.uniform),Uo(b,he),O.needsLights=Hl(b),O.lightsStateVersion=ve,O.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.sunLights.value=B.state.sun,we.sunLightShadows.value=B.state.sunShadow,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.sunShadowMatrix.value=B.state.sunShadowMatrix,we.sunShadowCascade.value=B.state.sunShadowCascade,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),O.numLightProbeGrids=Io(E.state.lightProbeGridArray),O.currentProgram=Ge,O.uniformsList=null,Ge}function zl(b,P,W,O,B){const ue=Re.get(b),ve=ue.currentProgram.id+","+O+","+B;let he=ue.programVariants.get(ve);return he===void 0?(he=Ln(b,P,W),ue.programVariants.set(ve,he)):(ue.currentProgram=he,ue.uniformsList=null,ue.outputColorSpace=O,ue.toneMapping=B),he}function No(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=ks.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Uo(b,P){const W=Re.get(b);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function Bl(b,P,W,O,B){P.isScene!==!0&&(P=ot),Pe.resetTextureUnits();const ue=P.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,he=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ve.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,ye=M.get(O.envMap||ve,xe),De=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let at=Ri;O.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(at=C.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Rt=st!==void 0?st.length:0,Se=Re.get(O),It=E.state.lights;if(pt===!0&&(Tt===!0||b!==K)){const ft=b===K&&O.id===z;Z.setState(O,b,ft)}let Ke=!1,Ki=!1;O.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==It.state.version||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==ye||O.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Z.numPlanes||Se.numIntersection!==Z.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==Ge||Se.morphTargets!==we||Se.morphNormals!==He||Se.morphColors!==mt||Se.morphTargetsCount!==Rt||Se.numLightProbeGrids!==Io(E.state.lightProbeGridArray)?Ke=!0:(Se.outputColorSpace!==he||Se.toneMapping!==at)&&(Ki=!0):(Ke=!0,Se.__version=O.version);let kt=Se.currentProgram;(Ke===!0||Ki===!0)&&(kt=Ki===!0?zl(O,P,B,he,at):Ln(O,P,B),U&&O.isNodeMaterial&&U.onUpdateProgram(O,kt,Se));let es=!1,Di=!1,Zi=!1;const Ye=kt.getUniforms(),At=Se.uniforms;if(fe.useProgram(kt.program)&&(es=!0,Di=!0,Zi=!0),O.id!==z&&(z=O.id,Di=!0),es||K!==b){fe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ye.setValue(L,"projectionMatrix",b.projectionMatrix),Ye.setValue(L,"viewMatrix",b.matrixWorldInverse);const yt=Ye.map.cameraPosition;yt!==void 0&&yt.setValue(L,Je.setFromMatrixPosition(b.matrixWorld)),je.logarithmicDepthBuffer&&Ye.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ye.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Di=!0,Zi=!0)}if(Se.needsLights&&(It.state.sunShadowMap.length>0&&Ye.setValue(L,"sunShadowMap",It.state.sunShadowMap,Pe),It.state.directionalShadowMap.length>0&&Ye.setValue(L,"directionalShadowMap",It.state.directionalShadowMap,Pe),It.state.spotShadowMap.length>0&&Ye.setValue(L,"spotShadowMap",It.state.spotShadowMap,Pe),It.state.pointShadowMap.length>0&&Ye.setValue(L,"pointShadowMap",It.state.pointShadowMap,Pe)),B.isSkinnedMesh){Ye.setOptional(L,B,"bindMatrix"),Ye.setOptional(L,B,"bindMatrixInverse");const ft=B.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Ye.setValue(L,"boneTexture",ft.boneTexture,Pe))}B.isBatchedMesh&&(Ye.setOptional(L,B,"batchingTexture"),Ye.setValue(L,"batchingTexture",B._matricesTexture,Pe),Ye.setOptional(L,B,"batchingIdTexture"),Ye.setValue(L,"batchingIdTexture",B._indirectTexture,Pe),Ye.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Ye.setValue(L,"batchingColorTexture",B._colorsTexture,Pe));const Qt=W.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&J.update(B,W,kt),(Di||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,Ye.setValue(L,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(At.envMapIntensity.value=P.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=qS()),Di){if(Ye.setValue(L,"toneMappingExposure",C.toneMappingExposure),Se.needsLights&&Gl(At,Zi),ue&&O.fog===!0&&oe.refreshFogUniforms(At,ue),oe.refreshMaterialUniforms(At,O,te,be,E.state.transmissionRenderTarget[b.id]),Se.needsLights&&Se.numLightProbeGrids>0){const ft=y;let yt=0;for(const xi of E.state.lightProbeGridArray)xi.texture!==null&&(ft.textures[yt]=xi.texture,ft.min[yt]=xi.boundingBox.min,ft.max[yt]=xi.boundingBox.max,ft.resolution[yt]=xi.resolution,yt++);for(const xi in ft)ft[xi].length=yt;At.probesSH.value=ft.textures,At.probesMin.value=ft.min,At.probesMax.value=ft.max,At.probesResolution.value=ft.resolution}ks.upload(L,No(Se),At,Pe)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ks.upload(L,No(Se),At,Pe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ye.setValue(L,"center",B.center),Ye.setValue(L,"modelViewMatrix",B.modelViewMatrix),Ye.setValue(L,"normalMatrix",B.normalMatrix),Ye.setValue(L,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const ft=O.uniformsGroups;for(let yt=0,xi=ft.length;yt<xi;yt++){const Oo=ft[yt];Ae.update(Oo,kt),Ae.bind(Oo,kt)}}return kt}function Gl(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.sunLights.needsUpdate=P,b.sunLightShadows.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function Hl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,P,W){const O=Re.get(b);O.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Re.get(b.texture).__webglTexture=P,Re.get(b.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,P){const W=Re.get(b);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,W=0){ee=b,V=P,D=W;let O=null,B=!1,ue=!1;if(b){const he=Re.get(b);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),Q.copy(b.viewport),pe.copy(b.scissor),Ee=b.scissorTest,fe.viewport(Q),fe.scissor(pe),fe.setScissorTest(Ee),z=-1;return}else if(he.__webglFramebuffer===void 0)Pe.setupRenderTarget(b);else if(he.__hasExternalTextures)Pe.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(he.__boundDepthTexture!==De){if(De!==null&&Re.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(b)}}const xe=b.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);const ye=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ye[P])?O=ye[P][W]:O=ye[P],B=!0):b.samples>0&&Pe.useMultisampledRTT(b)===!1?O=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(ye)?O=ye[W]:O=ye,Q.copy(b.viewport),pe.copy(b.scissor),Ee=b.scissorTest}else Q.copy(Te).multiplyScalar(te).floor(),pe.copy(Oe).multiplyScalar(te).floor(),Ee=ze;if(W!==0&&(O=$),fe.bindFramebuffer(L.FRAMEBUFFER,O)&&fe.drawBuffers(b,O),fe.viewport(Q),fe.scissor(pe),fe.setScissorTest(Ee),B){const he=Re.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,W)}else if(ue){const he=P;for(let xe=0;xe<b.textures.length;xe++){const ye=Re.get(b.textures[xe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xe,ye.__webglTexture,W,he)}}else if(b!==null&&W!==0){const he=Re.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,W)}z=-1};function Fo(b){const P=Re.get(b);return(P.__readFormat!==b.format||P.__readType!==b.type)&&(P.__readFormat=b.format,P.__readType=b.type,P.__formatReadable=je.textureFormatReadable(b.format),P.__typeReadable=je.textureTypeReadable(b.type)),P}this.readRenderTargetPixels=function(b,P,W,O,B,ue,ve,he=0){if(!(b&&b.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve],Array.isArray(xe)&&(xe=xe[0])),xe){fe.bindFramebuffer(L.FRAMEBUFFER,xe);try{const ye=b.textures[he],De=ye.format,Ge=ye.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he);const we=Fo(ye);if(we.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-O&&W>=0&&W<=b.height-B&&L.readPixels(P,W,O,B,re.convert(De),re.convert(Ge),ue)}finally{const ye=ee!==null?Re.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(b,P,W,O,B,ue,ve,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve],Array.isArray(xe)&&(xe=xe[0])),xe)if(P>=0&&P<=b.width-O&&W>=0&&W<=b.height-B){fe.bindFramebuffer(L.FRAMEBUFFER,xe);const ye=b.textures[he],De=ye.format,Ge=ye.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he);const we=Fo(ye);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(P,W,O,B,re.convert(De),re.convert(Ge),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const mt=ee!==null?Re.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,mt);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _x(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,He),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(He),L.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,P=null,W=0){const O=Math.pow(2,-W),B=Math.floor(b.image.width*O),ue=Math.floor(b.image.height*O),ve=P!==null?P.x:0,he=P!==null?P.y:0;Pe.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ve,he,B,ue),fe.unbindTexture()},this.copyTextureToTexture=function(b,P,W=null,O=null,B=0,ue=0){let ve,he,xe,ye,De,Ge,we,He,mt;const at=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(W!==null)ve=W.max.x-W.min.x,he=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,De=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Ye=Math.pow(2,-B);ve=Math.floor(at.width*Ye),he=Math.floor(at.height*Ye),b.isDataArrayTexture?xe=at.depth:b.isData3DTexture?xe=Math.floor(at.depth*Ye):xe=1,ye=0,De=0,Ge=0}O!==null?(we=O.x,He=O.y,mt=O.z):(we=0,He=0,mt=0);const st=re.convert(P.format),Rt=re.convert(P.type);let Se;P.isData3DTexture?(Pe.setTexture3D(P,0),Se=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Pe.setTexture2DArray(P,0),Se=L.TEXTURE_2D_ARRAY):(Pe.setTexture2D(P,0),Se=L.TEXTURE_2D),fe.activeTexture(L.TEXTURE0),fe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);const It=fe.getParameter(L.UNPACK_ROW_LENGTH),Ke=fe.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=fe.getParameter(L.UNPACK_SKIP_PIXELS),kt=fe.getParameter(L.UNPACK_SKIP_ROWS),es=fe.getParameter(L.UNPACK_SKIP_IMAGES);fe.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),fe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),fe.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),fe.pixelStorei(L.UNPACK_SKIP_ROWS,De),fe.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);const Di=b.isDataArrayTexture||b.isData3DTexture,Zi=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){const Ye=Re.get(b),At=Re.get(P),Qt=Re.get(Ye.__renderTarget),ft=Re.get(At.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,Qt.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let yt=0;yt<xe;yt++)Di&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(b).__webglTexture,B,Ge+yt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(P).__webglTexture,ue,mt+yt)),L.blitFramebuffer(ye,De,ye+ve,De+he,we,He,we+ve,He+he,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Re.has(b)){const Ye=Re.get(b),At=Re.get(P);fe.bindFramebuffer(L.READ_FRAMEBUFFER,k),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let Qt=0;Qt<xe;Qt++)Di?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,B,Ge+Qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,B),Zi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,ue,mt+Qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,At.__webglTexture,ue),B!==0?L.blitFramebuffer(ye,De,ye+ve,De+he,we,He,we+ve,He+he,L.COLOR_BUFFER_BIT,L.NEAREST):Zi?L.copyTexSubImage3D(Se,ue,we,He,mt+Qt,ye,De,ve,he):L.copyTexSubImage2D(Se,ue,we,He,ye,De,ve,he);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Zi?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Se,ue,we,He,mt,ve,he,xe,st,Rt,at.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,ue,we,He,mt,ve,he,xe,st,at.data):L.texSubImage3D(Se,ue,we,He,mt,ve,he,xe,st,Rt,at):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,we,He,ve,he,st,Rt,at.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,we,He,at.width,at.height,st,at.data):L.texSubImage2D(L.TEXTURE_2D,ue,we,He,ve,he,st,Rt,at);fe.pixelStorei(L.UNPACK_ROW_LENGTH,It),fe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),fe.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),fe.pixelStorei(L.UNPACK_SKIP_ROWS,kt),fe.pixelStorei(L.UNPACK_SKIP_IMAGES,es),ue===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(Se),fe.unbindTexture()},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&Pe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Pe.setTextureCube(b,0):b.isData3DTexture?Pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pe.setTexture2DArray(b,0):Pe.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){V=0,D=0,ee=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}function YS(n,e,t,i){const s=Et(n,t),r=Et(e,t),o=Mi(s,i)-Mi(r,i),a=Et(s,pi(i,Mi(s,i))),l=Et(r,pi(i,Mi(r,i))),c=yn(a),h=yn(l),_=yn(Et(l,a));if(h<1e-6||h>=c)return Math.hypot(_,o);let f=Math.atan2(Mi(i,Sn(a,l)),Mi(a,l));f<0&&(f+=2*Math.PI);const u=Math.acos(h/c),g=f<=u?_:Math.sqrt(c*c-h*h)+h*(f-u);return Math.hypot(g,o)}function Nl(n,e,t){const i=e(n.originBone,n.origin),s=e(n.insertionBone,n.insertion);return n.round?YS(i,s,e(n.round.bone,n.round.centre),t(n.round.bone,n.round.axis)):yn(Et(s,i))}const KS={"Lateral head of gastrocnemius":"Calcaneal tendon","Medial head of gastrocnemius":"Calcaneal tendon","Soleus muscle":"Calcaneal tendon","Short head of biceps brachii":"Long head of biceps brachii","Sternocostal head of pectoralis major muscle":"Clavicular head of pectoralis major muscle","Rectus abdominis muscle":"Transversus abdominis muscle"},ZS={"Transverse part of trapezius muscle":"T2","Descending part of trapezius muscle":"T9","External abdominal oblique muscle":"rib9_r"},JS=.05,QS=.6,jS=1.2,ey=.45;function ty(n){const e=new Float64Array(n.slots.length),t=new Float64Array(n.slots.length),i=n.position;for(const s of n.index)for(let r=0;r<s.length;r+=3){const o=s[r]*3,a=s[r+1]*3,l=s[r+2]*3,c=i[a]-i[o],h=i[a+1]-i[o+1],_=i[a+2]-i[o+2],f=i[l]-i[o],u=i[l+1]-i[o+1],g=i[l+2]-i[o+2],v=h*g-_*u,p=_*f-c*g,d=c*u-h*f,S=n.slot[s[r]];t[S]+=Math.hypot(v,p,d)/2,e[S]+=(i[o]*v+i[o+1]*p+i[o+2]*d)/6}return Float32Array.from(n.slots,(s,r)=>n.json.parts[s.part].open||t[r]===0?0:2*Math.abs(e[r])/t[r])}function iy(n,e,t){const i=h=>n.bones.findIndex(_=>_.name===h),s=i("patella_r"),r=i("tibia_r"),o=i("femur_r"),a=s>=0&&r>=0&&o>=0,l=new Map(n.parts.map(h=>[h.name,h.ends?.insertion])),c=[];return e.forEach((h,_)=>{const f=n.parts[h.part],u=f.ends;if(f.kind!=="muscle"||!u?.origin||!u.insertion)return;const g=h.side==="l",v=I=>g?Wn(I):I,p=I=>g?n.bones[I].mirror:I;let d=l.get(KS[f.name]??"")??u.insertion,S=u.origin;const T=i(ZS[f.name]??"");if(T>=0){const I=n.bones[T].pivot;S={bone:T,at:n.bones[T].side==="m"?[0,I[1],I[2]-JS]:S.at}}let y;if(f.group==="quads"&&a){const I=n.bones[r].pivot;d.bone===r&&(d={bone:s,at:di(I,n.joints.patella.arm)});const C=v(Wn(n.joints.knee.axis)),N=Mi(C,Sn(Et(v(u.origin.at),v(I)),Et(v(d.at),v(I))));y={bone:p(o),centre:v(I),axis:N<0?pi(C,-1):C}}const A={slot:_,originBone:p(S.bone),insertionBone:p(d.bone),origin:v(S.at),insertion:v(d.at),round:y},E=Nl(A,(I,C)=>C,(I,C)=>C);if(E<=.01)return;let m=Ot(E*.1,.002,.026);const w=t?.[_]??0;(w>0||f.rides&&t)&&(m=Math.min(m,Math.max(w*(f.rides?QS:jS),.001))),c.push({...A,restLength:E,size:m,thinnest:w>0?w*ey:1/0})}),c}function ny(n,e){return Nl(n,(t,i)=>Lt(e[t],i),(t,i)=>_i(e[t].q,i))/n.restLength}function sy(n,e,t){const i=Ot(1-e,-.25,.45);return Math.max(n.size*(i*1.9+t*.12),-n.thinnest)}const Ao=`
precision highp float;
precision highp int;
precision highp sampler2D;

in vec4 skinIndex;
in vec4 skinWeight;
in vec4 shade;   // tendon, origin-to-insertion, belly, ambient light
in vec4 fibre;
in float slot;

uniform sampler2D boneTex;  // per bone: rotation, then dual part
uniform sampler2D slotTex;  // per drawn part, row 0: work, bulge (m), alpha, kind; row 1: flow, select, rides on the ribcage, closed shell
// The surface sheet muscles slide on: an ellipsoid round the ribs, given in the rest pose and
// carried on straight up and down beyond the band, and where the ribcage is now.
uniform vec3 uRibCentre;
uniform vec3 uRibRadii;
uniform vec2 uRibBand;
uniform vec4 uThoraxQ;
uniform vec3 uThoraxT;
// Which bones are the ribcage: first and last thoracic vertebra, sternum, first sided bone;
// then sided bones per side, and how many of them, counted from the first, are ribs.
uniform vec4 uRiders;
uniform vec2 uRiders2;

vec4 slotA;
vec4 slotB;
vec4 blendR;
vec4 blendD;
float riding;  // share of this vertex carried by the ribcage

float rides(int bone) {
  float b = float(bone);
  if (b < uRiders.w) return ((b >= uRiders.x && b <= uRiders.y) || b == uRiders.z) ? 1.0 : 0.0;
  return mod(b - uRiders.w, uRiders2.x) < uRiders2.y ? 1.0 : 0.0;
}

void readBone(int i, out vec4 r, out vec4 d) {
  r = texelFetch(boneTex, ivec2(i * 2, 0), 0);
  d = texelFetch(boneTex, ivec2(i * 2 + 1, 0), 0);
}

void blendBones() {
  ivec4 bi = ivec4(skinIndex + 0.5);
  vec4 r0; vec4 d0; vec4 r; vec4 d;
  readBone(bi.x, r0, d0);
  blendR = r0 * skinWeight.x;
  blendD = d0 * skinWeight.x;
  riding = rides(bi.x) * skinWeight.x;
  if (skinWeight.y > 0.0) { readBone(bi.y, r, d); float s = dot(r0, r) < 0.0 ? -skinWeight.y : skinWeight.y; blendR += r * s; blendD += d * s; riding += rides(bi.y) * skinWeight.y; }
  if (skinWeight.z > 0.0) { readBone(bi.z, r, d); float s = dot(r0, r) < 0.0 ? -skinWeight.z : skinWeight.z; blendR += r * s; blendD += d * s; riding += rides(bi.z) * skinWeight.z; }
  if (skinWeight.w > 0.0) { readBone(bi.w, r, d); float s = dot(r0, r) < 0.0 ? -skinWeight.w : skinWeight.w; blendR += r * s; blendD += d * s; riding += rides(bi.w) * skinWeight.w; }
  float len = length(blendR);
  blendR /= len;
  blendD /= len;
}

vec3 turn(vec3 v) {
  return v + 2.0 * cross(blendR.xyz, cross(blendR.xyz, v) + blendR.w * v);
}

vec3 spin(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

// Height of a point above the surface the sheet muscles slide on (a fraction of its radius),
// and the direction in which that height grows fastest.
float ribHeight(vec3 p, out vec3 grad) {
  vec3 e = (p - uRibCentre) / uRibRadii;
  float y = clamp(e.y, uRibBand.x, uRibBand.y);
  float len = max(length(vec3(e.x, y, e.z)), 1e-5);
  grad = vec3(e.x / uRibRadii.x, y == e.y ? e.y / uRibRadii.y : 0.0, e.z / uRibRadii.z) / len;
  return len - 1.0;
}

// Blending two bones moves a vertex along a straight path between where each would take it,
// which for a sheet stretched round the chest (the latissimus under a raised arm) is a short
// cut through the ribs. A muscle that lies on the ribcage must go round instead: its vertices
// never come nearer the ribcage than they are at rest. Only for the share of the vertex the
// ribcage carries, so a tendon on its way to the arm, or the part of a muscle that sits on
// the shoulder blade and travels with it, is left alone.
vec3 keepOnRibs(vec3 now, vec3 rest) {
  float strength = slotB.z * smoothstep(0.2, 0.7, riding);
  if (strength <= 0.0) return now;
  vec3 g;
  float keep = min(ribHeight(rest, g), 0.5);
  vec3 local = spin(vec4(-uThoraxQ.xyz, uThoraxQ.w), now - uThoraxT);
  float sunk = min(keep - ribHeight(local, g), 0.3);
  if (sunk <= 0.0) return now;
  local += g * (sunk * strength / max(dot(g, g), 1e-6));
  return spin(uThoraxQ, local) + uThoraxT;
}

vec3 skinned(vec3 p) {
  vec3 now = turn(p) + 2.0 * (blendR.w * blendD.xyz - blendD.w * blendR.xyz + cross(blendR.xyz, blendD.xyz));
  return keepOnRibs(now, p);
}

vec3 restPoint() {
  int s = int(slot + 0.5);
  slotA = texelFetch(slotTex, ivec2(s, 0), 0);
  slotB = texelFetch(slotTex, ivec2(s, 1), 0);
  // A belly swells along its normal as the muscle shortens, and thins as it is stretched.
  return position + normal * (shade.z * slotA.y);
}
`,Fa=`
${Ao}
out vec3 vNormal;
out vec3 vWorldNormal;
out vec3 vView;
out vec3 vRest;
out vec3 vFibreRest;
out vec3 vFibre;
out vec4 vShade;
out vec4 vSlotA;
out vec4 vSlotB;

void main() {
  blendBones();
  vec3 rest = restPoint();
  vec4 world = modelMatrix * vec4(skinned(rest), 1.0);
  vec4 view = viewMatrix * world;
  vec3 n = turn(normal);
  vWorldNormal = normalize(mat3(modelMatrix) * n);
  vNormal = normalize(mat3(viewMatrix) * vWorldNormal);
  vFibre = mat3(viewMatrix) * (mat3(modelMatrix) * turn(fibre.xyz));
  vFibreRest = fibre.xyz;
  vView = -view.xyz;
  vRest = position;
  vShade = shade;
  vSlotA = slotA;
  vSlotB = slotB;
  gl_Position = projectionMatrix * view;
}
`,Oa=`
precision highp float;
layout(location = 0) out highp vec4 outColor;

in vec3 vNormal;
in vec3 vWorldNormal;
in vec3 vView;
in vec3 vRest;
in vec3 vFibreRest;
in vec3 vFibre;
in vec4 vShade;
in vec4 vSlotA;
in vec4 vSlotB;

uniform vec3 uBone;
uniform vec3 uCartilage;
uniform vec3 uMuscle;
uniform vec3 uMuscleRest;
uniform vec3 uTendon;
uniform vec3 uGland;
uniform vec3 uAreola;
uniform vec3 uWork;
uniform vec3 uPeak;
uniform vec3 uSky;
uniform vec3 uGround;
uniform vec3 uKey;
uniform vec3 uFill;
uniform vec3 uRim;
uniform float uTime;
uniform float uDim;    // 0: every muscle in full colour; 1: resting muscles fall back so the working ones stand out
uniform float uGrain;  // strength of the fibre grain

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

// Ordered dither, so a faded part needs no sorting.
float bayer(vec2 p) {
  vec2 q = floor(mod(p, 4.0));
  float a = mod(q.x * 2.0 + q.y * 3.0, 4.0);
  float b = mod(floor(q.x / 2.0) * 2.0 + floor(q.y / 2.0) * 3.0, 4.0);
  return (a * 4.0 + b + 0.5) / 16.0;
}

vec3 toScreen(vec3 c) {
  c = c / (1.0 + c * 0.35);  // soft shoulder so the glow does not clip
  c *= 1.25;
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  float alpha = vSlotA.z;
  if (alpha < 0.999 && alpha <= bayer(gl_FragCoord.xy)) discard;
  // A closed shell is only ever seen from outside. Where a thin sheet is stretched so far that
  // its near wall slips behind its far wall, the inside would show: skipping it shows the
  // outside that is right behind it.
  if (!gl_FrontFacing && vSlotB.w > 0.5) discard;

  float kind = vSlotA.w;
  float work = vSlotA.x;
  float tendon = vShade.x;
  float along = vShade.y;
  float ao = vShade.w;
  vec3 n = normalize(vNormal);
  // The back of a part that is a single sheet: in shadow, so it does not catch the eye.
  float inside = gl_FrontFacing ? 1.0 : 0.5;
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(vView);

  // How much of the body one pixel covers, in metres: grain finer than that would only flicker.
  float pixel = length(fwidth(vRest));
  vec3 albedo;
  float gloss;
  float grainMask = 0.0;
  float soft = 0.12;
  vec3 glow = vec3(0.0);
  bool flesh = kind > 5.5 && kind < 7.5;
  if (flesh) {
    // Fibre grain: thin streaks that stay constant along the fibre direction.
    vec3 f = normalize(vFibreRest + vec3(1e-4, 0.0, 0.0));
    vec3 a = normalize(cross(f, abs(f.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
    vec3 b = cross(f, a);
    vec2 across = vec2(dot(vRest, a), dot(vRest, b));
    float run = dot(vRest, f);
    // Three widths of streak. Each fades to its own average once it is finer than a pixel, and
    // the broadest comes in only as the finer ones go, so the grain is there at any distance
    // and never shimmers as the muscle moves. (Close up the broad one would show how loosely
    // the fibre direction of a wide sheet muscle is known, so it stays out of the way there.)
    float seeFine = 1.0 - smoothstep(0.45, 0.95, pixel * 1750.0);
    float seeCoarse = 1.0 - smoothstep(0.45, 0.95, pixel * 660.0);
    float fine = noise(vec2(across.x * 1500.0 + across.y * 900.0, run * 26.0));
    float coarse = noise(vec2(across.x * 420.0 - across.y * 510.0, run * 9.0));
    float broad = noise(vec2(across.x * 150.0 + across.y * 190.0, run * 4.0));
    float lost = 1.0 - 0.6 * seeFine - 0.4 * seeCoarse;
    float grain = 0.5 + (fine - 0.5) * 0.6 * seeFine + (coarse - 0.5) * 0.4 * seeCoarse + (broad - 0.5) * 0.6 * lost;
    grain = clamp(grain, 0.0, 1.0);
    float sinew = smoothstep(0.3, 0.75, tendon);
    if (kind > 6.5) sinew = 1.0;
    vec3 belly = mix(uMuscle, uMuscleRest, uDim * (1.0 - smoothstep(0.02, 0.25, work)));
    belly *= mix(1.0 - 0.34 * uGrain, 1.0 + 0.1 * uGrain, grain);
    vec3 cord = uTendon * mix(1.0 - 0.26 * uGrain, 0.96, grain);
    albedo = mix(belly, cord, sinew);
    gloss = mix(0.22, 0.5, sinew);
    grainMask = 1.0 - sinew;
    soft = 0.3;
    // Working muscle: the belly warms through to the peak colour, with a slow pulse that
    // travels along the fibres (toward the middle as it shortens, outward as it lengthens).
    // It stays a muscle while it does: the grain and the light on it are kept, so a broad
    // sheet working at its hardest does not turn into a flat coloured plate.
    float w = work * (1.0 - sinew);
    vec3 hot = mix(uWork, uPeak, smoothstep(0.6, 1.0, work) * 0.8);
    albedo = mix(albedo, hot * mix(0.62, 1.08, grain), smoothstep(0.0, 0.85, w) * 0.86);
    float wave = 0.5 + 0.5 * sin((abs(along - 0.5) * 9.0) * 6.2832 * 0.35 + uTime * 2.4 * vSlotB.x);
    glow = hot * w * (0.04 + 0.13 * wave * abs(vSlotB.x));
  } else if (kind < 0.5) {
    albedo = uBone * (0.94 + 0.08 * noise(vRest.xy * 180.0 + vRest.z * 120.0));
    gloss = 0.3;
  } else if (kind < 1.5) {
    albedo = uCartilage;
    gloss = 0.5;
    soft = 0.2;
  } else if (kind < 2.5) {
    albedo = vec3(0.86, 0.84, 0.78);
    gloss = 0.8;
  } else if (kind < 3.5) {
    albedo = vec3(0.86, 0.85, 0.82);
    gloss = 0.9;
  } else if (kind < 4.5) {
    albedo = vec3(0.07, 0.045, 0.03);
    gloss = 0.9;
  } else if (kind > 8.5) {
    // Gland and fat: soft, matt, faintly lobed; the areola (kept in the tendon channel) a shade darker.
    // Toward its edge the gland thins out over the muscle it lies on (how much of it there is
    // at a point is kept in the origin-to-insertion channel), so its colour gives way to the
    // muscle's there and no hard outline is left.
    float lobes = noise(vRest.xy * 85.0 + vRest.z * 60.0) * 0.6 + noise(vRest.yz * 240.0) * 0.4;
    albedo = mix(uGland * (0.95 + 0.08 * lobes), uAreola, smoothstep(0.35, 0.65, tendon));
    albedo = mix(albedo, uMuscleRest * 1.25, uDim * 0.55);
    vec3 under = mix(uMuscle, uMuscleRest, uDim) * 0.92;
    // Never quite opaque: a little of the muscle's red comes through even at its thickest.
    albedo = mix(under, albedo, along * 0.84);
    gloss = 0.2;
    soft = 0.28;
  } else {
    albedo = uTendon * 0.9;
    gloss = 0.3;
  }
  // A tapped part lifts toward white.
  albedo = mix(albedo, vec3(1.0), vSlotB.y * 0.35);

  vec3 keyDir = normalize(vec3(0.42, 0.62, 0.66));
  vec3 fillDir = normalize(vec3(-0.75, 0.15, 0.45));
  vec3 rimDir = normalize(vec3(-0.25, 0.45, -0.85));
  float occ = mix(1.0, ao, 0.55);
  float dk = clamp((dot(n, keyDir) + soft) / (1.0 + soft), 0.0, 1.0);
  float df = clamp((dot(n, fillDir) + 0.5) / 1.5, 0.0, 1.0);
  float dr = clamp(dot(n, rimDir), 0.0, 1.0);
  vec3 ambient = mix(uGround, uSky, vWorldNormal.y * 0.5 + 0.5) * ao;
  vec3 light = ambient + uKey * dk * occ + uFill * df * occ * 0.6 + uRim * dr * 0.5;

  vec3 h = normalize(keyDir + v);
  float shine = pow(max(dot(n, h), 0.0), mix(12.0, 90.0, gloss)) * gloss;
  if (grainMask > 0.0) {
    // Light slides across the fibres, not along them.
    vec3 t = normalize(vFibre + vec3(1e-4));
    float th = dot(t, h);
    float silk = pow(max(1.0 - th * th, 0.0), 24.0) * max(dot(n, keyDir) * 0.5 + 0.5, 0.0);
    shine = mix(shine, silk * 0.35, grainMask * 0.7);
  }
  float fres = pow(clamp(1.0 - dot(n, v), 0.0, 1.0), 3.0);
  vec3 color = (albedo * light + uKey * shine * occ + uRim * fres * 0.22 * ao) * inside + glow;
  outColor = vec4(toScreen(color), 1.0);
}
`,ry=`
${Ao}
uniform vec3 uLightDir;
uniform float uFloor;
out float vAlpha;

void main() {
  blendBones();
  vec3 world = (modelMatrix * vec4(skinned(restPoint()), 1.0)).xyz;
  float lift = max(world.y - uFloor, 0.0);
  vec3 onFloor = world - uLightDir * (lift / max(uLightDir.y, 0.05));
  onFloor.y = uFloor + 0.0015;
  vAlpha = slotA.z;
  gl_Position = projectionMatrix * viewMatrix * vec4(onFloor, 1.0);
}
`,oy=`
precision highp float;
layout(location = 0) out highp vec4 outColor;
in float vAlpha;
uniform float uShadow;
void main() {
  if (vAlpha < 0.5) discard;
  outColor = vec4(0.0, 0.0, 0.0, uShadow);
}
`,ay=`
out vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,ly=`
precision highp float;
layout(location = 0) out highp vec4 outColor;
in vec3 vWorld;
uniform vec3 uFloorColor;
uniform vec3 uLine;
uniform vec3 uBack;
uniform vec2 uCentre;

float gridLine(float x, float width) {
  float d = abs(fract(x - 0.5) - 0.5) / fwidth(x);
  return 1.0 - clamp(d - width, 0.0, 1.0);
}

void main() {
  float r = length(vWorld.xz - uCentre);
  float fade = 1.0 - smoothstep(0.9, 2.6, r);
  float fine = max(gridLine(vWorld.x * 4.0, 0.0), gridLine(vWorld.z * 4.0, 0.0));
  vec3 c = mix(uFloorColor, uLine, fine * 0.5);
  c = mix(uBack, c, fade);
  c = mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
  outColor = vec4(c, 1.0);
}
`,cy=`
${Ao}
flat out float vSlot;
out float vAlpha;
out float vClosed;

void main() {
  blendBones();
  vec4 world = modelMatrix * vec4(skinned(restPoint()), 1.0);
  vSlot = slot;
  vAlpha = slotA.z;
  vClosed = slotB.w;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,hy=`
precision highp float;
layout(location = 0) out highp vec4 outColor;
flat in float vSlot;
in float vAlpha;
in float vClosed;
void main() {
  if (vAlpha < 0.5) discard;
  if (!gl_FrontFacing && vClosed > 0.5) discard;
  float id = vSlot + 1.0;
  outColor = vec4(mod(id, 256.0) / 255.0, floor(id / 256.0) / 255.0, 0.0, 1.0);
}
`,fy=`
out vec3 vNormal;
out vec3 vView;
void main() {
  vec4 view = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = -view.xyz;
  gl_Position = projectionMatrix * view;
}
`,dy=`
precision highp float;
layout(location = 0) out highp vec4 outColor;
in vec3 vNormal;
in vec3 vView;
uniform vec3 uColor;
uniform float uGloss;
uniform vec3 uSky;
uniform vec3 uGround;
uniform vec3 uKey;
uniform vec3 uFill;
uniform vec3 uRim;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vView);
  vec3 keyDir = normalize(vec3(0.42, 0.62, 0.66));
  vec3 fillDir = normalize(vec3(-0.75, 0.15, 0.45));
  float dk = max(dot(n, keyDir), 0.0);
  float df = clamp((dot(n, fillDir) + 0.5) / 1.5, 0.0, 1.0);
  vec3 light = mix(uGround, uSky, n.y * 0.5 + 0.5) + uKey * dk + uFill * df * 0.6;
  vec3 h = normalize(keyDir + v);
  float shine = pow(max(dot(n, h), 0.0), mix(10.0, 80.0, uGloss)) * uGloss;
  float fres = pow(clamp(1.0 - dot(n, v), 0.0, 1.0), 3.0);
  vec3 c = uColor * light + uKey * shine + uRim * fres * 0.15;
  c = c / (1.0 + c * 0.35) * 1.25;
  c = mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
  outColor = vec4(c, 1.0);
}
`,za={anatomy:{bone:"#e6dcc8",cartilage:"#b9c7d0",muscle:"#a5433a",muscleRest:"#5f4440",tendon:"#d9cab2",work:"#ff5a2e",peak:"#ffc04d",gland:"#e2c3a2",areola:"#c79a86"},amber:{bone:"#e9e1d2",cartilage:"#c3ccd2",muscle:"#cf9a45",muscleRest:"#8a7350",tendon:"#f0e6d0",work:"#e8402d",peak:"#ff8466",gland:"#f3e3bd",areola:"#c98f76"}};function wr(n,e){return typeof document>"u"?e:getComputedStyle(document.documentElement).getPropertyValue(n).trim()||e}const Ba=.5,uy={bone:0,cartilage:1,disc:1,tooth:2,eye:3,joint:8,muscle:6,tendon:7,aponeurosis:7,retinaculum:7,ligament:7,gland:9};function py(n){return n.name==="Iris"?4:uy[n.kind]??0}class _y{body;skeleton;renderer;camera=new ni(30,1,.05,40);yaw=25;pitch=8;distance=5.4;target=[0,.9,0];lengthRatio;scene=new Ix;meshes=[];shadows=[];boneData;boneTex;slotData;slotTex;uniforms;floorUniforms;pulls;riders=[];glands=[];slotCount;baseAlpha;work;skeletonOn=!0;depth=3;shadowOn;floor;pickMaterial;pickTarget=new li(1,1);pickPixel=new Uint8Array(4);dumbbells=[];bar=new nn;bench=new nn;benchLegs=[];gripRest=[];constructor(e,t,i={}){this.body=t,this.skeleton=new gg(t.json),this.shadowOn=i.shadow??!0,this.renderer=new XS({canvas:e,antialias:i.antialias??!0,alpha:!1,stencil:!0,powerPreference:"high-performance",preserveDrawingBuffer:i.preserve??!1}),this.renderer.outputColorSpace=Yn;const s=this.skeleton.count;this.boneData=new Float32Array(s*8),this.boneTex=new uo(this.boneData,s*2,1,Zt,Kt),this.boneTex.minFilter=this.boneTex.magFilter=bt,this.slotCount=t.slots.length,this.slotData=new Float32Array(this.slotCount*8),this.slotTex=new uo(this.slotData,this.slotCount,2,Zt,Kt),this.slotTex.minFilter=this.slotTex.magFilter=bt,this.baseAlpha=new Float32Array(this.slotCount).fill(1),this.work=new Float32Array(this.slotCount),this.lengthRatio=new Float32Array(this.slotCount).fill(1),t.slots.forEach((u,g)=>{const v=t.json.parts[u.part];this.slotData[g*4+3]=py(v),this.slotData[this.slotCount*4+g*4+2]=v.rides?1:0,this.slotData[this.slotCount*4+g*4+3]=v.open?0:1,v.name==="Cornea"&&(this.baseAlpha[g]=0)}),this.pulls=iy(t.json,t.slots,ty(t));const r=new Map(t.slots.map((u,g)=>[`${t.json.parts[u.part].name}|${u.side}`,g]));t.slots.forEach((u,g)=>{const v=t.json.parts[u.part];if(v.kind!=="gland")return;this.glands.push(g);const p=v.over?r.get(`${v.over}|${u.side}`):void 0;p!==void 0&&this.riders.push({slot:g,on:p})});const o=u=>new $e(u);this.uniforms={boneTex:{value:this.boneTex},slotTex:{value:this.slotTex},uBone:{value:o("#ffffff")},uCartilage:{value:o("#ffffff")},uMuscle:{value:o("#ffffff")},uMuscleRest:{value:o("#ffffff")},uTendon:{value:o("#ffffff")},uGland:{value:o("#ffffff")},uAreola:{value:o("#ffffff")},uWork:{value:o("#ffffff")},uPeak:{value:o("#ffffff")},uSky:{value:new H(.36,.4,.5)},uGround:{value:new H(.17,.13,.12)},uKey:{value:new H(1.55,1.45,1.32)},uFill:{value:new H(.3,.38,.52)},uRim:{value:new H(.75,.85,1.05)},uTime:{value:0},...this.ribcageUniforms(),uDim:{value:0},uGrain:{value:1},uLightDir:{value:new H(.22,1,.3).normalize()},uFloor:{value:0},uShadow:{value:.42}},this.floorUniforms={uFloorColor:{value:o("#ffffff")},uLine:{value:o("#ffffff")},uBack:{value:o("#ffffff")},uCentre:{value:new qe(0,0)}};const a={position:new Ft(t.position,3),normal:new Ft(t.normal,3,!0),skinIndex:new Ft(t.skinIndex,4,!1),skinWeight:new Ft(t.skinWeight,4,!0),shade:new Ft(t.shade,4,!0),fibre:new Ft(t.fibre,4,!0),slot:new Ft(t.slot,1,!1)},l=new Wt({glslVersion:Bi,vertexShader:Fa,fragmentShader:Oa,uniforms:this.uniforms,side:si}),c=new Wt({glslVersion:Bi,vertexShader:Fa,fragmentShader:Oa,uniforms:this.uniforms,side:Ci}),h=new Wt({glslVersion:Bi,vertexShader:ry,fragmentShader:oy,uniforms:this.uniforms,side:Ci,transparent:!0,forceSinglePass:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,stencilWrite:!0,stencilRef:1,stencilFunc:rx,stencilZPass:sx}),_=new Fs(new H(0,.9,0),3);for(let u=0;u<4;u++){const g=new Pi;for(const[d,S]of Object.entries(a))g.setAttribute(d,S);g.setIndex(new Ft(t.index[u],1)),g.boundingSphere=_;const v=t.closed[u];v>0&&g.addGroup(0,v,0),t.index[u].length>v&&g.addGroup(v,t.index[u].length-v,1);const p=new ai(g,[c,l]);if(p.frustumCulled=!1,p.renderOrder=u===0?6:2+u,this.meshes.push(p),this.scene.add(p),u<2){const d=new ai(g,h);d.frustumCulled=!1,d.renderOrder=1,this.shadows.push(d),this.scene.add(d)}}const f=new ai(new Jn(14,14),new Wt({glslVersion:Bi,vertexShader:ay,fragmentShader:ly,uniforms:this.floorUniforms}));f.rotation.x=-Math.PI/2,f.renderOrder=0,this.scene.add(f),this.floor=f,this.pickMaterial=new Wt({glslVersion:Bi,vertexShader:cy,fragmentShader:hy,uniforms:this.uniforms,side:si}),this.buildProps(),this.setTheme(i.theme??"anatomy"),this.setLayers(!0,3),this.pose(new Float64Array(Dt),{q:[0,0,0,1],t:[0,-t.json.floor,0]},0)}ribcageUniforms(){const e=this.skeleton.json.bones,{centre:t,radii:i}=this.skeleton.json.joints.thorax,s=e.findIndex(h=>h.side!=="m"),r=e.filter(h=>h.side==="l").length;let o=0;for(;o<r&&/^rib\d+_l$/.test(e[s+o].name);)o++;const a=e.map((h,_)=>/^T\d+$/.test(h.name)?_:-1).filter(h=>h>=0),l=e.findIndex(h=>h.name==="sternum"),c=a.length>0&&a[a.length-1]-a[0]===a.length-1&&a[a.length-1]<s&&l<s;return{uRibCentre:{value:new H(...t)},uRibRadii:{value:new H(...i)},uRibBand:{value:new qe(-Ba,Ba)},uThoraxQ:{value:new dt(0,0,0,1)},uThoraxT:{value:new H(0,0,0)},uRiders:{value:c?new dt(a[0],a[a.length-1],l,s):new dt(-1,-2,-1,0)},uRiders2:{value:new qe(Math.max(r,1),c?o:0)}}}buildProps(){const e=(f,u)=>new Wt({glslVersion:Bi,vertexShader:fy,fragmentShader:dy,uniforms:{uColor:{value:new $e(f)},uGloss:{value:u},uSky:this.uniforms.uSky,uGround:this.uniforms.uGround,uKey:this.uniforms.uKey,uFill:this.uniforms.uFill,uRim:this.uniforms.uRim}}),t=e("#9aa3ad",.75),i=e("#22262d",.25),s=e("#2b3340",.2),r=e("#3a4250",.5),o=(f,u,g=0,v=0,p=0)=>{const d=new ai(f,u);return d.position.set(g,v,p),d.renderOrder=2,d},a=new wn(.0135,.0135,.13,14).rotateZ(Math.PI/2),l=new wn(.036,.036,.044,6).rotateZ(Math.PI/2),c=new wn(.019,.019,.01,12).rotateZ(Math.PI/2),h=this.body.json.joints.hand,_=this.body.json.contacts.grip.points[0];for(const f of["l","r"]){const u=new nn;u.add(o(a,t),o(l,i,.085),o(l,i,-.085),o(c,t,.059),o(c,t,-.059)),u.visible=!1,this.dumbbells.push(u),this.scene.add(u);const g=S=>f==="l"?S:Wn(S),v=Ei(Et(g(this.skeleton.pivot("middle1_l")),g(this.skeleton.pivot("hand_l")))),p=g(h.across),d=Ei(Et(p,pi(v,Mi(p,v))));this.gripRest.push({bone:this.skeleton.bone(`hand_${f}`),at:g(_.at),turn:Er([1,0,0],d),across:d,long:v})}this.bar.add(o(new wn(.016,.016,1.5,16).rotateZ(Math.PI/2),t));for(const f of[-.72,.72])this.bar.add(o(new $i(.04,1.6,.04),r,f,.77));this.bar.visible=!1,this.scene.add(this.bar),this.bench.add(o(new $i(1.2,.07,.32),s,0,-.035,.16));for(const f of[-.5,.5])for(const u of[.04,.28]){const g=o(new $i(.04,1,.04),r,f,-.57,u);this.benchLegs.push(g),this.bench.add(g)}this.bench.visible=!1,this.scene.add(this.bench)}setProps(e){for(const t of this.dumbbells)t.visible=!!e.dumbbells;if(this.bar.visible=typeof e.bar=="number",typeof e.bar=="number"&&this.bar.position.set(0,e.bar,0),this.bench.visible=!!e.bench,e.bench){this.bench.position.set(e.bench.x,e.bench.height,e.bench.z),this.bench.scale.set(1,1,e.bench.back);const t=Math.max(e.bench.height-.07,.01);for(const i of this.benchLegs)i.scale.y=t,i.position.y=-.07-t/2}this.placeDumbbells()}placeDumbbells(){this.gripRest.forEach((e,t)=>{const i=this.dumbbells[t];if(!i.visible)return;const s=this.skeleton.xf[e.bone],r=Lt(s,e.at);let o=lt(s.q,e.turn);const a=_i(s.q,e.long),l=_i(s.q,e.across),c=Ot((-a[1]-.72)/.2,0,1),h=c*c*(3-2*c),_=Math.hypot(l[0],l[2]);if(h>0&&_>.8){const f=[l[0]/_,0,l[2]/_];o=lt(Er(l,Ei(Ha(l,f,h))),o)}i.position.set(r[0],r[1],r[2]),i.quaternion.set(o[0],o[1],o[2],o[3])})}setTheme(e){const t=za[e]??za.anatomy,i=(r,o)=>this.uniforms[r].value.set(o);i("uBone",t.bone),i("uCartilage",t.cartilage),i("uMuscle",t.muscle),i("uMuscleRest",t.muscleRest),i("uTendon",t.tendon),i("uWork",t.work),i("uPeak",t.peak),i("uGland",t.gland),i("uAreola",t.areola);const s=wr("--color-ink","#0f131a");this.floorUniforms.uFloorColor.value.set(wr("--color-panel","#161b24")),this.floorUniforms.uLine.value.set(wr("--color-line","#283041")),this.floorUniforms.uBack.value.set(s),this.renderer.setClearColor(new $e(s).convertLinearToSRGB(),1)}setLayers(e,t){this.skeletonOn=e,this.depth=t,this.meshes[0].visible=e;for(let i=1;i<4;i++)this.meshes[i].visible=i<=t;this.shadows[0].visible=this.shadowOn&&e,this.shadows[1].visible=this.shadowOn&&t>=1}setFocus(e){this.uniforms.uDim.value=e}setWork(e,t=0){for(let i=0;i<this.slotCount;i++)this.work[i]=e?e[i]:0,this.slotData[this.slotCount*4+i*4]=t}setSelected(e){for(let t=0;t<this.slotCount;t++)this.slotData[this.slotCount*4+t*4+1]=t===e?1:0}setAlpha(e,t){this.baseAlpha[e]=t}setCover(e){for(const t of this.glands)this.baseAlpha[t]=e}pose(e,t,i=0){this.skeleton.solve(e,t,i),this.skeleton.writeDualQuats(this.boneData),this.boneTex.needsUpdate=!0;const s=this.skeleton.thorax;this.uniforms.uThoraxQ.value.set(s.q[0],s.q[1],s.q[2],s.q[3]),this.uniforms.uThoraxT.value.set(s.t[0],s.t[1],s.t[2]),this.placeDumbbells();const r=this.skeleton.xf;for(const o of this.pulls)this.lengthRatio[o.slot]=ny(o,r)}resize(e,t,i){this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix()}render(e=0){const t=this.slotData;for(let l=0;l<this.slotCount;l++)t[l*4]=this.work[l],t[l*4+2]=this.baseAlpha[l];for(const l of this.pulls)t[l.slot*4+1]=sy(l,this.lengthRatio[l.slot],this.work[l.slot]);for(const l of this.riders)t[l.slot*4+1]=t[l.on*4+1];this.slotTex.needsUpdate=!0,this.uniforms.uTime.value=e;const i=this.yaw*Math.PI/180,s=this.pitch*Math.PI/180,[r,o,a]=this.target;this.camera.position.set(r+this.distance*Math.sin(i)*Math.cos(s),o+this.distance*Math.sin(s),a+this.distance*Math.cos(i)*Math.cos(s)),this.camera.lookAt(r,o,a),this.floorUniforms.uCentre.value.set(r,a),this.renderer.render(this.scene,this.camera)}pick(e,t){const i=this.renderer.getSize(new qe),s=[this.floor,...this.shadows,...this.dumbbells,this.bar,this.bench].map(a=>[a,a.visible]);for(const[a]of s)a.visible=!1;this.camera.setViewOffset(i.x,i.y,Math.floor(e),Math.floor(t),1,1),this.scene.overrideMaterial=this.pickMaterial;const r=this.renderer.getClearColor(new $e);this.renderer.setRenderTarget(this.pickTarget),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.readRenderTargetPixels(this.pickTarget,0,0,1,1,this.pickPixel),this.renderer.setRenderTarget(null),this.renderer.setClearColor(r,1),this.scene.overrideMaterial=null,this.camera.clearViewOffset();for(const[a,l]of s)a.visible=l;const o=this.pickPixel[0]+this.pickPixel[1]*256;return o>0?o-1:null}get layers(){return{skeleton:this.skeletonOn,depth:this.depth}}dispose(){this.scene.traverse(e=>{const t=e;if(!t.isMesh)return;t.geometry.dispose();const i=t.material;for(const s of Array.isArray(i)?i:[i])s.dispose()}),this.pickMaterial.dispose(),this.pickTarget.dispose(),this.boneTex.dispose(),this.slotTex.dispose(),this.renderer.dispose()}}const Ga=10.5,my=31,gy=4e3,xy=["skull","pelvis","foot_l","foot_r","toes_l","toes_r","hand_l","hand_r","ulna_l","ulna_r","tibia_l","tibia_r"];class by{constructor(e,t={}){this.canvas=e,this.callbacks=t,e.style.touchAction="none",e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointermove",this.onMove),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointercancel",this.onCancel),e.addEventListener("click",this.onClick),e.addEventListener("webglcontextlost",this.onLost),e.addEventListener("webglcontextrestored",this.onRestored),document.addEventListener("visibilitychange",this.onVisibility)}scene=null;body=null;clips=null;player=null;exercise="";look="muscles";mode="full";minFrameMs=Ga;showing=!0;playing=!0;repLimit=null;repFrom=0;done=!1;lost=!1;lostTimer=null;pause=null;dragged=!1;speed=1;frame=0;last=0;dirty=!0;disposed=!1;loading=0;width=1;height=1;homeYaw=30;yawBy=0;pitch=8;zoom=1;centre=[0,.9,0];reach=1;half=[.4,.95,.4];shown={cue:null,phase:"rest"};pointers=new Map;press=null;pinch=0;selected=null;groups=new Map;groupNames=new Set;async load(e,t){const i=++this.loading,[{json:s,bin:r},o]=await Promise.all([Pg("avatar/",t),Tg("avatar/",t)]);if(this.disposed||i!==this.loading)return;this.scene?.dispose(),this.scene=null,this.player=null;const a=Cg(s,r,e);await new Promise(l=>setTimeout(l,0)),!(this.disposed||i!==this.loading)&&(this.body=a,this.clips=o,this.scene=new _y(this.canvas,this.body,{antialias:!0}),this.groups.clear(),this.groupNames.clear(),this.body.slots.forEach((l,c)=>{const h=this.body.json.parts[l.part];if(h.kind==="muscle"){h.group&&this.groupNames.add(h.group);for(const _ of[h.group,h.hub_id])_&&(this.groups.has(_)||this.groups.set(_,[]),this.groups.get(_).push(c))}}),this.selected=null,this.applyLook(),this.applySize(),this.exercise&&this.setExercise(this.exercise),this.last=performance.now(),this.touch())}get variant(){return this.body?.variant??null}unload(){this.loading++,this.frame&&cancelAnimationFrame(this.frame),this.frame=0,this.pause&&clearTimeout(this.pause),this.pause=null,this.scene?.dispose(),this.scene=null,this.player=null,this.body=null,this.selected=null}setExercise(e){if(this.exercise=e,this.clearSelection(),!this.scene||!this.body||!this.clips)return;const t=Ag(this.clips,e,this.body.variant),i=$a.get(e);if(!t||!i)return;const s=Mg(i,h=>this.groups.has(h)?{slots:this.groups.get(h),specific:!this.groupNames.has(h)}:null);this.player=new Eg(t,s,this.body.slots.length),this.player.speed=this.speed,this.rearm(),this.scene.setProps(yg(t));const r=[1/0,1/0,1/0],o=[-1/0,-1/0,-1/0],a=this.scene.skeleton,l=Math.max(1,Math.floor(t.frames.length/12));for(let h=0;h<t.frames.length;h+=l){a.solve(t.frames[h].dofs,t.frames[h].root,0);for(const _ of xy){const f=Lt(a.xf[a.bone(_)],a.pivot(_));for(let u=0;u<3;u++)r[u]=Math.min(r[u],f[u]),o[u]=Math.max(o[u],f[u])}}o[1]+=.16,r[1]=Math.max(Math.min(r[1],.02)-.02,0),this.centre=[(r[0]+o[0])/2,(r[1]+o[1])/2,(r[2]+o[2])/2],this.reach=Math.hypot(o[0]-r[0],o[1]-r[1],o[2]-r[2])/2,this.half=[(o[0]-r[0])/2+.08,(o[1]-r[1])/2+.02,(o[2]-r[2])/2+.08],this.homeYaw=i.view_yaw,this.yawBy=0,this.pitch=8,this.zoom=1;const c=this.extent(this.homeYaw,this.pitch);this.callbacks.onShape?.(c.across/c.up),this.shown={cue:null,phase:"rest"},this.callbacks.onInfo?.(this.shown),this.touch()}setMode(e){this.mode=e,this.canvas.style.touchAction=e==="card"?"pan-y":"none",this.minFrameMs=e==="card"?my:Ga,this.pointers.clear(),this.press=null,this.pinch=0}setRepLimit(e){this.repLimit=e,this.rearm()}replay(){this.rearm()}rearm(){this.repFrom=this.player?.rep??0,this.done&&(this.done=!1,this.callbacks.onDone?.(!1)),this.last=performance.now(),this.schedule()}setShowing(e){this.showing!==e&&(this.showing=e,this.last=performance.now(),e&&this.touch())}setLook(e){this.look=e,this.selected!==null&&(this.clearSelection(),this.callbacks.onPick?.(null)),this.applyLook()}clearSelection(){this.selected!==null&&(this.selected=null,this.scene?.setSelected(null),this.touch())}setPlaying(e){this.playing=e,this.last=performance.now(),this.schedule()}setSpeed(e){this.speed=e,this.player&&(this.player.speed=e)}resetView(){this.yawBy=0,this.pitch=8,this.zoom=1,this.touch()}resize(e,t){const i=Math.round(e),s=Math.round(t);i<2||s<2||i===this.width&&s===this.height||(this.width=i,this.height=s,this.applySize())}applySize(){this.scene?.resize(this.width,this.height,Math.min(window.devicePixelRatio||1,2)),this.touch()}dispose(){this.disposed=!0,this.frame&&cancelAnimationFrame(this.frame),this.frame=0,this.canvas.removeEventListener("pointerdown",this.onDown),this.canvas.removeEventListener("pointermove",this.onMove),this.canvas.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("pointercancel",this.onCancel),this.canvas.removeEventListener("click",this.onClick),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.canvas.removeEventListener("webglcontextrestored",this.onRestored),this.lostTimer&&clearTimeout(this.lostTimer),this.lostTimer=null,this.pause&&clearTimeout(this.pause),this.pause=null,document.removeEventListener("visibilitychange",this.onVisibility),this.scene?.dispose(),this.scene=null}applyLook(){this.scene&&(this.scene.setLayers(!0,this.look==="skeleton"?0:2),this.scene.setFocus(this.look==="working"?1:0),this.scene.setCover(this.look==="working"?.35:1),this.touch())}extent(e,t){const i=e*Math.PI/180,s=t*Math.PI/180,r=Math.abs(Math.sin(i)),o=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(s)),l=Math.abs(Math.cos(s)),[c,h,_]=this.half;return{across:c*o+_*r,up:c*r*a+h*l+_*o*a,near:c*r*l+h*a+_*o*l}}schedule(){if(this.frame||this.pause||this.disposed||!this.showing)return;const e=this.minFrameMs-(performance.now()-this.last)-6;if(e>8){this.pause=setTimeout(()=>{this.pause=null,this.schedule()},e);return}this.frame=requestAnimationFrame(this.tick)}touch(){this.dirty=!0,this.schedule()}tick=e=>{this.frame=0;const t=this.scene,i=this.player;if(!t||!i||document.hidden||!this.showing||this.lost){this.last=e;return}if(e-this.last<this.minFrameMs){(this.playing&&!this.done||this.dirty)&&this.schedule();return}const s=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.playing&&!this.done&&(i.advance(s),this.dirty=!0,this.repLimit!==null&&i.rep-this.repFrom>=this.repLimit&&(this.done=!0,this.callbacks.onDone?.(!0))),this.playing&&!this.done&&this.schedule(),!this.dirty)return;this.dirty=!1,t.pose(i.dofs,i.root,i.breath),t.setWork(i.levels,i.flow),t.yaw=this.homeYaw+this.yawBy,t.target=this.centre;const r=t.camera.fov*Math.PI/360;if(this.mode==="card"){const l=this.extent(t.yaw,this.pitch);t.distance=(l.near*.5+Math.max(l.up/Math.tan(r),l.across/(Math.tan(r)*t.camera.aspect)))*1.02*this.zoom}else{const l=Math.min(r,Math.atan(Math.tan(r)*t.camera.aspect));t.distance=this.reach/Math.sin(l)*.86*this.zoom}const o=Math.asin(Ot((.04-this.centre[1])/t.distance,-1,1))*180/Math.PI;this.pitch=Math.max(this.pitch,o),t.pitch=this.pitch,t.render(e/1e3);const a=i.cue;(a!==this.shown.cue||i.segment.type!==this.shown.phase)&&(this.shown={cue:a,phase:i.segment.type},this.callbacks.onInfo?.(this.shown))};onVisibility=()=>{this.last=performance.now(),this.watchLost(),this.touch()};onLost=e=>{e.preventDefault(),this.lost=!0,this.watchLost()};watchLost(){this.lostTimer&&clearTimeout(this.lostTimer),this.lostTimer=null,!(!this.lost||document.hidden)&&(this.lostTimer=setTimeout(()=>{this.lostTimer=null,this.lost&&!this.disposed&&!document.hidden&&this.callbacks.onLost?.()},gy))}onRestored=()=>{this.lost=!1,this.lostTimer&&clearTimeout(this.lostTimer),this.lostTimer=null,this.callbacks.onRestored?.(),this.touch()};onClick=()=>{if(this.mode==="card"){if(this.dragged){this.dragged=!1;return}this.callbacks.onTap?.()}};onCancel=e=>{this.pointers.delete(e.pointerId),this.press=null,this.pinch=0};onDown=e=>{this.dragged=!1,this.mode==="full"&&this.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1?this.press={x:e.clientX,y:e.clientY,at:performance.now(),moved:!1}:(this.press=null,this.pinch=this.spread())};onMove=e=>{const t=this.pointers.get(e.pointerId);if(t){if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1){const i=e.clientX-t.x,s=e.clientY-t.y;this.press&&Math.hypot(e.clientX-this.press.x,e.clientY-this.press.y)>8&&(this.press.moved=!0),(!this.press||this.press.moved)&&(this.yawBy-=i*.4,this.mode==="full"&&(this.pitch=Ot(this.pitch+s*.3,-15,80)),this.touch())}else if(this.pointers.size===2&&this.mode==="full"){const i=this.spread();this.pinch>0&&i>0&&(this.zoom=Ot(this.zoom*this.pinch/i,.35,1.8),this.touch()),this.pinch=i}}};onUp=e=>{this.pointers.delete(e.pointerId);const t=this.press;if(this.press=null,this.pinch=0,t?.moved&&(this.dragged=!0,setTimeout(()=>this.dragged=!1,0)),this.mode==="card"||!t||t.moved||performance.now()-t.at>350||!this.scene||!this.body)return;const i=this.canvas.getBoundingClientRect(),s=this.scene.pick(e.clientX-i.left,e.clientY-i.top);this.selected=s===this.selected?null:s,this.scene.setSelected(this.selected),this.touch(),this.callbacks.onPick?.(this.selected===null?null:this.body.json.parts[this.body.slots[this.selected].part])};spread(){const[e,t]=[...this.pointers.values()];return e&&t?Math.hypot(e.x-t.x,e.y-t.y):0}}const Ul=12e4;class Fl{constructor(e=(i,s)=>new by(i,s),t="0.13.0"){this.make=e,this.version=t}canvas=null;controller=null;claims=[];loaded=null;pending=null;ticket=0;failedLoad=!1;lostSurface=!1;watcher=null;idle=null;claim(e){const t={...e};this.failedLoad=!1,this.top()?.onState?.("waiting"),this.claims.push(t),this.show(t);const i=()=>this.top()===t;return{update:s=>this.update(t,s),replay:()=>{i()&&this.controller?.replay()},clearSelection:()=>{i()&&this.controller?.clearSelection()},resetView:()=>{i()&&this.controller?.resetView()},release:()=>this.release(t)}}get depth(){return this.claims.length}destroy(){this.idle&&clearTimeout(this.idle),this.idle=null,this.watcher?.disconnect(),this.watcher=null,this.claims.length=0,this.ticket++,this.controller?.dispose(),this.controller=null,this.canvas?.remove(),this.canvas=null,this.loaded=this.pending=null,this.failedLoad=this.lostSurface=!1}top(){return this.claims[this.claims.length-1]}show(e){this.idle&&clearTimeout(this.idle),this.idle=null,(!this.canvas||!this.controller)&&(this.canvas=document.createElement("canvas"),this.canvas.className="absolute inset-0 h-full w-full",this.canvas.setAttribute("role","img"),this.controller=this.make(this.canvas,{onInfo:s=>this.top()?.onInfo?.(s),onPick:s=>this.top()?.onPick?.(s),onTap:()=>this.top()?.onTap?.(),onDone:s=>this.top()?.onDone?.(s),onShape:s=>this.top()?.onShape?.(s),onLost:()=>{this.lostSurface=!0,this.fail()},onRestored:()=>{if(!this.lostSurface)return;this.lostSurface=!1,this.failedLoad=!1;const s=this.top();s&&this.need(s)}}));const{canvas:t,controller:i}=this;t.parentElement!==e.host&&e.host.appendChild(t),t.setAttribute("aria-label",e.label),this.watcher?.disconnect(),this.watcher=null,typeof ResizeObserver<"u"&&(this.watcher=new ResizeObserver(()=>this.fit(e)),this.watcher.observe(e.host)),i.setMode(e.mode),i.setLook(e.look),i.setSpeed(e.speed),i.setPlaying(e.playing),i.setRepLimit(e.reps),i.setExercise(e.movement),this.fit(e),i.setShowing(e.visible),e.onDone?.(!1),this.need(e)}fit(e){this.top()===e&&this.controller?.resize(e.host.clientWidth,e.host.clientHeight)}need(e){const t=e.variant;if(this.failedLoad||this.lostSurface){e.onState?.("failed");return}if(this.pending===t){e.onState?.("loading");return}if(this.pending===null&&this.loaded===t){e.onState?.("ready");return}if(!e.visible){e.onState?.("loading");return}const i=++this.ticket;this.pending=t,e.onState?.("loading"),this.controller.load(t,this.version).then(()=>{i===this.ticket&&(this.pending=null,this.loaded=t,this.top()?.onState?.("ready"))},s=>{i===this.ticket&&(console.error("Avatar failed to load",s),this.fail())})}fail(){this.ticket++,this.pending=this.loaded=null,this.failedLoad=!0,this.top()?.onState?.("failed")}update(e,t){if(!this.claims.includes(e))return;const i={...e};if(Object.assign(e,t),this.top()!==e||!this.controller||!this.canvas)return;const s=this.controller;e.label!==i.label&&this.canvas.setAttribute("aria-label",e.label),e.mode!==i.mode&&s.setMode(e.mode),e.look!==i.look&&s.setLook(e.look),e.speed!==i.speed&&s.setSpeed(e.speed),e.playing!==i.playing&&s.setPlaying(e.playing),e.reps!==i.reps&&s.setRepLimit(e.reps),e.movement!==i.movement&&s.setExercise(e.movement),e.visible!==i.visible&&s.setShowing(e.visible),(e.variant!==i.variant||e.visible&&!i.visible)&&this.need(e)}release(e){const t=this.claims.indexOf(e);if(t<0)return;const i=t===this.claims.length-1;if(this.claims.splice(t,1),!i)return;const s=this.top();s?s.host.isConnected?this.show(s):this.controller?.setShowing(!1):this.park()}park(){this.watcher?.disconnect(),this.watcher=null,this.controller?.setShowing(!1),this.canvas?.remove(),this.idle=setTimeout(()=>{this.idle=null,this.ticket++,this.pending=this.loaded=null,this.controller?.unload()},Ul)}}let Sr=null;function vy(n){return Sr||(Sr=new Fl),Sr.claim(n)}const wy=Object.freeze(Object.defineProperty({__proto__:null,IDLE_MS:Ul,Stage:Fl,claimStage:vy},Symbol.toStringTag,{value:"Module"}));export{$a as E,vy as c,wy as s};
