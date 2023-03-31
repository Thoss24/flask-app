import unittest
from test_code import testing

class assignmentTests(unittest.TestCase):

    def test_one(self):
        message = "failed"
        self.assertEqual(testing(2, 2), 4, message)


if __name__ == '__main__':
    unittest.main(verbosity=2)