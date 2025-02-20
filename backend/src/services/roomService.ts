

import { Room } from "../entities/room";
import { RoomRepo } from "../repositories/roomRepository";
import { RtcTokenBuilder, RtcRole, RtmTokenBuilder, RtmRole } from 'agora-access-token';



export class RoomService {
    private roomRepository: RoomRepo;
    constructor(roomRepository: RoomRepo) {
        this.roomRepository = roomRepository;
    }
    async addRoom(data: any) : Promise<string>{

        const APP_ID = 'dca3bcedaaeb4bde9f618461df7f2aff';
        const APP_CERTIFICATE = 'db54959bc19e4b78a3ae948c76da6b86';
        const channelName = String(data.user_id); 
        const role = RtcRole.PUBLISHER;
        const expirationTimeInSeconds = 3600;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
        // Generate token for rtc
        const tokenRtc = RtcTokenBuilder.buildTokenWithUid(
            APP_ID,
            APP_CERTIFICATE,
            channelName,
            parseInt(data.user_id,10),
            role,
            privilegeExpiredTs
        );
        // generate token for rtm
        const tokenRtm= RtmTokenBuilder.buildToken(
            APP_ID,
            APP_CERTIFICATE,
            String(data.user_id),
            RtmRole.Rtm_User,
            privilegeExpiredTs
        )

        const res= await this.roomRepository.addRoom({...data,channel:channelName});
        return {...res,token_rtc:tokenRtc,token_rtm:tokenRtm};
    }
    async getRooms(data: number) : Promise<string>{
        const res= await this.roomRepository.getRooms(data);
        return res;
    }
    async joinRoom(user_id:any,channel:any) : Promise<any>{
        const APP_ID = 'dca3bcedaaeb4bde9f618461df7f2aff';
        const APP_CERTIFICATE = 'db54959bc19e4b78a3ae948c76da6b86';
        const channelName = String(channel); 
        const role = RtcRole.PUBLISHER;
        const expirationTimeInSeconds = 3600;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
        // Generate token for rtc
        const tokenRtc = RtcTokenBuilder.buildTokenWithUid(
            APP_ID,
            APP_CERTIFICATE,
            channelName,
            parseInt(user_id,10),
            role,
            privilegeExpiredTs
        );
        // generate token for rtm
        const tokenRtm= RtmTokenBuilder.buildToken(
            APP_ID,
            APP_CERTIFICATE,
            String(user_id),
            RtmRole.Rtm_User,
            privilegeExpiredTs
        )
        return {user_id,token_rtc:tokenRtc,token_rtm:tokenRtm};
    }
}
