class EmployeesController < ApplicationController

  def index
    @employees = Employee.all
  end

  def show
    @employee = Employee.find(params[:id])
  end

  def new
    @employee = Employee.new
  end

  def create
    # dog.find_by(name: params[:name])#limit 1
    @employee = Employee.new(strong_params)
  #OTHER WAYS TO CHECK VALIDATION:
  # if Employee.create(strong_params)
  # if employee.save
    if @employee.valid?

      @employee.save
      #ALL THREE OF THESE EXAMPLES WORK THE SAME:
      redirect_to employee_path(@employee.id)
      # redirect_to employee_path(@employee)
      # redirect_to @employee
    else
      render :new
    end
  end

 #UPDATE EXAMPLE WITH VALIDATION CHECK AND ERROR REPORTING
  # def update
  #   @employee = Employee.find(params[:id])
  #   if @employee.update(strong_params)
  #
  #   # dog.find_by(name: params[:name])#limit 1
  #     redirect_to employee_path(@employee.id)
  #     # redirect_to employee_path(@employee)
  #     # redirect_to @employee
  #   else
  #     render :edit
  #   end
  # end

  private

  def strong_params
    params.require(:employee).permit(:first_name, :last_name, :alias,
                                     :title, :office, :img_url, :dog_id)
  end
end
