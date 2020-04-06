class Place < ApplicationRecord
    belongs_to :user

    validates_uniqueness_of :user_id, :message => "is already being used"
    validates :description,:name,:latitude,:latitude, presence: true
end
