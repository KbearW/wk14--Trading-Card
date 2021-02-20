"""Classes for melon orders."""

class AbstractMelonOrder():
    """Base case for subcases"""

    def __init__(self, species, qty, order_type, tax):
        """Initialize melon order attributes."""

        self.species = species
        self.qty = qty
        self.order_type = order_type
        self.tax = tax
        self.shipped = False

    def get_total(self):
        """Calculate price, including tax."""

        base_price = 5
        total = (1 + self.tax) * self.qty * base_price

        return total


    def mark_shipped(self):
        """Record the fact than an order has been shipped."""

        self.shipped = True


class DomesticMelonOrder(AbstractMelonOrder):
    """A melon order within the USA."""

    def __init__(self, species, qty):
        """Initialize melon order attributes."""
        super().__init__(species, qty, "domestic", 0.08)


class InternationalMelonOrder(AbstractMelonOrder):
    """An international (non-US) melon order."""

    def __init__(self, species, qty, country_code):
        """Initialize melon order attributes."""
        super().__init__(species, qty, "international", 0.17)
        self.country_code = country_code

    def get_country_code(self):
        """Return the country code."""

        return self.country_code

class GovernmentMelonOrder(AbstractMelonOrder):
    """For Gov order"""
    
    def __init__(self, species, qty):
        super().__init__(species, qty, "government", 0.0)
        self.passed_inspection = False
    
    def mark_inspected(self, passed):
        """Record if melon order passed inspection"""
        self.passed_inspection = True

if __name__ == "__main__":
    order0 = InternationalMelonOrder("watermelon",6,"AUS")
    print(order0.get_total())
    print(order0.mark_shipped())
    print("International subclass is working")
    print("")

    order1 = DomesticMelonOrder("cantaloupe",8)
    print(order1.get_total())
    print(order1.mark_shipped())
    print("Domestic subclass is working")
    print("")
    
    order2 = GovernmentMelonOrder("watermelon", 3)
    print(order2.get_total())
    print(order2.mark_inspected("passed"))
    # How to print the answer of this one?
    # print(order2.passed_inspection())
    print("Govt subclass is working!")
