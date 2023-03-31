import unittest
from test_code import data_length
from test_code import bubbleSort

class assignmentTests(unittest.TestCase):

    def test_one(self):
        message = "failed"
        self.assertEqual(data_length([1, 2, 3, 4, 5, 6]), 6, message)
    # check length of array, to ensure 40 rows of data are being displayed

    def test_two(self):
        message = "failed"
        self.assertEqual(bubbleSort([0.465, 0.765, 0.656, 0.265]), [0.265, 0.465, 0.656, 0.765], message)
    # this test checks if the airline sentiment confidence column is in ascending order

if __name__ == '__main__':
    unittest.main(verbosity=2)