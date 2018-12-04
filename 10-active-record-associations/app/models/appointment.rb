class Appointment < ActiveRecord::Base
    belongs_to :doctor
    belongs_to :patient

    # attr_accessor :doctor, :patient

    # @@all = []
    # def initialize(doctor=nil, patient=nil)
    #     @doctor = doctor
    #     @patient = patient
    #     @@all << self
    # end

    # def self.all 
    #     @@all 
    # end

end