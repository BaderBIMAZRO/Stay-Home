class Report < ApplicationRecord
    validates :description,:title, presence: true
end
