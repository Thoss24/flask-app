import unittest
# from app import advanced
# from app import creative

class testDisplayData(unittest.TestCase):

    def test_testing(self):
        message = "You Failed!"
        yes = "yes"
        yes2 = "yes1"
        self.assertEqual(yes, yes2, message)

if __name__ == '__main__':
    unittest.main()