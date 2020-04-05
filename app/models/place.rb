class Place < ApplicationRecord

    validates :description,:name,:latitude,:latitude, presence: true
end
