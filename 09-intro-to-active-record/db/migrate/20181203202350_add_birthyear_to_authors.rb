class AddBirthyearToAuthors < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :birth_year, :datetime
  end
end
