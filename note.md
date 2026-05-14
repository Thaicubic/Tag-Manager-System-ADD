# note

## 2026-05-14 17:10 (Asia/Bangkok)
- ทำอะไรไปแล้ว:
  - อ่านกฎจาก `DevRoule.md` และยืนยันแนวทำงานก่อนเริ่ม
  - รันแบ็กอัป `backup.py` ก่อนแก้โค้ดตามกฎ
  - สร้าง `code.gs` ให้บันทึกลง Google Sheet ด้วย `appendRow` ตามคอลัมน์ A-G
  - ตั้งค่า Spreadsheet ID เป็น `1eaiPY8Hm-zjpCSNoNBm-vFqldNtWh6WglC9_niXlqb8` และเลือกชีตด้วย `gid=1720180950`
  - สร้าง `index.html` ตามดีไซน์โทนมืด และโฟลว์รูป: อัปโหลด -> resize สูง 128 คงสัดส่วน -> base64 -> ส่งเข้า API
  - เพิ่มรองรับ drag-drop, paste, remove photo และแสดงจำนวนอักขระ base64
- ปัญหาคืออะไร:
  - ยังไม่มี URL ของ Apps Script Web App ที่ deploy แล้ว
- แก้ยังไง:
  - ใส่ placeholder `API_URL` ใน `index.html` เพื่อรอ URL หลัง deploy
- จะทำอะไรต่อ:
  - Deploy `code.gs` เป็น Web App (Anyone) แล้วนำ URL ไปใส่ `API_URL`
  - ทดสอบบันทึกจริง 1 รายการและตรวจว่าลงคอลัมน์ A-G ถูกต้อง
