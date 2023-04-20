import Image from 'next/image';

// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeInLeft, fadeInRight, staggerTextContainer } from '../variants';

const How = () => {
  // destructure how data
  
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          {/* image */}

          {/* text */}
          <motion.div variants={fadeInLeft} className="">
            <div className="">
              <h3 className="h3">How To Use</h3>

              <ul>
                <li className="lead font-semibold">
                  Using DeciVote is easy! Here&apos;s a step-by-step guide:
                </li>
                <ul>
                  <li className="lead">
                    1. Visit our website and create an account by providing your
                    basic information and completing the registration process.
                  </li>
                  <li className="lead">
                    2. Once your account is verified, you&apos;ll be able to log
                    in and access the voting platform.
                  </li>
                  <li className="lead">
                    3. Verify your identity using advanced facial recognition
                    technology.
                  </li>
                  <li className="lead">
                    4. Browse through the list of candidates and select your
                    preferred candidate.
                  </li>
                  <li className="lead">
                    5. Confirm your selection and submit your vote.
                  </li>
                  <li className="lead">
                    6. Once your vote is recorded on the blockchain, you&apos;ll
                    receive a confirmation of your vote.
                  </li>
                  <li className="lead font-medium">
                    In addition to casting your vote, you can also browse
                    through election-related news and updates on our platform.
                    If you have any questions or encounter any issues while
                    using our website, our customer support team is available to
                    assist you.
                  </li>
                </ul>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
