import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { castVotefinal } from '../../apiClient';
import Loader from '../../components/voteing/lodder';
import Success from '../../components/voteing/success';
import Failed from '../../components/voteing/failed';

const res = () => {

    const router = useRouter();

    const [loading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);
    const [falild, setFalild] = useState(false);

    useEffect(() => {
      if (!router.isReady) return;
      const electionId = router.query.electionId;
      const constituencyId = router.query.constituencyId;
      const candidateId = router.query.candidateId;
      const voterId = router.query.voterId;

      castVote(electionId, constituencyId, candidateId, voterId);
    }, [router.isReady]);

    
   const castVote = async (electionId, constituencyId,candidateId,voterId) => {
     try {
        const res = await castVotefinal(
          electionId,
          constituencyId,
          candidateId,
          voterId
        );

        if (res.status == 200) {
          setLoading(false);
          setSuccess(true);
        } else {
          setLoading(false);
          setFalild(true);
        }
     } catch (error) {
        setLoading(false)
        setFalild(true)
     }
     

   
   
   
    };

    if(loading) return <Loader show={true}/>
    if(success) return <Success show={true}/>
    if(falild) return <Failed show={true}/>
 }

export default res