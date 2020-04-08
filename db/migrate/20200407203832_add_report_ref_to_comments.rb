class AddReportRefToComments < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :report, foreign_key: true
  end
end
