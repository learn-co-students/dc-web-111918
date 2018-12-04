Doctor.destroy_all
Patient.destroy_all
Appointment.destroy_all

jd = Doctor.find_or_create_by({name: "John Dorian"})
elliot = Doctor.find_or_create_by(name: "Elliot Reed")
turk = Doctor.find_or_create_by(name: "Chris Turk")

wilke = Patient.find_or_create_by(name: "Mrs Wilke")
joe = Patient.find_or_create_by(name: "Joe")
mary = Patient.find_or_create_by(name: "Mary")

appointment1 = Appointment.find_or_create_by({doctor: jd, patient: wilke})
appointment2 = Appointment.find_or_create_by(doctor: elliot, patient: mary)
appointment3 = Appointment.find_or_create_by({doctor: jd, patient: mary})
