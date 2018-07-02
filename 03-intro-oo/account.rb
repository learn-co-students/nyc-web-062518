require 'pry'
class BankAccount

  @@all = []

  attr_accessor :name
  attr_reader :balance

  def initialize(name, balance)
    @name = name
    @balance = balance

    @@all << self #the instance
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end

  def win_the_lottery
    self.deposit(999999)
  end

  def make_name_graham
    # name = "Graham"
    self.name = "Graham" #the instance
  end

  def self.all #the class

    self #the class
    @@all
  end

end



ginger_bank_account = BankAccount.new("Ginger Spice", 10)
posh_bank_account = BankAccount.new("Victoria Adams", 40)
# marries david beckham
posh_bank_account.name = "Victoria Beckam"
posh_bank_account.deposit(30)
posh_bank_account.withdraw(20)

ginger_bank_account.win_the_lottery



Pry.start

