const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) =>{
    // inserir dados

    proffyValue =  {
      name: 'Ricardo Levi',
      avatar: 'https://avatars0.githubusercontent.com/u/56764055?s=400&u=232b1d9405d873879c8dddc7094e99437d29922c&v=4',
      whatsapp: '21999854134',
      bio: 'Instrutor de Matemática e Física com ênfase e eletrodinâmica.',
    }

    classValue = {
      subject: 1,
      cost: '120'
    }

    classScheduleValues = [
      {
        weekday: 1,
        time_from: 720,
        time_to: 1220,
      },
      {
        weekday: 3,
        time_from: 720,
        time_to: 1220,
      },
    ] 

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar dados

    const selectedProffys  = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor

    const selectClassesAndProffys = await db.all(
      `SELECT classes.*, proffys.* 
      FROM proffys 
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1;` )

      // console.log(selectClassesAndProffys)

      // horário permitido das aulas
      const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule 
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
      `)

      console.log(selectClassesSchedules)
})