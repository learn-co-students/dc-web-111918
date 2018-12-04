class Patient < ActiveRecord::Base
    has_many :appointments
    has_many :doctors, through: :appointments

    def bad_doctors
        Doctor.all.select do |doctor|
            !doctor.patients.include?(self)
        end 

    end
end