class Report < ApplicationRecord
    belongs_to :user

    validates :description,:title, presence: true
end
