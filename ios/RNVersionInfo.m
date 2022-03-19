//
//  RNVersionInfo.m
//  NandosRestaurants
//
//  Created by Gus Rodriguez on 2022-03-19.
//

#import "RNVersionInfo.h"

@implementation RNVersionInfo

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
  return @{
    @"appVersion"      : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"] ?: [NSNull null],
  };
}

@end

