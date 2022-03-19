//
//  RNVersionInfo.h
//  NandosRestaurants
//
//  Created by Gus Rodriguez on 2022-03-19.
//

#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

@interface RNVersionInfo : NSObject <RCTBridgeModule>

@end
