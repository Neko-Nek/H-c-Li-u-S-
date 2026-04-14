import { motion } from 'motion/react';
import { BookOpen, Laptop, Smartphone, Settings, GraduationCap, Database, CheckCircle2, Shield, Users, Cog, Globe, Mail, Phone, MapPin, Star } from 'lucide-react';

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Slide 1
export const Slide1 = () => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
      <div className="relative mx-auto w-32 h-32 mb-4 flex flex-col items-center justify-center">
        <motion.div 
          className="relative z-10 w-24 h-24 bg-gradient-to-br from-white to-[#F0F7FF] rounded-3xl shadow-2xl flex items-center justify-center border border-white/80 backdrop-blur-md"
          animate={{ y: [-12, 12, -12], rotate: [6, 10, 6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[#028090] opacity-5 rounded-3xl"></div>
          <BookOpen className="w-12 h-12 text-[#028090] relative z-10" strokeWidth={1.5} />
        </motion.div>
        <motion.div 
          className="absolute bottom-0 w-16 h-3 bg-black/10 rounded-[100%] blur-md"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <h1 className="font-heading font-bold text-5xl md:text-6xl text-navy mb-4">HỌC LIỆU SỐ AISAVA</h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Nền tảng tài nguyên giáo dục số trong hệ sinh thái AISAVA.</p>
    </motion.div>
    
    <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="relative w-full max-w-4xl mt-12 h-[300px] flex justify-center items-end">
      {/* Simplified Mockup */}
      <div className="w-[80%] h-[280px] bg-white rounded-t-2xl shadow-2xl border-8 border-gray-800 relative z-10 overflow-hidden flex flex-col">
        <div className="h-6 bg-gray-100 border-b flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <div className="ml-2 bg-white rounded text-[8px] px-2 py-0.5 text-gray-500 shadow-sm flex items-center gap-1">
            <Globe className="w-2 h-2" /> aisava.vn/admin
          </div>
        </div>
        <div className="flex-1 bg-gray-50 flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-white border-r border-gray-200 p-3 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-navy mb-2 flex items-center gap-1">
              <div className="w-3 h-3 bg-teal rounded-sm"></div> AISAVA
            </div>
            <div className="text-[8px] bg-teal/10 text-teal px-2 py-1.5 rounded font-medium flex items-center gap-1.5"><BookOpen className="w-2.5 h-2.5"/> Kho học liệu</div>
            <div className="text-[8px] text-gray-600 px-2 py-1.5 flex items-center gap-1.5 hover:bg-gray-50 rounded"><Laptop className="w-2.5 h-2.5"/> Bài giảng ĐT</div>
            <div className="text-[8px] text-gray-600 px-2 py-1.5 flex items-center gap-1.5 hover:bg-gray-50 rounded"><Settings className="w-2.5 h-2.5"/> Quản lý</div>
          </div>
          {/* Main Content */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="text-[12px] font-bold text-navy">Tổng quan Hệ thống</div>
              <div className="text-[7px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">GDPT 2018</div>
            </div>
            
            <div className="flex gap-3">
               <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-2.5 border border-blue-200 shadow-sm">
                  <div className="text-[8px] text-blue-600 font-medium mb-1">Kho Bài Giảng</div>
                  <div className="text-[14px] font-bold text-navy">10,000+</div>
               </div>
               <div className="flex-1 bg-gradient-to-br from-mint/40 to-mint/80 rounded-lg p-2.5 border border-mint shadow-sm">
                  <div className="text-[8px] text-teal font-medium mb-1">Định Dạng</div>
                  <div className="text-[14px] font-bold text-navy">Đa phương tiện</div>
               </div>
            </div>
            
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col">
               <div className="text-[9px] font-bold text-gray-800 mb-2">Tính năng nổi bật</div>
               <div className="flex flex-col gap-1.5">
                 <div className="flex items-start gap-1.5">
                   <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
                   <span className="text-[8px] text-gray-600 leading-tight">Hệ thống bài giảng điện tử tương tác cao, bám sát SGK.</span>
                 </div>
                 <div className="flex items-start gap-1.5">
                   <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
                   <span className="text-[8px] text-gray-600 leading-tight">Ngân hàng câu hỏi trắc nghiệm tự động chấm điểm tức thì.</span>
                 </div>
                 <div className="flex items-start gap-1.5">
                   <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
                   <span className="text-[8px] text-gray-600 leading-tight">Theo dõi tiến độ và cá nhân hóa lộ trình học tập.</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 w-[90%] h-4 bg-gray-300 rounded-b-xl shadow-lg z-10"></div>
      
      {/* Tablet */}
      <div className="absolute -bottom-4 right-[10%] w-[30%] h-[200px] bg-white rounded-xl shadow-2xl border-8 border-gray-800 z-20 overflow-hidden flex flex-col">
         <div className="h-4 bg-gray-100 border-b flex items-center justify-center">
            <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
         </div>
         <div className="flex-1 bg-gray-50 p-2.5 flex flex-col gap-2">
            <div className="text-[9px] font-bold text-navy text-center border-b border-gray-200 pb-1.5">App Học Sinh</div>
            <div className="bg-gradient-to-r from-teal to-blue-500 rounded p-2 text-white shadow-sm">
               <div className="text-[6px] opacity-80 mb-0.5">Bài học đang mở</div>
               <div className="text-[8px] font-bold">Toán: Phân số (Tiết 1)</div>
            </div>
            <div className="flex-1 bg-white rounded border border-gray-200 p-2 shadow-sm flex flex-col justify-center">
               <div className="flex justify-between items-end mb-1">
                 <div className="text-[7px] font-bold text-gray-700">Tiến độ tuần</div>
                 <div className="text-[6px] text-teal font-bold">75%</div>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                  <div className="bg-teal h-1.5 rounded-full w-[75%]"></div>
               </div>
               <div className="flex gap-1 mt-auto">
                 <div className="flex-1 h-6 bg-blue-50 rounded border border-blue-100 flex items-center justify-center text-[6px] text-blue-600 font-medium">Bài tập</div>
                 <div className="flex-1 h-6 bg-orange-50 rounded border border-orange-100 flex items-center justify-center text-[6px] text-orange-600 font-medium">Lý thuyết</div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  </div>
);

// Slide 2
export const Slide2 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-16 text-center">
      Lợi Động Cơ Của Việc Dạy & Học
    </motion.h2>
    
    <div className="flex-1 flex flex-col items-center justify-center">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex justify-center items-center gap-8 md:gap-16 mb-16 relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-teal/20 via-teal to-teal/20 -translate-y-1/2 z-0"></div>
        
        {[
          { icon: BookOpen, title: "Đồng Bộ GDPT 2018", color: "from-blue-400 to-navy" },
          { icon: Laptop, title: "Đa Định Dạng Trải Nghiệm", color: "from-teal to-green-accent" },
          { icon: Smartphone, title: "Truy Cập 24/7 Mọi Lúc Mọi Nơi", color: "from-orange-400 to-red-500" }
        ].map((item, i) => (
          <motion.div key={i} variants={fadeUp} custom={i} className="relative z-10 flex flex-col items-center">
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.color} p-1 shadow-xl mb-6`}>
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <item.icon className="w-12 h-12 text-navy" />
              </div>
            </div>
            <h3 className="font-heading font-bold text-xl text-navy text-center max-w-[200px]">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="bg-white px-8 py-6 rounded-2xl shadow-lg border border-mint max-w-3xl text-center">
        <p className="text-lg text-gray-700 font-medium">Cung cấp tài nguyên giáo dục số hóa toàn diện, phục vụ trực tiếp công tác giảng dạy và học tập.</p>
      </motion.div>
    </div>
  </div>
);

// Slide 3
export const Slide3 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-12">
      Sức Mạnh Công Nghệ Ngầm:<br/><span className="text-teal">Hệ Thống Tự Động & Cá Nhân Hóa</span>
    </motion.h2>
    
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-6 flex-1 justify-center">
      {[
        { icon: Settings, title: "Tự động hóa", desc: "Gợi ý bài học tự động, chấm bài và báo cáo tiến độ theo thời gian thực." },
        { icon: GraduationCap, title: "Cá nhân hóa", desc: "Xây dựng lộ trình học tập độc bản, tùy biến theo năng lực và tốc độ tiếp thu của từng học sinh." },
        { icon: Smartphone, title: "Quản trị luồng dữ liệu", desc: "Phân tích Dashboard trực quan cho Ban giám hiệu kết hợp khả năng truy cập Đa nền tảng (PC, Tablet, Mobile) không giới hạn." }
      ].map((item, i) => (
        <motion.div key={i} variants={fadeUp} custom={i} className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 border-l-4 border-teal hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center shrink-0">
            <item.icon className="w-8 h-8 text-teal" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-2">{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

// Slide 4
export const Slide4 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-12 text-center">
      Tối Ưu Hóa Trải Nghiệm Lớp Học & Quản Trị Hệ Thống
    </motion.h2>
    
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 items-center">
      <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-[280px] flex flex-col hover:shadow-xl transition-shadow">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6 shrink-0">
          <Database className="w-7 h-7 text-teal"/>
        </div>
        <h3 className="font-heading font-bold text-xl text-navy mb-3">Kho bài giảng khổng lồ</h3>
        <p className="text-gray-600 flex-1">Hàng nghìn bài giảng điện tử biên soạn bởi chuyên gia theo chuẩn GDPT 2018.</p>
      </motion.div>
      
      <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-[280px] flex flex-col hover:shadow-xl transition-shadow">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6 shrink-0">
          <Laptop className="w-7 h-7 text-teal"/>
        </div>
        <h3 className="font-heading font-bold text-xl text-navy mb-3">Bài tập tương tác</h3>
        <p className="text-gray-600 flex-1">Học sinh làm bài trực tiếp, hệ thống tự động chấm điểm và phản hồi kết quả ngay lập tức.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-[280px] flex flex-col hover:shadow-xl transition-shadow">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6 shrink-0">
          <Settings className="w-7 h-7 text-teal"/>
        </div>
        <h3 className="font-heading font-bold text-xl text-navy mb-3">Công cụ quản lý toàn diện</h3>
        <p className="text-gray-600 flex-1">Giáo viên giao bài, theo dõi tiến độ, tùy chỉnh nội dung chỉ với vài thao tác.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-[280px] flex flex-col hover:shadow-xl transition-shadow">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6 shrink-0">
          <Shield className="w-7 h-7 text-teal"/>
        </div>
        <h3 className="font-heading font-bold text-xl text-navy mb-3">Bảo mật & An toàn</h3>
        <p className="text-gray-600 flex-1">Môi trường số hóa kiểm duyệt nghiêm ngặt, an toàn tuyệt đối cho học sinh.</p>
      </motion.div>
    </motion.div>
  </div>
);

// Slide 5
export const Slide5 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-10 text-center">
      Ma Trận Giá Trị Đa Chiều Từ Hệ Thống AISAVA
    </motion.h2>
    
    <div className="flex-1 grid grid-cols-3 gap-6">
      {[
        {
          title: "BAN GIÁM HIỆU",
          subtitle: "Kiểm soát & Định hướng",
          items: ["Quản lý chất lượng giảng dạy tập trung.", "Báo cáo tổng quan mức độ sử dụng toàn trường.", "Đánh giá hiệu quả ứng dụng CNTT minh bạch.", "Đồng bộ 100% mục tiêu chuyển đổi số quốc gia."]
        },
        {
          title: "GIÁO VIÊN",
          subtitle: "Giải phóng áp lực",
          items: ["Tiết kiệm tối đa thời gian soạn bài.", "Sở hữu kho tài nguyên giảng dạy phong phú.", "Giao bài & chấm điểm hoàn toàn tự động.", "Theo dõi sát sao tiến độ từng cá nhân học sinh."]
        },
        {
          title: "HỌC SINH",
          subtitle: "Hứng thú & Tự chủ",
          items: ["Học tập chủ động mọi lúc, mọi nơi.", "Bài tập tương tác hấp dẫn, trực quan.", "Nhận phản hồi kết quả tức thì.", "Lộ trình học tập cá nhân hóa chuyên sâu."]
        }
      ].map((col, i) => (
        <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col">
          <div className="bg-navy text-white p-4 rounded-t-2xl text-center shadow-md z-10">
            <h3 className="font-heading font-bold text-xl">{col.title}</h3>
            <p className="text-mint text-sm">({col.subtitle})</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-b-2xl p-4 flex-1 flex flex-col gap-3 shadow-sm pt-6 -mt-2">
            {col.items.map((item, j) => (
              <div key={j} className="bg-white rounded-full py-3 px-4 shadow-sm border border-gray-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-accent shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Slide 6
export const Slide6 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-10 text-center">
      Kho Tàng Nội Dung Mở Rộng & Chuẩn Mực
    </motion.h2>
    
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 gap-4 mb-8">
      {[
        "Bài giảng điện tử theo SGK (NXB Giáo Dục)",
        "Video bài giảng mẫu từ giáo viên giỏi",
        "Bài tập tương tác & trắc nghiệm online",
        "Tài liệu tham khảo bổ trợ",
        "Đề kiểm tra & đề thi tham khảo",
        "Hoạt động trải nghiệm sáng tạo"
      ].map((item, i) => (
        <motion.div key={i} variants={fadeUp} className="bg-white rounded-xl p-5 shadow-md border-l-4 border-teal flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-accent" />
          </div>
          <span className="font-medium text-lg text-gray-800">{item}</span>
        </motion.div>
      ))}
    </motion.div>
    
    <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-auto">
      <div className="flex flex-wrap justify-center gap-2.5 mb-6">
        {[
          "Công nghệ", "Giáo dục Công dân", "Giáo dục quốc phòng và an ninh", 
          "Giáo dục thể chất", "Hoạt động trải nghiệm", "Hóa học", 
          "Khoa học", "Khoa học tự nhiên", "Lịch sử", "Lịch sử và Địa lí", 
          "Mĩ thuật", "Ngoại ngữ", "Ngữ văn", "Sinh học", 
          "Tin học", "Toán", "Tự nhiên và xã hội", "Vật lí", "Âm nhạc"
        ].map((tag, i) => (
          <motion.span 
            key={i} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05, type: "spring", stiffness: 120 }}
            className="bg-gradient-to-r from-teal to-blue-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-md border border-white/20 hover:scale-105 transition-transform cursor-default"
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <div className="text-center">
        <span className="inline-block bg-navy text-white font-bold px-8 py-3 rounded-full shadow-lg">
          Đầy đủ các cấp: Tiểu học — THCS — THPT
        </span>
      </div>
    </motion.div>
  </div>
);

// Slide 7
export const Slide7 = () => (
  <div className="flex flex-col h-full items-center">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-16 text-center">
      Hạt Nhân Của Hệ Sinh Thái Công Nghệ Trường Học
    </motion.h2>
    
    <div className="flex-1 relative w-full max-w-3xl flex items-center justify-center">
      {/* Center Hub */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="relative z-20 w-48 h-48 bg-gradient-to-br from-navy to-teal rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
        <div className="text-center">
          <Globe className="w-12 h-12 text-white mx-auto mb-2 opacity-80" />
          <span className="font-heading font-bold text-white text-xl leading-tight block">HỌC LIỆU SỐ<br/>AISAVA</span>
        </div>
      </motion.div>
      
      {/* Spokes */}
      {[
        { label: "Camera AI Điểm Danh", pos: "top-0 left-1/4 -translate-x-1/2", delay: 2 },
        { label: "Sổ Đăng Bộ", pos: "top-0 right-1/4 translate-x-1/2", delay: 3 },
        { label: "Sổ Ghi Điểm", pos: "bottom-10 left-1/4 -translate-x-1/2", delay: 4 },
        { label: "App Phụ Huynh", pos: "bottom-10 right-1/4 translate-x-1/2", delay: 5 }
      ].map((spoke, i) => (
        <motion.div key={i} custom={spoke.delay} variants={fadeUp} initial="hidden" animate="visible" className={`absolute ${spoke.pos} bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-100 z-10 font-bold text-navy`}>
          {spoke.label}
        </motion.div>
      ))}
      
      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
         <motion.line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#028090" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
         <motion.line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#028090" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
         <motion.line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#028090" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
         <motion.line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#028090" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
      </svg>
    </div>
    
    <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 bg-teal text-white p-6 rounded-2xl shadow-xl max-w-4xl text-center">
      <p className="text-lg font-medium">Tích hợp toàn diện — Dữ liệu đồng bộ xuyên suốt. Giáo viên chỉ cần 1 tài khoản duy nhất (SSO) để vận hành toàn bộ nghiệp vụ giáo dục.</p>
    </motion.div>
  </div>
);

// Slide 8
export const Slide8 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-4 text-center">
      Kho Học Liệu Số Khổng Lồ & Đa Dạng
    </motion.h2>
    <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-xl text-gray-600 text-center mb-12">
      Hệ sinh thái tài nguyên giáo dục toàn diện từ Tiểu học đến THPT
    </motion.p>
    
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-4">
      {[
        { 
          icon: BookOpen, 
          num: "230+", 
          title: "Đầu Sách", 
          desc: "SGK, sách Kết Nối Tri Thức và các bộ sách chuẩn GDPT 2018.",
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-200"
        },
        { 
          icon: Database, 
          num: "310,169+", 
          title: "Câu Hỏi", 
          desc: "Ngân hàng câu hỏi trắc nghiệm và tự luận đa dạng các mức độ.",
          color: "text-teal",
          bg: "bg-teal/10",
          border: "border-teal/30"
        },
        { 
          icon: Laptop, 
          num: "5,046+", 
          title: "Bài Giảng", 
          desc: "Bài giảng điện tử tương tác sinh động từ Tiểu học đến THPT.",
          color: "text-orange-500",
          bg: "bg-orange-50",
          border: "border-orange-200"
        }
      ].map((item, i) => (
        <motion.div 
          key={i} 
          custom={i+2} 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          className={`flex flex-col items-center text-center p-8 rounded-3xl border ${item.border} ${item.bg} shadow-lg hover:shadow-xl transition-all hover:-translate-y-2`}
        >
          <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md mb-6 ${item.color}`}>
            <item.icon className="w-10 h-10" />
          </div>
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: (i+2)*0.2 + 0.3, type: "spring", stiffness: 100 }}
            className={`font-heading font-black text-5xl mb-2 ${item.color}`}
          >
            {item.num}
          </motion.div>
          <h3 className="font-heading font-bold text-2xl text-navy mb-3">{item.title}</h3>
          <p className="text-gray-600 text-lg">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// Slide 9
export const Slide9 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-12 text-center">
      Khoản Đầu Tư Chiến Lược & Xứng Đáng
    </motion.h2>
    
    <div className="flex-1 flex flex-wrap justify-center items-center gap-6">
      {[
        { num: "01", title: "Chuẩn Hóa Quốc Gia", desc: "Đồng bộ 100% với chương trình GDPT 2018 và SGK NXB Giáo Dục." },
        { num: "02", title: "Chi Phí Tối Ưu", desc: "Gói triển khai linh hoạt, thiết kế chuẩn xác với ngân sách khối trường công lập." },
        { num: "03", title: "Hỗ Trợ Tận Nơi", desc: "Đội ngũ kỹ thuật túc trực tại trường, xử lý ngay lập tức mọi rào cản thao tác." },
        { num: "04", title: "Đào Tạo Liên Tục", desc: "Lộ trình tập huấn khép kín (Ban đầu + Livestream định kỳ + Tài liệu chi tiết)." },
        { num: "05", title: "Cập Nhật Thường Xuyên", desc: "Tính năng và nguồn học liệu liên tục làm mới theo từng học kỳ." }
      ].map((item, i) => (
        <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="relative w-64 h-72 flex items-center justify-center group">
          {/* Hexagon shape using clip-path */}
          <div className="absolute inset-0 bg-white shadow-xl transition-transform group-hover:scale-105" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
             <div className="absolute inset-1 bg-gradient-to-b from-mint/50 to-white" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          </div>
          <div className="relative z-10 text-center p-6 flex flex-col items-center">
            <span className="text-3xl font-heading font-bold text-teal/30 mb-2">{item.num}</span>
            <h3 className="font-heading font-bold text-lg text-navy mb-3">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Slide 10
export const Slide10 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-12">
      Hiệu Quả Được Khẳng Định Bằng Số Liệu Thực Tế
    </motion.h2>
    
    <div className="flex-1 flex gap-10">
      {/* Left Stats */}
      <div className="w-1/2 flex flex-col justify-center gap-8">
        {[
          { num: "50+", text: "Trường học đã triển khai thành công tại TP.HCM." },
          { num: "2,000+", text: "Giáo viên đang sử dụng và tương tác hàng ngày." },
          { num: "95%", text: "Tỷ lệ hài lòng tuyệt đối từ phía giáo viên trải nghiệm." }
        ].map((stat, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-8 border-teal">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
              className="font-heading font-extrabold text-5xl text-navy w-32 shrink-0"
            >
              {stat.num}
            </motion.div>
            <p className="text-xl text-gray-600 font-medium">{stat.text}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Right Testimonial */}
      <div className="w-1/2 flex items-center justify-center">
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="bg-gradient-to-br from-navy to-[#2a4070] p-10 rounded-3xl shadow-2xl text-white relative">
          <div className="absolute -top-6 -left-6 text-8xl text-teal opacity-50 font-serif">"</div>
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5].map(star => <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <p className="text-2xl font-medium leading-relaxed mb-8 relative z-10 italic">
            "Học liệu số giúp giáo viên chúng tôi tiết kiệm rất nhiều thời gian soạn bài và nâng cao chất lượng giảng dạy. Các em học sinh rất hứng thú với bài tập tương tác."
          </p>
          <div className="flex items-center gap-4 border-t border-white/20 pt-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-lg">Phó Hiệu trưởng</p>
              <p className="text-teal-200">Trường Tiểu học tại Quận 1, TP.HCM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// Slide 11
export const Slide11 = () => (
  <div className="flex flex-col h-full">
    <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible" className="font-heading font-bold text-4xl text-navy mb-12 text-center">
      Cam Kết Bảo Hành & Đồng Hành Vững Bước
    </motion.h2>
    
    <div className="flex-1 grid grid-cols-3 gap-8 mb-10">
      {[
        { icon: Shield, title: "Hỗ Trợ Kỹ Thuật 24/7", desc: "Sẵn sàng xử lý qua Zalo, hotline hoặc trực tiếp tại trường học trong mọi giờ hành chính." },
        { icon: Users, title: "Tập Huấn Chuyên Sâu", desc: "Tổ chức các buổi huấn luyện trực tiếp kết hợp Livestream YouTube định kỳ, cầm tay chỉ việc từng tính năng." },
        { icon: Cog, title: "Chuyển Đổi Liên Tục", desc: "Thường xuyên cập nhật nội dung theo SGK và tinh chỉnh giao diện dựa trên 100% phản hồi từ giáo viên thực chiến." }
      ].map((item, i) => (
        <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative z-10 border-4 border-mint">
            <item.icon className="w-10 h-10 text-teal" />
          </div>
          <div className="bg-gradient-to-b from-navy to-[#152238] text-white p-8 pt-12 rounded-2xl shadow-xl text-center flex-1 -mt-16 w-full">
            <h3 className="font-heading font-bold text-xl text-mint mb-4">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
    
    <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="bg-green-accent text-white text-center py-4 rounded-xl shadow-lg font-heading font-bold text-2xl">
      Hãy cùng VNAISOFT chuyển đổi số giáo dục!
    </motion.div>
  </div>
);

// Slide 12
export const Slide12 = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="bg-white p-12 rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col items-center text-center">
      <h2 className="font-heading font-bold text-4xl text-navy mb-2 leading-tight">BẮT ĐẦU KỶ NGUYÊN<br/>SỐ HÓA CÙNG CHÚNG TÔI</h2>
      <p className="text-xl text-teal font-medium mb-10">VNAISOFT — Vietnam AI Software Solution</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shrink-0"><Globe className="w-6 h-6 text-teal" /></div>
          <span className="text-lg text-gray-700 font-medium">hoccungai.vn</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-teal" /></div>
          <span className="text-lg text-gray-700 font-medium">contact@vnaisoft.com</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-teal" /></div>
          <span className="text-lg text-gray-700 font-medium">Hotline: 1900 xxxx</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-teal" /></div>
          <span className="text-lg text-gray-700 font-medium">Trụ sở: TP. Hồ Chí Minh, Việt Nam.</span>
        </div>
      </div>
    </motion.div>
  </div>
);
